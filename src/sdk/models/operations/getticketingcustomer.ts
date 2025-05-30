/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetTicketingCustomerRequest = {
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the Customer
   */
  id: string;
  /**
   * Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar
   */
  raw?: string | undefined;
};

/** @internal */
export const GetTicketingCustomerRequest$inboundSchema: z.ZodType<
  GetTicketingCustomerRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
  raw: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "connection_id": "connectionId",
  });
});

/** @internal */
export type GetTicketingCustomerRequest$Outbound = {
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
  raw?: string | undefined;
};

/** @internal */
export const GetTicketingCustomerRequest$outboundSchema: z.ZodType<
  GetTicketingCustomerRequest$Outbound,
  z.ZodTypeDef,
  GetTicketingCustomerRequest
> = z.object({
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
  raw: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTicketingCustomerRequest$ {
  /** @deprecated use `GetTicketingCustomerRequest$inboundSchema` instead. */
  export const inboundSchema = GetTicketingCustomerRequest$inboundSchema;
  /** @deprecated use `GetTicketingCustomerRequest$outboundSchema` instead. */
  export const outboundSchema = GetTicketingCustomerRequest$outboundSchema;
  /** @deprecated use `GetTicketingCustomerRequest$Outbound` instead. */
  export type Outbound = GetTicketingCustomerRequest$Outbound;
}

export function getTicketingCustomerRequestToJSON(
  getTicketingCustomerRequest: GetTicketingCustomerRequest,
): string {
  return JSON.stringify(
    GetTicketingCustomerRequest$outboundSchema.parse(
      getTicketingCustomerRequest,
    ),
  );
}

export function getTicketingCustomerRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetTicketingCustomerRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetTicketingCustomerRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetTicketingCustomerRequest' from JSON`,
  );
}
