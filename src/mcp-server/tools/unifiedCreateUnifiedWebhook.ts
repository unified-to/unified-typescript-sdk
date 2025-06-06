/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { unifiedCreateUnifiedWebhook } from "../../funcs/unifiedCreateUnifiedWebhook.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.CreateUnifiedWebhookRequest$inboundSchema,
};

export const tool$unifiedCreateUnifiedWebhook: ToolDefinition<typeof args> = {
  name: "unified-create-unified-webhook",
  description: `Create webhook subscription

The data payload received by your server is described at https://docs.unified.to/unified/overview. The \`interval\` field can be set as low as 1 minute for paid accounts, and 60 minutes for free accounts.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await unifiedCreateUnifiedWebhook(
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
