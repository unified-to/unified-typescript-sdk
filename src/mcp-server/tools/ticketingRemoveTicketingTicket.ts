/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ticketingRemoveTicketingTicket } from "../../funcs/ticketingRemoveTicketingTicket.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.RemoveTicketingTicketRequest$inboundSchema,
};

export const tool$ticketingRemoveTicketingTicket: ToolDefinition<typeof args> =
  {
    name: "ticketing-remove-ticketing-ticket",
    description: `Remove a ticket`,
    args,
    tool: async (client, args, ctx) => {
      const [result, apiCall] = await ticketingRemoveTicketingTicket(
        client,
        args.request,
        { fetchOptions: { signal: ctx.signal } },
      ).$inspect();

      if (!result.ok) {
        return {
          content: [{ type: "text", text: result.error.message }],
          isError: true,
        };
      }

      return formatResult(void 0, apiCall);
    },
  };
