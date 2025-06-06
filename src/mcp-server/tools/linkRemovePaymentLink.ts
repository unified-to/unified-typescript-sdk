/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { linkRemovePaymentLink } from "../../funcs/linkRemovePaymentLink.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.RemovePaymentLinkRequest$inboundSchema,
};

export const tool$linkRemovePaymentLink: ToolDefinition<typeof args> = {
  name: "link-remove-payment-link",
  description: `Remove a link`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await linkRemovePaymentLink(
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
