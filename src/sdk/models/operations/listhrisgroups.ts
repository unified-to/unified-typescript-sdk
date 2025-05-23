/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListHrisGroupsRequest = {
  /**
   * The company ID to filter by
   */
  companyId?: string | undefined;
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
   * Query string to search. eg. email address or name
   */
  query?: string | undefined;
  /**
   * Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar
   */
  raw?: string | undefined;
  sort?: string | undefined;
  /**
   * Return only results whose updated date is equal or greater to this value
   */
  updatedGte?: string | undefined;
};

/** @internal */
export const ListHrisGroupsRequest$inboundSchema: z.ZodType<
  ListHrisGroupsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  company_id: z.string().optional(),
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  limit: z.number().optional(),
  offset: z.number().optional(),
  order: z.string().optional(),
  query: z.string().optional(),
  raw: z.string().optional(),
  sort: z.string().optional(),
  updated_gte: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "company_id": "companyId",
    "connection_id": "connectionId",
    "updated_gte": "updatedGte",
  });
});

/** @internal */
export type ListHrisGroupsRequest$Outbound = {
  company_id?: string | undefined;
  connection_id: string;
  fields?: Array<string> | undefined;
  limit?: number | undefined;
  offset?: number | undefined;
  order?: string | undefined;
  query?: string | undefined;
  raw?: string | undefined;
  sort?: string | undefined;
  updated_gte?: string | undefined;
};

/** @internal */
export const ListHrisGroupsRequest$outboundSchema: z.ZodType<
  ListHrisGroupsRequest$Outbound,
  z.ZodTypeDef,
  ListHrisGroupsRequest
> = z.object({
  companyId: z.string().optional(),
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  limit: z.number().optional(),
  offset: z.number().optional(),
  order: z.string().optional(),
  query: z.string().optional(),
  raw: z.string().optional(),
  sort: z.string().optional(),
  updatedGte: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    companyId: "company_id",
    connectionId: "connection_id",
    updatedGte: "updated_gte",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListHrisGroupsRequest$ {
  /** @deprecated use `ListHrisGroupsRequest$inboundSchema` instead. */
  export const inboundSchema = ListHrisGroupsRequest$inboundSchema;
  /** @deprecated use `ListHrisGroupsRequest$outboundSchema` instead. */
  export const outboundSchema = ListHrisGroupsRequest$outboundSchema;
  /** @deprecated use `ListHrisGroupsRequest$Outbound` instead. */
  export type Outbound = ListHrisGroupsRequest$Outbound;
}

export function listHrisGroupsRequestToJSON(
  listHrisGroupsRequest: ListHrisGroupsRequest,
): string {
  return JSON.stringify(
    ListHrisGroupsRequest$outboundSchema.parse(listHrisGroupsRequest),
  );
}

export function listHrisGroupsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListHrisGroupsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListHrisGroupsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListHrisGroupsRequest' from JSON`,
  );
}
