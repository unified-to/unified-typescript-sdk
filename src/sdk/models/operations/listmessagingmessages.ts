/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type ListMessagingMessagesRequest = {
    channelId?: string | undefined;
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
    parentId?: string | undefined;
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
export const ListMessagingMessagesRequest$inboundSchema: z.ZodType<
    ListMessagingMessagesRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        channel_id: z.string().optional(),
        connection_id: z.string(),
        fields: z.array(z.string()).optional(),
        limit: z.number().optional(),
        offset: z.number().optional(),
        order: z.string().optional(),
        parent_id: z.string().optional(),
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
            channel_id: "channelId",
            connection_id: "connectionId",
            parent_id: "parentId",
            updated_gte: "updatedGte",
        });
    });

/** @internal */
export type ListMessagingMessagesRequest$Outbound = {
    channel_id?: string | undefined;
    connection_id: string;
    fields?: Array<string> | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: string | undefined;
    parent_id?: string | undefined;
    query?: string | undefined;
    sort?: string | undefined;
    updated_gte?: string | undefined;
};

/** @internal */
export const ListMessagingMessagesRequest$outboundSchema: z.ZodType<
    ListMessagingMessagesRequest$Outbound,
    z.ZodTypeDef,
    ListMessagingMessagesRequest
> = z
    .object({
        channelId: z.string().optional(),
        connectionId: z.string(),
        fields: z.array(z.string()).optional(),
        limit: z.number().optional(),
        offset: z.number().optional(),
        order: z.string().optional(),
        parentId: z.string().optional(),
        query: z.string().optional(),
        sort: z.string().optional(),
        updatedGte: z
            .date()
            .transform((v) => v.toISOString())
            .optional(),
    })
    .transform((v) => {
        return remap$(v, {
            channelId: "channel_id",
            connectionId: "connection_id",
            parentId: "parent_id",
            updatedGte: "updated_gte",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListMessagingMessagesRequest$ {
    /** @deprecated use `ListMessagingMessagesRequest$inboundSchema` instead. */
    export const inboundSchema = ListMessagingMessagesRequest$inboundSchema;
    /** @deprecated use `ListMessagingMessagesRequest$outboundSchema` instead. */
    export const outboundSchema = ListMessagingMessagesRequest$outboundSchema;
    /** @deprecated use `ListMessagingMessagesRequest$Outbound` instead. */
    export type Outbound = ListMessagingMessagesRequest$Outbound;
}
