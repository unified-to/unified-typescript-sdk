/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { commentListTaskComments } from "../../funcs/commentListTaskComments.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListTaskCommentsRequest$inboundSchema,
};

export const tool$commentListTaskComments: ToolDefinition<typeof args> = {
  name: "comment-list-task-comments",
  description: `List all comments`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await commentListTaskComments(
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
