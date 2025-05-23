/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { linkPatchPaymentLink } from "../../funcs/linkPatchPaymentLink.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.PatchPaymentLinkRequest$inboundSchema,
};

export const tool$linkPatchPaymentLink: ToolDefinition<typeof args> = {
  name: "link-patch-payment-link",
  description: `Update a link`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await linkPatchPaymentLink(
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
