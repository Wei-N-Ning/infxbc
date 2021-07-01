package keeper

import (
	"github.com/infx/infxbc/x/infxbc/types"
)

var _ types.QueryServer = Keeper{}
