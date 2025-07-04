/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AccountingBalancesheetItem,
  AccountingBalancesheetItem$inboundSchema,
  AccountingBalancesheetItem$Outbound,
  AccountingBalancesheetItem$outboundSchema,
} from "./accountingbalancesheetitem.js";

export type AccountingBalancesheet = {
  assets?: Array<AccountingBalancesheetItem> | undefined;
  createdAt?: Date | undefined;
  currency?: string | undefined;
  endAt?: Date | undefined;
  equity?: Array<AccountingBalancesheetItem> | undefined;
  id?: string | undefined;
  liabilities?: Array<AccountingBalancesheetItem> | undefined;
  name?: string | undefined;
  netAssetsAmount?: number | undefined;
  raw?: { [k: string]: any } | undefined;
  startAt?: Date | undefined;
  updatedAt?: Date | undefined;
};

/** @internal */
export const AccountingBalancesheet$inboundSchema: z.ZodType<
  AccountingBalancesheet,
  z.ZodTypeDef,
  unknown
> = z.object({
  assets: z.array(AccountingBalancesheetItem$inboundSchema).optional(),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  currency: z.string().optional(),
  end_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  equity: z.array(AccountingBalancesheetItem$inboundSchema).optional(),
  id: z.string().optional(),
  liabilities: z.array(AccountingBalancesheetItem$inboundSchema).optional(),
  name: z.string().optional(),
  net_assets_amount: z.number().optional(),
  raw: z.record(z.any()).optional(),
  start_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "end_at": "endAt",
    "net_assets_amount": "netAssetsAmount",
    "start_at": "startAt",
    "updated_at": "updatedAt",
  });
});

/** @internal */
export type AccountingBalancesheet$Outbound = {
  assets?: Array<AccountingBalancesheetItem$Outbound> | undefined;
  created_at?: string | undefined;
  currency?: string | undefined;
  end_at?: string | undefined;
  equity?: Array<AccountingBalancesheetItem$Outbound> | undefined;
  id?: string | undefined;
  liabilities?: Array<AccountingBalancesheetItem$Outbound> | undefined;
  name?: string | undefined;
  net_assets_amount?: number | undefined;
  raw?: { [k: string]: any } | undefined;
  start_at?: string | undefined;
  updated_at?: string | undefined;
};

/** @internal */
export const AccountingBalancesheet$outboundSchema: z.ZodType<
  AccountingBalancesheet$Outbound,
  z.ZodTypeDef,
  AccountingBalancesheet
> = z.object({
  assets: z.array(AccountingBalancesheetItem$outboundSchema).optional(),
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  currency: z.string().optional(),
  endAt: z.date().transform(v => v.toISOString()).optional(),
  equity: z.array(AccountingBalancesheetItem$outboundSchema).optional(),
  id: z.string().optional(),
  liabilities: z.array(AccountingBalancesheetItem$outboundSchema).optional(),
  name: z.string().optional(),
  netAssetsAmount: z.number().optional(),
  raw: z.record(z.any()).optional(),
  startAt: z.date().transform(v => v.toISOString()).optional(),
  updatedAt: z.date().transform(v => v.toISOString()).optional(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    endAt: "end_at",
    netAssetsAmount: "net_assets_amount",
    startAt: "start_at",
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingBalancesheet$ {
  /** @deprecated use `AccountingBalancesheet$inboundSchema` instead. */
  export const inboundSchema = AccountingBalancesheet$inboundSchema;
  /** @deprecated use `AccountingBalancesheet$outboundSchema` instead. */
  export const outboundSchema = AccountingBalancesheet$outboundSchema;
  /** @deprecated use `AccountingBalancesheet$Outbound` instead. */
  export type Outbound = AccountingBalancesheet$Outbound;
}

export function accountingBalancesheetToJSON(
  accountingBalancesheet: AccountingBalancesheet,
): string {
  return JSON.stringify(
    AccountingBalancesheet$outboundSchema.parse(accountingBalancesheet),
  );
}

export function accountingBalancesheetFromJSON(
  jsonString: string,
): SafeParseResult<AccountingBalancesheet, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingBalancesheet$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingBalancesheet' from JSON`,
  );
}
