/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListPaymentLinksRequest = {
  /**
   * ID of the connection
   */
  connectionId: string;
  contactId?: string | undefined;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  limit?: number | undefined;
  offset?: number | undefined;
  order?: string | undefined;
  paymentId?: string | undefined;
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
export const ListPaymentLinksRequest$inboundSchema: z.ZodType<
  ListPaymentLinksRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  connection_id: z.string(),
  contact_id: z.string().optional(),
  fields: z.array(z.string()).optional(),
  limit: z.number().optional(),
  offset: z.number().optional(),
  order: z.string().optional(),
  payment_id: z.string().optional(),
  query: z.string().optional(),
  sort: z.string().optional(),
  updated_gte: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "connection_id": "connectionId",
    "contact_id": "contactId",
    "payment_id": "paymentId",
    "updated_gte": "updatedGte",
  });
});

/** @internal */
export type ListPaymentLinksRequest$Outbound = {
  connection_id: string;
  contact_id?: string | undefined;
  fields?: Array<string> | undefined;
  limit?: number | undefined;
  offset?: number | undefined;
  order?: string | undefined;
  payment_id?: string | undefined;
  query?: string | undefined;
  sort?: string | undefined;
  updated_gte?: string | undefined;
};

/** @internal */
export const ListPaymentLinksRequest$outboundSchema: z.ZodType<
  ListPaymentLinksRequest$Outbound,
  z.ZodTypeDef,
  ListPaymentLinksRequest
> = z.object({
  connectionId: z.string(),
  contactId: z.string().optional(),
  fields: z.array(z.string()).optional(),
  limit: z.number().optional(),
  offset: z.number().optional(),
  order: z.string().optional(),
  paymentId: z.string().optional(),
  query: z.string().optional(),
  sort: z.string().optional(),
  updatedGte: z.date().transform(v => v.toISOString()).optional(),
}).transform((v) => {
  return remap$(v, {
    connectionId: "connection_id",
    contactId: "contact_id",
    paymentId: "payment_id",
    updatedGte: "updated_gte",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListPaymentLinksRequest$ {
  /** @deprecated use `ListPaymentLinksRequest$inboundSchema` instead. */
  export const inboundSchema = ListPaymentLinksRequest$inboundSchema;
  /** @deprecated use `ListPaymentLinksRequest$outboundSchema` instead. */
  export const outboundSchema = ListPaymentLinksRequest$outboundSchema;
  /** @deprecated use `ListPaymentLinksRequest$Outbound` instead. */
  export type Outbound = ListPaymentLinksRequest$Outbound;
}

export function listPaymentLinksRequestToJSON(
  listPaymentLinksRequest: ListPaymentLinksRequest,
): string {
  return JSON.stringify(
    ListPaymentLinksRequest$outboundSchema.parse(listPaymentLinksRequest),
  );
}

export function listPaymentLinksRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListPaymentLinksRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListPaymentLinksRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListPaymentLinksRequest' from JSON`,
  );
}
