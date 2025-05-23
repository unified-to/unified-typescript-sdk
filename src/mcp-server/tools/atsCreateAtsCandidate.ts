/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { atsCreateAtsCandidate } from "../../funcs/atsCreateAtsCandidate.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.CreateAtsCandidateRequest$inboundSchema,
};

export const tool$atsCreateAtsCandidate: ToolDefinition<typeof args> = {
  name: "ats-create-ats-candidate",
  description: `Create a candidate`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await atsCreateAtsCandidate(
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
