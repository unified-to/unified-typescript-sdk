/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type ListAtsDocumentsRequest = {
    applicationId?: string | undefined;
    candidateId?: string | undefined;
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
};

/** @internal */
export const ListAtsDocumentsRequest$inboundSchema: z.ZodType<
    ListAtsDocumentsRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        application_id: z.string().optional(),
        candidate_id: z.string().optional(),
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
    })
    .transform((v) => {
        return remap$(v, {
            application_id: "applicationId",
            candidate_id: "candidateId",
            connection_id: "connectionId",
            updated_gte: "updatedGte",
        });
    });

/** @internal */
export type ListAtsDocumentsRequest$Outbound = {
    application_id?: string | undefined;
    candidate_id?: string | undefined;
    connection_id: string;
    fields?: Array<string> | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    query?: string | undefined;
    updated_gte?: string | undefined;
};

/** @internal */
export const ListAtsDocumentsRequest$outboundSchema: z.ZodType<
    ListAtsDocumentsRequest$Outbound,
    z.ZodTypeDef,
    ListAtsDocumentsRequest
> = z
    .object({
        applicationId: z.string().optional(),
        candidateId: z.string().optional(),
        connectionId: z.string(),
        fields: z.array(z.string()).optional(),
        limit: z.number().optional(),
        offset: z.number().optional(),
        query: z.string().optional(),
        updatedGte: z
            .date()
            .transform((v) => v.toISOString())
            .optional(),
    })
    .transform((v) => {
        return remap$(v, {
            applicationId: "application_id",
            candidateId: "candidate_id",
            connectionId: "connection_id",
            updatedGte: "updated_gte",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAtsDocumentsRequest$ {
    /** @deprecated use `ListAtsDocumentsRequest$inboundSchema` instead. */
    export const inboundSchema = ListAtsDocumentsRequest$inboundSchema;
    /** @deprecated use `ListAtsDocumentsRequest$outboundSchema` instead. */
    export const outboundSchema = ListAtsDocumentsRequest$outboundSchema;
    /** @deprecated use `ListAtsDocumentsRequest$Outbound` instead. */
    export type Outbound = ListAtsDocumentsRequest$Outbound;
}
