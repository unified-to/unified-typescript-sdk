/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type GetAtsInterviewRequest = {
    /**
     * ID of the connection
     */
    connectionId: string;
    /**
     * Comma-delimited fields to return
     */
    fields?: Array<string> | undefined;
    /**
     * ID of the Interview
     */
    id: string;
};

/** @internal */
export const GetAtsInterviewRequest$inboundSchema: z.ZodType<
    GetAtsInterviewRequest,
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
export type GetAtsInterviewRequest$Outbound = {
    connection_id: string;
    fields?: Array<string> | undefined;
    id: string;
};

/** @internal */
export const GetAtsInterviewRequest$outboundSchema: z.ZodType<
    GetAtsInterviewRequest$Outbound,
    z.ZodTypeDef,
    GetAtsInterviewRequest
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
export namespace GetAtsInterviewRequest$ {
    /** @deprecated use `GetAtsInterviewRequest$inboundSchema` instead. */
    export const inboundSchema = GetAtsInterviewRequest$inboundSchema;
    /** @deprecated use `GetAtsInterviewRequest$outboundSchema` instead. */
    export const outboundSchema = GetAtsInterviewRequest$outboundSchema;
    /** @deprecated use `GetAtsInterviewRequest$Outbound` instead. */
    export type Outbound = GetAtsInterviewRequest$Outbound;
}
