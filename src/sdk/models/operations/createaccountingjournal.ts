/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type CreateAccountingJournalRequest = {
  accountingJournal?: shared.AccountingJournal | undefined;
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
export const CreateAccountingJournalRequest$inboundSchema: z.ZodType<
  CreateAccountingJournalRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  AccountingJournal: shared.AccountingJournal$inboundSchema.optional(),
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "AccountingJournal": "accountingJournal",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type CreateAccountingJournalRequest$Outbound = {
  AccountingJournal?: shared.AccountingJournal$Outbound | undefined;
  connection_id: string;
  fields?: Array<string> | undefined;
};

/** @internal */
export const CreateAccountingJournalRequest$outboundSchema: z.ZodType<
  CreateAccountingJournalRequest$Outbound,
  z.ZodTypeDef,
  CreateAccountingJournalRequest
> = z.object({
  accountingJournal: shared.AccountingJournal$outboundSchema.optional(),
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
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
export namespace CreateAccountingJournalRequest$ {
  /** @deprecated use `CreateAccountingJournalRequest$inboundSchema` instead. */
  export const inboundSchema = CreateAccountingJournalRequest$inboundSchema;
  /** @deprecated use `CreateAccountingJournalRequest$outboundSchema` instead. */
  export const outboundSchema = CreateAccountingJournalRequest$outboundSchema;
  /** @deprecated use `CreateAccountingJournalRequest$Outbound` instead. */
  export type Outbound = CreateAccountingJournalRequest$Outbound;
}
