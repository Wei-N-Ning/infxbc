/* eslint-disable */
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import { RewardV01 } from '../reward/rewardV01';
export const protobufPackage = 'infx.infxbc.reward';
const baseGenesisState = { rewardV01Count: 0 };
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.rewardV01List) {
            RewardV01.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.rewardV01Count !== 0) {
            writer.uint32(16).uint64(message.rewardV01Count);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.rewardV01List = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewardV01List.push(RewardV01.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.rewardV01Count = longToNumber(reader.uint64());
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
        message.rewardV01List = [];
        if (object.rewardV01List !== undefined && object.rewardV01List !== null) {
            for (const e of object.rewardV01List) {
                message.rewardV01List.push(RewardV01.fromJSON(e));
            }
        }
        if (object.rewardV01Count !== undefined && object.rewardV01Count !== null) {
            message.rewardV01Count = Number(object.rewardV01Count);
        }
        else {
            message.rewardV01Count = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.rewardV01List) {
            obj.rewardV01List = message.rewardV01List.map((e) => (e ? RewardV01.toJSON(e) : undefined));
        }
        else {
            obj.rewardV01List = [];
        }
        message.rewardV01Count !== undefined && (obj.rewardV01Count = message.rewardV01Count);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.rewardV01List = [];
        if (object.rewardV01List !== undefined && object.rewardV01List !== null) {
            for (const e of object.rewardV01List) {
                message.rewardV01List.push(RewardV01.fromPartial(e));
            }
        }
        if (object.rewardV01Count !== undefined && object.rewardV01Count !== null) {
            message.rewardV01Count = object.rewardV01Count;
        }
        else {
            message.rewardV01Count = 0;
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
