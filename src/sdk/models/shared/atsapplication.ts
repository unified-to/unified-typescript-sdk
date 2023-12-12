/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PropertyAtsApplicationRaw } from "./propertyatsapplicationraw";
import { Expose, Transform, Type } from "class-transformer";

export enum AtsApplicationStatus {
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
    Withdrawn = "WITHDRAWN",
}

export class AtsApplication extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "applied_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    appliedAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "candidate_id" })
    candidateId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "hired_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    hiredAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "job_id" })
    jobId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "raw" })
    @Type(() => PropertyAtsApplicationRaw)
    raw?: PropertyAtsApplicationRaw;

    @SpeakeasyMetadata()
    @Expose({ name: "rejected_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    rejectedAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "rejected_reason" })
    rejectedReason?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "source" })
    source?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: AtsApplicationStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;
}
