/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { issueListUnifiedIssues } from "../../funcs/issueListUnifiedIssues.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListUnifiedIssuesRequest$inboundSchema,
};

export const tool$issueListUnifiedIssues: ToolDefinition<typeof args> = {
  name: "issue-list-unified-issues",
  description: `List support issues`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await issueListUnifiedIssues(
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
