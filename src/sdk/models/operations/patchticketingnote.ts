/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type PatchTicketingNoteRequest = {
  ticketingNote?: shared.TicketingNote | undefined;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the Note
   */
  id: string;
};

/** @internal */
export const PatchTicketingNoteRequest$inboundSchema: z.ZodType<
  PatchTicketingNoteRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  TicketingNote: shared.TicketingNote$inboundSchema.optional(),
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "TicketingNote": "ticketingNote",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type PatchTicketingNoteRequest$Outbound = {
  TicketingNote?: shared.TicketingNote$Outbound | undefined;
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const PatchTicketingNoteRequest$outboundSchema: z.ZodType<
  PatchTicketingNoteRequest$Outbound,
  z.ZodTypeDef,
  PatchTicketingNoteRequest
> = z.object({
  ticketingNote: shared.TicketingNote$outboundSchema.optional(),
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    ticketingNote: "TicketingNote",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchTicketingNoteRequest$ {
  /** @deprecated use `PatchTicketingNoteRequest$inboundSchema` instead. */
  export const inboundSchema = PatchTicketingNoteRequest$inboundSchema;
  /** @deprecated use `PatchTicketingNoteRequest$outboundSchema` instead. */
  export const outboundSchema = PatchTicketingNoteRequest$outboundSchema;
  /** @deprecated use `PatchTicketingNoteRequest$Outbound` instead. */
  export type Outbound = PatchTicketingNoteRequest$Outbound;
}

export function patchTicketingNoteRequestToJSON(
  patchTicketingNoteRequest: PatchTicketingNoteRequest,
): string {
  return JSON.stringify(
    PatchTicketingNoteRequest$outboundSchema.parse(patchTicketingNoteRequest),
  );
}

export function patchTicketingNoteRequestFromJSON(
  jsonString: string,
): SafeParseResult<PatchTicketingNoteRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchTicketingNoteRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchTicketingNoteRequest' from JSON`,
  );
}
