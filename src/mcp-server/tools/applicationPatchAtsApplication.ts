/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { applicationPatchAtsApplication } from "../../funcs/applicationPatchAtsApplication.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.PatchAtsApplicationRequest$inboundSchema,
};

export const tool$applicationPatchAtsApplication: ToolDefinition<typeof args> =
  {
    name: "application-patch-ats-application",
    description: `Update an application`,
    args,
    tool: async (client, args, ctx) => {
      const [result, apiCall] = await applicationPatchAtsApplication(
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
