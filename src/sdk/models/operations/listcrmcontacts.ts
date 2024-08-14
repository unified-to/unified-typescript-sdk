/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type ListCrmContactsRequest = {
    companyId?: string | undefined;
    /**
     * ID of the connection
     */
    connectionId: string;
    dealId?: string | undefined;
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
    userId?: string | undefined;
};

/** @internal */
export const ListCrmContactsRequest$inboundSchema: z.ZodType<
    ListCrmContactsRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        company_id: z.string().optional(),
        connection_id: z.string(),
        deal_id: z.string().optional(),
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
        user_id: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            company_id: "companyId",
            connection_id: "connectionId",
            deal_id: "dealId",
            updated_gte: "updatedGte",
            user_id: "userId",
        });
    });

/** @internal */
export type ListCrmContactsRequest$Outbound = {
    company_id?: string | undefined;
    connection_id: string;
    deal_id?: string | undefined;
    fields?: Array<string> | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: string | undefined;
    query?: string | undefined;
    sort?: string | undefined;
    updated_gte?: string | undefined;
    user_id?: string | undefined;
};

/** @internal */
export const ListCrmContactsRequest$outboundSchema: z.ZodType<
    ListCrmContactsRequest$Outbound,
    z.ZodTypeDef,
    ListCrmContactsRequest
> = z
    .object({
        companyId: z.string().optional(),
        connectionId: z.string(),
        dealId: z.string().optional(),
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
        userId: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            companyId: "company_id",
            connectionId: "connection_id",
            dealId: "deal_id",
            updatedGte: "updated_gte",
            userId: "user_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListCrmContactsRequest$ {
    /** @deprecated use `ListCrmContactsRequest$inboundSchema` instead. */
    export const inboundSchema = ListCrmContactsRequest$inboundSchema;
    /** @deprecated use `ListCrmContactsRequest$outboundSchema` instead. */
    export const outboundSchema = ListCrmContactsRequest$outboundSchema;
    /** @deprecated use `ListCrmContactsRequest$Outbound` instead. */
    export type Outbound = ListCrmContactsRequest$Outbound;
}
