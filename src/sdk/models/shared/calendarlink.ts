/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CalendarLink = {
  createdAt?: string | undefined;
  description?: string | undefined;
  duration?: number | undefined;
  id?: string | undefined;
  isActive?: boolean | undefined;
  name?: string | undefined;
  priceAmount?: number | undefined;
  priceCurrency?: string | undefined;
  raw?: { [k: string]: any } | undefined;
  updatedAt?: string | undefined;
  url: string;
};

/** @internal */
export const CalendarLink$inboundSchema: z.ZodType<
  CalendarLink,
  z.ZodTypeDef,
  unknown
> = z.object({
  created_at: z.string().optional(),
  description: z.string().optional(),
  duration: z.number().optional(),
  id: z.string().optional(),
  is_active: z.boolean().optional(),
  name: z.string().optional(),
  price_amount: z.number().optional(),
  price_currency: z.string().optional(),
  raw: z.record(z.any()).optional(),
  updated_at: z.string().optional(),
  url: z.string(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "is_active": "isActive",
    "price_amount": "priceAmount",
    "price_currency": "priceCurrency",
    "updated_at": "updatedAt",
  });
});

/** @internal */
export type CalendarLink$Outbound = {
  created_at?: string | undefined;
  description?: string | undefined;
  duration?: number | undefined;
  id?: string | undefined;
  is_active?: boolean | undefined;
  name?: string | undefined;
  price_amount?: number | undefined;
  price_currency?: string | undefined;
  raw?: { [k: string]: any } | undefined;
  updated_at?: string | undefined;
  url: string;
};

/** @internal */
export const CalendarLink$outboundSchema: z.ZodType<
  CalendarLink$Outbound,
  z.ZodTypeDef,
  CalendarLink
> = z.object({
  createdAt: z.string().optional(),
  description: z.string().optional(),
  duration: z.number().optional(),
  id: z.string().optional(),
  isActive: z.boolean().optional(),
  name: z.string().optional(),
  priceAmount: z.number().optional(),
  priceCurrency: z.string().optional(),
  raw: z.record(z.any()).optional(),
  updatedAt: z.string().optional(),
  url: z.string(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    isActive: "is_active",
    priceAmount: "price_amount",
    priceCurrency: "price_currency",
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CalendarLink$ {
  /** @deprecated use `CalendarLink$inboundSchema` instead. */
  export const inboundSchema = CalendarLink$inboundSchema;
  /** @deprecated use `CalendarLink$outboundSchema` instead. */
  export const outboundSchema = CalendarLink$outboundSchema;
  /** @deprecated use `CalendarLink$Outbound` instead. */
  export type Outbound = CalendarLink$Outbound;
}

export function calendarLinkToJSON(calendarLink: CalendarLink): string {
  return JSON.stringify(CalendarLink$outboundSchema.parse(calendarLink));
}

export function calendarLinkFromJSON(
  jsonString: string,
): SafeParseResult<CalendarLink, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CalendarLink$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CalendarLink' from JSON`,
  );
}
