/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { atsListAtsScorecards } from "../../funcs/atsListAtsScorecards.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListAtsScorecardsRequest$inboundSchema,
};

export const tool$atsListAtsScorecards: ToolDefinition<typeof args> = {
  name: "ats-list-ats-scorecards",
  description: `List all scorecards`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await atsListAtsScorecards(
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
