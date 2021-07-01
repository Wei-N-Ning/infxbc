package keeper

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"

	"github.com/infx/infxbc/x/reward/types"
)

func TestRewardV01MsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateRewardV01(ctx, &types.MsgCreateRewardV01{Creator: creator})
		require.NoError(t, err)
		assert.Equal(t, i, int(resp.Id))
	}
}

func TestRewardV01MsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateRewardV01
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateRewardV01{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateRewardV01{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateRewardV01{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateRewardV01(ctx, &types.MsgCreateRewardV01{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateRewardV01(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestRewardV01MsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteRewardV01
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteRewardV01{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteRewardV01{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteRewardV01{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateRewardV01(ctx, &types.MsgCreateRewardV01{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteRewardV01(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
