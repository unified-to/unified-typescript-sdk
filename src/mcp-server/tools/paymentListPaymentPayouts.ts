/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { paymentListPaymentPayouts } from "../../funcs/paymentListPaymentPayouts.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListPaymentPayoutsRequest$inboundSchema,
};

export const tool$paymentListPaymentPayouts: ToolDefinition<typeof args> = {
  name: "payment-list-payment-payouts",
  description: `List all payouts`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await paymentListPaymentPayouts(
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
