/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetTaskTaskRequest = {
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the Task
   */
  id: string;
  /**
   * Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar
   */
  raw?: string | undefined;
};

/** @internal */
export const GetTaskTaskRequest$inboundSchema: z.ZodType<
  GetTaskTaskRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
  raw: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "connection_id": "connectionId",
  });
});

/** @internal */
export type GetTaskTaskRequest$Outbound = {
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
  raw?: string | undefined;
};

/** @internal */
export const GetTaskTaskRequest$outboundSchema: z.ZodType<
  GetTaskTaskRequest$Outbound,
  z.ZodTypeDef,
  GetTaskTaskRequest
> = z.object({
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
  raw: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTaskTaskRequest$ {
  /** @deprecated use `GetTaskTaskRequest$inboundSchema` instead. */
  export const inboundSchema = GetTaskTaskRequest$inboundSchema;
  /** @deprecated use `GetTaskTaskRequest$outboundSchema` instead. */
  export const outboundSchema = GetTaskTaskRequest$outboundSchema;
  /** @deprecated use `GetTaskTaskRequest$Outbound` instead. */
  export type Outbound = GetTaskTaskRequest$Outbound;
}

export function getTaskTaskRequestToJSON(
  getTaskTaskRequest: GetTaskTaskRequest,
): string {
  return JSON.stringify(
    GetTaskTaskRequest$outboundSchema.parse(getTaskTaskRequest),
  );
}

export function getTaskTaskRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetTaskTaskRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetTaskTaskRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetTaskTaskRequest' from JSON`,
  );
}
