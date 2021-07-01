package keeper

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/infx/infxbc/x/infxbc/types"
	"github.com/stretchr/testify/assert"
)

func createNUserV01(keeper *Keeper, ctx sdk.Context, n int) []types.UserV01 {
	items := make([]types.UserV01, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Id = keeper.AppendUserV01(ctx, items[i])
	}
	return items
}

func TestUserV01Get(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNUserV01(keeper, ctx, 10)
	for _, item := range items {
		assert.Equal(t, item, keeper.GetUserV01(ctx, item.Id))
	}
}

func TestUserV01Exist(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNUserV01(keeper, ctx, 10)
	for _, item := range items {
		assert.True(t, keeper.HasUserV01(ctx, item.Id))
	}
}

func TestUserV01Remove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNUserV01(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveUserV01(ctx, item.Id)
		assert.False(t, keeper.HasUserV01(ctx, item.Id))
	}
}

func TestUserV01GetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNUserV01(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllUserV01(ctx))
}

func TestUserV01Count(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNUserV01(keeper, ctx, 10)
	count := uint64(len(items))
	assert.Equal(t, count, keeper.GetUserV01Count(ctx))
}
