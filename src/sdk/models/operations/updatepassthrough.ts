/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type UpdatePassthroughRequest = {
    /**
     * integration-specific payload
     */
    requestBody?: { [k: string]: any } | undefined;
    /**
     * ID of the connection
     */
    connectionId: string;
    path: string;
};

/** @internal */
export const UpdatePassthroughRequest$inboundSchema: z.ZodType<
    UpdatePassthroughRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        RequestBody: z.record(z.any()).optional(),
        connection_id: z.string(),
        path: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            RequestBody: "requestBody",
            connection_id: "connectionId",
        });
    });

/** @internal */
export type UpdatePassthroughRequest$Outbound = {
    RequestBody?: { [k: string]: any } | undefined;
    connection_id: string;
    path: string;
};

/** @internal */
export const UpdatePassthroughRequest$outboundSchema: z.ZodType<
    UpdatePassthroughRequest$Outbound,
    z.ZodTypeDef,
    UpdatePassthroughRequest
> = z
    .object({
        requestBody: z.record(z.any()).optional(),
        connectionId: z.string(),
        path: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            requestBody: "RequestBody",
            connectionId: "connection_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdatePassthroughRequest$ {
    /** @deprecated use `UpdatePassthroughRequest$inboundSchema` instead. */
    export const inboundSchema = UpdatePassthroughRequest$inboundSchema;
    /** @deprecated use `UpdatePassthroughRequest$outboundSchema` instead. */
    export const outboundSchema = UpdatePassthroughRequest$outboundSchema;
    /** @deprecated use `UpdatePassthroughRequest$Outbound` instead. */
    export type Outbound = UpdatePassthroughRequest$Outbound;
}
