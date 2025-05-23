/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { scorecardListAtsScorecards } from "../../funcs/scorecardListAtsScorecards.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListAtsScorecardsRequest$inboundSchema,
};

export const tool$scorecardListAtsScorecards: ToolDefinition<typeof args> = {
  name: "scorecard-list-ats-scorecards",
  description: `List all scorecards`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await scorecardListAtsScorecards(
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
