/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PaymentLinkLineitem } from "./paymentlinklineitem";
import { Expose, Transform, Type } from "class-transformer";

export class PaymentLink extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    amount?: number;

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
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "is_active" })
    isActive?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "is_chargeable_now" })
    isChargeableNow?: boolean;

    @SpeakeasyMetadata({ elemType: PaymentLinkLineitem })
    @Expose({ name: "lineitems" })
    @Type(() => PaymentLinkLineitem)
    lineitems?: PaymentLinkLineitem[];

    @SpeakeasyMetadata()
    @Expose({ name: "payment_id" })
    paymentId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "raw" })
    raw?: Record<string, any>;

    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "url" })
    url?: string;
}
