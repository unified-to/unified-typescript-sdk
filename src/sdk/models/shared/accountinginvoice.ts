/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import {
  AccountingLineitem,
  AccountingLineitem$inboundSchema,
  AccountingLineitem$Outbound,
  AccountingLineitem$outboundSchema,
} from "./accountinglineitem.js";

export const PaymentCollectionMethod = {
  SendInvoice: "send_invoice",
  ChargeAutomatically: "charge_automatically",
} as const;
export type PaymentCollectionMethod = ClosedEnum<
  typeof PaymentCollectionMethod
>;

export const AccountingInvoiceStatus = {
  Draft: "DRAFT",
  Voided: "VOIDED",
  Authorized: "AUTHORIZED",
  Paid: "PAID",
  PartiallyPaid: "PARTIALLY_PAID",
  PartiallyRefunded: "PARTIALLY_REFUNDED",
  Refunded: "REFUNDED",
} as const;
export type AccountingInvoiceStatus = ClosedEnum<
  typeof AccountingInvoiceStatus
>;

export const AccountingInvoiceType = {
  Bill: "BILL",
  Invoice: "INVOICE",
} as const;
export type AccountingInvoiceType = ClosedEnum<typeof AccountingInvoiceType>;

export type AccountingInvoice = {
  balanceAmount?: number | undefined;
  cancelledAt?: Date | undefined;
  contactId?: string | undefined;
  createdAt?: Date | undefined;
  currency?: string | undefined;
  discountAmount?: number | undefined;
  dueAt?: Date | undefined;
  id?: string | undefined;
  invoiceAt?: Date | undefined;
  invoiceNumber?: string | undefined;
  lineitems?: Array<AccountingLineitem> | undefined;
  notes?: string | undefined;
  paidAmount?: number | undefined;
  paidAt?: Date | undefined;
  paymentCollectionMethod?: PaymentCollectionMethod | undefined;
  raw?: { [k: string]: any } | undefined;
  refundAmount?: number | undefined;
  refundReason?: string | undefined;
  refundedAt?: Date | undefined;
  status?: AccountingInvoiceStatus | undefined;
  taxAmount?: number | undefined;
  totalAmount?: number | undefined;
  type?: AccountingInvoiceType | undefined;
  updatedAt?: Date | undefined;
  url?: string | undefined;
};

/** @internal */
export const PaymentCollectionMethod$inboundSchema: z.ZodNativeEnum<
  typeof PaymentCollectionMethod
> = z.nativeEnum(PaymentCollectionMethod);

/** @internal */
export const PaymentCollectionMethod$outboundSchema: z.ZodNativeEnum<
  typeof PaymentCollectionMethod
> = PaymentCollectionMethod$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentCollectionMethod$ {
  /** @deprecated use `PaymentCollectionMethod$inboundSchema` instead. */
  export const inboundSchema = PaymentCollectionMethod$inboundSchema;
  /** @deprecated use `PaymentCollectionMethod$outboundSchema` instead. */
  export const outboundSchema = PaymentCollectionMethod$outboundSchema;
}

/** @internal */
export const AccountingInvoiceStatus$inboundSchema: z.ZodNativeEnum<
  typeof AccountingInvoiceStatus
> = z.nativeEnum(AccountingInvoiceStatus);

/** @internal */
export const AccountingInvoiceStatus$outboundSchema: z.ZodNativeEnum<
  typeof AccountingInvoiceStatus
> = AccountingInvoiceStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingInvoiceStatus$ {
  /** @deprecated use `AccountingInvoiceStatus$inboundSchema` instead. */
  export const inboundSchema = AccountingInvoiceStatus$inboundSchema;
  /** @deprecated use `AccountingInvoiceStatus$outboundSchema` instead. */
  export const outboundSchema = AccountingInvoiceStatus$outboundSchema;
}

/** @internal */
export const AccountingInvoiceType$inboundSchema: z.ZodNativeEnum<
  typeof AccountingInvoiceType
> = z.nativeEnum(AccountingInvoiceType);

/** @internal */
export const AccountingInvoiceType$outboundSchema: z.ZodNativeEnum<
  typeof AccountingInvoiceType
> = AccountingInvoiceType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingInvoiceType$ {
  /** @deprecated use `AccountingInvoiceType$inboundSchema` instead. */
  export const inboundSchema = AccountingInvoiceType$inboundSchema;
  /** @deprecated use `AccountingInvoiceType$outboundSchema` instead. */
  export const outboundSchema = AccountingInvoiceType$outboundSchema;
}

/** @internal */
export const AccountingInvoice$inboundSchema: z.ZodType<
  AccountingInvoice,
  z.ZodTypeDef,
  unknown
