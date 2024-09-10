/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type PropertyHrisEmployeeAddress = {
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
export const PropertyHrisEmployeeAddress$inboundSchema: z.ZodType<
  PropertyHrisEmployeeAddress,
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
export type PropertyHrisEmployeeAddress$Outbound = {
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
export const PropertyHrisEmployeeAddress$outboundSchema: z.ZodType<
  PropertyHrisEmployeeAddress$Outbound,
  z.ZodTypeDef,
  PropertyHrisEmployeeAddress
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
export namespace PropertyHrisEmployeeAddress$ {
  /** @deprecated use `PropertyHrisEmployeeAddress$inboundSchema` instead. */
  export const inboundSchema = PropertyHrisEmployeeAddress$inboundSchema;
  /** @deprecated use `PropertyHrisEmployeeAddress$outboundSchema` instead. */
  export const outboundSchema = PropertyHrisEmployeeAddress$outboundSchema;
  /** @deprecated use `PropertyHrisEmployeeAddress$Outbound` instead. */
  export type Outbound = PropertyHrisEmployeeAddress$Outbound;
}
