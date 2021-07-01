package keeper

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/infx/infxbc/x/reward/types"
	"github.com/stretchr/testify/assert"
)

func createNRewardV01(keeper *Keeper, ctx sdk.Context, n int) []types.RewardV01 {
	items := make([]types.RewardV01, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Id = keeper.AppendRewardV01(ctx, items[i])
	}
	return items
}

func TestRewardV01Get(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNRewardV01(keeper, ctx, 10)
	for _, item := range items {
		assert.Equal(t, item, keeper.GetRewardV01(ctx, item.Id))
	}
}

func TestRewardV01Exist(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNRewardV01(keeper, ctx, 10)
	for _, item := range items {
		assert.True(t, keeper.HasRewardV01(ctx, item.Id))
	}
}

func TestRewardV01Remove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNRewardV01(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveRewardV01(ctx, item.Id)
		assert.False(t, keeper.HasRewardV01(ctx, item.Id))
	}
}

func TestRewardV01GetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNRewardV01(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllRewardV01(ctx))
}

func TestRewardV01Count(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNRewardV01(keeper, ctx, 10)
	count := uint64(len(items))
	assert.Equal(t, count, keeper.GetRewardV01Count(ctx))
}
