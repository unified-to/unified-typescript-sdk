/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { hrisGetHrisCompany } from "../../funcs/hrisGetHrisCompany.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetHrisCompanyRequest$inboundSchema,
};

export const tool$hrisGetHrisCompany: ToolDefinition<typeof args> = {
  name: "hris-get-hris-company",
  description: `Retrieve a company`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await hrisGetHrisCompany(
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
