/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { accountingUpdateAccountingBill } from "../../funcs/accountingUpdateAccountingBill.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.UpdateAccountingBillRequest$inboundSchema,
};

export const tool$accountingUpdateAccountingBill: ToolDefinition<typeof args> =
  {
    name: "accounting-update-accounting-bill",
    description: `Update a bill`,
    args,
    tool: async (client, args, ctx) => {
      const [result, apiCall] = await accountingUpdateAccountingBill(
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
