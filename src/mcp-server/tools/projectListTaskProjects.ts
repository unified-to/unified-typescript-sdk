/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { projectListTaskProjects } from "../../funcs/projectListTaskProjects.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListTaskProjectsRequest$inboundSchema,
};

export const tool$projectListTaskProjects: ToolDefinition<typeof args> = {
  name: "project-list-task-projects",
  description: `List all projects`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await projectListTaskProjects(
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
