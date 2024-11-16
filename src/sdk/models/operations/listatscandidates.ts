/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListAtsCandidatesRequest = {
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  jobId?: string | undefined;
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
export const ListAtsCandidatesRequest$inboundSchema: z.ZodType<
  ListAtsCandidatesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  job_id: z.string().optional(),
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
    "job_id": "jobId",
    "updated_gte": "updatedGte",
  });
});

/** @internal */
export type ListAtsCandidatesRequest$Outbound = {
  connection_id: string;
  fields?: Array<string> | undefined;
  job_id?: string | undefined;
  limit?: number | undefined;
  offset?: number | undefined;
  order?: string | undefined;
  query?: string | undefined;
  sort?: string | undefined;
  updated_gte?: string | undefined;
};

/** @internal */
export const ListAtsCandidatesRequest$outboundSchema: z.ZodType<
  ListAtsCandidatesRequest$Outbound,
  z.ZodTypeDef,
  ListAtsCandidatesRequest
> = z.object({
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  jobId: z.string().optional(),
  limit: z.number().optional(),
  offset: z.number().optional(),
  order: z.string().optional(),
  query: z.string().optional(),
  sort: z.string().optional(),
  updatedGte: z.date().transform(v => v.toISOString()).optional(),
}).transform((v) => {
  return remap$(v, {
    connectionId: "connection_id",
    jobId: "job_id",
    updatedGte: "updated_gte",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAtsCandidatesRequest$ {
  /** @deprecated use `ListAtsCandidatesRequest$inboundSchema` instead. */
  export const inboundSchema = ListAtsCandidatesRequest$inboundSchema;
  /** @deprecated use `ListAtsCandidatesRequest$outboundSchema` instead. */
  export const outboundSchema = ListAtsCandidatesRequest$outboundSchema;
  /** @deprecated use `ListAtsCandidatesRequest$Outbound` instead. */
  export type Outbound = ListAtsCandidatesRequest$Outbound;
}

export function listAtsCandidatesRequestToJSON(
  listAtsCandidatesRequest: ListAtsCandidatesRequest,
): string {
  return JSON.stringify(
    ListAtsCandidatesRequest$outboundSchema.parse(listAtsCandidatesRequest),
  );
}

export function listAtsCandidatesRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListAtsCandidatesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListAtsCandidatesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListAtsCandidatesRequest' from JSON`,
  );
}
