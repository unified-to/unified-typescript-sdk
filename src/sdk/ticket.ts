/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ticketCreateTicketingTicket } from "../funcs/ticketCreateTicketingTicket.js";
import { ticketGetTicketingTicket } from "../funcs/ticketGetTicketingTicket.js";
import { ticketListTicketingTickets } from "../funcs/ticketListTicketingTickets.js";
import { ticketPatchTicketingTicket } from "../funcs/ticketPatchTicketingTicket.js";
import { ticketRemoveTicketingTicket } from "../funcs/ticketRemoveTicketingTicket.js";
import { ticketUpdateTicketingTicket } from "../funcs/ticketUpdateTicketingTicket.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Ticket extends ClientSDK {
    /**
     * Create a ticket
     */
    async createTicketingTicket(
        request: operations.CreateTicketingTicketRequest,
        options?: RequestOptions
    ): Promise<shared.TicketingTicket> {
        return unwrapAsync(ticketCreateTicketingTicket(this, request, options));
    }

    /**
     * Retrieve a ticket
     */
    async getTicketingTicket(
        request: operations.GetTicketingTicketRequest,
        options?: RequestOptions
    ): Promise<shared.TicketingTicket> {
        return unwrapAsync(ticketGetTicketingTicket(this, request, options));
    }

    /**
     * List all tickets
     */
    async listTicketingTickets(
        request: operations.ListTicketingTicketsRequest,
        options?: RequestOptions
    ): Promise<Array<shared.TicketingTicket>> {
        return unwrapAsync(ticketListTicketingTickets(this, request, options));
    }

    /**
     * Update a ticket
     */
    async patchTicketingTicket(
        request: operations.PatchTicketingTicketRequest,
        options?: RequestOptions
    ): Promise<shared.TicketingTicket> {
        return unwrapAsync(ticketPatchTicketingTicket(this, request, options));
    }

    /**
     * Remove a ticket
     */
    async removeTicketingTicket(
        request: operations.RemoveTicketingTicketRequest,
        options?: RequestOptions
    ): Promise<string> {
        return unwrapAsync(ticketRemoveTicketingTicket(this, request, options));
    }

    /**
     * Update a ticket
     */
    async updateTicketingTicket(
        request: operations.UpdateTicketingTicketRequest,
        options?: RequestOptions
    ): Promise<shared.TicketingTicket> {
        return unwrapAsync(ticketUpdateTicketingTicket(this, request, options));
    }
}
