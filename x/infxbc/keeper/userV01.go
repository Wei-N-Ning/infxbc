package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/infx/infxbc/x/infxbc/types"
	"strconv"
)

// GetUserV01Count get the total number of userV01
func (k Keeper) GetUserV01Count(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.UserV01CountKey))
	byteKey := types.KeyPrefix(types.UserV01CountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	count, err := strconv.ParseUint(string(bz), 10, 64)
	if err != nil {
		// Panic because the count should be always formattable to iint64
		panic("cannot decode count")
	}

	return count
}

// SetUserV01Count set the total number of userV01
func (k Keeper) SetUserV01Count(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.UserV01CountKey))
	byteKey := types.KeyPrefix(types.UserV01CountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendUserV01 appends a userV01 in the store with a new id and update the count
func (k Keeper) AppendUserV01(
	ctx sdk.Context,
	userV01 types.UserV01,
) uint64 {
	// Create the userV01
	count := k.GetUserV01Count(ctx)

	// Set the ID of the appended value
	userV01.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.UserV01Key))
	appendedValue := k.cdc.MustMarshalBinaryBare(&userV01)
	store.Set(GetUserV01IDBytes(userV01.Id), appendedValue)

	// Update userV01 count
	k.SetUserV01Count(ctx, count+1)

	return count
}

// SetUserV01 set a specific userV01 in the store
func (k Keeper) SetUserV01(ctx sdk.Context, userV01 types.UserV01) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.UserV01Key))
	b := k.cdc.MustMarshalBinaryBare(&userV01)
	store.Set(GetUserV01IDBytes(userV01.Id), b)
}

// GetUserV01 returns a userV01 from its id
func (k Keeper) GetUserV01(ctx sdk.Context, id uint64) types.UserV01 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.UserV01Key))
	var userV01 types.UserV01
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetUserV01IDBytes(id)), &userV01)
	return userV01
}

// HasUserV01 checks if the userV01 exists in the store
func (k Keeper) HasUserV01(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.UserV01Key))
	return store.Has(GetUserV01IDBytes(id))
}

// GetUserV01Owner returns the creator of the userV01
func (k Keeper) GetUserV01Owner(ctx sdk.Context, id uint64) string {
	return k.GetUserV01(ctx, id).Creator
}

// RemoveUserV01 removes a userV01 from the store
func (k Keeper) RemoveUserV01(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.UserV01Key))
	store.Delete(GetUserV01IDBytes(id))
}

// GetAllUserV01 returns all userV01
func (k Keeper) GetAllUserV01(ctx sdk.Context) (list []types.UserV01) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.UserV01Key))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.UserV01
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetUserV01IDBytes returns the byte representation of the ID
func GetUserV01IDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetUserV01IDFromBytes returns ID in uint64 format from a byte array
func GetUserV01IDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
