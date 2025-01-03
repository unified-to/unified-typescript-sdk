/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type PatchTaskCommentRequest = {
  taskComment?: shared.TaskComment | undefined;
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
};

/** @internal */
export const PatchTaskCommentRequest$inboundSchema: z.ZodType<
  PatchTaskCommentRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  TaskComment: shared.TaskComment$inboundSchema.optional(),
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "TaskComment": "taskComment",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type PatchTaskCommentRequest$Outbound = {
  TaskComment?: shared.TaskComment$Outbound | undefined;
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const PatchTaskCommentRequest$outboundSchema: z.ZodType<
  PatchTaskCommentRequest$Outbound,
  z.ZodTypeDef,
  PatchTaskCommentRequest
> = z.object({
  taskComment: shared.TaskComment$outboundSchema.optional(),
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    taskComment: "TaskComment",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchTaskCommentRequest$ {
  /** @deprecated use `PatchTaskCommentRequest$inboundSchema` instead. */
  export const inboundSchema = PatchTaskCommentRequest$inboundSchema;
  /** @deprecated use `PatchTaskCommentRequest$outboundSchema` instead. */
  export const outboundSchema = PatchTaskCommentRequest$outboundSchema;
  /** @deprecated use `PatchTaskCommentRequest$Outbound` instead. */
  export type Outbound = PatchTaskCommentRequest$Outbound;
}

export function patchTaskCommentRequestToJSON(
  patchTaskCommentRequest: PatchTaskCommentRequest,
): string {
  return JSON.stringify(
    PatchTaskCommentRequest$outboundSchema.parse(patchTaskCommentRequest),
  );
}

export function patchTaskCommentRequestFromJSON(
  jsonString: string,
): SafeParseResult<PatchTaskCommentRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchTaskCommentRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchTaskCommentRequest' from JSON`,
  );
}
