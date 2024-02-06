/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PropertyAtsCompanyAddress } from "./propertyatscompanyaddress";
import { Expose, Transform, Type } from "class-transformer";

export class AtsCompany extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "address" })
    @Type(() => PropertyAtsCompanyAddress)
    address?: PropertyAtsCompanyAddress;

    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "parent_id" })
    parentId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "phone" })
    phone?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "raw" })
    raw?: Record<string, any>;

    @SpeakeasyMetadata()
    @Expose({ name: "recruiter_ids" })
    recruiterIds?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "website_url" })
    websiteUrl?: string;
}