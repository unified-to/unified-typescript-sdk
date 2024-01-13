/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

/**
 * The email object, when type = email
 */
export class PropertyCrmEventEmail extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "attachment_file_ids" })
    attachmentFileIds?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "body" })
    body?: string;

    /**
     * The event email's cc name & email (name <test@test.com>)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "cc" })
    cc?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "from" })
    from?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "subject" })
    subject?: string;

    /**
     * The event email's "to" name & email (name <test@test.com>)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "to" })
    to?: string[];
}
