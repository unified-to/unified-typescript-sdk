/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type RemoveLmsClassRequest = {
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * ID of the Class
   */
  id: string;
};

export type RemoveLmsClassResponse = {
  headers: { [k: string]: Array<string> };
};

/** @internal */
export const RemoveLmsClassRequest$inboundSchema: z.ZodType<
  RemoveLmsClassRequest,
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
export type RemoveLmsClassRequest$Outbound = {
  connection_id: string;
  id: string;
};

/** @internal */
export const RemoveLmsClassRequest$outboundSchema: z.ZodType<
  RemoveLmsClassRequest$Outbound,
  z.ZodTypeDef,
  RemoveLmsClassRequest
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
export namespace RemoveLmsClassRequest$ {
  /** @deprecated use `RemoveLmsClassRequest$inboundSchema` instead. */
  export const inboundSchema = RemoveLmsClassRequest$inboundSchema;
  /** @deprecated use `RemoveLmsClassRequest$outboundSchema` instead. */
  export const outboundSchema = RemoveLmsClassRequest$outboundSchema;
  /** @deprecated use `RemoveLmsClassRequest$Outbound` instead. */
  export type Outbound = RemoveLmsClassRequest$Outbound;
}

export function removeLmsClassRequestToJSON(
  removeLmsClassRequest: RemoveLmsClassRequest,
): string {
  return JSON.stringify(
    RemoveLmsClassRequest$outboundSchema.parse(removeLmsClassRequest),
  );
}

export function removeLmsClassRequestFromJSON(
  jsonString: string,
): SafeParseResult<RemoveLmsClassRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RemoveLmsClassRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RemoveLmsClassRequest' from JSON`,
  );
}

/** @internal */
export const RemoveLmsClassResponse$inboundSchema: z.ZodType<
  RemoveLmsClassResponse,
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
export type RemoveLmsClassResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
};

/** @internal */
export const RemoveLmsClassResponse$outboundSchema: z.ZodType<
  RemoveLmsClassResponse$Outbound,
  z.ZodTypeDef,
  RemoveLmsClassResponse
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
export namespace RemoveLmsClassResponse$ {
  /** @deprecated use `RemoveLmsClassResponse$inboundSchema` instead. */
  export const inboundSchema = RemoveLmsClassResponse$inboundSchema;
  /** @deprecated use `RemoveLmsClassResponse$outboundSchema` instead. */
  export const outboundSchema = RemoveLmsClassResponse$outboundSchema;
  /** @deprecated use `RemoveLmsClassResponse$Outbound` instead. */
  export type Outbound = RemoveLmsClassResponse$Outbound;
}

export function removeLmsClassResponseToJSON(
  removeLmsClassResponse: RemoveLmsClassResponse,
): string {
  return JSON.stringify(
    RemoveLmsClassResponse$outboundSchema.parse(removeLmsClassResponse),
  );
}

export function removeLmsClassResponseFromJSON(
  jsonString: string,
): SafeParseResult<RemoveLmsClassResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RemoveLmsClassResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RemoveLmsClassResponse' from JSON`,
  );
}
