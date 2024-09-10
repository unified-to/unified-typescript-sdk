/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type PatchKmsPageRequest = {
  kmsPage?: shared.KmsPage | undefined;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * ID of the Page
   */
  id: string;
};

/** @internal */
export const PatchKmsPageRequest$inboundSchema: z.ZodType<
  PatchKmsPageRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  KmsPage: shared.KmsPage$inboundSchema.optional(),
  connection_id: z.string(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "KmsPage": "kmsPage",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type PatchKmsPageRequest$Outbound = {
  KmsPage?: shared.KmsPage$Outbound | undefined;
  connection_id: string;
  id: string;
};

/** @internal */
export const PatchKmsPageRequest$outboundSchema: z.ZodType<
  PatchKmsPageRequest$Outbound,
  z.ZodTypeDef,
  PatchKmsPageRequest
> = z.object({
  kmsPage: shared.KmsPage$outboundSchema.optional(),
  connectionId: z.string(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    kmsPage: "KmsPage",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchKmsPageRequest$ {
  /** @deprecated use `PatchKmsPageRequest$inboundSchema` instead. */
  export const inboundSchema = PatchKmsPageRequest$inboundSchema;
  /** @deprecated use `PatchKmsPageRequest$outboundSchema` instead. */
  export const outboundSchema = PatchKmsPageRequest$outboundSchema;
  /** @deprecated use `PatchKmsPageRequest$Outbound` instead. */
  export type Outbound = PatchKmsPageRequest$Outbound;
}
