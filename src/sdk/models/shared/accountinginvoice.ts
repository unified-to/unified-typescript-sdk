/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AccountingLineitem } from "./accountinglineitem";
import { Expose, Transform, Type } from "class-transformer";

export enum PaymentCollectionMethod {
    SendInvoice = "send_invoice",
    ChargeAutomatically = "charge_automatically",
}

export enum AccountingInvoiceStatus {
    Draft = "DRAFT",
    Voided = "VOIDED",
    Authorized = "AUTHORIZED",
    Paid = "PAID",
    PartiallyPaid = "PARTIALLY_PAID",
    PartiallyRefunded = "PARTIALLY_REFUNDED",
    Refunded = "REFUNDED",
}

export class AccountingInvoice extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "balance_amount" })
    balanceAmount?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "cancelled_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    cancelledAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "contact_id" })
    contactId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "currency" })
    currency?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "discount_amount" })
    discountAmount?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "due_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    dueAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "invoice_number" })
    invoiceNumber?: string;

    @SpeakeasyMetadata({ elemType: AccountingLineitem })
    @Expose({ name: "lineitems" })
    @Type(() => AccountingLineitem)
    lineitems?: AccountingLineitem[];

    @SpeakeasyMetadata()
    @Expose({ name: "notes" })
    notes?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "paid_amount" })
    paidAmount?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "paid_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    paidAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "payment_collection_method" })
    paymentCollectionMethod?: PaymentCollectionMethod;

    @SpeakeasyMetadata()
    @Expose({ name: "raw" })
    raw?: Record<string, any>;

    @SpeakeasyMetadata()
    @Expose({ name: "refund_amount" })
    refundAmount?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "refund_reason" })
    refundReason?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "refunded_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    refundedAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: AccountingInvoiceStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "tax_amount" })
    taxAmount?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "total_amount" })
    totalAmount?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "url" })
    url?: string;
}
