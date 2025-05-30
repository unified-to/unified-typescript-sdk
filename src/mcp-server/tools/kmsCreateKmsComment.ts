/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { kmsCreateKmsComment } from "../../funcs/kmsCreateKmsComment.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.CreateKmsCommentRequest$inboundSchema,
};

export const tool$kmsCreateKmsComment: ToolDefinition<typeof args> = {
  name: "kms-create-kms-comment",
  description: `Create a comment`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await kmsCreateKmsComment(
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
