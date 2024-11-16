/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListMessagingChannelsRequest = {
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
  parentId?: string | undefined;
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
export const ListMessagingChannelsRequest$inboundSchema: z.ZodType<
  ListMessagingChannelsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  limit: z.number().optional(),
  offset: z.number().optional(),
  order: z.string().optional(),
  parent_id: z.string().optional(),
  query: z.string().optional(),
  sort: z.string().optional(),
  updated_gte: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "connection_id": "connectionId",
    "parent_id": "parentId",
    "updated_gte": "updatedGte",
  });
});

/** @internal */
export type ListMessagingChannelsRequest$Outbound = {
  connection_id: string;
  fields?: Array<string> | undefined;
  limit?: number | undefined;
  offset?: number | undefined;
  order?: string | undefined;
  parent_id?: string | undefined;
  query?: string | undefined;
  sort?: string | undefined;
  updated_gte?: string | undefined;
};

/** @internal */
export const ListMessagingChannelsRequest$outboundSchema: z.ZodType<
  ListMessagingChannelsRequest$Outbound,
  z.ZodTypeDef,
  ListMessagingChannelsRequest
> = z.object({
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  limit: z.number().optional(),
  offset: z.number().optional(),
  order: z.string().optional(),
  parentId: z.string().optional(),
  query: z.string().optional(),
  sort: z.string().optional(),
  updatedGte: z.date().transform(v => v.toISOString()).optional(),
}).transform((v) => {
  return remap$(v, {
    connectionId: "connection_id",
    parentId: "parent_id",
    updatedGte: "updated_gte",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListMessagingChannelsRequest$ {
  /** @deprecated use `ListMessagingChannelsRequest$inboundSchema` instead. */
  export const inboundSchema = ListMessagingChannelsRequest$inboundSchema;
  /** @deprecated use `ListMessagingChannelsRequest$outboundSchema` instead. */
  export const outboundSchema = ListMessagingChannelsRequest$outboundSchema;
  /** @deprecated use `ListMessagingChannelsRequest$Outbound` instead. */
  export type Outbound = ListMessagingChannelsRequest$Outbound;
}

export function listMessagingChannelsRequestToJSON(
  listMessagingChannelsRequest: ListMessagingChannelsRequest,
): string {
  return JSON.stringify(
    ListMessagingChannelsRequest$outboundSchema.parse(
      listMessagingChannelsRequest,
    ),
  );
}

export function listMessagingChannelsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListMessagingChannelsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListMessagingChannelsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListMessagingChannelsRequest' from JSON`,
  );
}
