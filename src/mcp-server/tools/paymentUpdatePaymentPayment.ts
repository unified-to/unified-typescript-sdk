/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { paymentUpdatePaymentPayment } from "../../funcs/paymentUpdatePaymentPayment.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.UpdatePaymentPaymentRequest$inboundSchema,
};

export const tool$paymentUpdatePaymentPayment: ToolDefinition<typeof args> = {
  name: "payment-update-payment-payment",
  description: `Update a payment`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await paymentUpdatePaymentPayment(
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
