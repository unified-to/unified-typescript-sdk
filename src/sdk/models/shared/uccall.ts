/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PropertyUcCallRaw } from "./propertyuccallraw";
import { PropertyUcCallTelephone } from "./propertyuccalltelephone";
import { Expose, Transform, Type } from "class-transformer";

export class UcCall extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "agency_id" })
    agencyId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "contact_id" })
    contactId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "end_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    endAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * The raw data returned by the integration for this call
     */
    @SpeakeasyMetadata()
    @Expose({ name: "raw" })
    @Type(() => PropertyUcCallRaw)
    raw?: PropertyUcCallRaw;

    @SpeakeasyMetadata()
    @Expose({ name: "start_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    startAt?: Date;

    /**
     * The telephone number called
     */
    @SpeakeasyMetadata()
    @Expose({ name: "telephone" })
    @Type(() => PropertyUcCallTelephone)
    telephone?: PropertyUcCallTelephone;

    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;
}
