/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  PropertyHrisCompanyAddress,
  PropertyHrisCompanyAddress$inboundSchema,
  PropertyHrisCompanyAddress$Outbound,
  PropertyHrisCompanyAddress$outboundSchema,
} from "./propertyhriscompanyaddress.js";

export type HrisCompanyRaw = {};

export type HrisCompany = {
  address?: PropertyHrisCompanyAddress | undefined;
  createdAt?: Date | undefined;
  id?: string | undefined;
  legalName?: string | undefined;
  name?: string | undefined;
  raw?: HrisCompanyRaw | undefined;
  updatedAt?: Date | undefined;
};

/** @internal */
export const HrisCompanyRaw$inboundSchema: z.ZodType<
  HrisCompanyRaw,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type HrisCompanyRaw$Outbound = {};

/** @internal */
export const HrisCompanyRaw$outboundSchema: z.ZodType<
  HrisCompanyRaw$Outbound,
  z.ZodTypeDef,
  HrisCompanyRaw
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisCompanyRaw$ {
  /** @deprecated use `HrisCompanyRaw$inboundSchema` instead. */
  export const inboundSchema = HrisCompanyRaw$inboundSchema;
  /** @deprecated use `HrisCompanyRaw$outboundSchema` instead. */
  export const outboundSchema = HrisCompanyRaw$outboundSchema;
  /** @deprecated use `HrisCompanyRaw$Outbound` instead. */
  export type Outbound = HrisCompanyRaw$Outbound;
}

export function hrisCompanyRawToJSON(hrisCompanyRaw: HrisCompanyRaw): string {
  return JSON.stringify(HrisCompanyRaw$outboundSchema.parse(hrisCompanyRaw));
}

export function hrisCompanyRawFromJSON(
  jsonString: string,
): SafeParseResult<HrisCompanyRaw, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisCompanyRaw$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisCompanyRaw' from JSON`,
  );
}

/** @internal */
export const HrisCompany$inboundSchema: z.ZodType<
  HrisCompany,
  z.ZodTypeDef,
  unknown
> = z.object({
  address: PropertyHrisCompanyAddress$inboundSchema.optional(),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  id: z.string().optional(),
  legal_name: z.string().optional(),
  name: z.string().optional(),
  raw: z.lazy(() => HrisCompanyRaw$inboundSchema).optional(),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "legal_name": "legalName",
    "updated_at": "updatedAt",
  });
});

/** @internal */
export type HrisCompany$Outbound = {
  address?: PropertyHrisCompanyAddress$Outbound | undefined;
  created_at?: string | undefined;
  id?: string | undefined;
  legal_name?: string | undefined;
  name?: string | undefined;
  raw?: HrisCompanyRaw$Outbound | undefined;
  updated_at?: string | undefined;
};

/** @internal */
export const HrisCompany$outboundSchema: z.ZodType<
  HrisCompany$Outbound,
  z.ZodTypeDef,
  HrisCompany
> = z.object({
  address: PropertyHrisCompanyAddress$outboundSchema.optional(),
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  id: z.string().optional(),
  legalName: z.string().optional(),
  name: z.string().optional(),
  raw: z.lazy(() => HrisCompanyRaw$outboundSchema).optional(),
  updatedAt: z.date().transform(v => v.toISOString()).optional(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    legalName: "legal_name",
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisCompany$ {
  /** @deprecated use `HrisCompany$inboundSchema` instead. */
  export const inboundSchema = HrisCompany$inboundSchema;
  /** @deprecated use `HrisCompany$outboundSchema` instead. */
  export const outboundSchema = HrisCompany$outboundSchema;
  /** @deprecated use `HrisCompany$Outbound` instead. */
  export type Outbound = HrisCompany$Outbound;
}

export function hrisCompanyToJSON(hrisCompany: HrisCompany): string {
  return JSON.stringify(HrisCompany$outboundSchema.parse(hrisCompany));
}

export function hrisCompanyFromJSON(
  jsonString: string,
): SafeParseResult<HrisCompany, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisCompany$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisCompany' from JSON`,
  );
}
