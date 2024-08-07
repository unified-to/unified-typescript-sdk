/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import {
    PropertyAccountingOrganizationAddress,
    PropertyAccountingOrganizationAddress$inboundSchema,
    PropertyAccountingOrganizationAddress$Outbound,
    PropertyAccountingOrganizationAddress$outboundSchema,
} from "./propertyaccountingorganizationaddress.js";
import * as z from "zod";

export type AccountingOrganization = {
    address?: PropertyAccountingOrganizationAddress | undefined;
    createdAt?: Date | undefined;
    currency?: string | undefined;
    fiscalYearEndMonth?: number | undefined;
    id?: string | undefined;
    legalName?: string | undefined;
    name: string;
    organizationCode?: string | undefined;
    raw?: { [k: string]: any } | undefined;
    taxNumber?: string | undefined;
    timezone?: string | undefined;
    updatedAt?: Date | undefined;
    website?: string | undefined;
};

/** @internal */
export const AccountingOrganization$inboundSchema: z.ZodType<
    AccountingOrganization,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        address: PropertyAccountingOrganizationAddress$inboundSchema.optional(),
        created_at: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v))
            .optional(),
        currency: z.string().optional(),
        fiscal_year_end_month: z.number().optional(),
        id: z.string().optional(),
        legal_name: z.string().optional(),
        name: z.string(),
        organization_code: z.string().optional(),
        raw: z.record(z.any()).optional(),
        tax_number: z.string().optional(),
        timezone: z.string().optional(),
        updated_at: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v))
            .optional(),
        website: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            created_at: "createdAt",
            fiscal_year_end_month: "fiscalYearEndMonth",
            legal_name: "legalName",
            organization_code: "organizationCode",
            tax_number: "taxNumber",
            updated_at: "updatedAt",
        });
    });

/** @internal */
export type AccountingOrganization$Outbound = {
    address?: PropertyAccountingOrganizationAddress$Outbound | undefined;
    created_at?: string | undefined;
    currency?: string | undefined;
    fiscal_year_end_month?: number | undefined;
    id?: string | undefined;
    legal_name?: string | undefined;
    name: string;
    organization_code?: string | undefined;
    raw?: { [k: string]: any } | undefined;
    tax_number?: string | undefined;
    timezone?: string | undefined;
    updated_at?: string | undefined;
    website?: string | undefined;
};

/** @internal */
export const AccountingOrganization$outboundSchema: z.ZodType<
    AccountingOrganization$Outbound,
    z.ZodTypeDef,
    AccountingOrganization
> = z
    .object({
        address: PropertyAccountingOrganizationAddress$outboundSchema.optional(),
        createdAt: z
            .date()
            .transform((v) => v.toISOString())
            .optional(),
        currency: z.string().optional(),
        fiscalYearEndMonth: z.number().optional(),
        id: z.string().optional(),
        legalName: z.string().optional(),
        name: z.string(),
        organizationCode: z.string().optional(),
        raw: z.record(z.any()).optional(),
        taxNumber: z.string().optional(),
        timezone: z.string().optional(),
        updatedAt: z
            .date()
            .transform((v) => v.toISOString())
            .optional(),
        website: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            createdAt: "created_at",
            fiscalYearEndMonth: "fiscal_year_end_month",
            legalName: "legal_name",
            organizationCode: "organization_code",
            taxNumber: "tax_number",
            updatedAt: "updated_at",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingOrganization$ {
    /** @deprecated use `AccountingOrganization$inboundSchema` instead. */
    export const inboundSchema = AccountingOrganization$inboundSchema;
    /** @deprecated use `AccountingOrganization$outboundSchema` instead. */
    export const outboundSchema = AccountingOrganization$outboundSchema;
    /** @deprecated use `AccountingOrganization$Outbound` instead. */
    export type Outbound = AccountingOrganization$Outbound;
}
