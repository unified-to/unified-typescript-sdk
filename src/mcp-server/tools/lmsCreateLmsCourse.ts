/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { lmsCreateLmsCourse } from "../../funcs/lmsCreateLmsCourse.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.CreateLmsCourseRequest$inboundSchema,
};

export const tool$lmsCreateLmsCourse: ToolDefinition<typeof args> = {
  name: "lms-create-lms-course",
  description: `Create a course`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await lmsCreateLmsCourse(
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
