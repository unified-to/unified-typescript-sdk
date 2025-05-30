/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { repoRemoveRepoCommit } from "../../funcs/repoRemoveRepoCommit.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.RemoveRepoCommitRequest$inboundSchema,
};

export const tool$repoRemoveRepoCommit: ToolDefinition<typeof args> = {
  name: "repo-remove-repo-commit",
  description: `Remove a commit`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await repoRemoveRepoCommit(
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
