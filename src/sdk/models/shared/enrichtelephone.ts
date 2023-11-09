/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum EnrichTelephoneType {
    Work = "WORK",
    Home = "HOME",
    Other = "OTHER",
    Fax = "FAX",
    Mobile = "MOBILE",
}

export class EnrichTelephone extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "telephone" })
    telephone: string;

    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: EnrichTelephoneType;
}
