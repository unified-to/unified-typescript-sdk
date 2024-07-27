/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { EnrichTelephone } from "./enrichtelephone";
import { PropertyEnrichCompanyAddress } from "./propertyenrichcompanyaddress";
import { Expose, Transform, Type } from "class-transformer";

/**
 * A company object from an enrichment integration
 */
export class EnrichCompany extends SpeakeasyBase {
    /**
     * The address of the company
     */
    @SpeakeasyMetadata()
    @Expose({ name: "address" })
    @Type(() => PropertyEnrichCompanyAddress)
    address?: PropertyEnrichCompanyAddress;

    @SpeakeasyMetadata()
    @Expose({ name: "alexa_rank" })
    alexaRank?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "crunchbase_url" })
    crunchbaseUrl?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "domain" })
    domain?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "employees" })
    employees?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "exchange" })
    exchange?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "facebook_url" })
    facebookUrl?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "industry" })
    industry?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "instagram_url" })
    instagramUrl?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "linkedin_url" })
    linkedinUrl?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "logo_url" })
    logoUrl?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "naics_code" })
    naicsCode?: number;

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
    @Expose({ name: "revenue" })
    revenue?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "sic_code" })
    sicCode?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "stock" })
    stock?: string;

    /**
     * An array of telephones for this company
     */
    @SpeakeasyMetadata({ elemType: EnrichTelephone })
    @Expose({ name: "telephones" })
    @Type(() => EnrichTelephone)
    telephones?: EnrichTelephone[];

    @SpeakeasyMetadata()
    @Expose({ name: "twitter_handle" })
    twitterHandle?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "twitter_url" })
    twitterUrl?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "year_founded" })
    yearFounded?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "yelp_url" })
    yelpUrl?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "youtube_url" })
    youtubeUrl?: string;
}
