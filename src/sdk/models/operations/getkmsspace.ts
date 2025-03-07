/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetKmsSpaceRequest = {
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the Space
   */
  id: string;
};

/** @internal */
export const GetKmsSpaceRequest$inboundSchema: z.ZodType<
  GetKmsSpaceRequest,
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
export type GetKmsSpaceRequest$Outbound = {
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const GetKmsSpaceRequest$outboundSchema: z.ZodType<
  GetKmsSpaceRequest$Outbound,
  z.ZodTypeDef,
  GetKmsSpaceRequest
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
export namespace GetKmsSpaceRequest$ {
  /** @deprecated use `GetKmsSpaceRequest$inboundSchema` instead. */
  export const inboundSchema = GetKmsSpaceRequest$inboundSchema;
  /** @deprecated use `GetKmsSpaceRequest$outboundSchema` instead. */
  export const outboundSchema = GetKmsSpaceRequest$outboundSchema;
  /** @deprecated use `GetKmsSpaceRequest$Outbound` instead. */
  export type Outbound = GetKmsSpaceRequest$Outbound;
}

export function getKmsSpaceRequestToJSON(
  getKmsSpaceRequest: GetKmsSpaceRequest,
): string {
  return JSON.stringify(
    GetKmsSpaceRequest$outboundSchema.parse(getKmsSpaceRequest),
  );
}

export function getKmsSpaceRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetKmsSpaceRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetKmsSpaceRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetKmsSpaceRequest' from JSON`,
  );
}
