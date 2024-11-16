/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListAtsApplicationsRequest = {
  candidateId?: string | undefined;
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
export const ListAtsApplicationsRequest$inboundSchema: z.ZodType<
  ListAtsApplicationsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  candidate_id: z.string().optional(),
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
    "candidate_id": "candidateId",
    "connection_id": "connectionId",
    "job_id": "jobId",
    "updated_gte": "updatedGte",
  });
});

/** @internal */
export type ListAtsApplicationsRequest$Outbound = {
  candidate_id?: string | undefined;
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
export const ListAtsApplicationsRequest$outboundSchema: z.ZodType<
  ListAtsApplicationsRequest$Outbound,
  z.ZodTypeDef,
  ListAtsApplicationsRequest
> = z.object({
  candidateId: z.string().optional(),
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
    candidateId: "candidate_id",
    connectionId: "connection_id",
    jobId: "job_id",
    updatedGte: "updated_gte",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAtsApplicationsRequest$ {
  /** @deprecated use `ListAtsApplicationsRequest$inboundSchema` instead. */
  export const inboundSchema = ListAtsApplicationsRequest$inboundSchema;
  /** @deprecated use `ListAtsApplicationsRequest$outboundSchema` instead. */
  export const outboundSchema = ListAtsApplicationsRequest$outboundSchema;
  /** @deprecated use `ListAtsApplicationsRequest$Outbound` instead. */
  export type Outbound = ListAtsApplicationsRequest$Outbound;
}

export function listAtsApplicationsRequestToJSON(
  listAtsApplicationsRequest: ListAtsApplicationsRequest,
): string {
  return JSON.stringify(
    ListAtsApplicationsRequest$outboundSchema.parse(listAtsApplicationsRequest),
  );
}

export function listAtsApplicationsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListAtsApplicationsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListAtsApplicationsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListAtsApplicationsRequest' from JSON`,
  );
}
