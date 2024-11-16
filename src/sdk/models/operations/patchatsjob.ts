/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type PatchAtsJobRequest = {
  atsJob?: shared.AtsJob | undefined;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the Job
   */
  id: string;
};

/** @internal */
export const PatchAtsJobRequest$inboundSchema: z.ZodType<
  PatchAtsJobRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  AtsJob: shared.AtsJob$inboundSchema.optional(),
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "AtsJob": "atsJob",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type PatchAtsJobRequest$Outbound = {
  AtsJob?: shared.AtsJob$Outbound | undefined;
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const PatchAtsJobRequest$outboundSchema: z.ZodType<
  PatchAtsJobRequest$Outbound,
  z.ZodTypeDef,
  PatchAtsJobRequest
> = z.object({
  atsJob: shared.AtsJob$outboundSchema.optional(),
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    atsJob: "AtsJob",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchAtsJobRequest$ {
  /** @deprecated use `PatchAtsJobRequest$inboundSchema` instead. */
  export const inboundSchema = PatchAtsJobRequest$inboundSchema;
  /** @deprecated use `PatchAtsJobRequest$outboundSchema` instead. */
  export const outboundSchema = PatchAtsJobRequest$outboundSchema;
  /** @deprecated use `PatchAtsJobRequest$Outbound` instead. */
  export type Outbound = PatchAtsJobRequest$Outbound;
}

export function patchAtsJobRequestToJSON(
  patchAtsJobRequest: PatchAtsJobRequest,
): string {
  return JSON.stringify(
    PatchAtsJobRequest$outboundSchema.parse(patchAtsJobRequest),
  );
}

export function patchAtsJobRequestFromJSON(
  jsonString: string,
): SafeParseResult<PatchAtsJobRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchAtsJobRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchAtsJobRequest' from JSON`,
  );
}
