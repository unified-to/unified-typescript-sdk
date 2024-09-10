/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type CreateAccountingContactRequest = {
  accountingContact?: shared.AccountingContact | undefined;
  /**
   * ID of the connection
   */
  connectionId: string;
};

/** @internal */
export const CreateAccountingContactRequest$inboundSchema: z.ZodType<
  CreateAccountingContactRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  AccountingContact: shared.AccountingContact$inboundSchema.optional(),
  connection_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "AccountingContact": "accountingContact",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type CreateAccountingContactRequest$Outbound = {
  AccountingContact?: shared.AccountingContact$Outbound | undefined;
  connection_id: string;
};

/** @internal */
export const CreateAccountingContactRequest$outboundSchema: z.ZodType<
  CreateAccountingContactRequest$Outbound,
  z.ZodTypeDef,
  CreateAccountingContactRequest
> = z.object({
  accountingContact: shared.AccountingContact$outboundSchema.optional(),
  connectionId: z.string(),
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
export namespace CreateAccountingContactRequest$ {
  /** @deprecated use `CreateAccountingContactRequest$inboundSchema` instead. */
  export const inboundSchema = CreateAccountingContactRequest$inboundSchema;
  /** @deprecated use `CreateAccountingContactRequest$outboundSchema` instead. */
  export const outboundSchema = CreateAccountingContactRequest$outboundSchema;
  /** @deprecated use `CreateAccountingContactRequest$Outbound` instead. */
  export type Outbound = CreateAccountingContactRequest$Outbound;
}
