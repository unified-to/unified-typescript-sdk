/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class AccountingTransactionLineItem extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "account_id" })
    accountId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "object_type" })
    objectType?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "total_amount" })
    totalAmount?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "unit_amount" })
    unitAmount?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "unit_quantity" })
    unitQuantity?: number;
}
