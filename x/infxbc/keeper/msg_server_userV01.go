package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/infx/infxbc/x/infxbc/types"
)

func (k msgServer) CreateUserV01(goCtx context.Context, msg *types.MsgCreateUserV01) (*types.MsgCreateUserV01Response, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var userV01 = types.UserV01{
		Creator: msg.Creator,
		Name:    msg.Name,
		Role:    msg.Role,
	}

	id := k.AppendUserV01(
		ctx,
		userV01,
	)

	return &types.MsgCreateUserV01Response{
		Id: id,
	}, nil
}

func (k msgServer) UpdateUserV01(goCtx context.Context, msg *types.MsgUpdateUserV01) (*types.MsgUpdateUserV01Response, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var userV01 = types.UserV01{
		Creator: msg.Creator,
		Id:      msg.Id,
		Name:    msg.Name,
		Role:    msg.Role,
	}

	// Checks that the element exists
	if !k.HasUserV01(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetUserV01Owner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetUserV01(ctx, userV01)

	return &types.MsgUpdateUserV01Response{}, nil
}

func (k msgServer) DeleteUserV01(goCtx context.Context, msg *types.MsgDeleteUserV01) (*types.MsgDeleteUserV01Response, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasUserV01(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetUserV01Owner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveUserV01(ctx, msg.Id)

	return &types.MsgDeleteUserV01Response{}, nil
}
