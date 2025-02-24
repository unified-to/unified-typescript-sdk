/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type UpdateAtsInterviewRequest = {
  atsInterview: shared.AtsInterview;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the Interview
   */
  id: string;
};

/** @internal */
export const UpdateAtsInterviewRequest$inboundSchema: z.ZodType<
  UpdateAtsInterviewRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  AtsInterview: shared.AtsInterview$inboundSchema,
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "AtsInterview": "atsInterview",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type UpdateAtsInterviewRequest$Outbound = {
  AtsInterview: shared.AtsInterview$Outbound;
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const UpdateAtsInterviewRequest$outboundSchema: z.ZodType<
  UpdateAtsInterviewRequest$Outbound,
  z.ZodTypeDef,
  UpdateAtsInterviewRequest
> = z.object({
  atsInterview: shared.AtsInterview$outboundSchema,
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    atsInterview: "AtsInterview",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateAtsInterviewRequest$ {
  /** @deprecated use `UpdateAtsInterviewRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateAtsInterviewRequest$inboundSchema;
  /** @deprecated use `UpdateAtsInterviewRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateAtsInterviewRequest$outboundSchema;
  /** @deprecated use `UpdateAtsInterviewRequest$Outbound` instead. */
  export type Outbound = UpdateAtsInterviewRequest$Outbound;
}

export function updateAtsInterviewRequestToJSON(
  updateAtsInterviewRequest: UpdateAtsInterviewRequest,
): string {
  return JSON.stringify(
    UpdateAtsInterviewRequest$outboundSchema.parse(updateAtsInterviewRequest),
  );
}

export function updateAtsInterviewRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateAtsInterviewRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateAtsInterviewRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateAtsInterviewRequest' from JSON`,
  );
}
