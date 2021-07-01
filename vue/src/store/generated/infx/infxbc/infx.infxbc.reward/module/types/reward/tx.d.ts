import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "infx.infxbc.reward";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateRewardV01 {
    creator: string;
    userId: string;
    amount: string;
}
export interface MsgCreateRewardV01Response {
    id: number;
}
export interface MsgUpdateRewardV01 {
    creator: string;
    id: number;
    userId: string;
    amount: string;
}
export interface MsgUpdateRewardV01Response {
}
export interface MsgDeleteRewardV01 {
    creator: string;
    id: number;
}
export interface MsgDeleteRewardV01Response {
}
export declare const MsgCreateRewardV01: {
    encode(message: MsgCreateRewardV01, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateRewardV01;
    fromJSON(object: any): MsgCreateRewardV01;
    toJSON(message: MsgCreateRewardV01): unknown;
    fromPartial(object: DeepPartial<MsgCreateRewardV01>): MsgCreateRewardV01;
};
export declare const MsgCreateRewardV01Response: {
    encode(message: MsgCreateRewardV01Response, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateRewardV01Response;
    fromJSON(object: any): MsgCreateRewardV01Response;
    toJSON(message: MsgCreateRewardV01Response): unknown;
    fromPartial(object: DeepPartial<MsgCreateRewardV01Response>): MsgCreateRewardV01Response;
};
export declare const MsgUpdateRewardV01: {
    encode(message: MsgUpdateRewardV01, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateRewardV01;
    fromJSON(object: any): MsgUpdateRewardV01;
    toJSON(message: MsgUpdateRewardV01): unknown;
    fromPartial(object: DeepPartial<MsgUpdateRewardV01>): MsgUpdateRewardV01;
};
export declare const MsgUpdateRewardV01Response: {
    encode(_: MsgUpdateRewardV01Response, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateRewardV01Response;
    fromJSON(_: any): MsgUpdateRewardV01Response;
    toJSON(_: MsgUpdateRewardV01Response): unknown;
    fromPartial(_: DeepPartial<MsgUpdateRewardV01Response>): MsgUpdateRewardV01Response;
};
export declare const MsgDeleteRewardV01: {
    encode(message: MsgDeleteRewardV01, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteRewardV01;
    fromJSON(object: any): MsgDeleteRewardV01;
    toJSON(message: MsgDeleteRewardV01): unknown;
    fromPartial(object: DeepPartial<MsgDeleteRewardV01>): MsgDeleteRewardV01;
};
export declare const MsgDeleteRewardV01Response: {
    encode(_: MsgDeleteRewardV01Response, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteRewardV01Response;
    fromJSON(_: any): MsgDeleteRewardV01Response;
    toJSON(_: MsgDeleteRewardV01Response): unknown;
    fromPartial(_: DeepPartial<MsgDeleteRewardV01Response>): MsgDeleteRewardV01Response;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreateRewardV01(request: MsgCreateRewardV01): Promise<MsgCreateRewardV01Response>;
    UpdateRewardV01(request: MsgUpdateRewardV01): Promise<MsgUpdateRewardV01Response>;
    DeleteRewardV01(request: MsgDeleteRewardV01): Promise<MsgDeleteRewardV01Response>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateRewardV01(request: MsgCreateRewardV01): Promise<MsgCreateRewardV01Response>;
    UpdateRewardV01(request: MsgUpdateRewardV01): Promise<MsgUpdateRewardV01Response>;
    DeleteRewardV01(request: MsgDeleteRewardV01): Promise<MsgDeleteRewardV01Response>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
