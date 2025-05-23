/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { accountRemoveAccountingAccount } from "../../funcs/accountRemoveAccountingAccount.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.RemoveAccountingAccountRequest$inboundSchema,
};

export const tool$accountRemoveAccountingAccount: ToolDefinition<typeof args> =
  {
    name: "account-remove-accounting-account",
    description: `Remove an account`,
    args,
    tool: async (client, args, ctx) => {
      const [result, apiCall] = await accountRemoveAccountingAccount(
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
