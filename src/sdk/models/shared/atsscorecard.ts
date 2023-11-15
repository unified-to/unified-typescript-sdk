/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PropertyAtsScorecardRaw } from "./propertyatsscorecardraw";
import { Expose, Transform, Type } from "class-transformer";

export enum Recommendation {
    DefinitelyNo = "DEFINITELY_NO",
    No = "NO",
    Yes = "YES",
    StrongYes = "STRONG_YES",
}

export class AtsScorecard extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "application_id" })
    applicationId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "candidate_id" })
    candidateId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "comment" })
    comment?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "interview_id" })
    interviewId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "interviewer_id" })
    interviewerId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "job_id" })
    jobId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "raw" })
    @Type(() => PropertyAtsScorecardRaw)
    raw?: PropertyAtsScorecardRaw;

    @SpeakeasyMetadata()
    @Expose({ name: "recommendation" })
    recommendation?: Recommendation;

    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;
}
