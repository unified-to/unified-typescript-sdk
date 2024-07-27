/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum HrisCompensationFrequency {
    OneTime = "ONE_TIME",
    Day = "DAY",
    Quarter = "QUARTER",
    Year = "YEAR",
    Hour = "HOUR",
    Month = "MONTH",
    Week = "WEEK",
}

export enum HrisCompensationType {
    Salary = "SALARY",
    Bonus = "BONUS",
    StockOptions = "STOCK_OPTIONS",
    Equity = "EQUITY",
    Other = "OTHER",
}

export class HrisCompensation extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    amount?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "currency" })
    currency?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "frequency" })
    frequency?: HrisCompensationFrequency;

    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: HrisCompensationType;
}
