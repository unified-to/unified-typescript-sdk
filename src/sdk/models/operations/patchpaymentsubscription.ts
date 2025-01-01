/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type PatchPaymentSubscriptionRequest = {
  paymentSubscription?: shared.PaymentSubscription | undefined;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the Subscription
   */
  id: string;
};

/** @internal */
export const PatchPaymentSubscriptionRequest$inboundSchema: z.ZodType<
  PatchPaymentSubscriptionRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  PaymentSubscription: shared.PaymentSubscription$inboundSchema.optional(),
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "PaymentSubscription": "paymentSubscription",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type PatchPaymentSubscriptionRequest$Outbound = {
  PaymentSubscription?: shared.PaymentSubscription$Outbound | undefined;
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const PatchPaymentSubscriptionRequest$outboundSchema: z.ZodType<
  PatchPaymentSubscriptionRequest$Outbound,
  z.ZodTypeDef,
  PatchPaymentSubscriptionRequest
> = z.object({
  paymentSubscription: shared.PaymentSubscription$outboundSchema.optional(),
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    paymentSubscription: "PaymentSubscription",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchPaymentSubscriptionRequest$ {
  /** @deprecated use `PatchPaymentSubscriptionRequest$inboundSchema` instead. */
  export const inboundSchema = PatchPaymentSubscriptionRequest$inboundSchema;
  /** @deprecated use `PatchPaymentSubscriptionRequest$outboundSchema` instead. */
  export const outboundSchema = PatchPaymentSubscriptionRequest$outboundSchema;
  /** @deprecated use `PatchPaymentSubscriptionRequest$Outbound` instead. */
  export type Outbound = PatchPaymentSubscriptionRequest$Outbound;
}

export function patchPaymentSubscriptionRequestToJSON(
  patchPaymentSubscriptionRequest: PatchPaymentSubscriptionRequest,
): string {
  return JSON.stringify(
    PatchPaymentSubscriptionRequest$outboundSchema.parse(
      patchPaymentSubscriptionRequest,
    ),
  );
}

export function patchPaymentSubscriptionRequestFromJSON(
  jsonString: string,
): SafeParseResult<PatchPaymentSubscriptionRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchPaymentSubscriptionRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchPaymentSubscriptionRequest' from JSON`,
  );
}
