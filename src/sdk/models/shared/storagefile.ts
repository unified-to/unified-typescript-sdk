/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import {
  StoragePermission,
  StoragePermission$inboundSchema,
  StoragePermission$Outbound,
  StoragePermission$outboundSchema,
} from "./storagepermission.js";

export const StorageFileType = {
  File: "FILE",
  Folder: "FOLDER",
} as const;
export type StorageFileType = ClosedEnum<typeof StorageFileType>;

export type StorageFile = {
  createdAt?: Date | undefined;
  description?: string | undefined;
  downloadUrl?: string | undefined;
  hash?: string | undefined;
  id?: string | undefined;
  mimeType?: string | undefined;
  name?: string | undefined;
  parentId?: string | undefined;
  permissions?: Array<StoragePermission> | undefined;
  raw?: { [k: string]: any } | undefined;
  size?: number | undefined;
  type?: StorageFileType | undefined;
  updatedAt?: Date | undefined;
  userId?: string | undefined;
};

/** @internal */
export const StorageFileType$inboundSchema: z.ZodNativeEnum<
  typeof StorageFileType
> = z.nativeEnum(StorageFileType);

/** @internal */
export const StorageFileType$outboundSchema: z.ZodNativeEnum<
  typeof StorageFileType
> = StorageFileType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StorageFileType$ {
  /** @deprecated use `StorageFileType$inboundSchema` instead. */
  export const inboundSchema = StorageFileType$inboundSchema;
  /** @deprecated use `StorageFileType$outboundSchema` instead. */
  export const outboundSchema = StorageFileType$outboundSchema;
}

/** @internal */
export const StorageFile$inboundSchema: z.ZodType<
  StorageFile,
  z.ZodTypeDef,
  unknown
> = z.object({
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  description: z.string().optional(),
  download_url: z.string().optional(),
  hash: z.string().optional(),
  id: z.string().optional(),
  mime_type: z.string().optional(),
  name: z.string().optional(),
  parent_id: z.string().optional(),
  permissions: z.array(StoragePermission$inboundSchema).optional(),
  raw: z.record(z.any()).optional(),
  size: z.number().optional(),
  type: StorageFileType$inboundSchema.optional(),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  user_id: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "download_url": "downloadUrl",
    "mime_type": "mimeType",
    "parent_id": "parentId",
    "updated_at": "updatedAt",
    "user_id": "userId",
  });
});

/** @internal */
export type StorageFile$Outbound = {
  created_at?: string | undefined;
  description?: string | undefined;
  download_url?: string | undefined;
  hash?: string | undefined;
  id?: string | undefined;
  mime_type?: string | undefined;
  name?: string | undefined;
  parent_id?: string | undefined;
  permissions?: Array<StoragePermission$Outbound> | undefined;
  raw?: { [k: string]: any } | undefined;
  size?: number | undefined;
  type?: string | undefined;
  updated_at?: string | undefined;
  user_id?: string | undefined;
};

/** @internal */
export const StorageFile$outboundSchema: z.ZodType<
  StorageFile$Outbound,
  z.ZodTypeDef,
  StorageFile
> = z.object({
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  description: z.string().optional(),
  downloadUrl: z.string().optional(),
  hash: z.string().optional(),
  id: z.string().optional(),
  mimeType: z.string().optional(),
  name: z.string().optional(),
  parentId: z.string().optional(),
  permissions: z.array(StoragePermission$outboundSchema).optional(),
  raw: z.record(z.any()).optional(),
  size: z.number().optional(),
  type: StorageFileType$outboundSchema.optional(),
  updatedAt: z.date().transform(v => v.toISOString()).optional(),
  userId: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    downloadUrl: "download_url",
    mimeType: "mime_type",
    parentId: "parent_id",
    updatedAt: "updated_at",
    userId: "user_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StorageFile$ {
  /** @deprecated use `StorageFile$inboundSchema` instead. */
  export const inboundSchema = StorageFile$inboundSchema;
  /** @deprecated use `StorageFile$outboundSchema` instead. */
  export const outboundSchema = StorageFile$outboundSchema;
  /** @deprecated use `StorageFile$Outbound` instead. */
  export type Outbound = StorageFile$Outbound;
}
