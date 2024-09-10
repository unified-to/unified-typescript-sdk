/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type CreateKmsSpaceRequest = {
  kmsSpace?: shared.KmsSpace | undefined;
  /**
   * ID of the connection
   */
  connectionId: string;
};

/** @internal */
export const CreateKmsSpaceRequest$inboundSchema: z.ZodType<
  CreateKmsSpaceRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  KmsSpace: shared.KmsSpace$inboundSchema.optional(),
  connection_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "KmsSpace": "kmsSpace",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type CreateKmsSpaceRequest$Outbound = {
  KmsSpace?: shared.KmsSpace$Outbound | undefined;
  connection_id: string;
};

/** @internal */
export const CreateKmsSpaceRequest$outboundSchema: z.ZodType<
  CreateKmsSpaceRequest$Outbound,
  z.ZodTypeDef,
  CreateKmsSpaceRequest
> = z.object({
  kmsSpace: shared.KmsSpace$outboundSchema.optional(),
  connectionId: z.string(),
}).transform((v) => {
  return remap$(v, {
    kmsSpace: "KmsSpace",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateKmsSpaceRequest$ {
  /** @deprecated use `CreateKmsSpaceRequest$inboundSchema` instead. */
  export const inboundSchema = CreateKmsSpaceRequest$inboundSchema;
  /** @deprecated use `CreateKmsSpaceRequest$outboundSchema` instead. */
  export const outboundSchema = CreateKmsSpaceRequest$outboundSchema;
  /** @deprecated use `CreateKmsSpaceRequest$Outbound` instead. */
  export type Outbound = CreateKmsSpaceRequest$Outbound;
}
