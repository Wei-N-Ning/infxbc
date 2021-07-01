package keeper

import (
	"context"
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/infx/infxbc/x/reward/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) GetReward(goCtx context.Context, req *types.QueryGetRewardRequest) (*types.QueryGetRewardResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	resp := types.QueryGetRewardResponse{}
	var rewards []types.RewardV01
	for _, r := range k.GetAllRewardV01(ctx) {
		if r.UserId == req.UserId {
			rewards = append(rewards, r)
		}
	}
	if len(rewards) >= 1 {
		resp.Reward = &rewards[0]
		if total, err := strconv.Atoi(resp.Reward.Amount); err == nil {
			for _, r := range rewards[1:] {
				if val, err := strconv.Atoi(r.Amount); err != nil {
					continue
				} else {
					total += val
				}
			}
			resp.Reward.Amount = strconv.Itoa(total)
		}
	}
	return &resp, nil
}
