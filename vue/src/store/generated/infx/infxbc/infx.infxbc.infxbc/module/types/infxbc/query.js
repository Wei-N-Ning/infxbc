/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
import { UserV01 } from '../infxbc/userV01';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
export const protobufPackage = 'infx.infxbc.infxbc';
const baseQueryGetUserV01Request = { id: 0 };
export const QueryGetUserV01Request = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetUserV01Request };
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
        const message = { ...baseQueryGetUserV01Request };
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
        const message = { ...baseQueryGetUserV01Request };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetUserV01Response = {};
export const QueryGetUserV01Response = {
    encode(message, writer = Writer.create()) {
        if (message.UserV01 !== undefined) {
            UserV01.encode(message.UserV01, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetUserV01Response };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.UserV01 = UserV01.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetUserV01Response };
        if (object.UserV01 !== undefined && object.UserV01 !== null) {
            message.UserV01 = UserV01.fromJSON(object.UserV01);
        }
        else {
            message.UserV01 = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.UserV01 !== undefined && (obj.UserV01 = message.UserV01 ? UserV01.toJSON(message.UserV01) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetUserV01Response };
        if (object.UserV01 !== undefined && object.UserV01 !== null) {
            message.UserV01 = UserV01.fromPartial(object.UserV01);
        }
        else {
            message.UserV01 = undefined;
        }
        return message;
    }
};
const baseQueryAllUserV01Request = {};
export const QueryAllUserV01Request = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllUserV01Request };
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
        const message = { ...baseQueryAllUserV01Request };
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
        const message = { ...baseQueryAllUserV01Request };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllUserV01Response = {};
export const QueryAllUserV01Response = {
    encode(message, writer = Writer.create()) {
        for (const v of message.UserV01) {
            UserV01.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllUserV01Response };
        message.UserV01 = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.UserV01.push(UserV01.decode(reader, reader.uint32()));
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
        const message = { ...baseQueryAllUserV01Response };
        message.UserV01 = [];
        if (object.UserV01 !== undefined && object.UserV01 !== null) {
            for (const e of object.UserV01) {
                message.UserV01.push(UserV01.fromJSON(e));
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
        if (message.UserV01) {
            obj.UserV01 = message.UserV01.map((e) => (e ? UserV01.toJSON(e) : undefined));
        }
        else {
            obj.UserV01 = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllUserV01Response };
        message.UserV01 = [];
        if (object.UserV01 !== undefined && object.UserV01 !== null) {
            for (const e of object.UserV01) {
                message.UserV01.push(UserV01.fromPartial(e));
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
    UserV01(request) {
        const data = QueryGetUserV01Request.encode(request).finish();
        const promise = this.rpc.request('infx.infxbc.infxbc.Query', 'UserV01', data);
        return promise.then((data) => QueryGetUserV01Response.decode(new Reader(data)));
    }
    UserV01All(request) {
        const data = QueryAllUserV01Request.encode(request).finish();
        const promise = this.rpc.request('infx.infxbc.infxbc.Query', 'UserV01All', data);
        return promise.then((data) => QueryAllUserV01Response.decode(new Reader(data)));
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
