/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { atsListAtsApplications } from "../../funcs/atsListAtsApplications.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListAtsApplicationsRequest$inboundSchema,
};

export const tool$atsListAtsApplications: ToolDefinition<typeof args> = {
  name: "ats-list-ats-applications",
  description: `List all applications`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await atsListAtsApplications(
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
