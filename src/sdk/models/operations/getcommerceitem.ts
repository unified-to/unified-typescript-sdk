/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type GetCommerceItemRequest = {
    /**
     * ID of the connection
     */
    connectionId: string;
    /**
     * Comma-delimited fields to return
     */
    fields?: Array<string> | undefined;
    /**
     * ID of the Item
     */
    id: string;
};

/** @internal */
export const GetCommerceItemRequest$inboundSchema: z.ZodType<
    GetCommerceItemRequest,
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
export type GetCommerceItemRequest$Outbound = {
    connection_id: string;
    fields?: Array<string> | undefined;
    id: string;
};

/** @internal */
export const GetCommerceItemRequest$outboundSchema: z.ZodType<
    GetCommerceItemRequest$Outbound,
    z.ZodTypeDef,
    GetCommerceItemRequest
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
export namespace GetCommerceItemRequest$ {
    /** @deprecated use `GetCommerceItemRequest$inboundSchema` instead. */
    export const inboundSchema = GetCommerceItemRequest$inboundSchema;
    /** @deprecated use `GetCommerceItemRequest$outboundSchema` instead. */
    export const outboundSchema = GetCommerceItemRequest$outboundSchema;
    /** @deprecated use `GetCommerceItemRequest$Outbound` instead. */
    export type Outbound = GetCommerceItemRequest$Outbound;
}
