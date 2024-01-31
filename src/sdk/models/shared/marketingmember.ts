/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { MarketingEmail } from "./marketingemail";
import { Expose, Transform, Type } from "class-transformer";

/**
 * A member represents a person
 */
export class MarketingMember extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    /**
     * An array of email addresses for this member
     */
    @SpeakeasyMetadata({ elemType: MarketingEmail })
    @Expose({ name: "emails" })
    @Type(() => MarketingEmail)
    emails?: MarketingEmail[];

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * An array of list IDs associated with this member
     */
    @SpeakeasyMetadata()
    @Expose({ name: "list_ids" })
    listIds?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * The raw data returned by the integration for this member
     */
    @SpeakeasyMetadata()
    @Expose({ name: "raw" })
    raw?: Record<string, any>;

    /**
     * An array of tags associated with this member
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tags" })
    tags?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;
}
