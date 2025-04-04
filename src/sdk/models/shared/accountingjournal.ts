/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AccountingJournalLineitem,
  AccountingJournalLineitem$inboundSchema,
  AccountingJournalLineitem$Outbound,
  AccountingJournalLineitem$outboundSchema,
} from "./accountingjournallineitem.js";

export type AccountingJournalRaw = {};

export type AccountingJournal = {
  createdAt?: Date | undefined;
  currency?: string | undefined;
  description?: string | undefined;
  id?: string | undefined;
  /**
   * new field name
   */
  lineitems?: Array<AccountingJournalLineitem> | undefined;
  postedAt?: Date | undefined;
  raw?: AccountingJournalRaw | undefined;
  reference?: string | undefined;
  taxAmount?: number | undefined;
  taxrateId?: string | undefined;
  updatedAt?: Date | undefined;
};

/** @internal */
export const AccountingJournalRaw$inboundSchema: z.ZodType<
  AccountingJournalRaw,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type AccountingJournalRaw$Outbound = {};

/** @internal */
export const AccountingJournalRaw$outboundSchema: z.ZodType<
  AccountingJournalRaw$Outbound,
  z.ZodTypeDef,
  AccountingJournalRaw
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingJournalRaw$ {
  /** @deprecated use `AccountingJournalRaw$inboundSchema` instead. */
  export const inboundSchema = AccountingJournalRaw$inboundSchema;
  /** @deprecated use `AccountingJournalRaw$outboundSchema` instead. */
  export const outboundSchema = AccountingJournalRaw$outboundSchema;
  /** @deprecated use `AccountingJournalRaw$Outbound` instead. */
  export type Outbound = AccountingJournalRaw$Outbound;
}

export function accountingJournalRawToJSON(
  accountingJournalRaw: AccountingJournalRaw,
): string {
  return JSON.stringify(
    AccountingJournalRaw$outboundSchema.parse(accountingJournalRaw),
  );
}

export function accountingJournalRawFromJSON(
  jsonString: string,
): SafeParseResult<AccountingJournalRaw, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingJournalRaw$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingJournalRaw' from JSON`,
  );
}

/** @internal */
export const AccountingJournal$inboundSchema: z.ZodType<
  AccountingJournal,
  z.ZodTypeDef,
  unknown
> = z.object({
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  currency: z.string().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
  lineitems: z.array(AccountingJournalLineitem$inboundSchema).optional(),
  posted_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  raw: z.lazy(() => AccountingJournalRaw$inboundSchema).optional(),
  reference: z.string().optional(),
  tax_amount: z.number().optional(),
  taxrate_id: z.string().optional(),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "posted_at": "postedAt",
    "tax_amount": "taxAmount",
    "taxrate_id": "taxrateId",
    "updated_at": "updatedAt",
  });
});

/** @internal */
export type AccountingJournal$Outbound = {
  created_at?: string | undefined;
  currency?: string | undefined;
  description?: string | undefined;
  id?: string | undefined;
  lineitems?: Array<AccountingJournalLineitem$Outbound> | undefined;
  posted_at?: string | undefined;
  raw?: AccountingJournalRaw$Outbound | undefined;
  reference?: string | undefined;
  tax_amount?: number | undefined;
  taxrate_id?: string | undefined;
  updated_at?: string | undefined;
};

/** @internal */
export const AccountingJournal$outboundSchema: z.ZodType<
  AccountingJournal$Outbound,
  z.ZodTypeDef,
  AccountingJournal
> = z.object({
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  currency: z.string().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
  lineitems: z.array(AccountingJournalLineitem$outboundSchema).optional(),
  postedAt: z.date().transform(v => v.toISOString()).optional(),
  raw: z.lazy(() => AccountingJournalRaw$outboundSchema).optional(),
  reference: z.string().optional(),
  taxAmount: z.number().optional(),
  taxrateId: z.string().optional(),
  updatedAt: z.date().transform(v => v.toISOString()).optional(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    postedAt: "posted_at",
    taxAmount: "tax_amount",
    taxrateId: "taxrate_id",
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingJournal$ {
  /** @deprecated use `AccountingJournal$inboundSchema` instead. */
  export const inboundSchema = AccountingJournal$inboundSchema;
  /** @deprecated use `AccountingJournal$outboundSchema` instead. */
  export const outboundSchema = AccountingJournal$outboundSchema;
  /** @deprecated use `AccountingJournal$Outbound` instead. */
  export type Outbound = AccountingJournal$Outbound;
}

export function accountingJournalToJSON(
  accountingJournal: AccountingJournal,
): string {
  return JSON.stringify(
    AccountingJournal$outboundSchema.parse(accountingJournal),
  );
}

export function accountingJournalFromJSON(
  jsonString: string,
): SafeParseResult<AccountingJournal, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingJournal$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingJournal' from JSON`,
  );
}
