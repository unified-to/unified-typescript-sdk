/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PropertyCrmFileRaw } from "./propertycrmfileraw";
import { Expose, Transform, Type } from "class-transformer";

export class CrmFile extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "company_id" })
    companyId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "contact_id" })
    contactId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "deal_id" })
    dealId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "download_url" })
    downloadUrl?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "event_id" })
    eventId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "is_active" })
    isActive?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "lead_id" })
    leadId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "mime_type" })
    mimeType?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "raw" })
    @Type(() => PropertyCrmFileRaw)
    raw?: PropertyCrmFileRaw;

    @SpeakeasyMetadata()
    @Expose({ name: "size" })
    size?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "user_id" })
    userId?: string;
}
