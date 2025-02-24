/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type PatchTaskProjectRequest = {
  taskProject: shared.TaskProject;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the Project
   */
  id: string;
};

/** @internal */
export const PatchTaskProjectRequest$inboundSchema: z.ZodType<
  PatchTaskProjectRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  TaskProject: shared.TaskProject$inboundSchema,
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "TaskProject": "taskProject",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type PatchTaskProjectRequest$Outbound = {
  TaskProject: shared.TaskProject$Outbound;
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const PatchTaskProjectRequest$outboundSchema: z.ZodType<
  PatchTaskProjectRequest$Outbound,
  z.ZodTypeDef,
  PatchTaskProjectRequest
> = z.object({
  taskProject: shared.TaskProject$outboundSchema,
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    taskProject: "TaskProject",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchTaskProjectRequest$ {
  /** @deprecated use `PatchTaskProjectRequest$inboundSchema` instead. */
  export const inboundSchema = PatchTaskProjectRequest$inboundSchema;
  /** @deprecated use `PatchTaskProjectRequest$outboundSchema` instead. */
  export const outboundSchema = PatchTaskProjectRequest$outboundSchema;
  /** @deprecated use `PatchTaskProjectRequest$Outbound` instead. */
  export type Outbound = PatchTaskProjectRequest$Outbound;
}

export function patchTaskProjectRequestToJSON(
  patchTaskProjectRequest: PatchTaskProjectRequest,
): string {
  return JSON.stringify(
    PatchTaskProjectRequest$outboundSchema.parse(patchTaskProjectRequest),
  );
}

export function patchTaskProjectRequestFromJSON(
  jsonString: string,
): SafeParseResult<PatchTaskProjectRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchTaskProjectRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchTaskProjectRequest' from JSON`,
  );
}
