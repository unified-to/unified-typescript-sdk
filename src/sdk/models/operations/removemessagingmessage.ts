/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type RemoveMessagingMessageRequest = {
    /**
     * ID of the connection
     */
    connectionId: string;
    /**
     * ID of the Message
     */
    id: string;
};

/** @internal */
export const RemoveMessagingMessageRequest$inboundSchema: z.ZodType<
    RemoveMessagingMessageRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        connection_id: z.string(),
        id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            connection_id: "connectionId",
        });
    });

/** @internal */
export type RemoveMessagingMessageRequest$Outbound = {
    connection_id: string;
    id: string;
};

/** @internal */
export const RemoveMessagingMessageRequest$outboundSchema: z.ZodType<
    RemoveMessagingMessageRequest$Outbound,
    z.ZodTypeDef,
    RemoveMessagingMessageRequest
> = z
    .object({
        connectionId: z.string(),
        id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            connectionId: "connection_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RemoveMessagingMessageRequest$ {
    /** @deprecated use `RemoveMessagingMessageRequest$inboundSchema` instead. */
    export const inboundSchema = RemoveMessagingMessageRequest$inboundSchema;
    /** @deprecated use `RemoveMessagingMessageRequest$outboundSchema` instead. */
    export const outboundSchema = RemoveMessagingMessageRequest$outboundSchema;
    /** @deprecated use `RemoveMessagingMessageRequest$Outbound` instead. */
    export type Outbound = RemoveMessagingMessageRequest$Outbound;
}
