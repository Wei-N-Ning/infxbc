import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "infx.infxbc.reward";
export interface RewardV01 {
    creator: string;
    id: number;
    userId: string;
    amount: string;
}
export declare const RewardV01: {
    encode(message: RewardV01, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): RewardV01;
    fromJSON(object: any): RewardV01;
    toJSON(message: RewardV01): unknown;
    fromPartial(object: DeepPartial<RewardV01>): RewardV01;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
