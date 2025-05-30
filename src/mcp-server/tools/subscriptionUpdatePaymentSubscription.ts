/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { subscriptionUpdatePaymentSubscription } from "../../funcs/subscriptionUpdatePaymentSubscription.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.UpdatePaymentSubscriptionRequest$inboundSchema,
};

export const tool$subscriptionUpdatePaymentSubscription: ToolDefinition<
  typeof args
> = {
  name: "subscription-update-payment-subscription",
  description: `Update a subscription`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await subscriptionUpdatePaymentSubscription(
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
