/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListAtsApplicationstatusesRequest = {
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
};

/** @internal */
export const ListAtsApplicationstatusesRequest$inboundSchema: z.ZodType<
  ListAtsApplicationstatusesRequest,
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
}).transform((v) => {
  return remap$(v, {
    "connection_id": "connectionId",
    "updated_gte": "updatedGte",
  });
});

/** @internal */
export type ListAtsApplicationstatusesRequest$Outbound = {
  connection_id: string;
  fields?: Array<string> | undefined;
  limit?: number | undefined;
  offset?: number | undefined;
  order?: string | undefined;
  query?: string | undefined;
  sort?: string | undefined;
  updated_gte?: string | undefined;
};

/** @internal */
export const ListAtsApplicationstatusesRequest$outboundSchema: z.ZodType<
  ListAtsApplicationstatusesRequest$Outbound,
  z.ZodTypeDef,
  ListAtsApplicationstatusesRequest
> = z.object({
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  limit: z.number().optional(),
  offset: z.number().optional(),
  order: z.string().optional(),
  query: z.string().optional(),
  sort: z.string().optional(),
  updatedGte: z.date().transform(v => v.toISOString()).optional(),
}).transform((v) => {
  return remap$(v, {
    connectionId: "connection_id",
    updatedGte: "updated_gte",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAtsApplicationstatusesRequest$ {
  /** @deprecated use `ListAtsApplicationstatusesRequest$inboundSchema` instead. */
  export const inboundSchema = ListAtsApplicationstatusesRequest$inboundSchema;
  /** @deprecated use `ListAtsApplicationstatusesRequest$outboundSchema` instead. */
  export const outboundSchema =
    ListAtsApplicationstatusesRequest$outboundSchema;
  /** @deprecated use `ListAtsApplicationstatusesRequest$Outbound` instead. */
  export type Outbound = ListAtsApplicationstatusesRequest$Outbound;
}

export function listAtsApplicationstatusesRequestToJSON(
  listAtsApplicationstatusesRequest: ListAtsApplicationstatusesRequest,
): string {
  return JSON.stringify(
    ListAtsApplicationstatusesRequest$outboundSchema.parse(
      listAtsApplicationstatusesRequest,
    ),
  );
}

export function listAtsApplicationstatusesRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListAtsApplicationstatusesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListAtsApplicationstatusesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListAtsApplicationstatusesRequest' from JSON`,
  );
}
