import { Reader, Writer } from 'protobufjs/minimal';
import { RewardV01 } from '../reward/rewardV01';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
export declare const protobufPackage = "infx.infxbc.reward";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetRewardRequest {
    userId: string;
}
export interface QueryGetRewardResponse {
    reward: RewardV01 | undefined;
}
export interface QueryGetRewardV01Request {
    id: number;
}
export interface QueryGetRewardV01Response {
    RewardV01: RewardV01 | undefined;
}
export interface QueryAllRewardV01Request {
    pagination: PageRequest | undefined;
}
export interface QueryAllRewardV01Response {
    RewardV01: RewardV01[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetRewardRequest: {
    encode(message: QueryGetRewardRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetRewardRequest;
    fromJSON(object: any): QueryGetRewardRequest;
    toJSON(message: QueryGetRewardRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetRewardRequest>): QueryGetRewardRequest;
};
export declare const QueryGetRewardResponse: {
    encode(message: QueryGetRewardResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetRewardResponse;
    fromJSON(object: any): QueryGetRewardResponse;
    toJSON(message: QueryGetRewardResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetRewardResponse>): QueryGetRewardResponse;
};
export declare const QueryGetRewardV01Request: {
    encode(message: QueryGetRewardV01Request, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetRewardV01Request;
    fromJSON(object: any): QueryGetRewardV01Request;
    toJSON(message: QueryGetRewardV01Request): unknown;
    fromPartial(object: DeepPartial<QueryGetRewardV01Request>): QueryGetRewardV01Request;
};
export declare const QueryGetRewardV01Response: {
    encode(message: QueryGetRewardV01Response, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetRewardV01Response;
    fromJSON(object: any): QueryGetRewardV01Response;
    toJSON(message: QueryGetRewardV01Response): unknown;
    fromPartial(object: DeepPartial<QueryGetRewardV01Response>): QueryGetRewardV01Response;
};
export declare const QueryAllRewardV01Request: {
    encode(message: QueryAllRewardV01Request, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllRewardV01Request;
    fromJSON(object: any): QueryAllRewardV01Request;
    toJSON(message: QueryAllRewardV01Request): unknown;
    fromPartial(object: DeepPartial<QueryAllRewardV01Request>): QueryAllRewardV01Request;
};
export declare const QueryAllRewardV01Response: {
    encode(message: QueryAllRewardV01Response, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllRewardV01Response;
    fromJSON(object: any): QueryAllRewardV01Response;
    toJSON(message: QueryAllRewardV01Response): unknown;
    fromPartial(object: DeepPartial<QueryAllRewardV01Response>): QueryAllRewardV01Response;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a list of getReward items. */
    GetReward(request: QueryGetRewardRequest): Promise<QueryGetRewardResponse>;
    /** Queries a rewardV01 by id. */
    RewardV01(request: QueryGetRewardV01Request): Promise<QueryGetRewardV01Response>;
    /** Queries a list of rewardV01 items. */
    RewardV01All(request: QueryAllRewardV01Request): Promise<QueryAllRewardV01Response>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    GetReward(request: QueryGetRewardRequest): Promise<QueryGetRewardResponse>;
    RewardV01(request: QueryGetRewardV01Request): Promise<QueryGetRewardV01Response>;
    RewardV01All(request: QueryAllRewardV01Request): Promise<QueryAllRewardV01Response>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
