/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetAtsApplicationRequest = {
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the Application
   */
  id: string;
};

/** @internal */
export const GetAtsApplicationRequest$inboundSchema: z.ZodType<
  GetAtsApplicationRequest,
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
export type GetAtsApplicationRequest$Outbound = {
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const GetAtsApplicationRequest$outboundSchema: z.ZodType<
  GetAtsApplicationRequest$Outbound,
  z.ZodTypeDef,
  GetAtsApplicationRequest
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
export namespace GetAtsApplicationRequest$ {
  /** @deprecated use `GetAtsApplicationRequest$inboundSchema` instead. */
  export const inboundSchema = GetAtsApplicationRequest$inboundSchema;
  /** @deprecated use `GetAtsApplicationRequest$outboundSchema` instead. */
  export const outboundSchema = GetAtsApplicationRequest$outboundSchema;
  /** @deprecated use `GetAtsApplicationRequest$Outbound` instead. */
  export type Outbound = GetAtsApplicationRequest$Outbound;
}

export function getAtsApplicationRequestToJSON(
  getAtsApplicationRequest: GetAtsApplicationRequest,
): string {
  return JSON.stringify(
    GetAtsApplicationRequest$outboundSchema.parse(getAtsApplicationRequest),
  );
}

export function getAtsApplicationRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetAtsApplicationRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAtsApplicationRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAtsApplicationRequest' from JSON`,
  );
}
