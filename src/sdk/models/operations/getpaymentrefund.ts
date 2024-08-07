/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type GetPaymentRefundRequest = {
    /**
     * ID of the connection
     */
    connectionId: string;
    /**
     * Comma-delimited fields to return
     */
    fields?: Array<string> | undefined;
    /**
     * ID of the Refund
     */
    id: string;
};

/** @internal */
export const GetPaymentRefundRequest$inboundSchema: z.ZodType<
    GetPaymentRefundRequest,
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
export type GetPaymentRefundRequest$Outbound = {
    connection_id: string;
    fields?: Array<string> | undefined;
    id: string;
};

/** @internal */
export const GetPaymentRefundRequest$outboundSchema: z.ZodType<
    GetPaymentRefundRequest$Outbound,
    z.ZodTypeDef,
    GetPaymentRefundRequest
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
export namespace GetPaymentRefundRequest$ {
    /** @deprecated use `GetPaymentRefundRequest$inboundSchema` instead. */
    export const inboundSchema = GetPaymentRefundRequest$inboundSchema;
    /** @deprecated use `GetPaymentRefundRequest$outboundSchema` instead. */
    export const outboundSchema = GetPaymentRefundRequest$outboundSchema;
    /** @deprecated use `GetPaymentRefundRequest$Outbound` instead. */
    export type Outbound = GetPaymentRefundRequest$Outbound;
}
