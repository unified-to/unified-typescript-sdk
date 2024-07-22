/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CommerceItemMedia } from "./commerceitemmedia";
import { CommerceItemVariant } from "./commerceitemvariant";
import { Expose, Transform, Type } from "class-transformer";

export class CommerceItem extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "collection_ids" })
    collectionIds?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "is_active" })
    isActive?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "is_taxable" })
    isTaxable?: boolean;

    @SpeakeasyMetadata({ elemType: CommerceItemMedia })
    @Expose({ name: "media" })
    @Type(() => CommerceItemMedia)
    media?: CommerceItemMedia[];

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "public_description" })
    publicDescription?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "public_name" })
    publicName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "raw" })
    raw?: Record<string, any>;

    @SpeakeasyMetadata()
    @Expose({ name: "slug" })
    slug?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "tags" })
    tags?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;

    /**
     * first variant is the default variant
     */
    @SpeakeasyMetadata({ elemType: CommerceItemVariant })
    @Expose({ name: "variants" })
    @Type(() => CommerceItemVariant)
    variants?: CommerceItemVariant[];

    @SpeakeasyMetadata()
    @Expose({ name: "vendor_name" })
    vendorName?: string;
}
