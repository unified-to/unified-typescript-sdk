/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { courseRemoveLmsCourse } from "../../funcs/courseRemoveLmsCourse.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.RemoveLmsCourseRequest$inboundSchema,
};

export const tool$courseRemoveLmsCourse: ToolDefinition<typeof args> = {
  name: "course-remove-lms-course",
  description: `Remove a course`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await courseRemoveLmsCourse(
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
