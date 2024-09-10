/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type AccountingTransactionLineItem = {
  accountId?: string | undefined;
  description?: string | undefined;
  id?: string | undefined;
  name?: string | undefined;
  objectType?: string | undefined;
  totalAmount?: number | undefined;
  unitAmount?: number | undefined;
  unitQuantity?: number | undefined;
};

/** @internal */
export const AccountingTransactionLineItem$inboundSchema: z.ZodType<
  AccountingTransactionLineItem,
  z.ZodTypeDef,
  unknown
> = z.object({
  account_id: z.string().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
  name: z.string().optional(),
  object_type: z.string().optional(),
  total_amount: z.number().optional(),
  unit_amount: z.number().optional(),
  unit_quantity: z.number().optional(),
}).transform((v) => {
  return remap$(v, {
    "account_id": "accountId",
    "object_type": "objectType",
    "total_amount": "totalAmount",
    "unit_amount": "unitAmount",
    "unit_quantity": "unitQuantity",
  });
});

/** @internal */
export type AccountingTransactionLineItem$Outbound = {
  account_id?: string | undefined;
  description?: string | undefined;
  id?: string | undefined;
  name?: string | undefined;
  object_type?: string | undefined;
  total_amount?: number | undefined;
  unit_amount?: number | undefined;
  unit_quantity?: number | undefined;
};

/** @internal */
export const AccountingTransactionLineItem$outboundSchema: z.ZodType<
  AccountingTransactionLineItem$Outbound,
  z.ZodTypeDef,
  AccountingTransactionLineItem
> = z.object({
  accountId: z.string().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
  name: z.string().optional(),
  objectType: z.string().optional(),
  totalAmount: z.number().optional(),
  unitAmount: z.number().optional(),
  unitQuantity: z.number().optional(),
}).transform((v) => {
  return remap$(v, {
    accountId: "account_id",
    objectType: "object_type",
    totalAmount: "total_amount",
    unitAmount: "unit_amount",
    unitQuantity: "unit_quantity",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingTransactionLineItem$ {
  /** @deprecated use `AccountingTransactionLineItem$inboundSchema` instead. */
  export const inboundSchema = AccountingTransactionLineItem$inboundSchema;
  /** @deprecated use `AccountingTransactionLineItem$outboundSchema` instead. */
  export const outboundSchema = AccountingTransactionLineItem$outboundSchema;
  /** @deprecated use `AccountingTransactionLineItem$Outbound` instead. */
  export type Outbound = AccountingTransactionLineItem$Outbound;
}
