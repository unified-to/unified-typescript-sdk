/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type PropertyAccountingOrganizationAddress = {
    address1?: string | undefined;
    address2?: string | undefined;
    city?: string | undefined;
    country?: string | undefined;
    countryCode?: string | undefined;
    postalCode?: string | undefined;
    region?: string | undefined;
    regionCode?: string | undefined;
};

/** @internal */
export const PropertyAccountingOrganizationAddress$inboundSchema: z.ZodType<
    PropertyAccountingOrganizationAddress,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        address1: z.string().optional(),
        address2: z.string().optional(),
        city: z.string().optional(),
        country: z.string().optional(),
        country_code: z.string().optional(),
        postal_code: z.string().optional(),
        region: z.string().optional(),
        region_code: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            country_code: "countryCode",
            postal_code: "postalCode",
            region_code: "regionCode",
        });
    });

/** @internal */
export type PropertyAccountingOrganizationAddress$Outbound = {
    address1?: string | undefined;
    address2?: string | undefined;
    city?: string | undefined;
    country?: string | undefined;
    country_code?: string | undefined;
    postal_code?: string | undefined;
    region?: string | undefined;
    region_code?: string | undefined;
};

/** @internal */
export const PropertyAccountingOrganizationAddress$outboundSchema: z.ZodType<
    PropertyAccountingOrganizationAddress$Outbound,
    z.ZodTypeDef,
    PropertyAccountingOrganizationAddress
> = z
    .object({
        address1: z.string().optional(),
        address2: z.string().optional(),
        city: z.string().optional(),
        country: z.string().optional(),
        countryCode: z.string().optional(),
        postalCode: z.string().optional(),
        region: z.string().optional(),
        regionCode: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            countryCode: "country_code",
            postalCode: "postal_code",
            regionCode: "region_code",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PropertyAccountingOrganizationAddress$ {
    /** @deprecated use `PropertyAccountingOrganizationAddress$inboundSchema` instead. */
    export const inboundSchema = PropertyAccountingOrganizationAddress$inboundSchema;
    /** @deprecated use `PropertyAccountingOrganizationAddress$outboundSchema` instead. */
    export const outboundSchema = PropertyAccountingOrganizationAddress$outboundSchema;
    /** @deprecated use `PropertyAccountingOrganizationAddress$Outbound` instead. */
    export type Outbound = PropertyAccountingOrganizationAddress$Outbound;
}
