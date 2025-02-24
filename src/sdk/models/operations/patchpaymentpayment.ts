/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type PatchPaymentPaymentRequest = {
  paymentPayment: shared.PaymentPayment;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the Payment
   */
  id: string;
};

/** @internal */
export const PatchPaymentPaymentRequest$inboundSchema: z.ZodType<
  PatchPaymentPaymentRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  PaymentPayment: shared.PaymentPayment$inboundSchema,
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "PaymentPayment": "paymentPayment",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type PatchPaymentPaymentRequest$Outbound = {
  PaymentPayment: shared.PaymentPayment$Outbound;
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const PatchPaymentPaymentRequest$outboundSchema: z.ZodType<
  PatchPaymentPaymentRequest$Outbound,
  z.ZodTypeDef,
  PatchPaymentPaymentRequest
> = z.object({
  paymentPayment: shared.PaymentPayment$outboundSchema,
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    paymentPayment: "PaymentPayment",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchPaymentPaymentRequest$ {
  /** @deprecated use `PatchPaymentPaymentRequest$inboundSchema` instead. */
  export const inboundSchema = PatchPaymentPaymentRequest$inboundSchema;
  /** @deprecated use `PatchPaymentPaymentRequest$outboundSchema` instead. */
  export const outboundSchema = PatchPaymentPaymentRequest$outboundSchema;
  /** @deprecated use `PatchPaymentPaymentRequest$Outbound` instead. */
  export type Outbound = PatchPaymentPaymentRequest$Outbound;
}

export function patchPaymentPaymentRequestToJSON(
  patchPaymentPaymentRequest: PatchPaymentPaymentRequest,
): string {
  return JSON.stringify(
    PatchPaymentPaymentRequest$outboundSchema.parse(patchPaymentPaymentRequest),
  );
}

export function patchPaymentPaymentRequestFromJSON(
  jsonString: string,
): SafeParseResult<PatchPaymentPaymentRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchPaymentPaymentRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchPaymentPaymentRequest' from JSON`,
  );
}
