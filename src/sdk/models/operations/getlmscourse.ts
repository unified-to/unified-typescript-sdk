/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetLmsCourseRequest = {
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the Course
   */
  id: string;
};

/** @internal */
export const GetLmsCourseRequest$inboundSchema: z.ZodType<
  GetLmsCourseRequest,
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
export type GetLmsCourseRequest$Outbound = {
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const GetLmsCourseRequest$outboundSchema: z.ZodType<
  GetLmsCourseRequest$Outbound,
  z.ZodTypeDef,
  GetLmsCourseRequest
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
export namespace GetLmsCourseRequest$ {
  /** @deprecated use `GetLmsCourseRequest$inboundSchema` instead. */
  export const inboundSchema = GetLmsCourseRequest$inboundSchema;
  /** @deprecated use `GetLmsCourseRequest$outboundSchema` instead. */
  export const outboundSchema = GetLmsCourseRequest$outboundSchema;
  /** @deprecated use `GetLmsCourseRequest$Outbound` instead. */
  export type Outbound = GetLmsCourseRequest$Outbound;
}

export function getLmsCourseRequestToJSON(
  getLmsCourseRequest: GetLmsCourseRequest,
): string {
  return JSON.stringify(
    GetLmsCourseRequest$outboundSchema.parse(getLmsCourseRequest),
  );
}

export function getLmsCourseRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetLmsCourseRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetLmsCourseRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetLmsCourseRequest' from JSON`,
  );
}
