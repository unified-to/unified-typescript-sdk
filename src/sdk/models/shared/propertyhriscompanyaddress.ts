/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class PropertyHrisCompanyAddress extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "address1" })
    address1?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "address2" })
    address2?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "city" })
    city?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "country" })
    country?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "country_code" })
    countryCode?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "postal_code" })
    postalCode?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "region" })
    region?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "region_code" })
    regionCode?: string;
}
