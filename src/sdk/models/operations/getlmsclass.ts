/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetLmsClassRequest = {
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the Class
   */
  id: string;
};

/** @internal */
export const GetLmsClassRequest$inboundSchema: z.ZodType<
  GetLmsClassRequest,
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
export type GetLmsClassRequest$Outbound = {
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const GetLmsClassRequest$outboundSchema: z.ZodType<
  GetLmsClassRequest$Outbound,
  z.ZodTypeDef,
  GetLmsClassRequest
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
export namespace GetLmsClassRequest$ {
  /** @deprecated use `GetLmsClassRequest$inboundSchema` instead. */
  export const inboundSchema = GetLmsClassRequest$inboundSchema;
  /** @deprecated use `GetLmsClassRequest$outboundSchema` instead. */
  export const outboundSchema = GetLmsClassRequest$outboundSchema;
  /** @deprecated use `GetLmsClassRequest$Outbound` instead. */
  export type Outbound = GetLmsClassRequest$Outbound;
}

export function getLmsClassRequestToJSON(
  getLmsClassRequest: GetLmsClassRequest,
): string {
  return JSON.stringify(
    GetLmsClassRequest$outboundSchema.parse(getLmsClassRequest),
  );
}

export function getLmsClassRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetLmsClassRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetLmsClassRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetLmsClassRequest' from JSON`,
  );
}
