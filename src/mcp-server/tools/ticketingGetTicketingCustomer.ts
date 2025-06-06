/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ticketingGetTicketingCustomer } from "../../funcs/ticketingGetTicketingCustomer.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetTicketingCustomerRequest$inboundSchema,
};

export const tool$ticketingGetTicketingCustomer: ToolDefinition<typeof args> = {
  name: "ticketing-get-ticketing-customer",
  description: `Retrieve a customer`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await ticketingGetTicketingCustomer(
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
