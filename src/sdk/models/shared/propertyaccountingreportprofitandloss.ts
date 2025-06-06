/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AccountingProfitAndLossCategory,
  AccountingProfitAndLossCategory$inboundSchema,
  AccountingProfitAndLossCategory$Outbound,
  AccountingProfitAndLossCategory$outboundSchema,
} from "./accountingprofitandlosscategory.js";

export type PropertyAccountingReportProfitAndLoss = {
  costOfGoodsSold?: Array<AccountingProfitAndLossCategory> | undefined;
  expenses?: Array<AccountingProfitAndLossCategory> | undefined;
  grossProfitAmount?: number | undefined;
  income?: Array<AccountingProfitAndLossCategory> | undefined;
  netProfitAmount?: number | undefined;
};

/** @internal */
export const PropertyAccountingReportProfitAndLoss$inboundSchema: z.ZodType<
  PropertyAccountingReportProfitAndLoss,
  z.ZodTypeDef,
  unknown
> = z.object({
  cost_of_goods_sold: z.array(AccountingProfitAndLossCategory$inboundSchema)
    .optional(),
  expenses: z.array(AccountingProfitAndLossCategory$inboundSchema).optional(),
  gross_profit_amount: z.number().optional(),
  income: z.array(AccountingProfitAndLossCategory$inboundSchema).optional(),
  net_profit_amount: z.number().optional(),
}).transform((v) => {
  return remap$(v, {
    "cost_of_goods_sold": "costOfGoodsSold",
    "gross_profit_amount": "grossProfitAmount",
    "net_profit_amount": "netProfitAmount",
  });
});

/** @internal */
export type PropertyAccountingReportProfitAndLoss$Outbound = {
  cost_of_goods_sold?:
    | Array<AccountingProfitAndLossCategory$Outbound>
    | undefined;
  expenses?: Array<AccountingProfitAndLossCategory$Outbound> | undefined;
  gross_profit_amount?: number | undefined;
  income?: Array<AccountingProfitAndLossCategory$Outbound> | undefined;
  net_profit_amount?: number | undefined;
};

/** @internal */
export const PropertyAccountingReportProfitAndLoss$outboundSchema: z.ZodType<
  PropertyAccountingReportProfitAndLoss$Outbound,
  z.ZodTypeDef,
  PropertyAccountingReportProfitAndLoss
> = z.object({
  costOfGoodsSold: z.array(AccountingProfitAndLossCategory$outboundSchema)
    .optional(),
  expenses: z.array(AccountingProfitAndLossCategory$outboundSchema).optional(),
  grossProfitAmount: z.number().optional(),
  income: z.array(AccountingProfitAndLossCategory$outboundSchema).optional(),
  netProfitAmount: z.number().optional(),
}).transform((v) => {
  return remap$(v, {
    costOfGoodsSold: "cost_of_goods_sold",
    grossProfitAmount: "gross_profit_amount",
    netProfitAmount: "net_profit_amount",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PropertyAccountingReportProfitAndLoss$ {
  /** @deprecated use `PropertyAccountingReportProfitAndLoss$inboundSchema` instead. */
  export const inboundSchema =
    PropertyAccountingReportProfitAndLoss$inboundSchema;
  /** @deprecated use `PropertyAccountingReportProfitAndLoss$outboundSchema` instead. */
  export const outboundSchema =
    PropertyAccountingReportProfitAndLoss$outboundSchema;
  /** @deprecated use `PropertyAccountingReportProfitAndLoss$Outbound` instead. */
  export type Outbound = PropertyAccountingReportProfitAndLoss$Outbound;
}

export function propertyAccountingReportProfitAndLossToJSON(
  propertyAccountingReportProfitAndLoss: PropertyAccountingReportProfitAndLoss,
): string {
  return JSON.stringify(
    PropertyAccountingReportProfitAndLoss$outboundSchema.parse(
      propertyAccountingReportProfitAndLoss,
    ),
  );
}

export function propertyAccountingReportProfitAndLossFromJSON(
  jsonString: string,
): SafeParseResult<PropertyAccountingReportProfitAndLoss, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      PropertyAccountingReportProfitAndLoss$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PropertyAccountingReportProfitAndLoss' from JSON`,
  );
}
