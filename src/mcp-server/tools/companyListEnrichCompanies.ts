/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { companyListEnrichCompanies } from "../../funcs/companyListEnrichCompanies.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListEnrichCompaniesRequest$inboundSchema,
};

export const tool$companyListEnrichCompanies: ToolDefinition<typeof args> = {
  name: "company-list-enrich-companies",
  description: `Retrieve enrichment information for a company`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await companyListEnrichCompanies(
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
