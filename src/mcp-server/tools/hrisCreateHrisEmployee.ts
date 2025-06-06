/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { hrisCreateHrisEmployee } from "../../funcs/hrisCreateHrisEmployee.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.CreateHrisEmployeeRequest$inboundSchema,
};

export const tool$hrisCreateHrisEmployee: ToolDefinition<typeof args> = {
  name: "hris-create-hris-employee",
  description: `Create an employee`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await hrisCreateHrisEmployee(
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
