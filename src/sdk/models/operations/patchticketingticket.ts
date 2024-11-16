/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type PatchTicketingTicketRequest = {
  ticketingTicket?: shared.TicketingTicket | undefined;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the Ticket
   */
  id: string;
};

/** @internal */
export const PatchTicketingTicketRequest$inboundSchema: z.ZodType<
  PatchTicketingTicketRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  TicketingTicket: shared.TicketingTicket$inboundSchema.optional(),
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "TicketingTicket": "ticketingTicket",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type PatchTicketingTicketRequest$Outbound = {
  TicketingTicket?: shared.TicketingTicket$Outbound | undefined;
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const PatchTicketingTicketRequest$outboundSchema: z.ZodType<
  PatchTicketingTicketRequest$Outbound,
  z.ZodTypeDef,
  PatchTicketingTicketRequest
> = z.object({
  ticketingTicket: shared.TicketingTicket$outboundSchema.optional(),
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
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
export namespace PatchTicketingTicketRequest$ {
  /** @deprecated use `PatchTicketingTicketRequest$inboundSchema` instead. */
  export const inboundSchema = PatchTicketingTicketRequest$inboundSchema;
  /** @deprecated use `PatchTicketingTicketRequest$outboundSchema` instead. */
  export const outboundSchema = PatchTicketingTicketRequest$outboundSchema;
  /** @deprecated use `PatchTicketingTicketRequest$Outbound` instead. */
  export type Outbound = PatchTicketingTicketRequest$Outbound;
}

export function patchTicketingTicketRequestToJSON(
  patchTicketingTicketRequest: PatchTicketingTicketRequest,
): string {
  return JSON.stringify(
    PatchTicketingTicketRequest$outboundSchema.parse(
      patchTicketingTicketRequest,
    ),
  );
}

export function patchTicketingTicketRequestFromJSON(
  jsonString: string,
): SafeParseResult<PatchTicketingTicketRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchTicketingTicketRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchTicketingTicketRequest' from JSON`,
  );
}
