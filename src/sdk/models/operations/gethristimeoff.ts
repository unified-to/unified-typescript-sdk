/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type GetHrisTimeoffRequest = {
    /**
     * ID of the connection
     */
    connectionId: string;
    /**
     * Comma-delimited fields to return
     */
    fields?: Array<string> | undefined;
    /**
     * ID of the Timeoff
     */
    id: string;
};

/** @internal */
export const GetHrisTimeoffRequest$inboundSchema: z.ZodType<
    GetHrisTimeoffRequest,
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
export type GetHrisTimeoffRequest$Outbound = {
    connection_id: string;
    fields?: Array<string> | undefined;
    id: string;
};

/** @internal */
export const GetHrisTimeoffRequest$outboundSchema: z.ZodType<
    GetHrisTimeoffRequest$Outbound,
    z.ZodTypeDef,
    GetHrisTimeoffRequest
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
export namespace GetHrisTimeoffRequest$ {
    /** @deprecated use `GetHrisTimeoffRequest$inboundSchema` instead. */
    export const inboundSchema = GetHrisTimeoffRequest$inboundSchema;
    /** @deprecated use `GetHrisTimeoffRequest$outboundSchema` instead. */
    export const outboundSchema = GetHrisTimeoffRequest$outboundSchema;
    /** @deprecated use `GetHrisTimeoffRequest$Outbound` instead. */
    export type Outbound = GetHrisTimeoffRequest$Outbound;
}
