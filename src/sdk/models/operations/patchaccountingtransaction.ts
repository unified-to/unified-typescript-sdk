/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type PatchAccountingTransactionRequest = {
  accountingTransaction?: shared.AccountingTransaction | undefined;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * ID of the Transaction
   */
  id: string;
};

/** @internal */
export const PatchAccountingTransactionRequest$inboundSchema: z.ZodType<
  PatchAccountingTransactionRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  AccountingTransaction: shared.AccountingTransaction$inboundSchema.optional(),
  connection_id: z.string(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "AccountingTransaction": "accountingTransaction",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type PatchAccountingTransactionRequest$Outbound = {
  AccountingTransaction?: shared.AccountingTransaction$Outbound | undefined;
  connection_id: string;
  id: string;
};

/** @internal */
export const PatchAccountingTransactionRequest$outboundSchema: z.ZodType<
  PatchAccountingTransactionRequest$Outbound,
  z.ZodTypeDef,
  PatchAccountingTransactionRequest
> = z.object({
  accountingTransaction: shared.AccountingTransaction$outboundSchema.optional(),
  connectionId: z.string(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    accountingTransaction: "AccountingTransaction",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchAccountingTransactionRequest$ {
  /** @deprecated use `PatchAccountingTransactionRequest$inboundSchema` instead. */
  export const inboundSchema = PatchAccountingTransactionRequest$inboundSchema;
  /** @deprecated use `PatchAccountingTransactionRequest$outboundSchema` instead. */
  export const outboundSchema =
    PatchAccountingTransactionRequest$outboundSchema;
  /** @deprecated use `PatchAccountingTransactionRequest$Outbound` instead. */
  export type Outbound = PatchAccountingTransactionRequest$Outbound;
}
