/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListPaymentSubscriptionsRequest = {
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * The contact ID to filter by
   */
  contactId?: string | undefined;
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
export const ListPaymentSubscriptionsRequest$inboundSchema: z.ZodType<
  ListPaymentSubscriptionsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  connection_id: z.string(),
  contact_id: z.string().optional(),
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
    "connection_id": "connectionId",
    "contact_id": "contactId",
    "updated_gte": "updatedGte",
  });
});

/** @internal */
export type ListPaymentSubscriptionsRequest$Outbound = {
  connection_id: string;
  contact_id?: string | undefined;
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
export const ListPaymentSubscriptionsRequest$outboundSchema: z.ZodType<
  ListPaymentSubscriptionsRequest$Outbound,
  z.ZodTypeDef,
  ListPaymentSubscriptionsRequest
> = z.object({
  connectionId: z.string(),
  contactId: z.string().optional(),
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
    connectionId: "connection_id",
    contactId: "contact_id",
    updatedGte: "updated_gte",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListPaymentSubscriptionsRequest$ {
  /** @deprecated use `ListPaymentSubscriptionsRequest$inboundSchema` instead. */
  export const inboundSchema = ListPaymentSubscriptionsRequest$inboundSchema;
  /** @deprecated use `ListPaymentSubscriptionsRequest$outboundSchema` instead. */
  export const outboundSchema = ListPaymentSubscriptionsRequest$outboundSchema;
  /** @deprecated use `ListPaymentSubscriptionsRequest$Outbound` instead. */
  export type Outbound = ListPaymentSubscriptionsRequest$Outbound;
}

export function listPaymentSubscriptionsRequestToJSON(
  listPaymentSubscriptionsRequest: ListPaymentSubscriptionsRequest,
): string {
  return JSON.stringify(
    ListPaymentSubscriptionsRequest$outboundSchema.parse(
      listPaymentSubscriptionsRequest,
    ),
  );
}

export function listPaymentSubscriptionsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListPaymentSubscriptionsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListPaymentSubscriptionsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListPaymentSubscriptionsRequest' from JSON`,
  );
}
