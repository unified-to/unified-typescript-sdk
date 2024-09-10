/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type UpdateAccountingInvoiceRequest = {
  accountingInvoice?: shared.AccountingInvoice | undefined;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the Invoice
   */
  id: string;
};

/** @internal */
export const UpdateAccountingInvoiceRequest$inboundSchema: z.ZodType<
  UpdateAccountingInvoiceRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  AccountingInvoice: shared.AccountingInvoice$inboundSchema.optional(),
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "AccountingInvoice": "accountingInvoice",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type UpdateAccountingInvoiceRequest$Outbound = {
  AccountingInvoice?: shared.AccountingInvoice$Outbound | undefined;
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const UpdateAccountingInvoiceRequest$outboundSchema: z.ZodType<
  UpdateAccountingInvoiceRequest$Outbound,
  z.ZodTypeDef,
  UpdateAccountingInvoiceRequest
> = z.object({
  accountingInvoice: shared.AccountingInvoice$outboundSchema.optional(),
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
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
export namespace UpdateAccountingInvoiceRequest$ {
  /** @deprecated use `UpdateAccountingInvoiceRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateAccountingInvoiceRequest$inboundSchema;
  /** @deprecated use `UpdateAccountingInvoiceRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateAccountingInvoiceRequest$outboundSchema;
  /** @deprecated use `UpdateAccountingInvoiceRequest$Outbound` instead. */
  export type Outbound = UpdateAccountingInvoiceRequest$Outbound;
}
