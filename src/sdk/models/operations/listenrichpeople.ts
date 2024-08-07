/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type ListEnrichPeopleRequest = {
    /**
     * The name of the company the person is associated with.  Not valid by itself.
     */
    companyName?: string | undefined;
    /**
     * ID of the connection
     */
    connectionId: string;
    /**
     * The email of the person to search
     */
    email?: string | undefined;
    /**
     * The LinkedIn URL of the person to search
     */
    linkedinUrl?: string | undefined;
    /**
     * The name of the person to search
     */
    name?: string | undefined;
    /**
     * The twitter handle of the person to search
     */
    twitter?: string | undefined;
};

/** @internal */
export const ListEnrichPeopleRequest$inboundSchema: z.ZodType<
    ListEnrichPeopleRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        company_name: z.string().optional(),
        connection_id: z.string(),
        email: z.string().optional(),
        linkedin_url: z.string().optional(),
        name: z.string().optional(),
        twitter: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            company_name: "companyName",
            connection_id: "connectionId",
            linkedin_url: "linkedinUrl",
        });
    });

/** @internal */
export type ListEnrichPeopleRequest$Outbound = {
    company_name?: string | undefined;
    connection_id: string;
    email?: string | undefined;
    linkedin_url?: string | undefined;
    name?: string | undefined;
    twitter?: string | undefined;
};

/** @internal */
export const ListEnrichPeopleRequest$outboundSchema: z.ZodType<
    ListEnrichPeopleRequest$Outbound,
    z.ZodTypeDef,
    ListEnrichPeopleRequest
> = z
    .object({
        companyName: z.string().optional(),
        connectionId: z.string(),
        email: z.string().optional(),
        linkedinUrl: z.string().optional(),
        name: z.string().optional(),
        twitter: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            companyName: "company_name",
            connectionId: "connection_id",
            linkedinUrl: "linkedin_url",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListEnrichPeopleRequest$ {
    /** @deprecated use `ListEnrichPeopleRequest$inboundSchema` instead. */
    export const inboundSchema = ListEnrichPeopleRequest$inboundSchema;
    /** @deprecated use `ListEnrichPeopleRequest$outboundSchema` instead. */
    export const outboundSchema = ListEnrichPeopleRequest$outboundSchema;
    /** @deprecated use `ListEnrichPeopleRequest$Outbound` instead. */
    export type Outbound = ListEnrichPeopleRequest$Outbound;
}
