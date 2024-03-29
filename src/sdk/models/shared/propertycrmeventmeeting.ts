/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

/**
 * The meeting object, when type = meeting
 */
export class PropertyCrmEventMeeting extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "end_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    endAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "start_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    startAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "title" })
    title?: string;
}
