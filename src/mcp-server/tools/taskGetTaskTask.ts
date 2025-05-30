/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { taskGetTaskTask } from "../../funcs/taskGetTaskTask.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetTaskTaskRequest$inboundSchema,
};

export const tool$taskGetTaskTask: ToolDefinition<typeof args> = {
  name: "task-get-task-task",
  description: `Retrieve a task`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await taskGetTaskTask(
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
