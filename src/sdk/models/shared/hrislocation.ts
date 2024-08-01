/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { HrisTelephone } from "./hristelephone";
import { PropertyHrisLocationAddress } from "./propertyhrislocationaddress";
import { Expose, Transform, Type } from "class-transformer";

export class HrisLocation extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "address" })
    @Type(() => PropertyHrisLocationAddress)
    address?: PropertyHrisLocationAddress;

    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "currency" })
    currency?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "external_identifier" })
    externalIdentifier?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "is_active" })
    isActive?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "is_hq" })
    isHq?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "language_locale" })
    languageLocale?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "parent_id" })
    parentId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "raw" })
    raw?: Record<string, any>;

    @SpeakeasyMetadata({ elemType: HrisTelephone })
    @Expose({ name: "telephones" })
    @Type(() => HrisTelephone)
    telephones?: HrisTelephone[];

    @SpeakeasyMetadata()
    @Expose({ name: "timezone" })
    timezone?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;
}
