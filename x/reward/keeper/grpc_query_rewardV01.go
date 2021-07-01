package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/infx/infxbc/x/reward/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) RewardV01All(c context.Context, req *types.QueryAllRewardV01Request) (*types.QueryAllRewardV01Response, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var rewardV01s []*types.RewardV01
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	rewardV01Store := prefix.NewStore(store, types.KeyPrefix(types.RewardV01Key))

	pageRes, err := query.Paginate(rewardV01Store, req.Pagination, func(key []byte, value []byte) error {
		var rewardV01 types.RewardV01
		if err := k.cdc.UnmarshalBinaryBare(value, &rewardV01); err != nil {
			return err
		}

		rewardV01s = append(rewardV01s, &rewardV01)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllRewardV01Response{RewardV01: rewardV01s, Pagination: pageRes}, nil
}

func (k Keeper) RewardV01(c context.Context, req *types.QueryGetRewardV01Request) (*types.QueryGetRewardV01Response, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var rewardV01 types.RewardV01
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasRewardV01(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RewardV01Key))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetRewardV01IDBytes(req.Id)), &rewardV01)

	return &types.QueryGetRewardV01Response{RewardV01: &rewardV01}, nil
}
