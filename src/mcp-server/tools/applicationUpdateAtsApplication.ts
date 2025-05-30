/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { applicationUpdateAtsApplication } from "../../funcs/applicationUpdateAtsApplication.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.UpdateAtsApplicationRequest$inboundSchema,
};

export const tool$applicationUpdateAtsApplication: ToolDefinition<typeof args> =
  {
    name: "application-update-ats-application",
    description: `Update an application`,
    args,
    tool: async (client, args, ctx) => {
      const [result, apiCall] = await applicationUpdateAtsApplication(
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
