// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
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

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgUpdateUserV01: (data: MsgUpdateUserV01): EncodeObject => ({ typeUrl: "/infx.infxbc.infxbc.MsgUpdateUserV01", value: data }),
    msgDeleteUserV01: (data: MsgDeleteUserV01): EncodeObject => ({ typeUrl: "/infx.infxbc.infxbc.MsgDeleteUserV01", value: data }),
    msgCreateUserV01: (data: MsgCreateUserV01): EncodeObject => ({ typeUrl: "/infx.infxbc.infxbc.MsgCreateUserV01", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
