/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PropertyAccountingOrderShippingAddress = {
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
export const PropertyAccountingOrderShippingAddress$inboundSchema: z.ZodType<
  PropertyAccountingOrderShippingAddress,
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
export type PropertyAccountingOrderShippingAddress$Outbound = {
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
export const PropertyAccountingOrderShippingAddress$outboundSchema: z.ZodType<
  PropertyAccountingOrderShippingAddress$Outbound,
  z.ZodTypeDef,
  PropertyAccountingOrderShippingAddress
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
export namespace PropertyAccountingOrderShippingAddress$ {
  /** @deprecated use `PropertyAccountingOrderShippingAddress$inboundSchema` instead. */
  export const inboundSchema =
    PropertyAccountingOrderShippingAddress$inboundSchema;
  /** @deprecated use `PropertyAccountingOrderShippingAddress$outboundSchema` instead. */
  export const outboundSchema =
    PropertyAccountingOrderShippingAddress$outboundSchema;
  /** @deprecated use `PropertyAccountingOrderShippingAddress$Outbound` instead. */
  export type Outbound = PropertyAccountingOrderShippingAddress$Outbound;
}

export function propertyAccountingOrderShippingAddressToJSON(
  propertyAccountingOrderShippingAddress:
    PropertyAccountingOrderShippingAddress,
): string {
  return JSON.stringify(
    PropertyAccountingOrderShippingAddress$outboundSchema.parse(
      propertyAccountingOrderShippingAddress,
    ),
  );
}

export function propertyAccountingOrderShippingAddressFromJSON(
  jsonString: string,
): SafeParseResult<PropertyAccountingOrderShippingAddress, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      PropertyAccountingOrderShippingAddress$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PropertyAccountingOrderShippingAddress' from JSON`,
  );
}
