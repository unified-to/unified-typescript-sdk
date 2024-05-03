/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum Role {
    System = "system",
    User = "user",
}

export class GenaiContent extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "content" })
    content: string;

    @SpeakeasyMetadata()
    @Expose({ name: "role" })
    role?: Role;
}
