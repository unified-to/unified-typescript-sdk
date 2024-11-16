/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PropertyAtsCompanyAddress = {
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
export const PropertyAtsCompanyAddress$inboundSchema: z.ZodType<
  PropertyAtsCompanyAddress,
  z.ZodTypeDef,
  unknown
> = z.object({
  address1: z.string().optional(),
  address2: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
  country_code: z.string().optional(),
  postal_code: z.string().optional(),
  region: z.string().optional(),
  region_code: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "country_code": "countryCode",
    "postal_code": "postalCode",
    "region_code": "regionCode",
  });
});

/** @internal */
export type PropertyAtsCompanyAddress$Outbound = {
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
export const PropertyAtsCompanyAddress$outboundSchema: z.ZodType<
  PropertyAtsCompanyAddress$Outbound,
  z.ZodTypeDef,
  PropertyAtsCompanyAddress
> = z.object({
  address1: z.string().optional(),
  address2: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
  countryCode: z.string().optional(),
  postalCode: z.string().optional(),
  region: z.string().optional(),
  regionCode: z.string().optional(),
}).transform((v) => {
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
export namespace PropertyAtsCompanyAddress$ {
  /** @deprecated use `PropertyAtsCompanyAddress$inboundSchema` instead. */
  export const inboundSchema = PropertyAtsCompanyAddress$inboundSchema;
  /** @deprecated use `PropertyAtsCompanyAddress$outboundSchema` instead. */
  export const outboundSchema = PropertyAtsCompanyAddress$outboundSchema;
  /** @deprecated use `PropertyAtsCompanyAddress$Outbound` instead. */
  export type Outbound = PropertyAtsCompanyAddress$Outbound;
}

export function propertyAtsCompanyAddressToJSON(
  propertyAtsCompanyAddress: PropertyAtsCompanyAddress,
): string {
  return JSON.stringify(
    PropertyAtsCompanyAddress$outboundSchema.parse(propertyAtsCompanyAddress),
  );
}

export function propertyAtsCompanyAddressFromJSON(
  jsonString: string,
): SafeParseResult<PropertyAtsCompanyAddress, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PropertyAtsCompanyAddress$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PropertyAtsCompanyAddress' from JSON`,
  );
}
