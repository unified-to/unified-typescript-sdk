/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListHrisTimeoffsRequest = {
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
  sort?: string | undefined;
  /**
   * Return only results whose updated date is equal or greater to this value
   */
  updatedGte?: Date | undefined;
  userId?: string | undefined;
};

/** @internal */
export const ListHrisTimeoffsRequest$inboundSchema: z.ZodType<
  ListHrisTimeoffsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  connection_id: z.string(),
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
    "updated_gte": "updatedGte",
    "user_id": "userId",
  });
});

/** @internal */
export type ListHrisTimeoffsRequest$Outbound = {
  connection_id: string;
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
export const ListHrisTimeoffsRequest$outboundSchema: z.ZodType<
  ListHrisTimeoffsRequest$Outbound,
  z.ZodTypeDef,
  ListHrisTimeoffsRequest
> = z.object({
  connectionId: z.string(),
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
    updatedGte: "updated_gte",
    userId: "user_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListHrisTimeoffsRequest$ {
  /** @deprecated use `ListHrisTimeoffsRequest$inboundSchema` instead. */
  export const inboundSchema = ListHrisTimeoffsRequest$inboundSchema;
  /** @deprecated use `ListHrisTimeoffsRequest$outboundSchema` instead. */
  export const outboundSchema = ListHrisTimeoffsRequest$outboundSchema;
  /** @deprecated use `ListHrisTimeoffsRequest$Outbound` instead. */
  export type Outbound = ListHrisTimeoffsRequest$Outbound;
}

export function listHrisTimeoffsRequestToJSON(
  listHrisTimeoffsRequest: ListHrisTimeoffsRequest,
): string {
  return JSON.stringify(
    ListHrisTimeoffsRequest$outboundSchema.parse(listHrisTimeoffsRequest),
  );
}

export function listHrisTimeoffsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListHrisTimeoffsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListHrisTimeoffsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListHrisTimeoffsRequest' from JSON`,
  );
}
