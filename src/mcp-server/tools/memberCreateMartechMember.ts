/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { memberCreateMartechMember } from "../../funcs/memberCreateMartechMember.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.CreateMartechMemberRequest$inboundSchema,
};

export const tool$memberCreateMartechMember: ToolDefinition<typeof args> = {
  name: "member-create-martech-member",
  description: `Create a member`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await memberCreateMartechMember(
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
