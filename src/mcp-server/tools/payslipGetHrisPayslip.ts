/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { payslipGetHrisPayslip } from "../../funcs/payslipGetHrisPayslip.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetHrisPayslipRequest$inboundSchema,
};

export const tool$payslipGetHrisPayslip: ToolDefinition<typeof args> = {
  name: "payslip-get-hris-payslip",
  description: `Retrieve a payslip`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await payslipGetHrisPayslip(
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
