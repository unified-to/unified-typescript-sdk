/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type PatchAccountingContactRequest = {
  accountingContact?: shared.AccountingContact | undefined;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the Contact
   */
  id: string;
};

/** @internal */
export const PatchAccountingContactRequest$inboundSchema: z.ZodType<
  PatchAccountingContactRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  AccountingContact: shared.AccountingContact$inboundSchema.optional(),
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "AccountingContact": "accountingContact",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type PatchAccountingContactRequest$Outbound = {
  AccountingContact?: shared.AccountingContact$Outbound | undefined;
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const PatchAccountingContactRequest$outboundSchema: z.ZodType<
  PatchAccountingContactRequest$Outbound,
  z.ZodTypeDef,
  PatchAccountingContactRequest
> = z.object({
  accountingContact: shared.AccountingContact$outboundSchema.optional(),
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    accountingContact: "AccountingContact",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchAccountingContactRequest$ {
  /** @deprecated use `PatchAccountingContactRequest$inboundSchema` instead. */
  export const inboundSchema = PatchAccountingContactRequest$inboundSchema;
  /** @deprecated use `PatchAccountingContactRequest$outboundSchema` instead. */
  export const outboundSchema = PatchAccountingContactRequest$outboundSchema;
  /** @deprecated use `PatchAccountingContactRequest$Outbound` instead. */
  export type Outbound = PatchAccountingContactRequest$Outbound;
}
