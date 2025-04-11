/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  PropertyCommerceLocationAddress,
  PropertyCommerceLocationAddress$inboundSchema,
  PropertyCommerceLocationAddress$Outbound,
  PropertyCommerceLocationAddress$outboundSchema,
} from "./propertycommercelocationaddress.js";

export type CommerceLocation = {
  address?: PropertyCommerceLocationAddress | undefined;
  createdAt?: Date | undefined;
  description?: string | undefined;
  id?: string | undefined;
  isActive?: boolean | undefined;
  name: string;
  raw?: { [k: string]: any } | undefined;
  updatedAt?: Date | undefined;
};

/** @internal */
export const CommerceLocation$inboundSchema: z.ZodType<
  CommerceLocation,
  z.ZodTypeDef,
  unknown
> = z.object({
  address: PropertyCommerceLocationAddress$inboundSchema.optional(),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  description: z.string().optional(),
  id: z.string().optional(),
  is_active: z.boolean().optional(),
  name: z.string(),
  raw: z.record(z.any()).optional(),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "is_active": "isActive",
    "updated_at": "updatedAt",
  });
});

/** @internal */
export type CommerceLocation$Outbound = {
  address?: PropertyCommerceLocationAddress$Outbound | undefined;
  created_at?: string | undefined;
  description?: string | undefined;
  id?: string | undefined;
  is_active?: boolean | undefined;
  name: string;
  raw?: { [k: string]: any } | undefined;
  updated_at?: string | undefined;
};

/** @internal */
export const CommerceLocation$outboundSchema: z.ZodType<
  CommerceLocation$Outbound,
  z.ZodTypeDef,
  CommerceLocation
> = z.object({
  address: PropertyCommerceLocationAddress$outboundSchema.optional(),
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  description: z.string().optional(),
  id: z.string().optional(),
  isActive: z.boolean().optional(),
  name: z.string(),
  raw: z.record(z.any()).optional(),
  updatedAt: z.date().transform(v => v.toISOString()).optional(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    isActive: "is_active",
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CommerceLocation$ {
  /** @deprecated use `CommerceLocation$inboundSchema` instead. */
  export const inboundSchema = CommerceLocation$inboundSchema;
  /** @deprecated use `CommerceLocation$outboundSchema` instead. */
  export const outboundSchema = CommerceLocation$outboundSchema;
  /** @deprecated use `CommerceLocation$Outbound` instead. */
  export type Outbound = CommerceLocation$Outbound;
}

export function commerceLocationToJSON(
  commerceLocation: CommerceLocation,
): string {
  return JSON.stringify(
    CommerceLocation$outboundSchema.parse(commerceLocation),
  );
}

export function commerceLocationFromJSON(
  jsonString: string,
): SafeParseResult<CommerceLocation, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CommerceLocation$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CommerceLocation' from JSON`,
  );
}
