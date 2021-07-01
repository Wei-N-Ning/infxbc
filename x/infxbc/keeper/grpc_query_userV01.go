package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/infx/infxbc/x/infxbc/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) UserV01All(c context.Context, req *types.QueryAllUserV01Request) (*types.QueryAllUserV01Response, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var userV01s []*types.UserV01
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	userV01Store := prefix.NewStore(store, types.KeyPrefix(types.UserV01Key))

	pageRes, err := query.Paginate(userV01Store, req.Pagination, func(key []byte, value []byte) error {
		var userV01 types.UserV01
		if err := k.cdc.UnmarshalBinaryBare(value, &userV01); err != nil {
			return err
		}

		userV01s = append(userV01s, &userV01)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllUserV01Response{UserV01: userV01s, Pagination: pageRes}, nil
}

func (k Keeper) UserV01(c context.Context, req *types.QueryGetUserV01Request) (*types.QueryGetUserV01Response, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var userV01 types.UserV01
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasUserV01(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.UserV01Key))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetUserV01IDBytes(req.Id)), &userV01)

	return &types.QueryGetUserV01Response{UserV01: &userV01}, nil
}
