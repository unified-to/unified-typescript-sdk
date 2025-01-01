/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type UpdatePaymentSubscriptionRequest = {
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
export const UpdatePaymentSubscriptionRequest$inboundSchema: z.ZodType<
  UpdatePaymentSubscriptionRequest,
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
export type UpdatePaymentSubscriptionRequest$Outbound = {
  PaymentSubscription?: shared.PaymentSubscription$Outbound | undefined;
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const UpdatePaymentSubscriptionRequest$outboundSchema: z.ZodType<
  UpdatePaymentSubscriptionRequest$Outbound,
  z.ZodTypeDef,
  UpdatePaymentSubscriptionRequest
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
export namespace UpdatePaymentSubscriptionRequest$ {
  /** @deprecated use `UpdatePaymentSubscriptionRequest$inboundSchema` instead. */
  export const inboundSchema = UpdatePaymentSubscriptionRequest$inboundSchema;
  /** @deprecated use `UpdatePaymentSubscriptionRequest$outboundSchema` instead. */
  export const outboundSchema = UpdatePaymentSubscriptionRequest$outboundSchema;
  /** @deprecated use `UpdatePaymentSubscriptionRequest$Outbound` instead. */
  export type Outbound = UpdatePaymentSubscriptionRequest$Outbound;
}

export function updatePaymentSubscriptionRequestToJSON(
  updatePaymentSubscriptionRequest: UpdatePaymentSubscriptionRequest,
): string {
  return JSON.stringify(
    UpdatePaymentSubscriptionRequest$outboundSchema.parse(
      updatePaymentSubscriptionRequest,
    ),
  );
}

export function updatePaymentSubscriptionRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdatePaymentSubscriptionRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdatePaymentSubscriptionRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdatePaymentSubscriptionRequest' from JSON`,
  );
}
