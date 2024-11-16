/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  HrisTelephone,
  HrisTelephone$inboundSchema,
  HrisTelephone$Outbound,
  HrisTelephone$outboundSchema,
} from "./hristelephone.js";
import {
  PropertyHrisLocationAddress,
  PropertyHrisLocationAddress$inboundSchema,
  PropertyHrisLocationAddress$Outbound,
  PropertyHrisLocationAddress$outboundSchema,
} from "./propertyhrislocationaddress.js";

export type HrisLocation = {
  address?: PropertyHrisLocationAddress | undefined;
  createdAt?: Date | undefined;
  currency?: string | undefined;
  description?: string | undefined;
  externalIdentifier?: string | undefined;
  id?: string | undefined;
  isActive?: boolean | undefined;
  isHq?: boolean | undefined;
  languageLocale?: string | undefined;
  name?: string | undefined;
  parentId?: string | undefined;
  raw?: { [k: string]: any } | undefined;
  telephones?: Array<HrisTelephone> | undefined;
  timezone?: string | undefined;
  updatedAt?: Date | undefined;
};

/** @internal */
export const HrisLocation$inboundSchema: z.ZodType<
  HrisLocation,
  z.ZodTypeDef,
  unknown
> = z.object({
  address: PropertyHrisLocationAddress$inboundSchema.optional(),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  currency: z.string().optional(),
  description: z.string().optional(),
  external_identifier: z.string().optional(),
  id: z.string().optional(),
  is_active: z.boolean().optional(),
  is_hq: z.boolean().optional(),
  language_locale: z.string().optional(),
  name: z.string().optional(),
  parent_id: z.string().optional(),
  raw: z.record(z.any()).optional(),
  telephones: z.array(HrisTelephone$inboundSchema).optional(),
  timezone: z.string().optional(),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "external_identifier": "externalIdentifier",
    "is_active": "isActive",
    "is_hq": "isHq",
    "language_locale": "languageLocale",
    "parent_id": "parentId",
    "updated_at": "updatedAt",
  });
});

/** @internal */
export type HrisLocation$Outbound = {
  address?: PropertyHrisLocationAddress$Outbound | undefined;
  created_at?: string | undefined;
  currency?: string | undefined;
  description?: string | undefined;
  external_identifier?: string | undefined;
  id?: string | undefined;
  is_active?: boolean | undefined;
  is_hq?: boolean | undefined;
  language_locale?: string | undefined;
  name?: string | undefined;
  parent_id?: string | undefined;
  raw?: { [k: string]: any } | undefined;
  telephones?: Array<HrisTelephone$Outbound> | undefined;
  timezone?: string | undefined;
  updated_at?: string | undefined;
};

/** @internal */
export const HrisLocation$outboundSchema: z.ZodType<
  HrisLocation$Outbound,
  z.ZodTypeDef,
  HrisLocation
> = z.object({
  address: PropertyHrisLocationAddress$outboundSchema.optional(),
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  currency: z.string().optional(),
  description: z.string().optional(),
  externalIdentifier: z.string().optional(),
  id: z.string().optional(),
  isActive: z.boolean().optional(),
  isHq: z.boolean().optional(),
  languageLocale: z.string().optional(),
  name: z.string().optional(),
  parentId: z.string().optional(),
  raw: z.record(z.any()).optional(),
  telephones: z.array(HrisTelephone$outboundSchema).optional(),
  timezone: z.string().optional(),
  updatedAt: z.date().transform(v => v.toISOString()).optional(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    externalIdentifier: "external_identifier",
    isActive: "is_active",
    isHq: "is_hq",
    languageLocale: "language_locale",
    parentId: "parent_id",
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisLocation$ {
  /** @deprecated use `HrisLocation$inboundSchema` instead. */
  export const inboundSchema = HrisLocation$inboundSchema;
  /** @deprecated use `HrisLocation$outboundSchema` instead. */
  export const outboundSchema = HrisLocation$outboundSchema;
  /** @deprecated use `HrisLocation$Outbound` instead. */
  export type Outbound = HrisLocation$Outbound;
}

export function hrisLocationToJSON(hrisLocation: HrisLocation): string {
  return JSON.stringify(HrisLocation$outboundSchema.parse(hrisLocation));
}

export function hrisLocationFromJSON(
  jsonString: string,
): SafeParseResult<HrisLocation, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisLocation$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisLocation' from JSON`,
  );
}
