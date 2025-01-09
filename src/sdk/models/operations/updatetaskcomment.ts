/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type UpdateTaskCommentRequest = {
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
export const UpdateTaskCommentRequest$inboundSchema: z.ZodType<
  UpdateTaskCommentRequest,
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
export type UpdateTaskCommentRequest$Outbound = {
  TaskComment?: shared.TaskComment$Outbound | undefined;
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const UpdateTaskCommentRequest$outboundSchema: z.ZodType<
  UpdateTaskCommentRequest$Outbound,
  z.ZodTypeDef,
  UpdateTaskCommentRequest
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
export namespace UpdateTaskCommentRequest$ {
  /** @deprecated use `UpdateTaskCommentRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateTaskCommentRequest$inboundSchema;
  /** @deprecated use `UpdateTaskCommentRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateTaskCommentRequest$outboundSchema;
  /** @deprecated use `UpdateTaskCommentRequest$Outbound` instead. */
  export type Outbound = UpdateTaskCommentRequest$Outbound;
}

export function updateTaskCommentRequestToJSON(
  updateTaskCommentRequest: UpdateTaskCommentRequest,
): string {
  return JSON.stringify(
    UpdateTaskCommentRequest$outboundSchema.parse(updateTaskCommentRequest),
  );
}

export function updateTaskCommentRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateTaskCommentRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateTaskCommentRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateTaskCommentRequest' from JSON`,
  );
}