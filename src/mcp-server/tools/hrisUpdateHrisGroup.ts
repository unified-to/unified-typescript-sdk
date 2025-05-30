/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { hrisUpdateHrisGroup } from "../../funcs/hrisUpdateHrisGroup.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.UpdateHrisGroupRequest$inboundSchema,
};

export const tool$hrisUpdateHrisGroup: ToolDefinition<typeof args> = {
  name: "hris-update-hris-group",
  description: `Update a group`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await hrisUpdateHrisGroup(
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
