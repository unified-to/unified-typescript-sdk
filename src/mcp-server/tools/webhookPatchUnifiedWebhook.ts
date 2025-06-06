/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { webhookPatchUnifiedWebhook } from "../../funcs/webhookPatchUnifiedWebhook.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.PatchUnifiedWebhookRequest$inboundSchema,
};

export const tool$webhookPatchUnifiedWebhook: ToolDefinition<typeof args> = {
  name: "webhook-patch-unified-webhook",
  description: `Update webhook subscription`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await webhookPatchUnifiedWebhook(
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
