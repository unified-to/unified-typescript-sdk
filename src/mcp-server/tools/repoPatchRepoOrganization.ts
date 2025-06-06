/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { repoPatchRepoOrganization } from "../../funcs/repoPatchRepoOrganization.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.PatchRepoOrganizationRequest$inboundSchema,
};

export const tool$repoPatchRepoOrganization: ToolDefinition<typeof args> = {
  name: "repo-patch-repo-organization",
  description: `Update an organization`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await repoPatchRepoOrganization(
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
