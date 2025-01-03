/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type RemoveRepoPullrequestRequest = {
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * ID of the Pullrequest
   */
  id: string;
};

export type RemoveRepoPullrequestResponse = {
  headers: { [k: string]: Array<string> };
};

/** @internal */
export const RemoveRepoPullrequestRequest$inboundSchema: z.ZodType<
  RemoveRepoPullrequestRequest,
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
export type RemoveRepoPullrequestRequest$Outbound = {
  connection_id: string;
  id: string;
};

/** @internal */
export const RemoveRepoPullrequestRequest$outboundSchema: z.ZodType<
  RemoveRepoPullrequestRequest$Outbound,
  z.ZodTypeDef,
  RemoveRepoPullrequestRequest
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
export namespace RemoveRepoPullrequestRequest$ {
  /** @deprecated use `RemoveRepoPullrequestRequest$inboundSchema` instead. */
  export const inboundSchema = RemoveRepoPullrequestRequest$inboundSchema;
  /** @deprecated use `RemoveRepoPullrequestRequest$outboundSchema` instead. */
  export const outboundSchema = RemoveRepoPullrequestRequest$outboundSchema;
  /** @deprecated use `RemoveRepoPullrequestRequest$Outbound` instead. */
  export type Outbound = RemoveRepoPullrequestRequest$Outbound;
}

export function removeRepoPullrequestRequestToJSON(
  removeRepoPullrequestRequest: RemoveRepoPullrequestRequest,
): string {
  return JSON.stringify(
    RemoveRepoPullrequestRequest$outboundSchema.parse(
      removeRepoPullrequestRequest,
    ),
  );
}

export function removeRepoPullrequestRequestFromJSON(
  jsonString: string,
): SafeParseResult<RemoveRepoPullrequestRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RemoveRepoPullrequestRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RemoveRepoPullrequestRequest' from JSON`,
  );
}

/** @internal */
export const RemoveRepoPullrequestResponse$inboundSchema: z.ZodType<
  RemoveRepoPullrequestResponse,
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
export type RemoveRepoPullrequestResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
};

/** @internal */
export const RemoveRepoPullrequestResponse$outboundSchema: z.ZodType<
  RemoveRepoPullrequestResponse$Outbound,
  z.ZodTypeDef,
  RemoveRepoPullrequestResponse
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
export namespace RemoveRepoPullrequestResponse$ {
  /** @deprecated use `RemoveRepoPullrequestResponse$inboundSchema` instead. */
  export const inboundSchema = RemoveRepoPullrequestResponse$inboundSchema;
  /** @deprecated use `RemoveRepoPullrequestResponse$outboundSchema` instead. */
  export const outboundSchema = RemoveRepoPullrequestResponse$outboundSchema;
  /** @deprecated use `RemoveRepoPullrequestResponse$Outbound` instead. */
  export type Outbound = RemoveRepoPullrequestResponse$Outbound;
}

export function removeRepoPullrequestResponseToJSON(
  removeRepoPullrequestResponse: RemoveRepoPullrequestResponse,
): string {
  return JSON.stringify(
    RemoveRepoPullrequestResponse$outboundSchema.parse(
      removeRepoPullrequestResponse,
    ),
  );
}

export function removeRepoPullrequestResponseFromJSON(
  jsonString: string,
): SafeParseResult<RemoveRepoPullrequestResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RemoveRepoPullrequestResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RemoveRepoPullrequestResponse' from JSON`,
  );
}
