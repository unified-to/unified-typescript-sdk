/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { eventGetCalendarEvent } from "../../funcs/eventGetCalendarEvent.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetCalendarEventRequest$inboundSchema,
};

export const tool$eventGetCalendarEvent: ToolDefinition<typeof args> = {
  name: "event-get-calendar-event",
  description: `Retrieve an event`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await eventGetCalendarEvent(
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
