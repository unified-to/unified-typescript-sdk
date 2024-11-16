/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type RemoveTicketingCustomerRequest = {
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * ID of the Customer
   */
  id: string;
};

export type RemoveTicketingCustomerResponse = {
  headers: { [k: string]: Array<string> };
};

/** @internal */
export const RemoveTicketingCustomerRequest$inboundSchema: z.ZodType<
  RemoveTicketingCustomerRequest,
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
export type RemoveTicketingCustomerRequest$Outbound = {
  connection_id: string;
  id: string;
};

/** @internal */
export const RemoveTicketingCustomerRequest$outboundSchema: z.ZodType<
  RemoveTicketingCustomerRequest$Outbound,
  z.ZodTypeDef,
  RemoveTicketingCustomerRequest
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
export namespace RemoveTicketingCustomerRequest$ {
  /** @deprecated use `RemoveTicketingCustomerRequest$inboundSchema` instead. */
  export const inboundSchema = RemoveTicketingCustomerRequest$inboundSchema;
  /** @deprecated use `RemoveTicketingCustomerRequest$outboundSchema` instead. */
  export const outboundSchema = RemoveTicketingCustomerRequest$outboundSchema;
  /** @deprecated use `RemoveTicketingCustomerRequest$Outbound` instead. */
  export type Outbound = RemoveTicketingCustomerRequest$Outbound;
}

export function removeTicketingCustomerRequestToJSON(
  removeTicketingCustomerRequest: RemoveTicketingCustomerRequest,
): string {
  return JSON.stringify(
    RemoveTicketingCustomerRequest$outboundSchema.parse(
      removeTicketingCustomerRequest,
    ),
  );
}

export function removeTicketingCustomerRequestFromJSON(
  jsonString: string,
): SafeParseResult<RemoveTicketingCustomerRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RemoveTicketingCustomerRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RemoveTicketingCustomerRequest' from JSON`,
  );
}

/** @internal */
export const RemoveTicketingCustomerResponse$inboundSchema: z.ZodType<
  RemoveTicketingCustomerResponse,
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
export type RemoveTicketingCustomerResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
};

/** @internal */
export const RemoveTicketingCustomerResponse$outboundSchema: z.ZodType<
  RemoveTicketingCustomerResponse$Outbound,
  z.ZodTypeDef,
  RemoveTicketingCustomerResponse
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
export namespace RemoveTicketingCustomerResponse$ {
  /** @deprecated use `RemoveTicketingCustomerResponse$inboundSchema` instead. */
  export const inboundSchema = RemoveTicketingCustomerResponse$inboundSchema;
  /** @deprecated use `RemoveTicketingCustomerResponse$outboundSchema` instead. */
  export const outboundSchema = RemoveTicketingCustomerResponse$outboundSchema;
  /** @deprecated use `RemoveTicketingCustomerResponse$Outbound` instead. */
  export type Outbound = RemoveTicketingCustomerResponse$Outbound;
}

export function removeTicketingCustomerResponseToJSON(
  removeTicketingCustomerResponse: RemoveTicketingCustomerResponse,
): string {
  return JSON.stringify(
    RemoveTicketingCustomerResponse$outboundSchema.parse(
      removeTicketingCustomerResponse,
    ),
  );
}

export function removeTicketingCustomerResponseFromJSON(
  jsonString: string,
): SafeParseResult<RemoveTicketingCustomerResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RemoveTicketingCustomerResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RemoveTicketingCustomerResponse' from JSON`,
  );
}
