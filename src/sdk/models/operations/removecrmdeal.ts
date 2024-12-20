/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type RemoveCrmDealRequest = {
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * ID of the Deal
   */
  id: string;
};

export type RemoveCrmDealResponse = {
  headers: { [k: string]: Array<string> };
};

/** @internal */
export const RemoveCrmDealRequest$inboundSchema: z.ZodType<
  RemoveCrmDealRequest,
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
export type RemoveCrmDealRequest$Outbound = {
  connection_id: string;
  id: string;
};

/** @internal */
export const RemoveCrmDealRequest$outboundSchema: z.ZodType<
  RemoveCrmDealRequest$Outbound,
  z.ZodTypeDef,
  RemoveCrmDealRequest
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
export namespace RemoveCrmDealRequest$ {
  /** @deprecated use `RemoveCrmDealRequest$inboundSchema` instead. */
  export const inboundSchema = RemoveCrmDealRequest$inboundSchema;
  /** @deprecated use `RemoveCrmDealRequest$outboundSchema` instead. */
  export const outboundSchema = RemoveCrmDealRequest$outboundSchema;
  /** @deprecated use `RemoveCrmDealRequest$Outbound` instead. */
  export type Outbound = RemoveCrmDealRequest$Outbound;
}

export function removeCrmDealRequestToJSON(
  removeCrmDealRequest: RemoveCrmDealRequest,
): string {
  return JSON.stringify(
    RemoveCrmDealRequest$outboundSchema.parse(removeCrmDealRequest),
  );
}

export function removeCrmDealRequestFromJSON(
  jsonString: string,
): SafeParseResult<RemoveCrmDealRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RemoveCrmDealRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RemoveCrmDealRequest' from JSON`,
  );
}

/** @internal */
export const RemoveCrmDealResponse$inboundSchema: z.ZodType<
  RemoveCrmDealResponse,
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
export type RemoveCrmDealResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
};

/** @internal */
export const RemoveCrmDealResponse$outboundSchema: z.ZodType<
  RemoveCrmDealResponse$Outbound,
  z.ZodTypeDef,
  RemoveCrmDealResponse
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
export namespace RemoveCrmDealResponse$ {
  /** @deprecated use `RemoveCrmDealResponse$inboundSchema` instead. */
  export const inboundSchema = RemoveCrmDealResponse$inboundSchema;
  /** @deprecated use `RemoveCrmDealResponse$outboundSchema` instead. */
  export const outboundSchema = RemoveCrmDealResponse$outboundSchema;
  /** @deprecated use `RemoveCrmDealResponse$Outbound` instead. */
  export type Outbound = RemoveCrmDealResponse$Outbound;
}

export function removeCrmDealResponseToJSON(
  removeCrmDealResponse: RemoveCrmDealResponse,
): string {
  return JSON.stringify(
    RemoveCrmDealResponse$outboundSchema.parse(removeCrmDealResponse),
  );
}

export function removeCrmDealResponseFromJSON(
  jsonString: string,
): SafeParseResult<RemoveCrmDealResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RemoveCrmDealResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RemoveCrmDealResponse' from JSON`,
  );
}
