/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type ListAccountingOrdersRequest = {
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
  type?: string | undefined;
  /**
   * Return only results whose updated date is equal or greater to this value
   */
  updatedGte?: Date | undefined;
};

/** @internal */
export const ListAccountingOrdersRequest$inboundSchema: z.ZodType<
  ListAccountingOrdersRequest,
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
  type: z.string().optional(),
  updated_gte: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "connection_id": "connectionId",
    "updated_gte": "updatedGte",
  });
});

/** @internal */
export type ListAccountingOrdersRequest$Outbound = {
  connection_id: string;
  fields?: Array<string> | undefined;
  limit?: number | undefined;
  offset?: number | undefined;
  order?: string | undefined;
  query?: string | undefined;
  sort?: string | undefined;
  type?: string | undefined;
  updated_gte?: string | undefined;
};

/** @internal */
export const ListAccountingOrdersRequest$outboundSchema: z.ZodType<
  ListAccountingOrdersRequest$Outbound,
  z.ZodTypeDef,
  ListAccountingOrdersRequest
> = z.object({
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  limit: z.number().optional(),
  offset: z.number().optional(),
  order: z.string().optional(),
  query: z.string().optional(),
  sort: z.string().optional(),
  type: z.string().optional(),
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
export namespace ListAccountingOrdersRequest$ {
  /** @deprecated use `ListAccountingOrdersRequest$inboundSchema` instead. */
  export const inboundSchema = ListAccountingOrdersRequest$inboundSchema;
  /** @deprecated use `ListAccountingOrdersRequest$outboundSchema` instead. */
  export const outboundSchema = ListAccountingOrdersRequest$outboundSchema;
  /** @deprecated use `ListAccountingOrdersRequest$Outbound` instead. */
  export type Outbound = ListAccountingOrdersRequest$Outbound;
}
