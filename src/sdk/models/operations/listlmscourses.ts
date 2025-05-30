/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListLmsCoursesRequest = {
  /**
   * The class ID to filter by
   */
  classId?: string | undefined;
  /**
   * The company ID to filter by
   */
  companyId?: string | undefined;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * The course ID to filter by
   */
  courseId?: string | undefined;
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
export const ListLmsCoursesRequest$inboundSchema: z.ZodType<
  ListLmsCoursesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  class_id: z.string().optional(),
  company_id: z.string().optional(),
  connection_id: z.string(),
  course_id: z.string().optional(),
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
    "class_id": "classId",
    "company_id": "companyId",
    "connection_id": "connectionId",
    "course_id": "courseId",
    "updated_gte": "updatedGte",
  });
});

/** @internal */
export type ListLmsCoursesRequest$Outbound = {
  class_id?: string | undefined;
  company_id?: string | undefined;
  connection_id: string;
  course_id?: string | undefined;
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
export const ListLmsCoursesRequest$outboundSchema: z.ZodType<
  ListLmsCoursesRequest$Outbound,
  z.ZodTypeDef,
  ListLmsCoursesRequest
> = z.object({
  classId: z.string().optional(),
  companyId: z.string().optional(),
  connectionId: z.string(),
  courseId: z.string().optional(),
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
    classId: "class_id",
    companyId: "company_id",
    connectionId: "connection_id",
    courseId: "course_id",
    updatedGte: "updated_gte",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListLmsCoursesRequest$ {
  /** @deprecated use `ListLmsCoursesRequest$inboundSchema` instead. */
  export const inboundSchema = ListLmsCoursesRequest$inboundSchema;
  /** @deprecated use `ListLmsCoursesRequest$outboundSchema` instead. */
  export const outboundSchema = ListLmsCoursesRequest$outboundSchema;
  /** @deprecated use `ListLmsCoursesRequest$Outbound` instead. */
  export type Outbound = ListLmsCoursesRequest$Outbound;
}

export function listLmsCoursesRequestToJSON(
  listLmsCoursesRequest: ListLmsCoursesRequest,
): string {
  return JSON.stringify(
    ListLmsCoursesRequest$outboundSchema.parse(listLmsCoursesRequest),
  );
}

export function listLmsCoursesRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListLmsCoursesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListLmsCoursesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListLmsCoursesRequest' from JSON`,
  );
}
