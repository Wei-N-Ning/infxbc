package types

import (
	"fmt"
	// this line is used by starport scaffolding # ibc/genesistype/import
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		// this line is used by starport scaffolding # ibc/genesistype/default
		// this line is used by starport scaffolding # genesis/types/default
		UserV01List: []*UserV01{},
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// this line is used by starport scaffolding # ibc/genesistype/validate

	// this line is used by starport scaffolding # genesis/types/validate
	// Check for duplicated ID in userV01
	userV01IdMap := make(map[uint64]bool)

	for _, elem := range gs.UserV01List {
		if _, ok := userV01IdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for userV01")
		}
		userV01IdMap[elem.Id] = true
	}

	return nil
}
