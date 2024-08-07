/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type GetPaymentLinkRequest = {
    /**
     * ID of the connection
     */
    connectionId: string;
    /**
     * Comma-delimited fields to return
     */
    fields?: Array<string> | undefined;
    /**
     * ID of the Link
     */
    id: string;
};

/** @internal */
export const GetPaymentLinkRequest$inboundSchema: z.ZodType<
    GetPaymentLinkRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        connection_id: z.string(),
        fields: z.array(z.string()).optional(),
        id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            connection_id: "connectionId",
        });
    });

/** @internal */
export type GetPaymentLinkRequest$Outbound = {
    connection_id: string;
    fields?: Array<string> | undefined;
    id: string;
};

/** @internal */
export const GetPaymentLinkRequest$outboundSchema: z.ZodType<
    GetPaymentLinkRequest$Outbound,
    z.ZodTypeDef,
    GetPaymentLinkRequest
> = z
    .object({
        connectionId: z.string(),
        fields: z.array(z.string()).optional(),
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
export namespace GetPaymentLinkRequest$ {
    /** @deprecated use `GetPaymentLinkRequest$inboundSchema` instead. */
    export const inboundSchema = GetPaymentLinkRequest$inboundSchema;
    /** @deprecated use `GetPaymentLinkRequest$outboundSchema` instead. */
    export const outboundSchema = GetPaymentLinkRequest$outboundSchema;
    /** @deprecated use `GetPaymentLinkRequest$Outbound` instead. */
    export type Outbound = GetPaymentLinkRequest$Outbound;
}
