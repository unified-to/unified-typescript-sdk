/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { kmsUpdateKmsComment } from "../../funcs/kmsUpdateKmsComment.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.UpdateKmsCommentRequest$inboundSchema,
};

export const tool$kmsUpdateKmsComment: ToolDefinition<typeof args> = {
  name: "kms-update-kms-comment",
  description: `Update a comment`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await kmsUpdateKmsComment(
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
