/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { inventoryPatchCommerceInventory } from "../../funcs/inventoryPatchCommerceInventory.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.PatchCommerceInventoryRequest$inboundSchema,
};

export const tool$inventoryPatchCommerceInventory: ToolDefinition<typeof args> =
  {
    name: "inventory-patch-commerce-inventory",
    description: `Update an inventory`,
    args,
    tool: async (client, args, ctx) => {
      const [result, apiCall] = await inventoryPatchCommerceInventory(
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
