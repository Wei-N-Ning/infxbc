// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateRewardV01 } from "./types/reward/tx";
import { MsgCreateRewardV01 } from "./types/reward/tx";
import { MsgDeleteRewardV01 } from "./types/reward/tx";
const types = [
    ["/infx.infxbc.reward.MsgUpdateRewardV01", MsgUpdateRewardV01],
    ["/infx.infxbc.reward.MsgCreateRewardV01", MsgCreateRewardV01],
    ["/infx.infxbc.reward.MsgDeleteRewardV01", MsgDeleteRewardV01],
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
        msgUpdateRewardV01: (data) => ({ typeUrl: "/infx.infxbc.reward.MsgUpdateRewardV01", value: data }),
        msgCreateRewardV01: (data) => ({ typeUrl: "/infx.infxbc.reward.MsgCreateRewardV01", value: data }),
        msgDeleteRewardV01: (data) => ({ typeUrl: "/infx.infxbc.reward.MsgDeleteRewardV01", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
