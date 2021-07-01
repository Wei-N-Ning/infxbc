import { Reader, Writer } from 'protobufjs/minimal';
import { UserV01 } from '../infxbc/userV01';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
export declare const protobufPackage = "infx.infxbc.infxbc";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetUserV01Request {
    id: number;
}
export interface QueryGetUserV01Response {
    UserV01: UserV01 | undefined;
}
export interface QueryAllUserV01Request {
    pagination: PageRequest | undefined;
}
export interface QueryAllUserV01Response {
    UserV01: UserV01[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetUserV01Request: {
    encode(message: QueryGetUserV01Request, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetUserV01Request;
    fromJSON(object: any): QueryGetUserV01Request;
    toJSON(message: QueryGetUserV01Request): unknown;
    fromPartial(object: DeepPartial<QueryGetUserV01Request>): QueryGetUserV01Request;
};
export declare const QueryGetUserV01Response: {
    encode(message: QueryGetUserV01Response, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetUserV01Response;
    fromJSON(object: any): QueryGetUserV01Response;
    toJSON(message: QueryGetUserV01Response): unknown;
    fromPartial(object: DeepPartial<QueryGetUserV01Response>): QueryGetUserV01Response;
};
export declare const QueryAllUserV01Request: {
    encode(message: QueryAllUserV01Request, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllUserV01Request;
    fromJSON(object: any): QueryAllUserV01Request;
    toJSON(message: QueryAllUserV01Request): unknown;
    fromPartial(object: DeepPartial<QueryAllUserV01Request>): QueryAllUserV01Request;
};
export declare const QueryAllUserV01Response: {
    encode(message: QueryAllUserV01Response, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllUserV01Response;
    fromJSON(object: any): QueryAllUserV01Response;
    toJSON(message: QueryAllUserV01Response): unknown;
    fromPartial(object: DeepPartial<QueryAllUserV01Response>): QueryAllUserV01Response;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a userV01 by id. */
    UserV01(request: QueryGetUserV01Request): Promise<QueryGetUserV01Response>;
    /** Queries a list of userV01 items. */
    UserV01All(request: QueryAllUserV01Request): Promise<QueryAllUserV01Response>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    UserV01(request: QueryGetUserV01Request): Promise<QueryGetUserV01Response>;
    UserV01All(request: QueryAllUserV01Request): Promise<QueryAllUserV01Response>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
