/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type PatchUcCommentRequest = {
  ucComment: shared.UcComment;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the Comment
   */
  id: string;
  /**
   * Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar
   */
  raw?: string | undefined;
};

/** @internal */
export const PatchUcCommentRequest$inboundSchema: z.ZodType<
  PatchUcCommentRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  UcComment: shared.UcComment$inboundSchema,
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
  raw: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "UcComment": "ucComment",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type PatchUcCommentRequest$Outbound = {
  UcComment: shared.UcComment$Outbound;
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
  raw?: string | undefined;
};

/** @internal */
export const PatchUcCommentRequest$outboundSchema: z.ZodType<
  PatchUcCommentRequest$Outbound,
  z.ZodTypeDef,
  PatchUcCommentRequest
> = z.object({
  ucComment: shared.UcComment$outboundSchema,
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
  raw: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    ucComment: "UcComment",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchUcCommentRequest$ {
  /** @deprecated use `PatchUcCommentRequest$inboundSchema` instead. */
  export const inboundSchema = PatchUcCommentRequest$inboundSchema;
  /** @deprecated use `PatchUcCommentRequest$outboundSchema` instead. */
  export const outboundSchema = PatchUcCommentRequest$outboundSchema;
  /** @deprecated use `PatchUcCommentRequest$Outbound` instead. */
  export type Outbound = PatchUcCommentRequest$Outbound;
}

export function patchUcCommentRequestToJSON(
  patchUcCommentRequest: PatchUcCommentRequest,
): string {
  return JSON.stringify(
    PatchUcCommentRequest$outboundSchema.parse(patchUcCommentRequest),
  );
}

export function patchUcCommentRequestFromJSON(
  jsonString: string,
): SafeParseResult<PatchUcCommentRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchUcCommentRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchUcCommentRequest' from JSON`,
  );
}
