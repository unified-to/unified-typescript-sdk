/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListCrmCompaniesRequest = {
  /**
   * ID of the connection
   */
  connectionId: string;
  contactId?: string | undefined;
  dealId?: string | undefined;
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
  sort?: string | undefined;
  /**
   * Return only results whose updated date is equal or greater to this value
   */
  updatedGte?: Date | undefined;
  userId?: string | undefined;
};

/** @internal */
export const ListCrmCompaniesRequest$inboundSchema: z.ZodType<
  ListCrmCompaniesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  connection_id: z.string(),
  contact_id: z.string().optional(),
  deal_id: z.string().optional(),
  fields: z.array(z.string()).optional(),
  limit: z.number().optional(),
  offset: z.number().optional(),
  order: z.string().optional(),
  query: z.string().optional(),
  sort: z.string().optional(),
  updated_gte: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  user_id: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "connection_id": "connectionId",
    "contact_id": "contactId",
    "deal_id": "dealId",
    "updated_gte": "updatedGte",
    "user_id": "userId",
  });
});

/** @internal */
export type ListCrmCompaniesRequest$Outbound = {
  connection_id: string;
  contact_id?: string | undefined;
  deal_id?: string | undefined;
  fields?: Array<string> | undefined;
  limit?: number | undefined;
  offset?: number | undefined;
  order?: string | undefined;
  query?: string | undefined;
  sort?: string | undefined;
  updated_gte?: string | undefined;
  user_id?: string | undefined;
};

/** @internal */
export const ListCrmCompaniesRequest$outboundSchema: z.ZodType<
  ListCrmCompaniesRequest$Outbound,
  z.ZodTypeDef,
  ListCrmCompaniesRequest
> = z.object({
  connectionId: z.string(),
  contactId: z.string().optional(),
  dealId: z.string().optional(),
  fields: z.array(z.string()).optional(),
  limit: z.number().optional(),
  offset: z.number().optional(),
  order: z.string().optional(),
  query: z.string().optional(),
  sort: z.string().optional(),
  updatedGte: z.date().transform(v => v.toISOString()).optional(),
  userId: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    connectionId: "connection_id",
    contactId: "contact_id",
    dealId: "deal_id",
    updatedGte: "updated_gte",
    userId: "user_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListCrmCompaniesRequest$ {
  /** @deprecated use `ListCrmCompaniesRequest$inboundSchema` instead. */
  export const inboundSchema = ListCrmCompaniesRequest$inboundSchema;
  /** @deprecated use `ListCrmCompaniesRequest$outboundSchema` instead. */
  export const outboundSchema = ListCrmCompaniesRequest$outboundSchema;
  /** @deprecated use `ListCrmCompaniesRequest$Outbound` instead. */
  export type Outbound = ListCrmCompaniesRequest$Outbound;
}

export function listCrmCompaniesRequestToJSON(
  listCrmCompaniesRequest: ListCrmCompaniesRequest,
): string {
  return JSON.stringify(
    ListCrmCompaniesRequest$outboundSchema.parse(listCrmCompaniesRequest),
  );
}

export function listCrmCompaniesRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListCrmCompaniesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListCrmCompaniesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListCrmCompaniesRequest' from JSON`,
  );
}
