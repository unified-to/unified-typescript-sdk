/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { accountingRemoveAccountingTaxrate } from "../../funcs/accountingRemoveAccountingTaxrate.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.RemoveAccountingTaxrateRequest$inboundSchema,
};

export const tool$accountingRemoveAccountingTaxrate: ToolDefinition<
  typeof args
> = {
  name: "accounting-remove-accounting-taxrate",
  description: `Remove a taxrate`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await accountingRemoveAccountingTaxrate(
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
