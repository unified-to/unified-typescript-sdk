/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { locationCreateHrisLocation } from "../../funcs/locationCreateHrisLocation.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.CreateHrisLocationRequest$inboundSchema,
};

export const tool$locationCreateHrisLocation: ToolDefinition<typeof args> = {
  name: "location-create-hris-location",
  description: `Create a location`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await locationCreateHrisLocation(
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
