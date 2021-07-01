import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateRewardV01 } from "./types/reward/tx";
import { MsgCreateRewardV01 } from "./types/reward/tx";
import { MsgDeleteRewardV01 } from "./types/reward/tx";
export declare const MissingWalletError: Error;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgUpdateRewardV01: (data: MsgUpdateRewardV01) => EncodeObject;
    msgCreateRewardV01: (data: MsgCreateRewardV01) => EncodeObject;
    msgDeleteRewardV01: (data: MsgDeleteRewardV01) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
