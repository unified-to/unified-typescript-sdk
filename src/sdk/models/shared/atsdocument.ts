/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PropertyAtsDocumentRaw } from "./propertyatsdocumentraw";
import { Expose, Transform, Type } from "class-transformer";

export enum AtsDocumentType {
    Resume = "RESUME",
    CoverLetter = "COVER_LETTER",
    OfferPacket = "OFFER_PACKET",
    OfferLetter = "OFFER_LETTER",
    TakeHomeTest = "TAKE_HOME_TEST",
    Other = "OTHER",
}

export class AtsDocument extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "application_id" })
    applicationId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "candidate_id" })
    candidateId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "document_url" })
    documentUrl?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "filename" })
    filename?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "job_id" })
    jobId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "raw" })
    @Type(() => PropertyAtsDocumentRaw)
    raw?: PropertyAtsDocumentRaw;

    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: AtsDocumentType;

    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "user_id" })
    userId?: string;
}