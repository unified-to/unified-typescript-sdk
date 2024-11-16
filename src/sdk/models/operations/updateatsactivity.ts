/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type UpdateAtsActivityRequest = {
  atsActivity?: shared.AtsActivity | undefined;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the Activity
   */
  id: string;
};

/** @internal */
export const UpdateAtsActivityRequest$inboundSchema: z.ZodType<
  UpdateAtsActivityRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  AtsActivity: shared.AtsActivity$inboundSchema.optional(),
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "AtsActivity": "atsActivity",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type UpdateAtsActivityRequest$Outbound = {
  AtsActivity?: shared.AtsActivity$Outbound | undefined;
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const UpdateAtsActivityRequest$outboundSchema: z.ZodType<
  UpdateAtsActivityRequest$Outbound,
  z.ZodTypeDef,
  UpdateAtsActivityRequest
> = z.object({
  atsActivity: shared.AtsActivity$outboundSchema.optional(),
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    atsActivity: "AtsActivity",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateAtsActivityRequest$ {
  /** @deprecated use `UpdateAtsActivityRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateAtsActivityRequest$inboundSchema;
  /** @deprecated use `UpdateAtsActivityRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateAtsActivityRequest$outboundSchema;
  /** @deprecated use `UpdateAtsActivityRequest$Outbound` instead. */
  export type Outbound = UpdateAtsActivityRequest$Outbound;
}

export function updateAtsActivityRequestToJSON(
  updateAtsActivityRequest: UpdateAtsActivityRequest,
): string {
  return JSON.stringify(
    UpdateAtsActivityRequest$outboundSchema.parse(updateAtsActivityRequest),
  );
}

export function updateAtsActivityRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateAtsActivityRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateAtsActivityRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateAtsActivityRequest' from JSON`,
  );
}
