/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { noteRemoveTicketingNote } from "../../funcs/noteRemoveTicketingNote.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.RemoveTicketingNoteRequest$inboundSchema,
};

export const tool$noteRemoveTicketingNote: ToolDefinition<typeof args> = {
  name: "note-remove-ticketing-note",
  description: `Remove a note`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await noteRemoveTicketingNote(
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
