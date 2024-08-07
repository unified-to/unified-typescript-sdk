/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import {
    CrmEmail,
    CrmEmail$inboundSchema,
    CrmEmail$Outbound,
    CrmEmail$outboundSchema,
} from "./crmemail.js";
import {
    CrmTelephone,
    CrmTelephone$inboundSchema,
    CrmTelephone$Outbound,
    CrmTelephone$outboundSchema,
} from "./crmtelephone.js";
import {
    PropertyCrmContactAddress,
    PropertyCrmContactAddress$inboundSchema,
    PropertyCrmContactAddress$Outbound,
    PropertyCrmContactAddress$outboundSchema,
} from "./propertycrmcontactaddress.js";
import * as z from "zod";

/**
 * A contact represents a person that optionally is associated with a deal and/or a company
 */
export type CrmContact = {
    address?: PropertyCrmContactAddress | undefined;
    company?: string | undefined;
    /**
     * An array of company IDs associated with this contact
     */
    companyIds?: Array<string> | undefined;
    createdAt?: Date | undefined;
    /**
     * An array of deal IDs associated with this contact
     */
    dealIds?: Array<string> | undefined;
    /**
     * An array of email addresses for this contact
     */
    emails?: Array<CrmEmail> | undefined;
    id?: string | undefined;
    name?: string | undefined;
    /**
     * The raw data returned by the integration for this contact
     */
    raw?: { [k: string]: any } | undefined;
    /**
     * An array of telephones for this contact
     */
    telephones?: Array<CrmTelephone> | undefined;
    title?: string | undefined;
    updatedAt?: Date | undefined;
    userId?: string | undefined;
};

/** @internal */
export const CrmContact$inboundSchema: z.ZodType<CrmContact, z.ZodTypeDef, unknown> = z
    .object({
        address: PropertyCrmContactAddress$inboundSchema.optional(),
        company: z.string().optional(),
        company_ids: z.array(z.string()).optional(),
        created_at: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v))
            .optional(),
        deal_ids: z.array(z.string()).optional(),
        emails: z.array(CrmEmail$inboundSchema).optional(),
        id: z.string().optional(),
        name: z.string().optional(),
        raw: z.record(z.any()).optional(),
        telephones: z.array(CrmTelephone$inboundSchema).optional(),
        title: z.string().optional(),
        updated_at: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v))
            .optional(),
        user_id: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            company_ids: "companyIds",
            created_at: "createdAt",
            deal_ids: "dealIds",
            updated_at: "updatedAt",
            user_id: "userId",
        });
    });

/** @internal */
export type CrmContact$Outbound = {
    address?: PropertyCrmContactAddress$Outbound | undefined;
    company?: string | undefined;
    company_ids?: Array<string> | undefined;
    created_at?: string | undefined;
    deal_ids?: Array<string> | undefined;
    emails?: Array<CrmEmail$Outbound> | undefined;
    id?: string | undefined;
    name?: string | undefined;
    raw?: { [k: string]: any } | undefined;
    telephones?: Array<CrmTelephone$Outbound> | undefined;
    title?: string | undefined;
    updated_at?: string | undefined;
    user_id?: string | undefined;
};

/** @internal */
export const CrmContact$outboundSchema: z.ZodType<CrmContact$Outbound, z.ZodTypeDef, CrmContact> = z
    .object({
        address: PropertyCrmContactAddress$outboundSchema.optional(),
        company: z.string().optional(),
        companyIds: z.array(z.string()).optional(),
        createdAt: z
            .date()
            .transform((v) => v.toISOString())
            .optional(),
        dealIds: z.array(z.string()).optional(),
        emails: z.array(CrmEmail$outboundSchema).optional(),
        id: z.string().optional(),
        name: z.string().optional(),
        raw: z.record(z.any()).optional(),
        telephones: z.array(CrmTelephone$outboundSchema).optional(),
        title: z.string().optional(),
        updatedAt: z
            .date()
            .transform((v) => v.toISOString())
            .optional(),
        userId: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            companyIds: "company_ids",
            createdAt: "created_at",
            dealIds: "deal_ids",
            updatedAt: "updated_at",
            userId: "user_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmContact$ {
    /** @deprecated use `CrmContact$inboundSchema` instead. */
    export const inboundSchema = CrmContact$inboundSchema;
    /** @deprecated use `CrmContact$outboundSchema` instead. */
    export const outboundSchema = CrmContact$outboundSchema;
    /** @deprecated use `CrmContact$Outbound` instead. */
    export type Outbound = CrmContact$Outbound;
}
