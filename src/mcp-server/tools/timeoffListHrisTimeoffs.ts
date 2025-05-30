/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { timeoffListHrisTimeoffs } from "../../funcs/timeoffListHrisTimeoffs.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListHrisTimeoffsRequest$inboundSchema,
};

export const tool$timeoffListHrisTimeoffs: ToolDefinition<typeof args> = {
  name: "timeoff-list-hris-timeoffs",
  description: `List all timeoffs`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await timeoffListHrisTimeoffs(
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
