import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateUserV01 } from "./types/infxbc/tx";
import { MsgDeleteUserV01 } from "./types/infxbc/tx";
import { MsgCreateUserV01 } from "./types/infxbc/tx";
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
    msgUpdateUserV01: (data: MsgUpdateUserV01) => EncodeObject;
    msgDeleteUserV01: (data: MsgDeleteUserV01) => EncodeObject;
    msgCreateUserV01: (data: MsgCreateUserV01) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
