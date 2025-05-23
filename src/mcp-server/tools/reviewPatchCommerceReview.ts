/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { reviewPatchCommerceReview } from "../../funcs/reviewPatchCommerceReview.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.PatchCommerceReviewRequest$inboundSchema,
};

export const tool$reviewPatchCommerceReview: ToolDefinition<typeof args> = {
  name: "review-patch-commerce-review",
  description: `Update a review`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await reviewPatchCommerceReview(
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
