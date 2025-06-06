/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { crmListCrmPipelines } from "../../funcs/crmListCrmPipelines.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListCrmPipelinesRequest$inboundSchema,
};

export const tool$crmListCrmPipelines: ToolDefinition<typeof args> = {
  name: "crm-list-crm-pipelines",
  description: `List all pipelines`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await crmListCrmPipelines(
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
