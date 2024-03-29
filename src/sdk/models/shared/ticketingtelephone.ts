/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum TicketingTelephoneType {
    Work = "WORK",
    Home = "HOME",
    Other = "OTHER",
    Fax = "FAX",
    Mobile = "MOBILE",
}

export class TicketingTelephone extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "telephone" })
    telephone: string;

    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: TicketingTelephoneType;
}
