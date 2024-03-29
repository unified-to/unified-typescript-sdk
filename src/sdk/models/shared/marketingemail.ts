/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum MarketingEmailType {
    Work = "WORK",
    Home = "HOME",
    Other = "OTHER",
}

export class MarketingEmail extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email: string;

    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: MarketingEmailType;
}
