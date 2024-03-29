/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

export class EnrichPersonWorkHistory extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "company_domain" })
    companyDomain?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "company_id" })
    companyId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "company_name" })
    companyName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "end_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    endAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "location" })
    location?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "start_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    startAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "title" })
    title: string;
}
