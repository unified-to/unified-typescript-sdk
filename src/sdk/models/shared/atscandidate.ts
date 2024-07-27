/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AtsEmail } from "./atsemail";
import { AtsTelephone } from "./atstelephone";
import { PropertyAtsCandidateAddress } from "./propertyatscandidateaddress";
import { Expose, Transform, Type } from "class-transformer";

export enum Origin {
    Agency = "AGENCY",
    Applied = "APPLIED",
    Internal = "INTERNAL",
    Referred = "REFERRED",
    Sourced = "SOURCED",
    University = "UNIVERSITY",
}

export class AtsCandidate extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "address" })
    @Type(() => PropertyAtsCandidateAddress)
    address?: PropertyAtsCandidateAddress;

    @SpeakeasyMetadata()
    @Expose({ name: "company_id" })
    companyId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "company_name" })
    companyName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "date_of_birth" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    dateOfBirth?: Date;

    @SpeakeasyMetadata({ elemType: AtsEmail })
    @Expose({ name: "emails" })
    @Type(() => AtsEmail)
    emails?: AtsEmail[];

    @SpeakeasyMetadata()
    @Expose({ name: "external_identifier" })
    externalIdentifier?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "image_url" })
    imageUrl?: string;

    /**
     * URLs for web pages containing additional material about the candidate (LinkedIn, other social media, articles, etc.)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "link_urls" })
    linkUrls?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "origin" })
    origin?: Origin;

    @SpeakeasyMetadata()
    @Expose({ name: "raw" })
    raw?: Record<string, any>;

    @SpeakeasyMetadata()
    @Expose({ name: "sources" })
    sources?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "tags" })
    tags?: string[];

    @SpeakeasyMetadata({ elemType: AtsTelephone })
    @Expose({ name: "telephones" })
    @Type(() => AtsTelephone)
    telephones?: AtsTelephone[];

    @SpeakeasyMetadata()
    @Expose({ name: "title" })
    title?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "user_id" })
    userId?: string;
}
