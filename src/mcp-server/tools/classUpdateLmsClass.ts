/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { classUpdateLmsClass } from "../../funcs/classUpdateLmsClass.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.UpdateLmsClassRequest$inboundSchema,
};

export const tool$classUpdateLmsClass: ToolDefinition<typeof args> = {
  name: "class-update-lms-class",
  description: `Update a class`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await classUpdateLmsClass(
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
