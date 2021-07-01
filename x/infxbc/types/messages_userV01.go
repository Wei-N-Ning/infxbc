package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateUserV01{}

func NewMsgCreateUserV01(creator string, name string, role string) *MsgCreateUserV01 {
	return &MsgCreateUserV01{
		Creator: creator,
		Name:    name,
		Role:    role,
	}
}

func (msg *MsgCreateUserV01) Route() string {
	return RouterKey
}

func (msg *MsgCreateUserV01) Type() string {
	return "CreateUserV01"
}

func (msg *MsgCreateUserV01) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateUserV01) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateUserV01) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateUserV01{}

func NewMsgUpdateUserV01(creator string, id uint64, name string, role string) *MsgUpdateUserV01 {
	return &MsgUpdateUserV01{
		Id:      id,
		Creator: creator,
		Name:    name,
		Role:    role,
	}
}

func (msg *MsgUpdateUserV01) Route() string {
	return RouterKey
}

func (msg *MsgUpdateUserV01) Type() string {
	return "UpdateUserV01"
}

func (msg *MsgUpdateUserV01) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateUserV01) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateUserV01) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteUserV01{}

func NewMsgDeleteUserV01(creator string, id uint64) *MsgDeleteUserV01 {
	return &MsgDeleteUserV01{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteUserV01) Route() string {
	return RouterKey
}

func (msg *MsgDeleteUserV01) Type() string {
	return "DeleteUserV01"
}

func (msg *MsgDeleteUserV01) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteUserV01) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteUserV01) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
