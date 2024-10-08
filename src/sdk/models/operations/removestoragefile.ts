/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type RemoveStorageFileRequest = {
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * ID of the File
   */
  id: string;
};

/** @internal */
export const RemoveStorageFileRequest$inboundSchema: z.ZodType<
  RemoveStorageFileRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  connection_id: z.string(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "connection_id": "connectionId",
  });
});

/** @internal */
export type RemoveStorageFileRequest$Outbound = {
  connection_id: string;
  id: string;
};

/** @internal */
export const RemoveStorageFileRequest$outboundSchema: z.ZodType<
  RemoveStorageFileRequest$Outbound,
  z.ZodTypeDef,
  RemoveStorageFileRequest
> = z.object({
  connectionId: z.string(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RemoveStorageFileRequest$ {
  /** @deprecated use `RemoveStorageFileRequest$inboundSchema` instead. */
  export const inboundSchema = RemoveStorageFileRequest$inboundSchema;
  /** @deprecated use `RemoveStorageFileRequest$outboundSchema` instead. */
  export const outboundSchema = RemoveStorageFileRequest$outboundSchema;
  /** @deprecated use `RemoveStorageFileRequest$Outbound` instead. */
  export type Outbound = RemoveStorageFileRequest$Outbound;
}
