/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type RemovePaymentLinkRequest = {
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * ID of the Link
   */
  id: string;
};

export type RemovePaymentLinkResponse = {
  headers: { [k: string]: Array<string> };
};

/** @internal */
export const RemovePaymentLinkRequest$inboundSchema: z.ZodType<
  RemovePaymentLinkRequest,
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
export type RemovePaymentLinkRequest$Outbound = {
  connection_id: string;
  id: string;
};

/** @internal */
export const RemovePaymentLinkRequest$outboundSchema: z.ZodType<
  RemovePaymentLinkRequest$Outbound,
  z.ZodTypeDef,
  RemovePaymentLinkRequest
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
export namespace RemovePaymentLinkRequest$ {
  /** @deprecated use `RemovePaymentLinkRequest$inboundSchema` instead. */
  export const inboundSchema = RemovePaymentLinkRequest$inboundSchema;
  /** @deprecated use `RemovePaymentLinkRequest$outboundSchema` instead. */
  export const outboundSchema = RemovePaymentLinkRequest$outboundSchema;
  /** @deprecated use `RemovePaymentLinkRequest$Outbound` instead. */
  export type Outbound = RemovePaymentLinkRequest$Outbound;
}

export function removePaymentLinkRequestToJSON(
  removePaymentLinkRequest: RemovePaymentLinkRequest,
): string {
  return JSON.stringify(
    RemovePaymentLinkRequest$outboundSchema.parse(removePaymentLinkRequest),
  );
}

export function removePaymentLinkRequestFromJSON(
  jsonString: string,
): SafeParseResult<RemovePaymentLinkRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RemovePaymentLinkRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RemovePaymentLinkRequest' from JSON`,
  );
}

/** @internal */
export const RemovePaymentLinkResponse$inboundSchema: z.ZodType<
  RemovePaymentLinkResponse,
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
export type RemovePaymentLinkResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
};

/** @internal */
export const RemovePaymentLinkResponse$outboundSchema: z.ZodType<
  RemovePaymentLinkResponse$Outbound,
  z.ZodTypeDef,
  RemovePaymentLinkResponse
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
export namespace RemovePaymentLinkResponse$ {
  /** @deprecated use `RemovePaymentLinkResponse$inboundSchema` instead. */
  export const inboundSchema = RemovePaymentLinkResponse$inboundSchema;
  /** @deprecated use `RemovePaymentLinkResponse$outboundSchema` instead. */
  export const outboundSchema = RemovePaymentLinkResponse$outboundSchema;
  /** @deprecated use `RemovePaymentLinkResponse$Outbound` instead. */
  export type Outbound = RemovePaymentLinkResponse$Outbound;
}

export function removePaymentLinkResponseToJSON(
  removePaymentLinkResponse: RemovePaymentLinkResponse,
): string {
  return JSON.stringify(
    RemovePaymentLinkResponse$outboundSchema.parse(removePaymentLinkResponse),
  );
}

export function removePaymentLinkResponseFromJSON(
  jsonString: string,
): SafeParseResult<RemovePaymentLinkResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RemovePaymentLinkResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RemovePaymentLinkResponse' from JSON`,
  );
}
