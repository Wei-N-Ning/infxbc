package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateRewardV01{}

func NewMsgCreateRewardV01(creator string, userId string, amount string) *MsgCreateRewardV01 {
	return &MsgCreateRewardV01{
		Creator: creator,
		UserId:  userId,
		Amount:  amount,
	}
}

func (msg *MsgCreateRewardV01) Route() string {
	return RouterKey
}

func (msg *MsgCreateRewardV01) Type() string {
	return "CreateRewardV01"
}

func (msg *MsgCreateRewardV01) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateRewardV01) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateRewardV01) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateRewardV01{}

func NewMsgUpdateRewardV01(creator string, id uint64, userId string, amount string) *MsgUpdateRewardV01 {
	return &MsgUpdateRewardV01{
		Id:      id,
		Creator: creator,
		UserId:  userId,
		Amount:  amount,
	}
}

func (msg *MsgUpdateRewardV01) Route() string {
	return RouterKey
}

func (msg *MsgUpdateRewardV01) Type() string {
	return "UpdateRewardV01"
}

func (msg *MsgUpdateRewardV01) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateRewardV01) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateRewardV01) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteRewardV01{}

func NewMsgDeleteRewardV01(creator string, id uint64) *MsgDeleteRewardV01 {
	return &MsgDeleteRewardV01{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteRewardV01) Route() string {
	return RouterKey
}

func (msg *MsgDeleteRewardV01) Type() string {
	return "DeleteRewardV01"
}

func (msg *MsgDeleteRewardV01) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteRewardV01) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteRewardV01) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
