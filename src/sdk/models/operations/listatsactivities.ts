/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListAtsActivitiesRequest = {
  /**
   * The application ID to filter by
   */
  applicationId?: string | undefined;
  /**
   * The candidate ID to filter by
   */
  candidateId?: string | undefined;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * The document ID to filter by
   */
  documentId?: string | undefined;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * The interview ID to filter by
   */
  interviewId?: string | undefined;
  /**
   * The job ID to filter by
   */
  jobId?: string | undefined;
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
   * The type to filter by
   */
  type?: string | undefined;
  /**
   * Return only results whose updated date is equal or greater to this value
   */
  updatedGte?: string | undefined;
  /**
   * The user/employee ID to filter by
   */
  userId?: string | undefined;
};

/** @internal */
export const ListAtsActivitiesRequest$inboundSchema: z.ZodType<
  ListAtsActivitiesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  application_id: z.string().optional(),
  candidate_id: z.string().optional(),
  connection_id: z.string(),
  document_id: z.string().optional(),
  fields: z.array(z.string()).optional(),
  interview_id: z.string().optional(),
  job_id: z.string().optional(),
  limit: z.number().optional(),
  offset: z.number().optional(),
  order: z.string().optional(),
  query: z.string().optional(),
  raw: z.string().optional(),
  sort: z.string().optional(),
  type: z.string().optional(),
  updated_gte: z.string().optional(),
  user_id: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "application_id": "applicationId",
    "candidate_id": "candidateId",
    "connection_id": "connectionId",
    "document_id": "documentId",
    "interview_id": "interviewId",
    "job_id": "jobId",
    "updated_gte": "updatedGte",
    "user_id": "userId",
  });
});

/** @internal */
export type ListAtsActivitiesRequest$Outbound = {
  application_id?: string | undefined;
  candidate_id?: string | undefined;
  connection_id: string;
  document_id?: string | undefined;
  fields?: Array<string> | undefined;
  interview_id?: string | undefined;
  job_id?: string | undefined;
  limit?: number | undefined;
  offset?: number | undefined;
  order?: string | undefined;
  query?: string | undefined;
  raw?: string | undefined;
  sort?: string | undefined;
  type?: string | undefined;
  updated_gte?: string | undefined;
  user_id?: string | undefined;
};

/** @internal */
export const ListAtsActivitiesRequest$outboundSchema: z.ZodType<
  ListAtsActivitiesRequest$Outbound,
  z.ZodTypeDef,
  ListAtsActivitiesRequest
> = z.object({
  applicationId: z.string().optional(),
  candidateId: z.string().optional(),
  connectionId: z.string(),
  documentId: z.string().optional(),
  fields: z.array(z.string()).optional(),
  interviewId: z.string().optional(),
  jobId: z.string().optional(),
  limit: z.number().optional(),
  offset: z.number().optional(),
  order: z.string().optional(),
  query: z.string().optional(),
  raw: z.string().optional(),
  sort: z.string().optional(),
  type: z.string().optional(),
  updatedGte: z.string().optional(),
  userId: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    applicationId: "application_id",
    candidateId: "candidate_id",
    connectionId: "connection_id",
    documentId: "document_id",
    interviewId: "interview_id",
    jobId: "job_id",
    updatedGte: "updated_gte",
    userId: "user_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAtsActivitiesRequest$ {
  /** @deprecated use `ListAtsActivitiesRequest$inboundSchema` instead. */
  export const inboundSchema = ListAtsActivitiesRequest$inboundSchema;
  /** @deprecated use `ListAtsActivitiesRequest$outboundSchema` instead. */
  export const outboundSchema = ListAtsActivitiesRequest$outboundSchema;
  /** @deprecated use `ListAtsActivitiesRequest$Outbound` instead. */
  export type Outbound = ListAtsActivitiesRequest$Outbound;
}

export function listAtsActivitiesRequestToJSON(
  listAtsActivitiesRequest: ListAtsActivitiesRequest,
): string {
  return JSON.stringify(
    ListAtsActivitiesRequest$outboundSchema.parse(listAtsActivitiesRequest),
  );
}

export function listAtsActivitiesRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListAtsActivitiesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListAtsActivitiesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListAtsActivitiesRequest' from JSON`,
  );
}
