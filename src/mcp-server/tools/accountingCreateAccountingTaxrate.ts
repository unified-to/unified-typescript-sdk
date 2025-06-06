/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { accountingCreateAccountingTaxrate } from "../../funcs/accountingCreateAccountingTaxrate.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.CreateAccountingTaxrateRequest$inboundSchema,
};

export const tool$accountingCreateAccountingTaxrate: ToolDefinition<
  typeof args
> = {
  name: "accounting-create-accounting-taxrate",
  description: `Create a taxrate`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await accountingCreateAccountingTaxrate(
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
