/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetHrisEmployeeRequest = {
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the Employee
   */
  id: string;
};

/** @internal */
export const GetHrisEmployeeRequest$inboundSchema: z.ZodType<
  GetHrisEmployeeRequest,
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
export type GetHrisEmployeeRequest$Outbound = {
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const GetHrisEmployeeRequest$outboundSchema: z.ZodType<
  GetHrisEmployeeRequest$Outbound,
  z.ZodTypeDef,
  GetHrisEmployeeRequest
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
export namespace GetHrisEmployeeRequest$ {
  /** @deprecated use `GetHrisEmployeeRequest$inboundSchema` instead. */
  export const inboundSchema = GetHrisEmployeeRequest$inboundSchema;
  /** @deprecated use `GetHrisEmployeeRequest$outboundSchema` instead. */
  export const outboundSchema = GetHrisEmployeeRequest$outboundSchema;
  /** @deprecated use `GetHrisEmployeeRequest$Outbound` instead. */
  export type Outbound = GetHrisEmployeeRequest$Outbound;
}

export function getHrisEmployeeRequestToJSON(
  getHrisEmployeeRequest: GetHrisEmployeeRequest,
): string {
  return JSON.stringify(
    GetHrisEmployeeRequest$outboundSchema.parse(getHrisEmployeeRequest),
  );
}

export function getHrisEmployeeRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetHrisEmployeeRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetHrisEmployeeRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetHrisEmployeeRequest' from JSON`,
  );
}
