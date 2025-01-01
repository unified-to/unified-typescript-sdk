/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  PaymentLineitem,
  PaymentLineitem$inboundSchema,
  PaymentLineitem$Outbound,
  PaymentLineitem$outboundSchema,
} from "./paymentlineitem.js";

export type PaymentLink = {
  amount?: number | undefined;
  contactId?: string | undefined;
  createdAt?: Date | undefined;
  currency?: string | undefined;
  id?: string | undefined;
  isActive?: boolean | undefined;
  isChargeableNow?: boolean | undefined;
  lineitems?: Array<PaymentLineitem> | undefined;
  paymentId?: string | undefined;
  raw?: { [k: string]: any } | undefined;
  successUrl?: string | undefined;
  updatedAt?: Date | undefined;
  url?: string | undefined;
};

/** @internal */
export const PaymentLink$inboundSchema: z.ZodType<
  PaymentLink,
  z.ZodTypeDef,
  unknown
> = z.object({
  amount: z.number().optional(),
  contact_id: z.string().optional(),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  currency: z.string().optional(),
  id: z.string().optional(),
  is_active: z.boolean().optional(),
  is_chargeable_now: z.boolean().optional(),
  lineitems: z.array(PaymentLineitem$inboundSchema).optional(),
  payment_id: z.string().optional(),
  raw: z.record(z.any()).optional(),
  success_url: z.string().optional(),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  url: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "contact_id": "contactId",
    "created_at": "createdAt",
    "is_active": "isActive",
    "is_chargeable_now": "isChargeableNow",
    "payment_id": "paymentId",
    "success_url": "successUrl",
    "updated_at": "updatedAt",
  });
});

/** @internal */
export type PaymentLink$Outbound = {
  amount?: number | undefined;
  contact_id?: string | undefined;
  created_at?: string | undefined;
  currency?: string | undefined;
  id?: string | undefined;
  is_active?: boolean | undefined;
  is_chargeable_now?: boolean | undefined;
  lineitems?: Array<PaymentLineitem$Outbound> | undefined;
  payment_id?: string | undefined;
  raw?: { [k: string]: any } | undefined;
  success_url?: string | undefined;
  updated_at?: string | undefined;
  url?: string | undefined;
};

/** @internal */
export const PaymentLink$outboundSchema: z.ZodType<
  PaymentLink$Outbound,
  z.ZodTypeDef,
  PaymentLink
> = z.object({
  amount: z.number().optional(),
  contactId: z.string().optional(),
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  currency: z.string().optional(),
  id: z.string().optional(),
  isActive: z.boolean().optional(),
  isChargeableNow: z.boolean().optional(),
  lineitems: z.array(PaymentLineitem$outboundSchema).optional(),
  paymentId: z.string().optional(),
  raw: z.record(z.any()).optional(),
  successUrl: z.string().optional(),
  updatedAt: z.date().transform(v => v.toISOString()).optional(),
  url: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    contactId: "contact_id",
    createdAt: "created_at",
    isActive: "is_active",
    isChargeableNow: "is_chargeable_now",
    paymentId: "payment_id",
    successUrl: "success_url",
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentLink$ {
  /** @deprecated use `PaymentLink$inboundSchema` instead. */
  export const inboundSchema = PaymentLink$inboundSchema;
  /** @deprecated use `PaymentLink$outboundSchema` instead. */
  export const outboundSchema = PaymentLink$outboundSchema;
  /** @deprecated use `PaymentLink$Outbound` instead. */
  export type Outbound = PaymentLink$Outbound;
}

export function paymentLinkToJSON(paymentLink: PaymentLink): string {
  return JSON.stringify(PaymentLink$outboundSchema.parse(paymentLink));
}

export function paymentLinkFromJSON(
  jsonString: string,
): SafeParseResult<PaymentLink, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PaymentLink$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PaymentLink' from JSON`,
  );
}
