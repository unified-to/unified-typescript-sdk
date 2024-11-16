/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type RemoveLmsStudentRequest = {
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * ID of the Student
   */
  id: string;
};

export type RemoveLmsStudentResponse = {
  headers: { [k: string]: Array<string> };
};

/** @internal */
export const RemoveLmsStudentRequest$inboundSchema: z.ZodType<
  RemoveLmsStudentRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  connection_id: z.string(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "connection_id": "connectionId",
  });
});

/** @internal */
export type RemoveLmsStudentRequest$Outbound = {
  connection_id: string;
  id: string;
};

/** @internal */
export const RemoveLmsStudentRequest$outboundSchema: z.ZodType<
  RemoveLmsStudentRequest$Outbound,
  z.ZodTypeDef,
  RemoveLmsStudentRequest
> = z.object({
  connectionId: z.string(),
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
export namespace RemoveLmsStudentRequest$ {
  /** @deprecated use `RemoveLmsStudentRequest$inboundSchema` instead. */
  export const inboundSchema = RemoveLmsStudentRequest$inboundSchema;
  /** @deprecated use `RemoveLmsStudentRequest$outboundSchema` instead. */
  export const outboundSchema = RemoveLmsStudentRequest$outboundSchema;
  /** @deprecated use `RemoveLmsStudentRequest$Outbound` instead. */
  export type Outbound = RemoveLmsStudentRequest$Outbound;
}

export function removeLmsStudentRequestToJSON(
  removeLmsStudentRequest: RemoveLmsStudentRequest,
): string {
  return JSON.stringify(
    RemoveLmsStudentRequest$outboundSchema.parse(removeLmsStudentRequest),
  );
}

export function removeLmsStudentRequestFromJSON(
  jsonString: string,
): SafeParseResult<RemoveLmsStudentRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RemoveLmsStudentRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RemoveLmsStudentRequest' from JSON`,
  );
}

/** @internal */
export const RemoveLmsStudentResponse$inboundSchema: z.ZodType<
  RemoveLmsStudentResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Headers: z.record(z.array(z.string())),
}).transform((v) => {
  return remap$(v, {
    "Headers": "headers",
  });
});

/** @internal */
export type RemoveLmsStudentResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
};

/** @internal */
export const RemoveLmsStudentResponse$outboundSchema: z.ZodType<
  RemoveLmsStudentResponse$Outbound,
  z.ZodTypeDef,
  RemoveLmsStudentResponse
> = z.object({
  headers: z.record(z.array(z.string())),
}).transform((v) => {
  return remap$(v, {
    headers: "Headers",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RemoveLmsStudentResponse$ {
  /** @deprecated use `RemoveLmsStudentResponse$inboundSchema` instead. */
  export const inboundSchema = RemoveLmsStudentResponse$inboundSchema;
  /** @deprecated use `RemoveLmsStudentResponse$outboundSchema` instead. */
  export const outboundSchema = RemoveLmsStudentResponse$outboundSchema;
  /** @deprecated use `RemoveLmsStudentResponse$Outbound` instead. */
  export type Outbound = RemoveLmsStudentResponse$Outbound;
}

export function removeLmsStudentResponseToJSON(
  removeLmsStudentResponse: RemoveLmsStudentResponse,
): string {
  return JSON.stringify(
    RemoveLmsStudentResponse$outboundSchema.parse(removeLmsStudentResponse),
  );
}

export function removeLmsStudentResponseFromJSON(
  jsonString: string,
): SafeParseResult<RemoveLmsStudentResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RemoveLmsStudentResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RemoveLmsStudentResponse' from JSON`,
  );
}
