/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { atsListAtsCandidates } from "../../funcs/atsListAtsCandidates.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListAtsCandidatesRequest$inboundSchema,
};

export const tool$atsListAtsCandidates: ToolDefinition<typeof args> = {
  name: "ats-list-ats-candidates",
  description: `List all candidates`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await atsListAtsCandidates(
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
