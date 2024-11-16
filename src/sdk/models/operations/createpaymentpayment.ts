/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type CreatePaymentPaymentRequest = {
  paymentPayment?: shared.PaymentPayment | undefined;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
};

/** @internal */
export const CreatePaymentPaymentRequest$inboundSchema: z.ZodType<
  CreatePaymentPaymentRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  PaymentPayment: shared.PaymentPayment$inboundSchema.optional(),
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "PaymentPayment": "paymentPayment",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type CreatePaymentPaymentRequest$Outbound = {
  PaymentPayment?: shared.PaymentPayment$Outbound | undefined;
  connection_id: string;
  fields?: Array<string> | undefined;
};

/** @internal */
export const CreatePaymentPaymentRequest$outboundSchema: z.ZodType<
  CreatePaymentPaymentRequest$Outbound,
  z.ZodTypeDef,
  CreatePaymentPaymentRequest
> = z.object({
  paymentPayment: shared.PaymentPayment$outboundSchema.optional(),
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
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
export namespace CreatePaymentPaymentRequest$ {
  /** @deprecated use `CreatePaymentPaymentRequest$inboundSchema` instead. */
  export const inboundSchema = CreatePaymentPaymentRequest$inboundSchema;
  /** @deprecated use `CreatePaymentPaymentRequest$outboundSchema` instead. */
  export const outboundSchema = CreatePaymentPaymentRequest$outboundSchema;
  /** @deprecated use `CreatePaymentPaymentRequest$Outbound` instead. */
  export type Outbound = CreatePaymentPaymentRequest$Outbound;
}

export function createPaymentPaymentRequestToJSON(
  createPaymentPaymentRequest: CreatePaymentPaymentRequest,
): string {
  return JSON.stringify(
    CreatePaymentPaymentRequest$outboundSchema.parse(
      createPaymentPaymentRequest,
    ),
  );
}

export function createPaymentPaymentRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreatePaymentPaymentRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreatePaymentPaymentRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreatePaymentPaymentRequest' from JSON`,
  );
}
