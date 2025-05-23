/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type CreateTaskTaskRequest = {
  taskTask: shared.TaskTask;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar
   */
  raw?: string | undefined;
};

/** @internal */
export const CreateTaskTaskRequest$inboundSchema: z.ZodType<
  CreateTaskTaskRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  TaskTask: shared.TaskTask$inboundSchema,
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  raw: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "TaskTask": "taskTask",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type CreateTaskTaskRequest$Outbound = {
  TaskTask: shared.TaskTask$Outbound;
  connection_id: string;
  fields?: Array<string> | undefined;
  raw?: string | undefined;
};

/** @internal */
export const CreateTaskTaskRequest$outboundSchema: z.ZodType<
  CreateTaskTaskRequest$Outbound,
  z.ZodTypeDef,
  CreateTaskTaskRequest
> = z.object({
  taskTask: shared.TaskTask$outboundSchema,
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  raw: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    taskTask: "TaskTask",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateTaskTaskRequest$ {
  /** @deprecated use `CreateTaskTaskRequest$inboundSchema` instead. */
  export const inboundSchema = CreateTaskTaskRequest$inboundSchema;
  /** @deprecated use `CreateTaskTaskRequest$outboundSchema` instead. */
  export const outboundSchema = CreateTaskTaskRequest$outboundSchema;
  /** @deprecated use `CreateTaskTaskRequest$Outbound` instead. */
  export type Outbound = CreateTaskTaskRequest$Outbound;
}

export function createTaskTaskRequestToJSON(
  createTaskTaskRequest: CreateTaskTaskRequest,
): string {
  return JSON.stringify(
    CreateTaskTaskRequest$outboundSchema.parse(createTaskTaskRequest),
  );
}

export function createTaskTaskRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateTaskTaskRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateTaskTaskRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateTaskTaskRequest' from JSON`,
  );
}
