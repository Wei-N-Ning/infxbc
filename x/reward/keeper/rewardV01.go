package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/infx/infxbc/x/reward/types"
	"strconv"
)

// GetRewardV01Count get the total number of rewardV01
func (k Keeper) GetRewardV01Count(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RewardV01CountKey))
	byteKey := types.KeyPrefix(types.RewardV01CountKey)
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

// SetRewardV01Count set the total number of rewardV01
func (k Keeper) SetRewardV01Count(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RewardV01CountKey))
	byteKey := types.KeyPrefix(types.RewardV01CountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendRewardV01 appends a rewardV01 in the store with a new id and update the count
func (k Keeper) AppendRewardV01(
	ctx sdk.Context,
	rewardV01 types.RewardV01,
) uint64 {
	// Create the rewardV01
	count := k.GetRewardV01Count(ctx)

	// Set the ID of the appended value
	rewardV01.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RewardV01Key))
	appendedValue := k.cdc.MustMarshalBinaryBare(&rewardV01)
	store.Set(GetRewardV01IDBytes(rewardV01.Id), appendedValue)

	// Update rewardV01 count
	k.SetRewardV01Count(ctx, count+1)

	return count
}

// SetRewardV01 set a specific rewardV01 in the store
func (k Keeper) SetRewardV01(ctx sdk.Context, rewardV01 types.RewardV01) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RewardV01Key))
	b := k.cdc.MustMarshalBinaryBare(&rewardV01)
	store.Set(GetRewardV01IDBytes(rewardV01.Id), b)
}

// GetRewardV01 returns a rewardV01 from its id
func (k Keeper) GetRewardV01(ctx sdk.Context, id uint64) types.RewardV01 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RewardV01Key))
	var rewardV01 types.RewardV01
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetRewardV01IDBytes(id)), &rewardV01)
	return rewardV01
}

// HasRewardV01 checks if the rewardV01 exists in the store
func (k Keeper) HasRewardV01(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RewardV01Key))
	return store.Has(GetRewardV01IDBytes(id))
}

// GetRewardV01Owner returns the creator of the rewardV01
func (k Keeper) GetRewardV01Owner(ctx sdk.Context, id uint64) string {
	return k.GetRewardV01(ctx, id).Creator
}

// RemoveRewardV01 removes a rewardV01 from the store
func (k Keeper) RemoveRewardV01(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RewardV01Key))
	store.Delete(GetRewardV01IDBytes(id))
}

// GetAllRewardV01 returns all rewardV01
func (k Keeper) GetAllRewardV01(ctx sdk.Context) (list []types.RewardV01) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RewardV01Key))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.RewardV01
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetRewardV01IDBytes returns the byte representation of the ID
func GetRewardV01IDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetRewardV01IDFromBytes returns ID in uint64 format from a byte array
func GetRewardV01IDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
