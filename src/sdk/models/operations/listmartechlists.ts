/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type ListMartechListsRequest = {
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
    order?: string | undefined;
    /**
     * Query string to search. eg. email address or name
     */
    query?: string | undefined;
    sort?: string | undefined;
    /**
     * Return only results whose updated date is equal or greater to this value
     */
    updatedGte?: Date | undefined;
};

/** @internal */
export const ListMartechListsRequest$inboundSchema: z.ZodType<
    ListMartechListsRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        connection_id: z.string(),
        fields: z.array(z.string()).optional(),
        limit: z.number().optional(),
        offset: z.number().optional(),
        order: z.string().optional(),
        query: z.string().optional(),
        sort: z.string().optional(),
        updated_gte: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v))
            .optional(),
    })
    .transform((v) => {
        return remap$(v, {
            connection_id: "connectionId",
            updated_gte: "updatedGte",
        });
    });

/** @internal */
export type ListMartechListsRequest$Outbound = {
    connection_id: string;
    fields?: Array<string> | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: string | undefined;
    query?: string | undefined;
    sort?: string | undefined;
    updated_gte?: string | undefined;
};

/** @internal */
export const ListMartechListsRequest$outboundSchema: z.ZodType<
    ListMartechListsRequest$Outbound,
    z.ZodTypeDef,
    ListMartechListsRequest
> = z
    .object({
        connectionId: z.string(),
        fields: z.array(z.string()).optional(),
        limit: z.number().optional(),
        offset: z.number().optional(),
        order: z.string().optional(),
        query: z.string().optional(),
        sort: z.string().optional(),
        updatedGte: z
            .date()
            .transform((v) => v.toISOString())
            .optional(),
    })
    .transform((v) => {
        return remap$(v, {
            connectionId: "connection_id",
            updatedGte: "updated_gte",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListMartechListsRequest$ {
    /** @deprecated use `ListMartechListsRequest$inboundSchema` instead. */
    export const inboundSchema = ListMartechListsRequest$inboundSchema;
    /** @deprecated use `ListMartechListsRequest$outboundSchema` instead. */
    export const outboundSchema = ListMartechListsRequest$outboundSchema;
    /** @deprecated use `ListMartechListsRequest$Outbound` instead. */
    export type Outbound = ListMartechListsRequest$Outbound;
}
