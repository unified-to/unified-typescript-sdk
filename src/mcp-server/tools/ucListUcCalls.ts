/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ucListUcCalls } from "../../funcs/ucListUcCalls.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListUcCallsRequest$inboundSchema,
};

export const tool$ucListUcCalls: ToolDefinition<typeof args> = {
  name: "uc-list-uc-calls",
  description: `List all calls`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await ucListUcCalls(
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
