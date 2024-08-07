/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type CreateMessagingMessageRequest = {
    messagingMessage?: shared.MessagingMessage | undefined;
    /**
     * ID of the connection
     */
    connectionId: string;
};

/** @internal */
export const CreateMessagingMessageRequest$inboundSchema: z.ZodType<
    CreateMessagingMessageRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        MessagingMessage: shared.MessagingMessage$inboundSchema.optional(),
        connection_id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            MessagingMessage: "messagingMessage",
            connection_id: "connectionId",
        });
    });

/** @internal */
export type CreateMessagingMessageRequest$Outbound = {
    MessagingMessage?: shared.MessagingMessage$Outbound | undefined;
    connection_id: string;
};

/** @internal */
export const CreateMessagingMessageRequest$outboundSchema: z.ZodType<
    CreateMessagingMessageRequest$Outbound,
    z.ZodTypeDef,
    CreateMessagingMessageRequest
> = z
    .object({
        messagingMessage: shared.MessagingMessage$outboundSchema.optional(),
        connectionId: z.string(),
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
export namespace CreateMessagingMessageRequest$ {
    /** @deprecated use `CreateMessagingMessageRequest$inboundSchema` instead. */
    export const inboundSchema = CreateMessagingMessageRequest$inboundSchema;
    /** @deprecated use `CreateMessagingMessageRequest$outboundSchema` instead. */
    export const outboundSchema = CreateMessagingMessageRequest$outboundSchema;
    /** @deprecated use `CreateMessagingMessageRequest$Outbound` instead. */
    export type Outbound = CreateMessagingMessageRequest$Outbound;
}
