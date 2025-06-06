/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { leadUpdateCrmLead } from "../../funcs/leadUpdateCrmLead.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.UpdateCrmLeadRequest$inboundSchema,
};

export const tool$leadUpdateCrmLead: ToolDefinition<typeof args> = {
  name: "lead-update-crm-lead",
  description: `Update a lead`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await leadUpdateCrmLead(
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