> = z.object({
  balance_amount: z.number().optional(),
  cancelled_at: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ).optional(),
  contact_id: z.string().optional(),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  currency: z.string().optional(),
  discount_amount: z.number().optional(),
  due_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  id: z.string().optional(),
  invoice_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  invoice_number: z.string().optional(),
  lineitems: z.array(AccountingLineitem$inboundSchema).optional(),
  notes: z.string().optional(),
  paid_amount: z.number().optional(),
  paid_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  payment_collection_method: PaymentCollectionMethod$inboundSchema.optional(),
  raw: z.record(z.any()).optional(),
  refund_amount: z.number().optional(),
  refund_reason: z.string().optional(),
  refunded_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  status: AccountingInvoiceStatus$inboundSchema.optional(),
  tax_amount: z.number().optional(),
  total_amount: z.number().optional(),
  type: AccountingInvoiceType$inboundSchema.optional(),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  url: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "balance_amount": "balanceAmount",
    "cancelled_at": "cancelledAt",
    "contact_id": "contactId",
    "created_at": "createdAt",
    "discount_amount": "discountAmount",
    "due_at": "dueAt",
    "invoice_at": "invoiceAt",
    "invoice_number": "invoiceNumber",
    "paid_amount": "paidAmount",
    "paid_at": "paidAt",
    "payment_collection_method": "paymentCollectionMethod",
    "refund_amount": "refundAmount",
    "refund_reason": "refundReason",
    "refunded_at": "refundedAt",
    "tax_amount": "taxAmount",
    "total_amount": "totalAmount",
    "updated_at": "updatedAt",
  });
});

/** @internal */
export type AccountingInvoice$Outbound = {
  balance_amount?: number | undefined;
  cancelled_at?: string | undefined;
  contact_id?: string | undefined;
  created_at?: string | undefined;
  currency?: string | undefined;
  discount_amount?: number | undefined;
  due_at?: string | undefined;
  id?: string | undefined;
  invoice_at?: string | undefined;
  invoice_number?: string | undefined;
  lineitems?: Array<AccountingLineitem$Outbound> | undefined;
  notes?: string | undefined;
  paid_amount?: number | undefined;
  paid_at?: string | undefined;
  payment_collection_method?: string | undefined;
  raw?: { [k: string]: any } | undefined;
  refund_amount?: number | undefined;
  refund_reason?: string | undefined;
  refunded_at?: string | undefined;
  status?: string | undefined;
  tax_amount?: number | undefined;
  total_amount?: number | undefined;
  type?: string | undefined;
  updated_at?: string | undefined;
  url?: string | undefined;
};

/** @internal */
export const AccountingInvoice$outboundSchema: z.ZodType<
  AccountingInvoice$Outbound,
  z.ZodTypeDef,
  AccountingInvoice
> = z.object({
  balanceAmount: z.number().optional(),
  cancelledAt: z.date().transform(v => v.toISOString()).optional(),
  contactId: z.string().optional(),
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  currency: z.string().optional(),
  discountAmount: z.number().optional(),
  dueAt: z.date().transform(v => v.toISOString()).optional(),
  id: z.string().optional(),
  invoiceAt: z.date().transform(v => v.toISOString()).optional(),
  invoiceNumber: z.string().optional(),
  lineitems: z.array(AccountingLineitem$outboundSchema).optional(),
  notes: z.string().optional(),
  paidAmount: z.number().optional(),
  paidAt: z.date().transform(v => v.toISOString()).optional(),
  paymentCollectionMethod: PaymentCollectionMethod$outboundSchema.optional(),
  raw: z.record(z.any()).optional(),
  refundAmount: z.number().optional(),
  refundReason: z.string().optional(),
  refundedAt: z.date().transform(v => v.toISOString()).optional(),
  status: AccountingInvoiceStatus$outboundSchema.optional(),
  taxAmount: z.number().optional(),
  totalAmount: z.number().optional(),
  type: AccountingInvoiceType$outboundSchema.optional(),
  updatedAt: z.date().transform(v => v.toISOString()).optional(),
  url: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    balanceAmount: "balance_amount",
    cancelledAt: "cancelled_at",
    contactId: "contact_id",
    createdAt: "created_at",
    discountAmount: "discount_amount",
    dueAt: "due_at",
    invoiceAt: "invoice_at",
    invoiceNumber: "invoice_number",
    paidAmount: "paid_amount",
    paidAt: "paid_at",
    paymentCollectionMethod: "payment_collection_method",
    refundAmount: "refund_amount",
    refundReason: "refund_reason",
    refundedAt: "refunded_at",
    taxAmount: "tax_amount",
    totalAmount: "total_amount",
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingInvoice$ {
  /** @deprecated use `AccountingInvoice$inboundSchema` instead. */
  export const inboundSchema = AccountingInvoice$inboundSchema;
  /** @deprecated use `AccountingInvoice$outboundSchema` instead. */
  export const outboundSchema = AccountingInvoice$outboundSchema;
  /** @deprecated use `AccountingInvoice$Outbound` instead. */
  export type Outbound = AccountingInvoice$Outbound;
}
