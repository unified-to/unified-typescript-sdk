/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { commerceListCommerceReviews } from "../../funcs/commerceListCommerceReviews.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListCommerceReviewsRequest$inboundSchema,
};

export const tool$commerceListCommerceReviews: ToolDefinition<typeof args> = {
  name: "commerce-list-commerce-reviews",
  description: `List all reviews`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await commerceListCommerceReviews(
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
