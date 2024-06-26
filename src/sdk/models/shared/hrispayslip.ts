/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { HrisPayslipDetail } from "./hrispayslipdetail";
import { Expose, Transform, Type } from "class-transformer";

export enum PaymentType {
    Direct = "DIRECT",
    Cheque = "CHEQUE",
    Cash = "CASH",
}

export class HrisPayslip extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "currency" })
    currency?: string;

    @SpeakeasyMetadata({ elemType: HrisPayslipDetail })
    @Expose({ name: "details" })
    @Type(() => HrisPayslipDetail)
    details?: HrisPayslipDetail[];

    @SpeakeasyMetadata()
    @Expose({ name: "end_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    endAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "gross_amount" })
    grossAmount?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "net_amount" })
    netAmount?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "paid_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    paidAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "payment_type" })
    paymentType?: PaymentType;

    @SpeakeasyMetadata()
    @Expose({ name: "raw" })
    raw: Record<string, any>;

    @SpeakeasyMetadata()
    @Expose({ name: "start_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    startAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "user_id" })
    userId: string;
}
