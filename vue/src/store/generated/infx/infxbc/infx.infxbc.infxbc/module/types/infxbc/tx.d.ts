import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "infx.infxbc.infxbc";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateUserV01 {
    creator: string;
    name: string;
    role: string;
}
export interface MsgCreateUserV01Response {
    id: number;
}
export interface MsgUpdateUserV01 {
    creator: string;
    id: number;
    name: string;
    role: string;
}
export interface MsgUpdateUserV01Response {
}
export interface MsgDeleteUserV01 {
    creator: string;
    id: number;
}
export interface MsgDeleteUserV01Response {
}
export declare const MsgCreateUserV01: {
    encode(message: MsgCreateUserV01, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateUserV01;
    fromJSON(object: any): MsgCreateUserV01;
    toJSON(message: MsgCreateUserV01): unknown;
    fromPartial(object: DeepPartial<MsgCreateUserV01>): MsgCreateUserV01;
};
export declare const MsgCreateUserV01Response: {
    encode(message: MsgCreateUserV01Response, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateUserV01Response;
    fromJSON(object: any): MsgCreateUserV01Response;
    toJSON(message: MsgCreateUserV01Response): unknown;
    fromPartial(object: DeepPartial<MsgCreateUserV01Response>): MsgCreateUserV01Response;
};
export declare const MsgUpdateUserV01: {
    encode(message: MsgUpdateUserV01, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateUserV01;
    fromJSON(object: any): MsgUpdateUserV01;
    toJSON(message: MsgUpdateUserV01): unknown;
    fromPartial(object: DeepPartial<MsgUpdateUserV01>): MsgUpdateUserV01;
};
export declare const MsgUpdateUserV01Response: {
    encode(_: MsgUpdateUserV01Response, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateUserV01Response;
    fromJSON(_: any): MsgUpdateUserV01Response;
    toJSON(_: MsgUpdateUserV01Response): unknown;
    fromPartial(_: DeepPartial<MsgUpdateUserV01Response>): MsgUpdateUserV01Response;
};
export declare const MsgDeleteUserV01: {
    encode(message: MsgDeleteUserV01, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteUserV01;
    fromJSON(object: any): MsgDeleteUserV01;
    toJSON(message: MsgDeleteUserV01): unknown;
    fromPartial(object: DeepPartial<MsgDeleteUserV01>): MsgDeleteUserV01;
};
export declare const MsgDeleteUserV01Response: {
    encode(_: MsgDeleteUserV01Response, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteUserV01Response;
    fromJSON(_: any): MsgDeleteUserV01Response;
    toJSON(_: MsgDeleteUserV01Response): unknown;
    fromPartial(_: DeepPartial<MsgDeleteUserV01Response>): MsgDeleteUserV01Response;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreateUserV01(request: MsgCreateUserV01): Promise<MsgCreateUserV01Response>;
    UpdateUserV01(request: MsgUpdateUserV01): Promise<MsgUpdateUserV01Response>;
    DeleteUserV01(request: MsgDeleteUserV01): Promise<MsgDeleteUserV01Response>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateUserV01(request: MsgCreateUserV01): Promise<MsgCreateUserV01Response>;
    UpdateUserV01(request: MsgUpdateUserV01): Promise<MsgUpdateUserV01Response>;
    DeleteUserV01(request: MsgDeleteUserV01): Promise<MsgDeleteUserV01Response>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
