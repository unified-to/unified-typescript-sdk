/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { locationUpdateCommerceLocation } from "../../funcs/locationUpdateCommerceLocation.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.UpdateCommerceLocationRequest$inboundSchema,
};

export const tool$locationUpdateCommerceLocation: ToolDefinition<typeof args> =
  {
    name: "location-update-commerce-location",
    description: `Update a location`,
    args,
    tool: async (client, args, ctx) => {
      const [result, apiCall] = await locationUpdateCommerceLocation(
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
