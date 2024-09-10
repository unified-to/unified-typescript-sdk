/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type GetKmsPageRequest = {
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the Page
   */
  id: string;
};

/** @internal */
export const GetKmsPageRequest$inboundSchema: z.ZodType<
  GetKmsPageRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "connection_id": "connectionId",
  });
});

/** @internal */
export type GetKmsPageRequest$Outbound = {
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const GetKmsPageRequest$outboundSchema: z.ZodType<
  GetKmsPageRequest$Outbound,
  z.ZodTypeDef,
  GetKmsPageRequest
> = z.object({
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
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
export namespace GetKmsPageRequest$ {
  /** @deprecated use `GetKmsPageRequest$inboundSchema` instead. */
  export const inboundSchema = GetKmsPageRequest$inboundSchema;
  /** @deprecated use `GetKmsPageRequest$outboundSchema` instead. */
  export const outboundSchema = GetKmsPageRequest$outboundSchema;
  /** @deprecated use `GetKmsPageRequest$Outbound` instead. */
  export type Outbound = GetKmsPageRequest$Outbound;
}
