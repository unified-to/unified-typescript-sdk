/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListAccountingOrdersRequest = {
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  limit?: number | undefined;
  offset?: number | undefined;
  order?: string | undefined;
  /**
   * The org ID to filter by
   */
  orgId?: string | undefined;
  /**
   * Query string to search. eg. email address or name
   */
  query?: string | undefined;
  /**
   * Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar
   */
  raw?: string | undefined;
  sort?: string | undefined;
  type?: string | undefined;
  /**
   * Return only results whose updated date is equal or greater to this value
   */
  updatedGte?: string | undefined;
};

/** @internal */
export const ListAccountingOrdersRequest$inboundSchema: z.ZodType<
  ListAccountingOrdersRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  limit: z.number().optional(),
  offset: z.number().optional(),
  order: z.string().optional(),
  org_id: z.string().optional(),
  query: z.string().optional(),
  raw: z.string().optional(),
  sort: z.string().optional(),
  type: z.string().optional(),
  updated_gte: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "connection_id": "connectionId",
    "org_id": "orgId",
    "updated_gte": "updatedGte",
  });
});

/** @internal */
export type ListAccountingOrdersRequest$Outbound = {
  connection_id: string;
  fields?: Array<string> | undefined;
  limit?: number | undefined;
  offset?: number | undefined;
  order?: string | undefined;
  org_id?: string | undefined;
  query?: string | undefined;
  raw?: string | undefined;
  sort?: string | undefined;
  type?: string | undefined;
  updated_gte?: string | undefined;
};

/** @internal */
export const ListAccountingOrdersRequest$outboundSchema: z.ZodType<
  ListAccountingOrdersRequest$Outbound,
  z.ZodTypeDef,
  ListAccountingOrdersRequest
> = z.object({
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  limit: z.number().optional(),
  offset: z.number().optional(),
  order: z.string().optional(),
  orgId: z.string().optional(),
  query: z.string().optional(),
  raw: z.string().optional(),
  sort: z.string().optional(),
  type: z.string().optional(),
  updatedGte: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    connectionId: "connection_id",
    orgId: "org_id",
    updatedGte: "updated_gte",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAccountingOrdersRequest$ {
  /** @deprecated use `ListAccountingOrdersRequest$inboundSchema` instead. */
  export const inboundSchema = ListAccountingOrdersRequest$inboundSchema;
  /** @deprecated use `ListAccountingOrdersRequest$outboundSchema` instead. */
  export const outboundSchema = ListAccountingOrdersRequest$outboundSchema;
  /** @deprecated use `ListAccountingOrdersRequest$Outbound` instead. */
  export type Outbound = ListAccountingOrdersRequest$Outbound;
}

export function listAccountingOrdersRequestToJSON(
  listAccountingOrdersRequest: ListAccountingOrdersRequest,
): string {
  return JSON.stringify(
    ListAccountingOrdersRequest$outboundSchema.parse(
      listAccountingOrdersRequest,
    ),
  );
}

export function listAccountingOrdersRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListAccountingOrdersRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListAccountingOrdersRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListAccountingOrdersRequest' from JSON`,
  );
}
