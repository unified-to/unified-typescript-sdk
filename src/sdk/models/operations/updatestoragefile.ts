/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type UpdateStorageFileRequest = {
  storageFile?: shared.StorageFile | undefined;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the File
   */
  id: string;
};

/** @internal */
export const UpdateStorageFileRequest$inboundSchema: z.ZodType<
  UpdateStorageFileRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  StorageFile: shared.StorageFile$inboundSchema.optional(),
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "StorageFile": "storageFile",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type UpdateStorageFileRequest$Outbound = {
  StorageFile?: shared.StorageFile$Outbound | undefined;
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const UpdateStorageFileRequest$outboundSchema: z.ZodType<
  UpdateStorageFileRequest$Outbound,
  z.ZodTypeDef,
  UpdateStorageFileRequest
> = z.object({
  storageFile: shared.StorageFile$outboundSchema.optional(),
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    storageFile: "StorageFile",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateStorageFileRequest$ {
  /** @deprecated use `UpdateStorageFileRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateStorageFileRequest$inboundSchema;
  /** @deprecated use `UpdateStorageFileRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateStorageFileRequest$outboundSchema;
  /** @deprecated use `UpdateStorageFileRequest$Outbound` instead. */
  export type Outbound = UpdateStorageFileRequest$Outbound;
}
