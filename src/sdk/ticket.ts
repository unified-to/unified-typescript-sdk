/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ticketingCreateTicketingTicket } from "../funcs/ticketingCreateTicketingTicket.js";
import { ticketingGetTicketingTicket } from "../funcs/ticketingGetTicketingTicket.js";
import { ticketingListTicketingTickets } from "../funcs/ticketingListTicketingTickets.js";
import { ticketingPatchTicketingTicket } from "../funcs/ticketingPatchTicketingTicket.js";
import { ticketingRemoveTicketingTicket } from "../funcs/ticketingRemoveTicketingTicket.js";
import { ticketingUpdateTicketingTicket } from "../funcs/ticketingUpdateTicketingTicket.js";
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
    options?: RequestOptions,
  ): Promise<shared.TicketingTicket> {
    return unwrapAsync(ticketingCreateTicketingTicket(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve a ticket
   */
  async getTicketingTicket(
    request: operations.GetTicketingTicketRequest,
    options?: RequestOptions,
  ): Promise<shared.TicketingTicket> {
    return unwrapAsync(ticketingGetTicketingTicket(
      this,
      request,
      options,
    ));
  }

  /**
   * List all tickets
   */
  async listTicketingTickets(
    request: operations.ListTicketingTicketsRequest,
    options?: RequestOptions,
  ): Promise<Array<shared.TicketingTicket>> {
    return unwrapAsync(ticketingListTicketingTickets(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a ticket
   */
  async patchTicketingTicket(
    request: operations.PatchTicketingTicketRequest,
    options?: RequestOptions,
  ): Promise<shared.TicketingTicket> {
    return unwrapAsync(ticketingPatchTicketingTicket(
      this,
      request,
      options,
    ));
  }

  /**
   * Remove a ticket
   */
  async removeTicketingTicket(
    request: operations.RemoveTicketingTicketRequest,
    options?: RequestOptions,
  ): Promise<operations.RemoveTicketingTicketResponse | undefined> {
    return unwrapAsync(ticketingRemoveTicketingTicket(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a ticket
   */
  async updateTicketingTicket(
    request: operations.UpdateTicketingTicketRequest,
    options?: RequestOptions,
  ): Promise<shared.TicketingTicket> {
    return unwrapAsync(ticketingUpdateTicketingTicket(
      this,
      request,
      options,
    ));
  }
}
