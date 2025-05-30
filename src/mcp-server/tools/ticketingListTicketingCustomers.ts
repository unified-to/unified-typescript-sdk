/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ticketingListTicketingCustomers } from "../../funcs/ticketingListTicketingCustomers.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListTicketingCustomersRequest$inboundSchema,
};

export const tool$ticketingListTicketingCustomers: ToolDefinition<typeof args> =
  {
    name: "ticketing-list-ticketing-customers",
    description: `List all customers`,
    args,
    tool: async (client, args, ctx) => {
      const [result, apiCall] = await ticketingListTicketingCustomers(
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

      const value = result.value;

      return formatResult(value, apiCall);
    },
  };
