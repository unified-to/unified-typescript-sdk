/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type CreateTicketingTicketRequest = {
  ticketingTicket: shared.TicketingTicket;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar
   */
  raw?: string | undefined;
};

/** @internal */
export const CreateTicketingTicketRequest$inboundSchema: z.ZodType<
  CreateTicketingTicketRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  TicketingTicket: shared.TicketingTicket$inboundSchema,
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  raw: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "TicketingTicket": "ticketingTicket",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type CreateTicketingTicketRequest$Outbound = {
  TicketingTicket: shared.TicketingTicket$Outbound;
  connection_id: string;
  fields?: Array<string> | undefined;
  raw?: string | undefined;
};

/** @internal */
export const CreateTicketingTicketRequest$outboundSchema: z.ZodType<
  CreateTicketingTicketRequest$Outbound,
  z.ZodTypeDef,
  CreateTicketingTicketRequest
> = z.object({
  ticketingTicket: shared.TicketingTicket$outboundSchema,
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  raw: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    ticketingTicket: "TicketingTicket",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateTicketingTicketRequest$ {
  /** @deprecated use `CreateTicketingTicketRequest$inboundSchema` instead. */
  export const inboundSchema = CreateTicketingTicketRequest$inboundSchema;
  /** @deprecated use `CreateTicketingTicketRequest$outboundSchema` instead. */
  export const outboundSchema = CreateTicketingTicketRequest$outboundSchema;
  /** @deprecated use `CreateTicketingTicketRequest$Outbound` instead. */
  export type Outbound = CreateTicketingTicketRequest$Outbound;
}

export function createTicketingTicketRequestToJSON(
  createTicketingTicketRequest: CreateTicketingTicketRequest,
): string {
  return JSON.stringify(
    CreateTicketingTicketRequest$outboundSchema.parse(
      createTicketingTicketRequest,
    ),
  );
}

export function createTicketingTicketRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateTicketingTicketRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateTicketingTicketRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateTicketingTicketRequest' from JSON`,
  );
}
