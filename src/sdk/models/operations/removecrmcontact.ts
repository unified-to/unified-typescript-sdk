/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type RemoveCrmContactRequest = {
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * ID of the Contact
   */
  id: string;
};

export type RemoveCrmContactResponse = {
  headers: { [k: string]: Array<string> };
};

/** @internal */
export const RemoveCrmContactRequest$inboundSchema: z.ZodType<
  RemoveCrmContactRequest,
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
export type RemoveCrmContactRequest$Outbound = {
  connection_id: string;
  id: string;
};

/** @internal */
export const RemoveCrmContactRequest$outboundSchema: z.ZodType<
  RemoveCrmContactRequest$Outbound,
  z.ZodTypeDef,
  RemoveCrmContactRequest
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
export namespace RemoveCrmContactRequest$ {
  /** @deprecated use `RemoveCrmContactRequest$inboundSchema` instead. */
  export const inboundSchema = RemoveCrmContactRequest$inboundSchema;
  /** @deprecated use `RemoveCrmContactRequest$outboundSchema` instead. */
  export const outboundSchema = RemoveCrmContactRequest$outboundSchema;
  /** @deprecated use `RemoveCrmContactRequest$Outbound` instead. */
  export type Outbound = RemoveCrmContactRequest$Outbound;
}

export function removeCrmContactRequestToJSON(
  removeCrmContactRequest: RemoveCrmContactRequest,
): string {
  return JSON.stringify(
    RemoveCrmContactRequest$outboundSchema.parse(removeCrmContactRequest),
  );
}

export function removeCrmContactRequestFromJSON(
  jsonString: string,
): SafeParseResult<RemoveCrmContactRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RemoveCrmContactRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RemoveCrmContactRequest' from JSON`,
  );
}

/** @internal */
export const RemoveCrmContactResponse$inboundSchema: z.ZodType<
  RemoveCrmContactResponse,
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
export type RemoveCrmContactResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
};

/** @internal */
export const RemoveCrmContactResponse$outboundSchema: z.ZodType<
  RemoveCrmContactResponse$Outbound,
  z.ZodTypeDef,
  RemoveCrmContactResponse
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
export namespace RemoveCrmContactResponse$ {
  /** @deprecated use `RemoveCrmContactResponse$inboundSchema` instead. */
  export const inboundSchema = RemoveCrmContactResponse$inboundSchema;
  /** @deprecated use `RemoveCrmContactResponse$outboundSchema` instead. */
  export const outboundSchema = RemoveCrmContactResponse$outboundSchema;
  /** @deprecated use `RemoveCrmContactResponse$Outbound` instead. */
  export type Outbound = RemoveCrmContactResponse$Outbound;
}

export function removeCrmContactResponseToJSON(
  removeCrmContactResponse: RemoveCrmContactResponse,
): string {
  return JSON.stringify(
    RemoveCrmContactResponse$outboundSchema.parse(removeCrmContactResponse),
  );
}

export function removeCrmContactResponseFromJSON(
  jsonString: string,
): SafeParseResult<RemoveCrmContactResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RemoveCrmContactResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RemoveCrmContactResponse' from JSON`,
  );
}
