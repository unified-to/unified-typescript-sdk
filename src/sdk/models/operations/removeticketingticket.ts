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

export type RemoveTicketingTicketResponse = {
  headers: { [k: string]: Array<string> };
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

/** @internal */
export const RemoveTicketingTicketResponse$inboundSchema: z.ZodType<
  RemoveTicketingTicketResponse,
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
export type RemoveTicketingTicketResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
};

/** @internal */
export const RemoveTicketingTicketResponse$outboundSchema: z.ZodType<
  RemoveTicketingTicketResponse$Outbound,
  z.ZodTypeDef,
  RemoveTicketingTicketResponse
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
export namespace RemoveTicketingTicketResponse$ {
  /** @deprecated use `RemoveTicketingTicketResponse$inboundSchema` instead. */
  export const inboundSchema = RemoveTicketingTicketResponse$inboundSchema;
  /** @deprecated use `RemoveTicketingTicketResponse$outboundSchema` instead. */
  export const outboundSchema = RemoveTicketingTicketResponse$outboundSchema;
  /** @deprecated use `RemoveTicketingTicketResponse$Outbound` instead. */
  export type Outbound = RemoveTicketingTicketResponse$Outbound;
}
