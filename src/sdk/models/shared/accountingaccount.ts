/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

export enum Status {
    Active = "ACTIVE",
    Archived = "ARCHIVED",
}

export enum TypeT {
    AccountsPayable = "ACCOUNTS_PAYABLE",
    AccountsReceivable = "ACCOUNTS_RECEIVABLE",
    Bank = "BANK",
    CreditCard = "CREDIT_CARD",
    FixedAsset = "FIXED_ASSET",
    Liability = "LIABILITY",
    Equity = "EQUITY",
    Expense = "EXPENSE",
    Revenue = "REVENUE",
    Other = "OTHER",
}

/**
 * Chart of accounts
 */
export class AccountingAccount extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "balance" })
    balance?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "currency" })
    currency?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "customer_defined_code" })
    customerDefinedCode?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "is_payable" })
    isPayable?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "parent_account_id" })
    parentAccountId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "raw" })
    raw?: Record<string, any>;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: Status;

    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: TypeT;

    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;
}
