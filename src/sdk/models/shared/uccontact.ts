/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { UcEmail } from "./ucemail";
import { UcTelephone } from "./uctelephone";
import { Expose, Transform, Type } from "class-transformer";

/**
 * A contact represents a person that optionally is associated with a call
 */
export class UcContact extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "company" })
    company?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    /**
     * An array of email addresses for this contact
     */
    @SpeakeasyMetadata({ elemType: UcEmail })
    @Expose({ name: "emails" })
    @Type(() => UcEmail)
    emails?: UcEmail[];

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * The raw data returned by the integration for this contact
     */
    @SpeakeasyMetadata()
    @Expose({ name: "raw" })
    raw?: Record<string, any>;

    /**
     * An array of telephones for this contact
     */
    @SpeakeasyMetadata({ elemType: UcTelephone })
    @Expose({ name: "telephones" })
    @Type(() => UcTelephone)
    telephones?: UcTelephone[];

    @SpeakeasyMetadata()
    @Expose({ name: "title" })
    title?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;
}
