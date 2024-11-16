/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListAccountingOrganizationsRequest = {
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
export const ListAccountingOrganizationsRequest$inboundSchema: z.ZodType<
  ListAccountingOrganizationsRequest,
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
export type ListAccountingOrganizationsRequest$Outbound = {
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
export const ListAccountingOrganizationsRequest$outboundSchema: z.ZodType<
  ListAccountingOrganizationsRequest$Outbound,
  z.ZodTypeDef,
  ListAccountingOrganizationsRequest
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
export namespace ListAccountingOrganizationsRequest$ {
  /** @deprecated use `ListAccountingOrganizationsRequest$inboundSchema` instead. */
  export const inboundSchema = ListAccountingOrganizationsRequest$inboundSchema;
  /** @deprecated use `ListAccountingOrganizationsRequest$outboundSchema` instead. */
  export const outboundSchema =
    ListAccountingOrganizationsRequest$outboundSchema;
  /** @deprecated use `ListAccountingOrganizationsRequest$Outbound` instead. */
  export type Outbound = ListAccountingOrganizationsRequest$Outbound;
}

export function listAccountingOrganizationsRequestToJSON(
  listAccountingOrganizationsRequest: ListAccountingOrganizationsRequest,
): string {
  return JSON.stringify(
    ListAccountingOrganizationsRequest$outboundSchema.parse(
      listAccountingOrganizationsRequest,
    ),
  );
}

export function listAccountingOrganizationsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListAccountingOrganizationsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ListAccountingOrganizationsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListAccountingOrganizationsRequest' from JSON`,
  );
}
