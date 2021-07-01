package keeper

import (
	"github.com/infx/infxbc/x/reward/types"
)

var _ types.QueryServer = Keeper{}
