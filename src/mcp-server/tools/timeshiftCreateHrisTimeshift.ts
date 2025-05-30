/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { timeshiftCreateHrisTimeshift } from "../../funcs/timeshiftCreateHrisTimeshift.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.CreateHrisTimeshiftRequest$inboundSchema,
};

export const tool$timeshiftCreateHrisTimeshift: ToolDefinition<typeof args> = {
  name: "timeshift-create-hris-timeshift",
  description: `Create a timeshift`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await timeshiftCreateHrisTimeshift(
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
