/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type UpdateTicketingCustomerRequest = {
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
export const UpdateTicketingCustomerRequest$inboundSchema: z.ZodType<
    UpdateTicketingCustomerRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        TicketingCustomer: shared.TicketingCustomer$inboundSchema.optional(),
        connection_id: z.string(),
        id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            TicketingCustomer: "ticketingCustomer",
            connection_id: "connectionId",
        });
    });

/** @internal */
export type UpdateTicketingCustomerRequest$Outbound = {
    TicketingCustomer?: shared.TicketingCustomer$Outbound | undefined;
    connection_id: string;
    id: string;
};

/** @internal */
export const UpdateTicketingCustomerRequest$outboundSchema: z.ZodType<
    UpdateTicketingCustomerRequest$Outbound,
    z.ZodTypeDef,
    UpdateTicketingCustomerRequest
> = z
    .object({
        ticketingCustomer: shared.TicketingCustomer$outboundSchema.optional(),
        connectionId: z.string(),
        id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            ticketingCustomer: "TicketingCustomer",
            connectionId: "connection_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateTicketingCustomerRequest$ {
    /** @deprecated use `UpdateTicketingCustomerRequest$inboundSchema` instead. */
    export const inboundSchema = UpdateTicketingCustomerRequest$inboundSchema;
    /** @deprecated use `UpdateTicketingCustomerRequest$outboundSchema` instead. */
    export const outboundSchema = UpdateTicketingCustomerRequest$outboundSchema;
    /** @deprecated use `UpdateTicketingCustomerRequest$Outbound` instead. */
    export type Outbound = UpdateTicketingCustomerRequest$Outbound;
}
