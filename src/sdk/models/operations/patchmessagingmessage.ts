/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type PatchMessagingMessageRequest = {
    messagingMessage?: shared.MessagingMessage | undefined;
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
export const PatchMessagingMessageRequest$inboundSchema: z.ZodType<
    PatchMessagingMessageRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        MessagingMessage: shared.MessagingMessage$inboundSchema.optional(),
        connection_id: z.string(),
        id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            MessagingMessage: "messagingMessage",
            connection_id: "connectionId",
        });
    });

/** @internal */
export type PatchMessagingMessageRequest$Outbound = {
    MessagingMessage?: shared.MessagingMessage$Outbound | undefined;
    connection_id: string;
    id: string;
};

/** @internal */
export const PatchMessagingMessageRequest$outboundSchema: z.ZodType<
    PatchMessagingMessageRequest$Outbound,
    z.ZodTypeDef,
    PatchMessagingMessageRequest
> = z
    .object({
        messagingMessage: shared.MessagingMessage$outboundSchema.optional(),
        connectionId: z.string(),
        id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            messagingMessage: "MessagingMessage",
            connectionId: "connection_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchMessagingMessageRequest$ {
    /** @deprecated use `PatchMessagingMessageRequest$inboundSchema` instead. */
    export const inboundSchema = PatchMessagingMessageRequest$inboundSchema;
    /** @deprecated use `PatchMessagingMessageRequest$outboundSchema` instead. */
    export const outboundSchema = PatchMessagingMessageRequest$outboundSchema;
    /** @deprecated use `PatchMessagingMessageRequest$Outbound` instead. */
    export type Outbound = PatchMessagingMessageRequest$Outbound;
}
