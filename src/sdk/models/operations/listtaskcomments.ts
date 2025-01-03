/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListTaskCommentsRequest = {
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
  taskId?: string | undefined;
  /**
   * Return only results whose updated date is equal or greater to this value
   */
  updatedGte?: Date | undefined;
};

/** @internal */
export const ListTaskCommentsRequest$inboundSchema: z.ZodType<
  ListTaskCommentsRequest,
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
  task_id: z.string().optional(),
  updated_gte: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "connection_id": "connectionId",
    "task_id": "taskId",
    "updated_gte": "updatedGte",
  });
});

/** @internal */
export type ListTaskCommentsRequest$Outbound = {
  connection_id: string;
  fields?: Array<string> | undefined;
  limit?: number | undefined;
  offset?: number | undefined;
  order?: string | undefined;
  query?: string | undefined;
  sort?: string | undefined;
  task_id?: string | undefined;
  updated_gte?: string | undefined;
};

/** @internal */
export const ListTaskCommentsRequest$outboundSchema: z.ZodType<
  ListTaskCommentsRequest$Outbound,
  z.ZodTypeDef,
  ListTaskCommentsRequest
> = z.object({
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  limit: z.number().optional(),
  offset: z.number().optional(),
  order: z.string().optional(),
  query: z.string().optional(),
  sort: z.string().optional(),
  taskId: z.string().optional(),
  updatedGte: z.date().transform(v => v.toISOString()).optional(),
}).transform((v) => {
  return remap$(v, {
    connectionId: "connection_id",
    taskId: "task_id",
    updatedGte: "updated_gte",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListTaskCommentsRequest$ {
  /** @deprecated use `ListTaskCommentsRequest$inboundSchema` instead. */
  export const inboundSchema = ListTaskCommentsRequest$inboundSchema;
  /** @deprecated use `ListTaskCommentsRequest$outboundSchema` instead. */
  export const outboundSchema = ListTaskCommentsRequest$outboundSchema;
  /** @deprecated use `ListTaskCommentsRequest$Outbound` instead. */
  export type Outbound = ListTaskCommentsRequest$Outbound;
}

export function listTaskCommentsRequestToJSON(
  listTaskCommentsRequest: ListTaskCommentsRequest,
): string {
  return JSON.stringify(
    ListTaskCommentsRequest$outboundSchema.parse(listTaskCommentsRequest),
  );
}

export function listTaskCommentsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListTaskCommentsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListTaskCommentsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListTaskCommentsRequest' from JSON`,
  );
}
