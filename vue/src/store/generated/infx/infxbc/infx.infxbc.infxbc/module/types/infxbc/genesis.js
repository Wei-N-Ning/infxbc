/* eslint-disable */
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import { UserV01 } from '../infxbc/userV01';
export const protobufPackage = 'infx.infxbc.infxbc';
const baseGenesisState = { userV01Count: 0 };
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.userV01List) {
            UserV01.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.userV01Count !== 0) {
            writer.uint32(16).uint64(message.userV01Count);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.userV01List = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userV01List.push(UserV01.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.userV01Count = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.userV01List = [];
        if (object.userV01List !== undefined && object.userV01List !== null) {
            for (const e of object.userV01List) {
                message.userV01List.push(UserV01.fromJSON(e));
            }
        }
        if (object.userV01Count !== undefined && object.userV01Count !== null) {
            message.userV01Count = Number(object.userV01Count);
        }
        else {
            message.userV01Count = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.userV01List) {
            obj.userV01List = message.userV01List.map((e) => (e ? UserV01.toJSON(e) : undefined));
        }
        else {
            obj.userV01List = [];
        }
        message.userV01Count !== undefined && (obj.userV01Count = message.userV01Count);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.userV01List = [];
        if (object.userV01List !== undefined && object.userV01List !== null) {
            for (const e of object.userV01List) {
                message.userV01List.push(UserV01.fromPartial(e));
            }
        }
        if (object.userV01Count !== undefined && object.userV01Count !== null) {
            message.userV01Count = object.userV01Count;
        }
        else {
            message.userV01Count = 0;
        }
        return message;
    }
};
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
