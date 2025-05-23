/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { crmGetCrmLead } from "../../funcs/crmGetCrmLead.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetCrmLeadRequest$inboundSchema,
};

export const tool$crmGetCrmLead: ToolDefinition<typeof args> = {
  name: "crm-get-crm-lead",
  description: `Retrieve a lead`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await crmGetCrmLead(
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
