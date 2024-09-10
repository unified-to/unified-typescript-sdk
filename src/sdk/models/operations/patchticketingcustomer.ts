/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type PatchTicketingCustomerRequest = {
  ticketingCustomer?: shared.TicketingCustomer | undefined;
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
export const PatchTicketingCustomerRequest$inboundSchema: z.ZodType<
  PatchTicketingCustomerRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  TicketingCustomer: shared.TicketingCustomer$inboundSchema.optional(),
  connection_id: z.string(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "TicketingCustomer": "ticketingCustomer",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type PatchTicketingCustomerRequest$Outbound = {
  TicketingCustomer?: shared.TicketingCustomer$Outbound | undefined;
  connection_id: string;
  id: string;
};

/** @internal */
export const PatchTicketingCustomerRequest$outboundSchema: z.ZodType<
  PatchTicketingCustomerRequest$Outbound,
  z.ZodTypeDef,
  PatchTicketingCustomerRequest
> = z.object({
  ticketingCustomer: shared.TicketingCustomer$outboundSchema.optional(),
  connectionId: z.string(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    ticketingCustomer: "TicketingCustomer",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchTicketingCustomerRequest$ {
  /** @deprecated use `PatchTicketingCustomerRequest$inboundSchema` instead. */
  export const inboundSchema = PatchTicketingCustomerRequest$inboundSchema;
  /** @deprecated use `PatchTicketingCustomerRequest$outboundSchema` instead. */
  export const outboundSchema = PatchTicketingCustomerRequest$outboundSchema;
  /** @deprecated use `PatchTicketingCustomerRequest$Outbound` instead. */
  export type Outbound = PatchTicketingCustomerRequest$Outbound;
}
