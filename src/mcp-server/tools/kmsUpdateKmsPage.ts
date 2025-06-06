/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { kmsUpdateKmsPage } from "../../funcs/kmsUpdateKmsPage.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.UpdateKmsPageRequest$inboundSchema,
};

export const tool$kmsUpdateKmsPage: ToolDefinition<typeof args> = {
  name: "kms-update-kms-page",
  description: `Update a page`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await kmsUpdateKmsPage(
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
