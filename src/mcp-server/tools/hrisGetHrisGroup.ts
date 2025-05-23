/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { hrisGetHrisGroup } from "../../funcs/hrisGetHrisGroup.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetHrisGroupRequest$inboundSchema,
};

export const tool$hrisGetHrisGroup: ToolDefinition<typeof args> = {
  name: "hris-get-hris-group",
  description: `Retrieve a group`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await hrisGetHrisGroup(
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
