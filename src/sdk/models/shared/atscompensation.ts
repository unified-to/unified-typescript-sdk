/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum AtsCompensationFrequency {
    OneTime = "ONE_TIME",
    Day = "DAY",
    Quarter = "QUARTER",
    Year = "YEAR",
    Hour = "HOUR",
    Month = "MONTH",
    Week = "WEEK",
}

export enum AtsCompensationType {
    Salary = "SALARY",
    Bonus = "BONUS",
    StockOptions = "STOCK_OPTIONS",
    Equity = "EQUITY",
    Other = "OTHER",
}

/**
 * Unified compensation object for a job
 */
export class AtsCompensation extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "currency" })
    currency?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "frequency" })
    frequency?: AtsCompensationFrequency;

    @SpeakeasyMetadata()
    @Expose({ name: "max" })
    max?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "min" })
    min?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: AtsCompensationType;
}
