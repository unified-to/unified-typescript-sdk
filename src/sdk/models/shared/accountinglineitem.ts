/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AccountingLineitem = {
  accountId?: string | undefined;
  createdAt?: Date | undefined;
  discountAmount?: number | undefined;
  id?: string | undefined;
  itemDescription?: string | undefined;
  itemId?: string | undefined;
  itemName?: string | undefined;
  itemSku?: string | undefined;
  notes?: string | undefined;
  refundAmount?: number | undefined;
  refundedAt?: Date | undefined;
  taxAmount?: number | undefined;
  taxrateId?: string | undefined;
  totalAmount?: number | undefined;
  unitAmount?: number | undefined;
  unitQuantity?: number | undefined;
  updatedAt?: Date | undefined;
};

/** @internal */
export const AccountingLineitem$inboundSchema: z.ZodType<
  AccountingLineitem,
  z.ZodTypeDef,
  unknown
> = z.object({
  account_id: z.string().optional(),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  discount_amount: z.number().optional(),
  id: z.string().optional(),
  item_description: z.string().optional(),
  item_id: z.string().optional(),
  item_name: z.string().optional(),
  item_sku: z.string().optional(),
  notes: z.string().optional(),
  refund_amount: z.number().optional(),
  refunded_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  tax_amount: z.number().optional(),
  taxrate_id: z.string().optional(),
  total_amount: z.number().optional(),
  unit_amount: z.number().optional(),
  unit_quantity: z.number().optional(),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "account_id": "accountId",
    "created_at": "createdAt",
    "discount_amount": "discountAmount",
    "item_description": "itemDescription",
    "item_id": "itemId",
    "item_name": "itemName",
    "item_sku": "itemSku",
    "refund_amount": "refundAmount",
    "refunded_at": "refundedAt",
    "tax_amount": "taxAmount",
    "taxrate_id": "taxrateId",
    "total_amount": "totalAmount",
    "unit_amount": "unitAmount",
    "unit_quantity": "unitQuantity",
    "updated_at": "updatedAt",
  });
});

/** @internal */
export type AccountingLineitem$Outbound = {
  account_id?: string | undefined;
  created_at?: string | undefined;
  discount_amount?: number | undefined;
  id?: string | undefined;
  item_description?: string | undefined;
  item_id?: string | undefined;
  item_name?: string | undefined;
  item_sku?: string | undefined;
  notes?: string | undefined;
  refund_amount?: number | undefined;
  refunded_at?: string | undefined;
  tax_amount?: number | undefined;
  taxrate_id?: string | undefined;
  total_amount?: number | undefined;
  unit_amount?: number | undefined;
  unit_quantity?: number | undefined;
  updated_at?: string | undefined;
};

/** @internal */
export const AccountingLineitem$outboundSchema: z.ZodType<
  AccountingLineitem$Outbound,
  z.ZodTypeDef,
  AccountingLineitem
> = z.object({
  accountId: z.string().optional(),
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  discountAmount: z.number().optional(),
  id: z.string().optional(),
  itemDescription: z.string().optional(),
  itemId: z.string().optional(),
  itemName: z.string().optional(),
  itemSku: z.string().optional(),
  notes: z.string().optional(),
  refundAmount: z.number().optional(),
  refundedAt: z.date().transform(v => v.toISOString()).optional(),
  taxAmount: z.number().optional(),
  taxrateId: z.string().optional(),
  totalAmount: z.number().optional(),
  unitAmount: z.number().optional(),
  unitQuantity: z.number().optional(),
  updatedAt: z.date().transform(v => v.toISOString()).optional(),
}).transform((v) => {
  return remap$(v, {
    accountId: "account_id",
    createdAt: "created_at",
    discountAmount: "discount_amount",
    itemDescription: "item_description",
    itemId: "item_id",
    itemName: "item_name",
    itemSku: "item_sku",
    refundAmount: "refund_amount",
    refundedAt: "refunded_at",
    taxAmount: "tax_amount",
    taxrateId: "taxrate_id",
    totalAmount: "total_amount",
    unitAmount: "unit_amount",
    unitQuantity: "unit_quantity",
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingLineitem$ {
  /** @deprecated use `AccountingLineitem$inboundSchema` instead. */
  export const inboundSchema = AccountingLineitem$inboundSchema;
  /** @deprecated use `AccountingLineitem$outboundSchema` instead. */
  export const outboundSchema = AccountingLineitem$outboundSchema;
  /** @deprecated use `AccountingLineitem$Outbound` instead. */
  export type Outbound = AccountingLineitem$Outbound;
}

export function accountingLineitemToJSON(
  accountingLineitem: AccountingLineitem,
): string {
  return JSON.stringify(
    AccountingLineitem$outboundSchema.parse(accountingLineitem),
  );
}

export function accountingLineitemFromJSON(
  jsonString: string,
): SafeParseResult<AccountingLineitem, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingLineitem$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingLineitem' from JSON`,
  );
}
