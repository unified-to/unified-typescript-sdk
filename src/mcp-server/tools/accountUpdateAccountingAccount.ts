/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { accountUpdateAccountingAccount } from "../../funcs/accountUpdateAccountingAccount.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.UpdateAccountingAccountRequest$inboundSchema,
};

export const tool$accountUpdateAccountingAccount: ToolDefinition<typeof args> =
  {
    name: "account-update-accounting-account",
    description: `Update an account`,
    args,
    tool: async (client, args, ctx) => {
      const [result, apiCall] = await accountUpdateAccountingAccount(
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
