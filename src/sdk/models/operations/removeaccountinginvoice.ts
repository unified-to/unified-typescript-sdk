/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type RemoveAccountingInvoiceRequest = {
    /**
     * ID of the connection
     */
    connectionId: string;
    /**
     * ID of the Invoice
     */
    id: string;
};

/** @internal */
export const RemoveAccountingInvoiceRequest$inboundSchema: z.ZodType<
    RemoveAccountingInvoiceRequest,
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
export type RemoveAccountingInvoiceRequest$Outbound = {
    connection_id: string;
    id: string;
};

/** @internal */
export const RemoveAccountingInvoiceRequest$outboundSchema: z.ZodType<
    RemoveAccountingInvoiceRequest$Outbound,
    z.ZodTypeDef,
    RemoveAccountingInvoiceRequest
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
export namespace RemoveAccountingInvoiceRequest$ {
    /** @deprecated use `RemoveAccountingInvoiceRequest$inboundSchema` instead. */
    export const inboundSchema = RemoveAccountingInvoiceRequest$inboundSchema;
    /** @deprecated use `RemoveAccountingInvoiceRequest$outboundSchema` instead. */
    export const outboundSchema = RemoveAccountingInvoiceRequest$outboundSchema;
    /** @deprecated use `RemoveAccountingInvoiceRequest$Outbound` instead. */
    export type Outbound = RemoveAccountingInvoiceRequest$Outbound;
}
