/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum AtsStatusStatus {
    New = "NEW",
    Reviewing = "REVIEWING",
    Screening = "SCREENING",
    Submitted = "SUBMITTED",
    FirstInterview = "FIRST_INTERVIEW",
    SecondInterview = "SECOND_INTERVIEW",
    ThirdInterview = "THIRD_INTERVIEW",
    BackgroundCheck = "BACKGROUND_CHECK",
    Offered = "OFFERED",
    Accepted = "ACCEPTED",
    Hired = "HIRED",
    Rejected = "REJECTED",
    Declined = "DECLINED",
    Withdrawn = "WITHDRAWN",
}

export class AtsStatus extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "original_status" })
    originalStatus?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "raw" })
    raw?: Record<string, any>;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: AtsStatusStatus;
}
