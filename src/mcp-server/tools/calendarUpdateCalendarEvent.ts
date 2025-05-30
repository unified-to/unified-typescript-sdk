/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { calendarUpdateCalendarEvent } from "../../funcs/calendarUpdateCalendarEvent.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.UpdateCalendarEventRequest$inboundSchema,
};

export const tool$calendarUpdateCalendarEvent: ToolDefinition<typeof args> = {
  name: "calendar-update-calendar-event",
  description: `Update an event`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await calendarUpdateCalendarEvent(
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
