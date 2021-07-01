package infxbc

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/infx/infxbc/x/infxbc/keeper"
	"github.com/infx/infxbc/x/infxbc/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set all the userV01
	for _, elem := range genState.UserV01List {
		k.SetUserV01(ctx, *elem)
	}

	// Set userV01 count
	k.SetUserV01Count(ctx, genState.UserV01Count)

	// this line is used by starport scaffolding # ibc/genesis/init
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	// Get all userV01
	userV01List := k.GetAllUserV01(ctx)
	for _, elem := range userV01List {
		elem := elem
		genesis.UserV01List = append(genesis.UserV01List, &elem)
	}

	// Set the current count
	genesis.UserV01Count = k.GetUserV01Count(ctx)

	// this line is used by starport scaffolding # ibc/genesis/export

	return genesis
}
