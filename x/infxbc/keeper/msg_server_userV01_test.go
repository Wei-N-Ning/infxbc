package keeper

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"

	"github.com/infx/infxbc/x/infxbc/types"
)

func TestUserV01MsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateUserV01(ctx, &types.MsgCreateUserV01{Creator: creator})
		require.NoError(t, err)
		assert.Equal(t, i, int(resp.Id))
	}
}

func TestUserV01MsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateUserV01
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateUserV01{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateUserV01{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateUserV01{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateUserV01(ctx, &types.MsgCreateUserV01{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateUserV01(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestUserV01MsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteUserV01
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteUserV01{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteUserV01{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteUserV01{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateUserV01(ctx, &types.MsgCreateUserV01{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteUserV01(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
