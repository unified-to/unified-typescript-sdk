/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type UpdatePaymentPaymentRequest = {
  paymentPayment?: shared.PaymentPayment | undefined;
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
export const UpdatePaymentPaymentRequest$inboundSchema: z.ZodType<
  UpdatePaymentPaymentRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  PaymentPayment: shared.PaymentPayment$inboundSchema.optional(),
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
export type UpdatePaymentPaymentRequest$Outbound = {
  PaymentPayment?: shared.PaymentPayment$Outbound | undefined;
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const UpdatePaymentPaymentRequest$outboundSchema: z.ZodType<
  UpdatePaymentPaymentRequest$Outbound,
  z.ZodTypeDef,
  UpdatePaymentPaymentRequest
> = z.object({
  paymentPayment: shared.PaymentPayment$outboundSchema.optional(),
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
export namespace UpdatePaymentPaymentRequest$ {
  /** @deprecated use `UpdatePaymentPaymentRequest$inboundSchema` instead. */
  export const inboundSchema = UpdatePaymentPaymentRequest$inboundSchema;
  /** @deprecated use `UpdatePaymentPaymentRequest$outboundSchema` instead. */
  export const outboundSchema = UpdatePaymentPaymentRequest$outboundSchema;
  /** @deprecated use `UpdatePaymentPaymentRequest$Outbound` instead. */
  export type Outbound = UpdatePaymentPaymentRequest$Outbound;
}
