// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateUserV01 } from "./types/infxbc/tx";
import { MsgDeleteUserV01 } from "./types/infxbc/tx";
import { MsgCreateUserV01 } from "./types/infxbc/tx";
const types = [
    ["/infx.infxbc.infxbc.MsgUpdateUserV01", MsgUpdateUserV01],
    ["/infx.infxbc.infxbc.MsgDeleteUserV01", MsgDeleteUserV01],
    ["/infx.infxbc.infxbc.MsgCreateUserV01", MsgCreateUserV01],
];
export const MissingWalletError = new Error("wallet is required");
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgUpdateUserV01: (data) => ({ typeUrl: "/infx.infxbc.infxbc.MsgUpdateUserV01", value: data }),
        msgDeleteUserV01: (data) => ({ typeUrl: "/infx.infxbc.infxbc.MsgDeleteUserV01", value: data }),
        msgCreateUserV01: (data) => ({ typeUrl: "/infx.infxbc.infxbc.MsgCreateUserV01", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
