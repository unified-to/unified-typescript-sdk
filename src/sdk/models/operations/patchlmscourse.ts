/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type PatchLmsCourseRequest = {
  lmsCourse: shared.LmsCourse;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the Course
   */
  id: string;
};

/** @internal */
export const PatchLmsCourseRequest$inboundSchema: z.ZodType<
  PatchLmsCourseRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  LmsCourse: shared.LmsCourse$inboundSchema,
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "LmsCourse": "lmsCourse",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type PatchLmsCourseRequest$Outbound = {
  LmsCourse: shared.LmsCourse$Outbound;
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const PatchLmsCourseRequest$outboundSchema: z.ZodType<
  PatchLmsCourseRequest$Outbound,
  z.ZodTypeDef,
  PatchLmsCourseRequest
> = z.object({
  lmsCourse: shared.LmsCourse$outboundSchema,
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    lmsCourse: "LmsCourse",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchLmsCourseRequest$ {
  /** @deprecated use `PatchLmsCourseRequest$inboundSchema` instead. */
  export const inboundSchema = PatchLmsCourseRequest$inboundSchema;
  /** @deprecated use `PatchLmsCourseRequest$outboundSchema` instead. */
  export const outboundSchema = PatchLmsCourseRequest$outboundSchema;
  /** @deprecated use `PatchLmsCourseRequest$Outbound` instead. */
  export type Outbound = PatchLmsCourseRequest$Outbound;
}

export function patchLmsCourseRequestToJSON(
  patchLmsCourseRequest: PatchLmsCourseRequest,
): string {
  return JSON.stringify(
    PatchLmsCourseRequest$outboundSchema.parse(patchLmsCourseRequest),
  );
}

export function patchLmsCourseRequestFromJSON(
  jsonString: string,
): SafeParseResult<PatchLmsCourseRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchLmsCourseRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchLmsCourseRequest' from JSON`,
  );
}
