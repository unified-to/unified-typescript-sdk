/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { lmsRemoveLmsClass } from "../../funcs/lmsRemoveLmsClass.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.RemoveLmsClassRequest$inboundSchema,
};

export const tool$lmsRemoveLmsClass: ToolDefinition<typeof args> = {
  name: "lms-remove-lms-class",
  description: `Remove a class`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await lmsRemoveLmsClass(
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
