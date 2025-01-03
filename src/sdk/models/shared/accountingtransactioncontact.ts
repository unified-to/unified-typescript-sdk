/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AccountingTransactionContact = {};

/** @internal */
export const AccountingTransactionContact$inboundSchema: z.ZodType<
  AccountingTransactionContact,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type AccountingTransactionContact$Outbound = {};

/** @internal */
export const AccountingTransactionContact$outboundSchema: z.ZodType<
  AccountingTransactionContact$Outbound,
  z.ZodTypeDef,
  AccountingTransactionContact
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingTransactionContact$ {
  /** @deprecated use `AccountingTransactionContact$inboundSchema` instead. */
  export const inboundSchema = AccountingTransactionContact$inboundSchema;
  /** @deprecated use `AccountingTransactionContact$outboundSchema` instead. */
  export const outboundSchema = AccountingTransactionContact$outboundSchema;
  /** @deprecated use `AccountingTransactionContact$Outbound` instead. */
  export type Outbound = AccountingTransactionContact$Outbound;
}

export function accountingTransactionContactToJSON(
  accountingTransactionContact: AccountingTransactionContact,
): string {
  return JSON.stringify(
    AccountingTransactionContact$outboundSchema.parse(
      accountingTransactionContact,
    ),
  );
}

export function accountingTransactionContactFromJSON(
  jsonString: string,
): SafeParseResult<AccountingTransactionContact, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingTransactionContact$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingTransactionContact' from JSON`,
  );
}
