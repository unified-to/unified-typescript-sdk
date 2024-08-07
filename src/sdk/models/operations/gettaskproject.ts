/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type GetTaskProjectRequest = {
    /**
     * ID of the connection
     */
    connectionId: string;
    /**
     * Comma-delimited fields to return
     */
    fields?: Array<string> | undefined;
    /**
     * ID of the Project
     */
    id: string;
};

/** @internal */
export const GetTaskProjectRequest$inboundSchema: z.ZodType<
    GetTaskProjectRequest,
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
export type GetTaskProjectRequest$Outbound = {
    connection_id: string;
    fields?: Array<string> | undefined;
    id: string;
};

/** @internal */
export const GetTaskProjectRequest$outboundSchema: z.ZodType<
    GetTaskProjectRequest$Outbound,
    z.ZodTypeDef,
    GetTaskProjectRequest
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
export namespace GetTaskProjectRequest$ {
    /** @deprecated use `GetTaskProjectRequest$inboundSchema` instead. */
    export const inboundSchema = GetTaskProjectRequest$inboundSchema;
    /** @deprecated use `GetTaskProjectRequest$outboundSchema` instead. */
    export const outboundSchema = GetTaskProjectRequest$outboundSchema;
    /** @deprecated use `GetTaskProjectRequest$Outbound` instead. */
    export type Outbound = GetTaskProjectRequest$Outbound;
}
