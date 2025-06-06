/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { taskListTaskProjects } from "../../funcs/taskListTaskProjects.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListTaskProjectsRequest$inboundSchema,
};

export const tool$taskListTaskProjects: ToolDefinition<typeof args> = {
  name: "task-list-task-projects",
  description: `List all projects`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await taskListTaskProjects(
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
