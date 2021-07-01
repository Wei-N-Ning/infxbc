/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
import { RewardV01 } from '../reward/rewardV01';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
export const protobufPackage = 'infx.infxbc.reward';
const baseQueryGetRewardRequest = { userId: '' };
export const QueryGetRewardRequest = {
    encode(message, writer = Writer.create()) {
        if (message.userId !== '') {
            writer.uint32(10).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetRewardRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetRewardRequest };
        if (object.userId !== undefined && object.userId !== null) {
            message.userId = String(object.userId);
        }
        else {
            message.userId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetRewardRequest };
        if (object.userId !== undefined && object.userId !== null) {
            message.userId = object.userId;
        }
        else {
            message.userId = '';
        }
        return message;
    }
};
const baseQueryGetRewardResponse = {};
export const QueryGetRewardResponse = {
    encode(message, writer = Writer.create()) {
        if (message.reward !== undefined) {
            RewardV01.encode(message.reward, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetRewardResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.reward = RewardV01.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetRewardResponse };
        if (object.reward !== undefined && object.reward !== null) {
            message.reward = RewardV01.fromJSON(object.reward);
        }
        else {
            message.reward = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.reward !== undefined && (obj.reward = message.reward ? RewardV01.toJSON(message.reward) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetRewardResponse };
        if (object.reward !== undefined && object.reward !== null) {
            message.reward = RewardV01.fromPartial(object.reward);
        }
        else {
            message.reward = undefined;
        }
        return message;
    }
};
const baseQueryGetRewardV01Request = { id: 0 };
export const QueryGetRewardV01Request = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetRewardV01Request };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetRewardV01Request };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetRewardV01Request };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetRewardV01Response = {};
export const QueryGetRewardV01Response = {
    encode(message, writer = Writer.create()) {
        if (message.RewardV01 !== undefined) {
            RewardV01.encode(message.RewardV01, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetRewardV01Response };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.RewardV01 = RewardV01.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetRewardV01Response };
        if (object.RewardV01 !== undefined && object.RewardV01 !== null) {
            message.RewardV01 = RewardV01.fromJSON(object.RewardV01);
        }
        else {
            message.RewardV01 = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.RewardV01 !== undefined && (obj.RewardV01 = message.RewardV01 ? RewardV01.toJSON(message.RewardV01) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetRewardV01Response };
        if (object.RewardV01 !== undefined && object.RewardV01 !== null) {
            message.RewardV01 = RewardV01.fromPartial(object.RewardV01);
        }
        else {
            message.RewardV01 = undefined;
        }
        return message;
    }
};
const baseQueryAllRewardV01Request = {};
export const QueryAllRewardV01Request = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllRewardV01Request };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllRewardV01Request };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllRewardV01Request };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllRewardV01Response = {};
export const QueryAllRewardV01Response = {
    encode(message, writer = Writer.create()) {
        for (const v of message.RewardV01) {
            RewardV01.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllRewardV01Response };
        message.RewardV01 = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.RewardV01.push(RewardV01.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllRewardV01Response };
        message.RewardV01 = [];
        if (object.RewardV01 !== undefined && object.RewardV01 !== null) {
            for (const e of object.RewardV01) {
                message.RewardV01.push(RewardV01.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.RewardV01) {
            obj.RewardV01 = message.RewardV01.map((e) => (e ? RewardV01.toJSON(e) : undefined));
        }
        else {
            obj.RewardV01 = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllRewardV01Response };
        message.RewardV01 = [];
        if (object.RewardV01 !== undefined && object.RewardV01 !== null) {
            for (const e of object.RewardV01) {
                message.RewardV01.push(RewardV01.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    GetReward(request) {
        const data = QueryGetRewardRequest.encode(request).finish();
        const promise = this.rpc.request('infx.infxbc.reward.Query', 'GetReward', data);
        return promise.then((data) => QueryGetRewardResponse.decode(new Reader(data)));
    }
    RewardV01(request) {
        const data = QueryGetRewardV01Request.encode(request).finish();
        const promise = this.rpc.request('infx.infxbc.reward.Query', 'RewardV01', data);
        return promise.then((data) => QueryGetRewardV01Response.decode(new Reader(data)));
    }
    RewardV01All(request) {
        const data = QueryAllRewardV01Request.encode(request).finish();
        const promise = this.rpc.request('infx.infxbc.reward.Query', 'RewardV01All', data);
        return promise.then((data) => QueryAllRewardV01Response.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
