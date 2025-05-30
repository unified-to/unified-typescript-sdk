/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { connectionRemoveUnifiedConnection } from "../../funcs/connectionRemoveUnifiedConnection.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.RemoveUnifiedConnectionRequest$inboundSchema,
};

export const tool$connectionRemoveUnifiedConnection: ToolDefinition<
  typeof args
> = {
  name: "connection-remove-unified-connection",
  description: `Remove connection`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await connectionRemoveUnifiedConnection(
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

    return formatResult(void 0, apiCall);
  },
};
