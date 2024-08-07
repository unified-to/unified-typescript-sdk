/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type UpdateCommerceItemRequest = {
    commerceItem?: shared.CommerceItem | undefined;
    /**
     * ID of the connection
     */
    connectionId: string;
    /**
     * ID of the Item
     */
    id: string;
};

/** @internal */
export const UpdateCommerceItemRequest$inboundSchema: z.ZodType<
    UpdateCommerceItemRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        CommerceItem: shared.CommerceItem$inboundSchema.optional(),
        connection_id: z.string(),
        id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            CommerceItem: "commerceItem",
            connection_id: "connectionId",
        });
    });

/** @internal */
export type UpdateCommerceItemRequest$Outbound = {
    CommerceItem?: shared.CommerceItem$Outbound | undefined;
    connection_id: string;
    id: string;
};

/** @internal */
export const UpdateCommerceItemRequest$outboundSchema: z.ZodType<
    UpdateCommerceItemRequest$Outbound,
    z.ZodTypeDef,
    UpdateCommerceItemRequest
> = z
    .object({
        commerceItem: shared.CommerceItem$outboundSchema.optional(),
        connectionId: z.string(),
        id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            commerceItem: "CommerceItem",
            connectionId: "connection_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateCommerceItemRequest$ {
    /** @deprecated use `UpdateCommerceItemRequest$inboundSchema` instead. */
    export const inboundSchema = UpdateCommerceItemRequest$inboundSchema;
    /** @deprecated use `UpdateCommerceItemRequest$outboundSchema` instead. */
    export const outboundSchema = UpdateCommerceItemRequest$outboundSchema;
    /** @deprecated use `UpdateCommerceItemRequest$Outbound` instead. */
    export type Outbound = UpdateCommerceItemRequest$Outbound;
}
