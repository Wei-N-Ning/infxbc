package reward

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/infx/infxbc/x/reward/keeper"
	"github.com/infx/infxbc/x/reward/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set all the rewardV01
	for _, elem := range genState.RewardV01List {
		k.SetRewardV01(ctx, *elem)
	}

	// Set rewardV01 count
	k.SetRewardV01Count(ctx, genState.RewardV01Count)

	// this line is used by starport scaffolding # ibc/genesis/init
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	// Get all rewardV01
	rewardV01List := k.GetAllRewardV01(ctx)
	for _, elem := range rewardV01List {
		elem := elem
		genesis.RewardV01List = append(genesis.RewardV01List, &elem)
	}

	// Set the current count
	genesis.RewardV01Count = k.GetRewardV01Count(ctx)

	// this line is used by starport scaffolding # ibc/genesis/export

	return genesis
}
