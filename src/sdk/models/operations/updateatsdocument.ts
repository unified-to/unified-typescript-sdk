/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type UpdateAtsDocumentRequest = {
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
};

/** @internal */
export const UpdateAtsDocumentRequest$inboundSchema: z.ZodType<
  UpdateAtsDocumentRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  AtsDocument: shared.AtsDocument$inboundSchema,
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "AtsDocument": "atsDocument",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type UpdateAtsDocumentRequest$Outbound = {
  AtsDocument: shared.AtsDocument$Outbound;
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const UpdateAtsDocumentRequest$outboundSchema: z.ZodType<
  UpdateAtsDocumentRequest$Outbound,
  z.ZodTypeDef,
  UpdateAtsDocumentRequest
> = z.object({
  atsDocument: shared.AtsDocument$outboundSchema,
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
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
export namespace UpdateAtsDocumentRequest$ {
  /** @deprecated use `UpdateAtsDocumentRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateAtsDocumentRequest$inboundSchema;
  /** @deprecated use `UpdateAtsDocumentRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateAtsDocumentRequest$outboundSchema;
  /** @deprecated use `UpdateAtsDocumentRequest$Outbound` instead. */
  export type Outbound = UpdateAtsDocumentRequest$Outbound;
}

export function updateAtsDocumentRequestToJSON(
  updateAtsDocumentRequest: UpdateAtsDocumentRequest,
): string {
  return JSON.stringify(
    UpdateAtsDocumentRequest$outboundSchema.parse(updateAtsDocumentRequest),
  );
}

export function updateAtsDocumentRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateAtsDocumentRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateAtsDocumentRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateAtsDocumentRequest' from JSON`,
  );
}
