/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { calendarCreateCalendarEvent } from "../../funcs/calendarCreateCalendarEvent.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.CreateCalendarEventRequest$inboundSchema,
};

export const tool$calendarCreateCalendarEvent: ToolDefinition<typeof args> = {
  name: "calendar-create-calendar-event",
  description: `Create an event`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await calendarCreateCalendarEvent(
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
