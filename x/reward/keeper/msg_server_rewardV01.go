package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/infx/infxbc/x/reward/types"
)

func (k msgServer) CreateRewardV01(goCtx context.Context, msg *types.MsgCreateRewardV01) (*types.MsgCreateRewardV01Response, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var rewardV01 = types.RewardV01{
		Creator: msg.Creator,
		UserId:  msg.UserId,
		Amount:  msg.Amount,
	}

	id := k.AppendRewardV01(
		ctx,
		rewardV01,
	)

	return &types.MsgCreateRewardV01Response{
		Id: id,
	}, nil
}

func (k msgServer) UpdateRewardV01(goCtx context.Context, msg *types.MsgUpdateRewardV01) (*types.MsgUpdateRewardV01Response, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var rewardV01 = types.RewardV01{
		Creator: msg.Creator,
		Id:      msg.Id,
		UserId:  msg.UserId,
		Amount:  msg.Amount,
	}

	// Checks that the element exists
	if !k.HasRewardV01(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetRewardV01Owner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetRewardV01(ctx, rewardV01)

	return &types.MsgUpdateRewardV01Response{}, nil
}

func (k msgServer) DeleteRewardV01(goCtx context.Context, msg *types.MsgDeleteRewardV01) (*types.MsgDeleteRewardV01Response, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasRewardV01(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetRewardV01Owner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveRewardV01(ctx, msg.Id)

	return &types.MsgDeleteRewardV01Response{}, nil
}
