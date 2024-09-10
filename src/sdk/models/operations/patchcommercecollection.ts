/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type PatchCommerceCollectionRequest = {
  /**
   * A collection of items/products/services
   */
  commerceCollection?: shared.CommerceCollection | undefined;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the Collection
   */
  id: string;
};

/** @internal */
export const PatchCommerceCollectionRequest$inboundSchema: z.ZodType<
  PatchCommerceCollectionRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  CommerceCollection: shared.CommerceCollection$inboundSchema.optional(),
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "CommerceCollection": "commerceCollection",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type PatchCommerceCollectionRequest$Outbound = {
  CommerceCollection?: shared.CommerceCollection$Outbound | undefined;
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const PatchCommerceCollectionRequest$outboundSchema: z.ZodType<
  PatchCommerceCollectionRequest$Outbound,
  z.ZodTypeDef,
  PatchCommerceCollectionRequest
> = z.object({
  commerceCollection: shared.CommerceCollection$outboundSchema.optional(),
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    commerceCollection: "CommerceCollection",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchCommerceCollectionRequest$ {
  /** @deprecated use `PatchCommerceCollectionRequest$inboundSchema` instead. */
  export const inboundSchema = PatchCommerceCollectionRequest$inboundSchema;
  /** @deprecated use `PatchCommerceCollectionRequest$outboundSchema` instead. */
  export const outboundSchema = PatchCommerceCollectionRequest$outboundSchema;
  /** @deprecated use `PatchCommerceCollectionRequest$Outbound` instead. */
  export type Outbound = PatchCommerceCollectionRequest$Outbound;
}
