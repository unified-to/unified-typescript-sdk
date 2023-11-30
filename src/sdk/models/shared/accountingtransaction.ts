/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AccountingTransactionLineitem } from "./accountingtransactionlineitem";
import { PropertyAccountingTransactionRaw } from "./propertyaccountingtransactionraw";
import { Expose, Type } from "class-transformer";

export enum AccountingTransactionType {
    Receive = "RECEIVE",
    Spend = "SPEND",
}

export class AccountingTransaction extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "account_id" })
    accountId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    createdAt?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "currency" })
    currency?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    @SpeakeasyMetadata({ elemType: AccountingTransactionLineitem })
    @Expose({ name: "line_items" })
    @Type(() => AccountingTransactionLineitem)
    lineItems?: AccountingTransactionLineitem[];

    @SpeakeasyMetadata()
    @Expose({ name: "raw" })
    @Type(() => PropertyAccountingTransactionRaw)
    raw?: PropertyAccountingTransactionRaw;

    @SpeakeasyMetadata()
    @Expose({ name: "reference" })
    reference?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "tax_amount" })
    taxAmount?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "total_amount" })
    totalAmount: number;

    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: AccountingTransactionType;

    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    updatedAt?: string;
}
