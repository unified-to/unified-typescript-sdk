/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { hrisPatchHrisDevice } from "../../funcs/hrisPatchHrisDevice.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.PatchHrisDeviceRequest$inboundSchema,
};

export const tool$hrisPatchHrisDevice: ToolDefinition<typeof args> = {
  name: "hris-patch-hris-device",
  description: `Update a device`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await hrisPatchHrisDevice(
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
