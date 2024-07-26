/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { StoragePermission } from "./storagepermission";
import { Expose, Transform, Type } from "class-transformer";

export enum StorageFileType {
    File = "FILE",
    Folder = "FOLDER",
}

export class StorageFile extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "download_url" })
    downloadUrl?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "hash" })
    hash?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "mime_type" })
    mimeType?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "parent_id" })
    parentId?: string;

    @SpeakeasyMetadata({ elemType: StoragePermission })
    @Expose({ name: "permissions" })
    @Type(() => StoragePermission)
    permissions?: StoragePermission[];

    @SpeakeasyMetadata()
    @Expose({ name: "raw" })
    raw?: Record<string, any>;

    @SpeakeasyMetadata()
    @Expose({ name: "size" })
    size?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: StorageFileType;

    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "user_id" })
    userId?: string;
}
