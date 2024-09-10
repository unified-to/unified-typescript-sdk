/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type PatchAccountingInvoiceRequest = {
  accountingInvoice?: shared.AccountingInvoice | undefined;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * ID of the Invoice
   */
  id: string;
};

/** @internal */
export const PatchAccountingInvoiceRequest$inboundSchema: z.ZodType<
  PatchAccountingInvoiceRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  AccountingInvoice: shared.AccountingInvoice$inboundSchema.optional(),
  connection_id: z.string(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "AccountingInvoice": "accountingInvoice",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type PatchAccountingInvoiceRequest$Outbound = {
  AccountingInvoice?: shared.AccountingInvoice$Outbound | undefined;
  connection_id: string;
  id: string;
};

/** @internal */
export const PatchAccountingInvoiceRequest$outboundSchema: z.ZodType<
  PatchAccountingInvoiceRequest$Outbound,
  z.ZodTypeDef,
  PatchAccountingInvoiceRequest
> = z.object({
  accountingInvoice: shared.AccountingInvoice$outboundSchema.optional(),
  connectionId: z.string(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    accountingInvoice: "AccountingInvoice",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchAccountingInvoiceRequest$ {
  /** @deprecated use `PatchAccountingInvoiceRequest$inboundSchema` instead. */
  export const inboundSchema = PatchAccountingInvoiceRequest$inboundSchema;
  /** @deprecated use `PatchAccountingInvoiceRequest$outboundSchema` instead. */
  export const outboundSchema = PatchAccountingInvoiceRequest$outboundSchema;
  /** @deprecated use `PatchAccountingInvoiceRequest$Outbound` instead. */
  export type Outbound = PatchAccountingInvoiceRequest$Outbound;
}
