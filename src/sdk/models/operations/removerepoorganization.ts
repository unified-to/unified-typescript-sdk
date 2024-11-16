/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type RemoveRepoOrganizationRequest = {
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * ID of the Organization
   */
  id: string;
};

export type RemoveRepoOrganizationResponse = {
  headers: { [k: string]: Array<string> };
};

/** @internal */
export const RemoveRepoOrganizationRequest$inboundSchema: z.ZodType<
  RemoveRepoOrganizationRequest,
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
export type RemoveRepoOrganizationRequest$Outbound = {
  connection_id: string;
  id: string;
};

/** @internal */
export const RemoveRepoOrganizationRequest$outboundSchema: z.ZodType<
  RemoveRepoOrganizationRequest$Outbound,
  z.ZodTypeDef,
  RemoveRepoOrganizationRequest
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
export namespace RemoveRepoOrganizationRequest$ {
  /** @deprecated use `RemoveRepoOrganizationRequest$inboundSchema` instead. */
  export const inboundSchema = RemoveRepoOrganizationRequest$inboundSchema;
  /** @deprecated use `RemoveRepoOrganizationRequest$outboundSchema` instead. */
  export const outboundSchema = RemoveRepoOrganizationRequest$outboundSchema;
  /** @deprecated use `RemoveRepoOrganizationRequest$Outbound` instead. */
  export type Outbound = RemoveRepoOrganizationRequest$Outbound;
}

export function removeRepoOrganizationRequestToJSON(
  removeRepoOrganizationRequest: RemoveRepoOrganizationRequest,
): string {
  return JSON.stringify(
    RemoveRepoOrganizationRequest$outboundSchema.parse(
      removeRepoOrganizationRequest,
    ),
  );
}

export function removeRepoOrganizationRequestFromJSON(
  jsonString: string,
): SafeParseResult<RemoveRepoOrganizationRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RemoveRepoOrganizationRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RemoveRepoOrganizationRequest' from JSON`,
  );
}

/** @internal */
export const RemoveRepoOrganizationResponse$inboundSchema: z.ZodType<
  RemoveRepoOrganizationResponse,
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
export type RemoveRepoOrganizationResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
};

/** @internal */
export const RemoveRepoOrganizationResponse$outboundSchema: z.ZodType<
  RemoveRepoOrganizationResponse$Outbound,
  z.ZodTypeDef,
  RemoveRepoOrganizationResponse
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
export namespace RemoveRepoOrganizationResponse$ {
  /** @deprecated use `RemoveRepoOrganizationResponse$inboundSchema` instead. */
  export const inboundSchema = RemoveRepoOrganizationResponse$inboundSchema;
  /** @deprecated use `RemoveRepoOrganizationResponse$outboundSchema` instead. */
  export const outboundSchema = RemoveRepoOrganizationResponse$outboundSchema;
  /** @deprecated use `RemoveRepoOrganizationResponse$Outbound` instead. */
  export type Outbound = RemoveRepoOrganizationResponse$Outbound;
}

export function removeRepoOrganizationResponseToJSON(
  removeRepoOrganizationResponse: RemoveRepoOrganizationResponse,
): string {
  return JSON.stringify(
    RemoveRepoOrganizationResponse$outboundSchema.parse(
      removeRepoOrganizationResponse,
    ),
  );
}

export function removeRepoOrganizationResponseFromJSON(
  jsonString: string,
): SafeParseResult<RemoveRepoOrganizationResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RemoveRepoOrganizationResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RemoveRepoOrganizationResponse' from JSON`,
  );
}
