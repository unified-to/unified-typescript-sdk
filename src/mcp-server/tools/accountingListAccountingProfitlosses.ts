/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { accountingListAccountingProfitlosses } from "../../funcs/accountingListAccountingProfitlosses.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListAccountingProfitlossesRequest$inboundSchema,
};

export const tool$accountingListAccountingProfitlosses: ToolDefinition<
  typeof args
> = {
  name: "accounting-list-accounting-profitlosses",
  description: `List all profitlosses`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await accountingListAccountingProfitlosses(
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
