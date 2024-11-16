/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type UpdateAtsCandidateRequest = {
  atsCandidate?: shared.AtsCandidate | undefined;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the Candidate
   */
  id: string;
};

/** @internal */
export const UpdateAtsCandidateRequest$inboundSchema: z.ZodType<
  UpdateAtsCandidateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  AtsCandidate: shared.AtsCandidate$inboundSchema.optional(),
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "AtsCandidate": "atsCandidate",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type UpdateAtsCandidateRequest$Outbound = {
  AtsCandidate?: shared.AtsCandidate$Outbound | undefined;
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const UpdateAtsCandidateRequest$outboundSchema: z.ZodType<
  UpdateAtsCandidateRequest$Outbound,
  z.ZodTypeDef,
  UpdateAtsCandidateRequest
> = z.object({
  atsCandidate: shared.AtsCandidate$outboundSchema.optional(),
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    atsCandidate: "AtsCandidate",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateAtsCandidateRequest$ {
  /** @deprecated use `UpdateAtsCandidateRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateAtsCandidateRequest$inboundSchema;
  /** @deprecated use `UpdateAtsCandidateRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateAtsCandidateRequest$outboundSchema;
  /** @deprecated use `UpdateAtsCandidateRequest$Outbound` instead. */
  export type Outbound = UpdateAtsCandidateRequest$Outbound;
}

export function updateAtsCandidateRequestToJSON(
  updateAtsCandidateRequest: UpdateAtsCandidateRequest,
): string {
  return JSON.stringify(
    UpdateAtsCandidateRequest$outboundSchema.parse(updateAtsCandidateRequest),
  );
}

export function updateAtsCandidateRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateAtsCandidateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateAtsCandidateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateAtsCandidateRequest' from JSON`,
  );
}
