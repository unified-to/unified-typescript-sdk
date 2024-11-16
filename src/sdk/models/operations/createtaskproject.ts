/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type CreateTaskProjectRequest = {
  taskProject?: shared.TaskProject | undefined;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
};

/** @internal */
export const CreateTaskProjectRequest$inboundSchema: z.ZodType<
  CreateTaskProjectRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  TaskProject: shared.TaskProject$inboundSchema.optional(),
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "TaskProject": "taskProject",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type CreateTaskProjectRequest$Outbound = {
  TaskProject?: shared.TaskProject$Outbound | undefined;
  connection_id: string;
  fields?: Array<string> | undefined;
};

/** @internal */
export const CreateTaskProjectRequest$outboundSchema: z.ZodType<
  CreateTaskProjectRequest$Outbound,
  z.ZodTypeDef,
  CreateTaskProjectRequest
> = z.object({
  taskProject: shared.TaskProject$outboundSchema.optional(),
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
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
export namespace CreateTaskProjectRequest$ {
  /** @deprecated use `CreateTaskProjectRequest$inboundSchema` instead. */
  export const inboundSchema = CreateTaskProjectRequest$inboundSchema;
  /** @deprecated use `CreateTaskProjectRequest$outboundSchema` instead. */
  export const outboundSchema = CreateTaskProjectRequest$outboundSchema;
  /** @deprecated use `CreateTaskProjectRequest$Outbound` instead. */
  export type Outbound = CreateTaskProjectRequest$Outbound;
}

export function createTaskProjectRequestToJSON(
  createTaskProjectRequest: CreateTaskProjectRequest,
): string {
  return JSON.stringify(
    CreateTaskProjectRequest$outboundSchema.parse(createTaskProjectRequest),
  );
}

export function createTaskProjectRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateTaskProjectRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateTaskProjectRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateTaskProjectRequest' from JSON`,
  );
}
