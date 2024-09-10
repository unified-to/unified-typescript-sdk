/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type PatchAccountingJournalRequest = {
  accountingJournal?: shared.AccountingJournal | undefined;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * ID of the Journal
   */
  id: string;
};

/** @internal */
export const PatchAccountingJournalRequest$inboundSchema: z.ZodType<
  PatchAccountingJournalRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  AccountingJournal: shared.AccountingJournal$inboundSchema.optional(),
  connection_id: z.string(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "AccountingJournal": "accountingJournal",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type PatchAccountingJournalRequest$Outbound = {
  AccountingJournal?: shared.AccountingJournal$Outbound | undefined;
  connection_id: string;
  id: string;
};

/** @internal */
export const PatchAccountingJournalRequest$outboundSchema: z.ZodType<
  PatchAccountingJournalRequest$Outbound,
  z.ZodTypeDef,
  PatchAccountingJournalRequest
> = z.object({
  accountingJournal: shared.AccountingJournal$outboundSchema.optional(),
  connectionId: z.string(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    accountingJournal: "AccountingJournal",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchAccountingJournalRequest$ {
  /** @deprecated use `PatchAccountingJournalRequest$inboundSchema` instead. */
  export const inboundSchema = PatchAccountingJournalRequest$inboundSchema;
  /** @deprecated use `PatchAccountingJournalRequest$outboundSchema` instead. */
  export const outboundSchema = PatchAccountingJournalRequest$outboundSchema;
  /** @deprecated use `PatchAccountingJournalRequest$Outbound` instead. */
  export type Outbound = PatchAccountingJournalRequest$Outbound;
}
