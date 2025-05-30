/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type PatchAtsDocumentRequest = {
  atsDocument: shared.AtsDocument;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the Document
   */
  id: string;
  /**
   * Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar
   */
  raw?: string | undefined;
};

/** @internal */
export const PatchAtsDocumentRequest$inboundSchema: z.ZodType<
  PatchAtsDocumentRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  AtsDocument: shared.AtsDocument$inboundSchema,
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
  raw: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "AtsDocument": "atsDocument",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type PatchAtsDocumentRequest$Outbound = {
  AtsDocument: shared.AtsDocument$Outbound;
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
  raw?: string | undefined;
};

/** @internal */
export const PatchAtsDocumentRequest$outboundSchema: z.ZodType<
  PatchAtsDocumentRequest$Outbound,
  z.ZodTypeDef,
  PatchAtsDocumentRequest
> = z.object({
  atsDocument: shared.AtsDocument$outboundSchema,
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
  raw: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    atsDocument: "AtsDocument",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchAtsDocumentRequest$ {
  /** @deprecated use `PatchAtsDocumentRequest$inboundSchema` instead. */
  export const inboundSchema = PatchAtsDocumentRequest$inboundSchema;
  /** @deprecated use `PatchAtsDocumentRequest$outboundSchema` instead. */
  export const outboundSchema = PatchAtsDocumentRequest$outboundSchema;
  /** @deprecated use `PatchAtsDocumentRequest$Outbound` instead. */
  export type Outbound = PatchAtsDocumentRequest$Outbound;
}

export function patchAtsDocumentRequestToJSON(
  patchAtsDocumentRequest: PatchAtsDocumentRequest,
): string {
  return JSON.stringify(
    PatchAtsDocumentRequest$outboundSchema.parse(patchAtsDocumentRequest),
  );
}

export function patchAtsDocumentRequestFromJSON(
  jsonString: string,
): SafeParseResult<PatchAtsDocumentRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchAtsDocumentRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchAtsDocumentRequest' from JSON`,
  );
}
