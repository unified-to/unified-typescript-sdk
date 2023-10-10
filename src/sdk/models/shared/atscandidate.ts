/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AtsEmail } from "./atsemail";
import { AtsTelephone } from "./atstelephone";
import { PropertyAtsCandidateAddress } from "./propertyatscandidateaddress";
import { PropertyAtsCandidateRaw } from "./propertyatscandidateraw";
import { Expose, Transform, Type } from "class-transformer";

/**
 * A candidate looking for work
 */
export class AtsCandidate extends SpeakeasyBase {
    /**
     * Unified address object
     */
    @SpeakeasyMetadata()
    @Expose({ name: "address" })
    @Type(() => PropertyAtsCandidateAddress)
    address?: PropertyAtsCandidateAddress;

    @SpeakeasyMetadata()
    @Expose({ name: "company_name" })
    companyName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    @SpeakeasyMetadata({ elemType: AtsEmail })
    @Expose({ name: "emails" })
    @Type(() => AtsEmail)
    emails?: AtsEmail[];

    @SpeakeasyMetadata()
    @Expose({ name: "external_id" })
    externalId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "image_url" })
    imageUrl?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "raw" })
    @Type(() => PropertyAtsCandidateRaw)
    raw?: PropertyAtsCandidateRaw;

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
}
