/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type PatchKmsSpaceRequest = {
  kmsSpace: shared.KmsSpace;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the Space
   */
  id: string;
  /**
   * Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar
   */
  raw?: string | undefined;
};

/** @internal */
export const PatchKmsSpaceRequest$inboundSchema: z.ZodType<
  PatchKmsSpaceRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  KmsSpace: shared.KmsSpace$inboundSchema,
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
  raw: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "KmsSpace": "kmsSpace",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type PatchKmsSpaceRequest$Outbound = {
  KmsSpace: shared.KmsSpace$Outbound;
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
  raw?: string | undefined;
};

/** @internal */
export const PatchKmsSpaceRequest$outboundSchema: z.ZodType<
  PatchKmsSpaceRequest$Outbound,
  z.ZodTypeDef,
  PatchKmsSpaceRequest
> = z.object({
  kmsSpace: shared.KmsSpace$outboundSchema,
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
  raw: z.string().optional(),
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
export namespace PatchKmsSpaceRequest$ {
  /** @deprecated use `PatchKmsSpaceRequest$inboundSchema` instead. */
  export const inboundSchema = PatchKmsSpaceRequest$inboundSchema;
  /** @deprecated use `PatchKmsSpaceRequest$outboundSchema` instead. */
  export const outboundSchema = PatchKmsSpaceRequest$outboundSchema;
  /** @deprecated use `PatchKmsSpaceRequest$Outbound` instead. */
  export type Outbound = PatchKmsSpaceRequest$Outbound;
}

export function patchKmsSpaceRequestToJSON(
  patchKmsSpaceRequest: PatchKmsSpaceRequest,
): string {
  return JSON.stringify(
    PatchKmsSpaceRequest$outboundSchema.parse(patchKmsSpaceRequest),
  );
}

export function patchKmsSpaceRequestFromJSON(
  jsonString: string,
): SafeParseResult<PatchKmsSpaceRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchKmsSpaceRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchKmsSpaceRequest' from JSON`,
  );
}
