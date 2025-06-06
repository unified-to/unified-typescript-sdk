/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListUnifiedApicallsRequest = {
  /**
   * Filter the results to just this integration
   */
  connectionId?: string | undefined;
  env?: string | undefined;
  /**
   * Filter the results for API Calls with errors
   */
  error?: boolean | undefined;
  /**
   * Filter the results to only those integrations for your user referenced by this value
   */
  externalXref?: string | undefined;
  /**
   * Filter the results to just this integration
   */
  integrationType?: string | undefined;
  /**
   * Filter the results for only billable API Calls
   */
  isBillable?: boolean | undefined;
  limit?: number | undefined;
  offset?: number | undefined;
  order?: string | undefined;
  sort?: string | undefined;
  /**
   * Filter the results to just this type
   */
  type?: string | undefined;
  /**
   * Return only results whose updated date is equal or greater to this value
   */
  updatedGte?: string | undefined;
  /**
   * Filter the results to just this webhook
   */
  webhookId?: string | undefined;
};

/** @internal */
export const ListUnifiedApicallsRequest$inboundSchema: z.ZodType<
  ListUnifiedApicallsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  connection_id: z.string().optional(),
  env: z.string().optional(),
  error: z.boolean().optional(),
  external_xref: z.string().optional(),
  integration_type: z.string().optional(),
  is_billable: z.boolean().optional(),
  limit: z.number().optional(),
  offset: z.number().optional(),
  order: z.string().optional(),
  sort: z.string().optional(),
  type: z.string().optional(),
  updated_gte: z.string().optional(),
  webhook_id: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "connection_id": "connectionId",
    "external_xref": "externalXref",
    "integration_type": "integrationType",
    "is_billable": "isBillable",
    "updated_gte": "updatedGte",
    "webhook_id": "webhookId",
  });
});

/** @internal */
export type ListUnifiedApicallsRequest$Outbound = {
  connection_id?: string | undefined;
  env?: string | undefined;
  error?: boolean | undefined;
  external_xref?: string | undefined;
  integration_type?: string | undefined;
  is_billable?: boolean | undefined;
  limit?: number | undefined;
  offset?: number | undefined;
  order?: string | undefined;
  sort?: string | undefined;
  type?: string | undefined;
  updated_gte?: string | undefined;
  webhook_id?: string | undefined;
};

/** @internal */
export const ListUnifiedApicallsRequest$outboundSchema: z.ZodType<
  ListUnifiedApicallsRequest$Outbound,
  z.ZodTypeDef,
  ListUnifiedApicallsRequest
> = z.object({
  connectionId: z.string().optional(),
  env: z.string().optional(),
  error: z.boolean().optional(),
  externalXref: z.string().optional(),
  integrationType: z.string().optional(),
  isBillable: z.boolean().optional(),
  limit: z.number().optional(),
  offset: z.number().optional(),
  order: z.string().optional(),
  sort: z.string().optional(),
  type: z.string().optional(),
  updatedGte: z.string().optional(),
  webhookId: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    connectionId: "connection_id",
    externalXref: "external_xref",
    integrationType: "integration_type",
    isBillable: "is_billable",
    updatedGte: "updated_gte",
    webhookId: "webhook_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListUnifiedApicallsRequest$ {
  /** @deprecated use `ListUnifiedApicallsRequest$inboundSchema` instead. */
  export const inboundSchema = ListUnifiedApicallsRequest$inboundSchema;
  /** @deprecated use `ListUnifiedApicallsRequest$outboundSchema` instead. */
  export const outboundSchema = ListUnifiedApicallsRequest$outboundSchema;
  /** @deprecated use `ListUnifiedApicallsRequest$Outbound` instead. */
  export type Outbound = ListUnifiedApicallsRequest$Outbound;
}

export function listUnifiedApicallsRequestToJSON(
  listUnifiedApicallsRequest: ListUnifiedApicallsRequest,
): string {
  return JSON.stringify(
    ListUnifiedApicallsRequest$outboundSchema.parse(listUnifiedApicallsRequest),
  );
}

export function listUnifiedApicallsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListUnifiedApicallsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListUnifiedApicallsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListUnifiedApicallsRequest' from JSON`,
  );
}
