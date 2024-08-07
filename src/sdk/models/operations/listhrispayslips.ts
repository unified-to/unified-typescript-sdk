/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type ListHrisPayslipsRequest = {
    /**
     * ID of the connection
     */
    connectionId: string;
    /**
     * Comma-delimited fields to return
     */
    fields?: Array<string> | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    /**
     * Query string to search. eg. email address or name
     */
    query?: string | undefined;
    /**
     * Return only results whose updated date is equal or greater to this value
     */
    updatedGte?: Date | undefined;
    userId?: string | undefined;
};

/** @internal */
export const ListHrisPayslipsRequest$inboundSchema: z.ZodType<
    ListHrisPayslipsRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        connection_id: z.string(),
        fields: z.array(z.string()).optional(),
        limit: z.number().optional(),
        offset: z.number().optional(),
        query: z.string().optional(),
        updated_gte: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v))
            .optional(),
        user_id: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            connection_id: "connectionId",
            updated_gte: "updatedGte",
            user_id: "userId",
        });
    });

/** @internal */
export type ListHrisPayslipsRequest$Outbound = {
    connection_id: string;
    fields?: Array<string> | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    query?: string | undefined;
    updated_gte?: string | undefined;
    user_id?: string | undefined;
};

/** @internal */
export const ListHrisPayslipsRequest$outboundSchema: z.ZodType<
    ListHrisPayslipsRequest$Outbound,
    z.ZodTypeDef,
    ListHrisPayslipsRequest
> = z
    .object({
        connectionId: z.string(),
        fields: z.array(z.string()).optional(),
        limit: z.number().optional(),
        offset: z.number().optional(),
        query: z.string().optional(),
        updatedGte: z
            .date()
            .transform((v) => v.toISOString())
            .optional(),
        userId: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            connectionId: "connection_id",
            updatedGte: "updated_gte",
            userId: "user_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListHrisPayslipsRequest$ {
    /** @deprecated use `ListHrisPayslipsRequest$inboundSchema` instead. */
    export const inboundSchema = ListHrisPayslipsRequest$inboundSchema;
    /** @deprecated use `ListHrisPayslipsRequest$outboundSchema` instead. */
    export const outboundSchema = ListHrisPayslipsRequest$outboundSchema;
    /** @deprecated use `ListHrisPayslipsRequest$Outbound` instead. */
    export type Outbound = ListHrisPayslipsRequest$Outbound;
}
