/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { crmGetCrmDeal } from "../../funcs/crmGetCrmDeal.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetCrmDealRequest$inboundSchema,
};

export const tool$crmGetCrmDeal: ToolDefinition<typeof args> = {
  name: "crm-get-crm-deal",
  description: `Retrieve a deal`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await crmGetCrmDeal(
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
