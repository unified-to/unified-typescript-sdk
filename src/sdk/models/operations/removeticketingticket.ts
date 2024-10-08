/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type RemoveTicketingTicketRequest = {
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * ID of the Ticket
   */
  id: string;
};

/** @internal */
export const RemoveTicketingTicketRequest$inboundSchema: z.ZodType<
  RemoveTicketingTicketRequest,
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
export type RemoveTicketingTicketRequest$Outbound = {
  connection_id: string;
  id: string;
};

/** @internal */
export const RemoveTicketingTicketRequest$outboundSchema: z.ZodType<
  RemoveTicketingTicketRequest$Outbound,
  z.ZodTypeDef,
  RemoveTicketingTicketRequest
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
export namespace RemoveTicketingTicketRequest$ {
  /** @deprecated use `RemoveTicketingTicketRequest$inboundSchema` instead. */
  export const inboundSchema = RemoveTicketingTicketRequest$inboundSchema;
  /** @deprecated use `RemoveTicketingTicketRequest$outboundSchema` instead. */
  export const outboundSchema = RemoveTicketingTicketRequest$outboundSchema;
  /** @deprecated use `RemoveTicketingTicketRequest$Outbound` instead. */
  export type Outbound = RemoveTicketingTicketRequest$Outbound;
}
