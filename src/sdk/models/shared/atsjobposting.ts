/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  PropertyAtsJobPostingAddress,
  PropertyAtsJobPostingAddress$inboundSchema,
  PropertyAtsJobPostingAddress$Outbound,
  PropertyAtsJobPostingAddress$outboundSchema,
} from "./propertyatsjobpostingaddress.js";

export type AtsJobPosting = {
  /**
   * job-post-specific address
   */
  address?: PropertyAtsJobPostingAddress | undefined;
  createdAt?: Date | undefined;
  description?: string | undefined;
  id?: string | undefined;
  isActive?: boolean | undefined;
  location?: string | undefined;
  name?: string | undefined;
  postingUrl?: string | undefined;
  updatedAt?: Date | undefined;
};

/** @internal */
export const AtsJobPosting$inboundSchema: z.ZodType<
  AtsJobPosting,
  z.ZodTypeDef,
  unknown
> = z.object({
  address: PropertyAtsJobPostingAddress$inboundSchema.optional(),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  description: z.string().optional(),
  id: z.string().optional(),
  is_active: z.boolean().optional(),
  location: z.string().optional(),
  name: z.string().optional(),
  posting_url: z.string().optional(),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "is_active": "isActive",
    "posting_url": "postingUrl",
    "updated_at": "updatedAt",
  });
});

/** @internal */
export type AtsJobPosting$Outbound = {
  address?: PropertyAtsJobPostingAddress$Outbound | undefined;
  created_at?: string | undefined;
  description?: string | undefined;
  id?: string | undefined;
  is_active?: boolean | undefined;
  location?: string | undefined;
  name?: string | undefined;
  posting_url?: string | undefined;
  updated_at?: string | undefined;
};

/** @internal */
export const AtsJobPosting$outboundSchema: z.ZodType<
  AtsJobPosting$Outbound,
  z.ZodTypeDef,
  AtsJobPosting
> = z.object({
  address: PropertyAtsJobPostingAddress$outboundSchema.optional(),
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  description: z.string().optional(),
  id: z.string().optional(),
  isActive: z.boolean().optional(),
  location: z.string().optional(),
  name: z.string().optional(),
  postingUrl: z.string().optional(),
  updatedAt: z.date().transform(v => v.toISOString()).optional(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    isActive: "is_active",
    postingUrl: "posting_url",
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsJobPosting$ {
  /** @deprecated use `AtsJobPosting$inboundSchema` instead. */
  export const inboundSchema = AtsJobPosting$inboundSchema;
  /** @deprecated use `AtsJobPosting$outboundSchema` instead. */
  export const outboundSchema = AtsJobPosting$outboundSchema;
  /** @deprecated use `AtsJobPosting$Outbound` instead. */
  export type Outbound = AtsJobPosting$Outbound;
}

export function atsJobPostingToJSON(atsJobPosting: AtsJobPosting): string {
  return JSON.stringify(AtsJobPosting$outboundSchema.parse(atsJobPosting));
}

export function atsJobPostingFromJSON(
  jsonString: string,
): SafeParseResult<AtsJobPosting, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AtsJobPosting$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsJobPosting' from JSON`,
  );
}
