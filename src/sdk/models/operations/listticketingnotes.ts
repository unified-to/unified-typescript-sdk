/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListTicketingNotesRequest = {
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * The customer ID to filter by
   */
  customerId?: string | undefined;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  limit?: number | undefined;
  offset?: number | undefined;
  order?: string | undefined;
  /**
   * Query string to search. eg. email address or name
   */
  query?: string | undefined;
  /**
   * Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar
   */
  raw?: string | undefined;
  sort?: string | undefined;
  /**
   * The ticket ID to filter by
   */
  ticketId?: string | undefined;
  /**
   * Return only results whose updated date is equal or greater to this value
   */
  updatedGte?: string | undefined;
};

/** @internal */
export const ListTicketingNotesRequest$inboundSchema: z.ZodType<
  ListTicketingNotesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  connection_id: z.string(),
  customer_id: z.string().optional(),
  fields: z.array(z.string()).optional(),
  limit: z.number().optional(),
  offset: z.number().optional(),
  order: z.string().optional(),
  query: z.string().optional(),
  raw: z.string().optional(),
  sort: z.string().optional(),
  ticket_id: z.string().optional(),
  updated_gte: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "connection_id": "connectionId",
    "customer_id": "customerId",
    "ticket_id": "ticketId",
    "updated_gte": "updatedGte",
  });
});

/** @internal */
export type ListTicketingNotesRequest$Outbound = {
  connection_id: string;
  customer_id?: string | undefined;
  fields?: Array<string> | undefined;
  limit?: number | undefined;
  offset?: number | undefined;
  order?: string | undefined;
  query?: string | undefined;
  raw?: string | undefined;
  sort?: string | undefined;
  ticket_id?: string | undefined;
  updated_gte?: string | undefined;
};

/** @internal */
export const ListTicketingNotesRequest$outboundSchema: z.ZodType<
  ListTicketingNotesRequest$Outbound,
  z.ZodTypeDef,
  ListTicketingNotesRequest
> = z.object({
  connectionId: z.string(),
  customerId: z.string().optional(),
  fields: z.array(z.string()).optional(),
  limit: z.number().optional(),
  offset: z.number().optional(),
  order: z.string().optional(),
  query: z.string().optional(),
  raw: z.string().optional(),
  sort: z.string().optional(),
  ticketId: z.string().optional(),
  updatedGte: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    connectionId: "connection_id",
    customerId: "customer_id",
    ticketId: "ticket_id",
    updatedGte: "updated_gte",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListTicketingNotesRequest$ {
  /** @deprecated use `ListTicketingNotesRequest$inboundSchema` instead. */
  export const inboundSchema = ListTicketingNotesRequest$inboundSchema;
  /** @deprecated use `ListTicketingNotesRequest$outboundSchema` instead. */
  export const outboundSchema = ListTicketingNotesRequest$outboundSchema;
  /** @deprecated use `ListTicketingNotesRequest$Outbound` instead. */
  export type Outbound = ListTicketingNotesRequest$Outbound;
}

export function listTicketingNotesRequestToJSON(
  listTicketingNotesRequest: ListTicketingNotesRequest,
): string {
  return JSON.stringify(
    ListTicketingNotesRequest$outboundSchema.parse(listTicketingNotesRequest),
  );
}

export function listTicketingNotesRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListTicketingNotesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListTicketingNotesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListTicketingNotesRequest' from JSON`,
  );
}
