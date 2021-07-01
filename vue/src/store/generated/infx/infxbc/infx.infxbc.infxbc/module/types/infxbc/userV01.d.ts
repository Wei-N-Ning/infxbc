import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "infx.infxbc.infxbc";
export interface UserV01 {
    creator: string;
    id: number;
    name: string;
    role: string;
}
export declare const UserV01: {
    encode(message: UserV01, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): UserV01;
    fromJSON(object: any): UserV01;
    toJSON(message: UserV01): unknown;
    fromPartial(object: DeepPartial<UserV01>): UserV01;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
