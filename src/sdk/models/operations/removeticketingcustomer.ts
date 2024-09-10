/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

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
