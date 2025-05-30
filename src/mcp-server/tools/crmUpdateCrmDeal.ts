/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { crmUpdateCrmDeal } from "../../funcs/crmUpdateCrmDeal.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.UpdateCrmDealRequest$inboundSchema,
};

export const tool$crmUpdateCrmDeal: ToolDefinition<typeof args> = {
  name: "crm-update-crm-deal",
  description: `Update a deal`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await crmUpdateCrmDeal(
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
