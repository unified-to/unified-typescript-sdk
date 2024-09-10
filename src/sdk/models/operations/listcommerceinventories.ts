/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type ListCommerceInventoriesRequest = {
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  itemVariantId?: string | undefined;
  limit?: number | undefined;
  locationId?: string | undefined;
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
export const ListCommerceInventoriesRequest$inboundSchema: z.ZodType<
  ListCommerceInventoriesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  item_variant_id: z.string().optional(),
  limit: z.number().optional(),
  location_id: z.string().optional(),
  offset: z.number().optional(),
  order: z.string().optional(),
  query: z.string().optional(),
  sort: z.string().optional(),
  updated_gte: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "connection_id": "connectionId",
    "item_variant_id": "itemVariantId",
    "location_id": "locationId",
    "updated_gte": "updatedGte",
  });
});

/** @internal */
export type ListCommerceInventoriesRequest$Outbound = {
  connection_id: string;
  fields?: Array<string> | undefined;
  item_variant_id?: string | undefined;
  limit?: number | undefined;
  location_id?: string | undefined;
  offset?: number | undefined;
  order?: string | undefined;
  query?: string | undefined;
  sort?: string | undefined;
  updated_gte?: string | undefined;
};

/** @internal */
export const ListCommerceInventoriesRequest$outboundSchema: z.ZodType<
  ListCommerceInventoriesRequest$Outbound,
  z.ZodTypeDef,
  ListCommerceInventoriesRequest
> = z.object({
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  itemVariantId: z.string().optional(),
  limit: z.number().optional(),
  locationId: z.string().optional(),
  offset: z.number().optional(),
  order: z.string().optional(),
  query: z.string().optional(),
  sort: z.string().optional(),
  updatedGte: z.date().transform(v => v.toISOString()).optional(),
}).transform((v) => {
  return remap$(v, {
    connectionId: "connection_id",
    itemVariantId: "item_variant_id",
    locationId: "location_id",
    updatedGte: "updated_gte",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListCommerceInventoriesRequest$ {
  /** @deprecated use `ListCommerceInventoriesRequest$inboundSchema` instead. */
  export const inboundSchema = ListCommerceInventoriesRequest$inboundSchema;
  /** @deprecated use `ListCommerceInventoriesRequest$outboundSchema` instead. */
  export const outboundSchema = ListCommerceInventoriesRequest$outboundSchema;
  /** @deprecated use `ListCommerceInventoriesRequest$Outbound` instead. */
  export type Outbound = ListCommerceInventoriesRequest$Outbound;
}
