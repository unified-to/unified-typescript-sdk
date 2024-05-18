/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum AccountingContactPaymentMethodType {
    Ach = "ACH",
    Alipay = "ALIPAY",
    Card = "CARD",
    Giropay = "GIROPAY",
    Ideal = "IDEAL",
    Other = "OTHER",
    Paypal = "PAYPAL",
    Unknown = "",
}

export class AccountingContactPaymentMethod extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: AccountingContactPaymentMethodType;
}
