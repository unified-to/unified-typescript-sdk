/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { lmsPatchLmsStudent } from "../../funcs/lmsPatchLmsStudent.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.PatchLmsStudentRequest$inboundSchema,
};

export const tool$lmsPatchLmsStudent: ToolDefinition<typeof args> = {
  name: "lms-patch-lms-student",
  description: `Update a student`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await lmsPatchLmsStudent(
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
