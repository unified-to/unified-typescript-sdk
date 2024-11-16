/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetRepoCommitRequest = {
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the Commit
   */
  id: string;
};

/** @internal */
export const GetRepoCommitRequest$inboundSchema: z.ZodType<
  GetRepoCommitRequest,
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
export type GetRepoCommitRequest$Outbound = {
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const GetRepoCommitRequest$outboundSchema: z.ZodType<
  GetRepoCommitRequest$Outbound,
  z.ZodTypeDef,
  GetRepoCommitRequest
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
export namespace GetRepoCommitRequest$ {
  /** @deprecated use `GetRepoCommitRequest$inboundSchema` instead. */
  export const inboundSchema = GetRepoCommitRequest$inboundSchema;
  /** @deprecated use `GetRepoCommitRequest$outboundSchema` instead. */
  export const outboundSchema = GetRepoCommitRequest$outboundSchema;
  /** @deprecated use `GetRepoCommitRequest$Outbound` instead. */
  export type Outbound = GetRepoCommitRequest$Outbound;
}

export function getRepoCommitRequestToJSON(
  getRepoCommitRequest: GetRepoCommitRequest,
): string {
  return JSON.stringify(
    GetRepoCommitRequest$outboundSchema.parse(getRepoCommitRequest),
  );
}

export function getRepoCommitRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetRepoCommitRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetRepoCommitRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetRepoCommitRequest' from JSON`,
  );
}
