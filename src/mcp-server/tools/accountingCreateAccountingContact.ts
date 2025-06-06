/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { accountingCreateAccountingContact } from "../../funcs/accountingCreateAccountingContact.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.CreateAccountingContactRequest$inboundSchema,
};

export const tool$accountingCreateAccountingContact: ToolDefinition<
  typeof args
> = {
  name: "accounting-create-accounting-contact",
  description: `Create a contact`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await accountingCreateAccountingContact(
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
