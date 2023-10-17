/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CrmEmail } from "./crmemail";
import { CrmTelephone } from "./crmtelephone";
import { PropertyCrmUserAddress } from "./propertycrmuseraddress";
import { PropertyCrmUserRaw } from "./propertycrmuserraw";
import { Expose, Transform, Type } from "class-transformer";

export class CrmUser extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "address" })
    @Type(() => PropertyCrmUserAddress)
    address?: PropertyCrmUserAddress;

    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "currency" })
    currency?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "department" })
    department?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "division" })
    division?: string;

    @SpeakeasyMetadata({ elemType: CrmEmail })
    @Expose({ name: "emails" })
    @Type(() => CrmEmail)
    emails?: CrmEmail[];

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "image_url" })
    imageUrl?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "is_active" })
    isActive?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "language_locale" })
    languageLocale?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "raw" })
    @Type(() => PropertyCrmUserRaw)
    raw?: PropertyCrmUserRaw;

    @SpeakeasyMetadata({ elemType: CrmTelephone })
    @Expose({ name: "telephones" })
    @Type(() => CrmTelephone)
    telephones?: CrmTelephone[];

    @SpeakeasyMetadata()
    @Expose({ name: "timezone" })
    timezone?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "title" })
    title?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;
}
