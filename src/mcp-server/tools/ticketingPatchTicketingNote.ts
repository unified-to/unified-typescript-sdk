/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ticketingPatchTicketingNote } from "../../funcs/ticketingPatchTicketingNote.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.PatchTicketingNoteRequest$inboundSchema,
};

export const tool$ticketingPatchTicketingNote: ToolDefinition<typeof args> = {
  name: "ticketing-patch-ticketing-note",
  description: `Update a note`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await ticketingPatchTicketingNote(
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
