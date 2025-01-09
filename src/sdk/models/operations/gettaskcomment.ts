/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetTaskCommentRequest = {
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
export const GetTaskCommentRequest$inboundSchema: z.ZodType<
  GetTaskCommentRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "connection_id": "connectionId",
  });
});

/** @internal */
export type GetTaskCommentRequest$Outbound = {
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const GetTaskCommentRequest$outboundSchema: z.ZodType<
  GetTaskCommentRequest$Outbound,
  z.ZodTypeDef,
  GetTaskCommentRequest
> = z.object({
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTaskCommentRequest$ {
  /** @deprecated use `GetTaskCommentRequest$inboundSchema` instead. */
  export const inboundSchema = GetTaskCommentRequest$inboundSchema;
  /** @deprecated use `GetTaskCommentRequest$outboundSchema` instead. */
  export const outboundSchema = GetTaskCommentRequest$outboundSchema;
  /** @deprecated use `GetTaskCommentRequest$Outbound` instead. */
  export type Outbound = GetTaskCommentRequest$Outbound;
}

export function getTaskCommentRequestToJSON(
  getTaskCommentRequest: GetTaskCommentRequest,
): string {
  return JSON.stringify(
    GetTaskCommentRequest$outboundSchema.parse(getTaskCommentRequest),
  );
}

export function getTaskCommentRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetTaskCommentRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetTaskCommentRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetTaskCommentRequest' from JSON`,
  );
}