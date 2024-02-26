/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

export class PaymenntLinkLineitem extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "account_id" })
    accountId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "discount_amount" })
    discountAmount?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "item_description" })
    itemDescription?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "item_id" })
    itemId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "item_name" })
    itemName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "item_sku" })
    itemSku?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "notes" })
    notes?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "refund_amount" })
    refundAmount?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "refunded_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    refundedAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "tax_amount" })
    taxAmount?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "taxrate_id" })
    taxrateId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "total_amount" })
    totalAmount: number;

    @SpeakeasyMetadata()
    @Expose({ name: "unit_amount" })
    unitAmount?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "unit_quantity" })
    unitQuantity?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;
}
