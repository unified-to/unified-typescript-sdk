/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CrmEmail } from "./crmemail";
import { CrmTelephone } from "./crmtelephone";
import { PropertyCrmCompanyAddress } from "./propertycrmcompanyaddress";
import { Expose, Transform, Type } from "class-transformer";

/**
 * A company represents an organization that optionally is associated with a deal and/or contacts
 */
export class CrmCompany extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "address" })
    @Type(() => PropertyCrmCompanyAddress)
    address?: PropertyCrmCompanyAddress;

    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    /**
     * An array of deal IDs associated with this contact
     */
    @SpeakeasyMetadata()
    @Expose({ name: "deal_ids" })
    dealIds?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    @SpeakeasyMetadata({ elemType: CrmEmail })
    @Expose({ name: "emails" })
    @Type(() => CrmEmail)
    emails?: CrmEmail[];

    @SpeakeasyMetadata()
    @Expose({ name: "employees" })
    employees?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "industry" })
    industry?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "is_active" })
    isActive?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "link_urls" })
    linkUrls?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * The raw data returned by the integration for this company
     */
    @SpeakeasyMetadata()
    @Expose({ name: "raw" })
    raw?: Record<string, any>;

    @SpeakeasyMetadata()
    @Expose({ name: "tags" })
    tags?: string[];

    @SpeakeasyMetadata({ elemType: CrmTelephone })
    @Expose({ name: "telephones" })
    @Type(() => CrmTelephone)
    telephones?: CrmTelephone[];

    @SpeakeasyMetadata()
    @Expose({ name: "timezone" })
    timezone?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "user_id" })
    userId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "websites" })
    websites?: string[];
}
