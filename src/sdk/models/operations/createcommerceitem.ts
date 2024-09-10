/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type CreateCommerceItemRequest = {
  commerceItem?: shared.CommerceItem | undefined;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
};

/** @internal */
export const CreateCommerceItemRequest$inboundSchema: z.ZodType<
  CreateCommerceItemRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  CommerceItem: shared.CommerceItem$inboundSchema.optional(),
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "CommerceItem": "commerceItem",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type CreateCommerceItemRequest$Outbound = {
  CommerceItem?: shared.CommerceItem$Outbound | undefined;
  connection_id: string;
  fields?: Array<string> | undefined;
};

/** @internal */
export const CreateCommerceItemRequest$outboundSchema: z.ZodType<
  CreateCommerceItemRequest$Outbound,
  z.ZodTypeDef,
  CreateCommerceItemRequest
> = z.object({
  commerceItem: shared.CommerceItem$outboundSchema.optional(),
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    commerceItem: "CommerceItem",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCommerceItemRequest$ {
  /** @deprecated use `CreateCommerceItemRequest$inboundSchema` instead. */
  export const inboundSchema = CreateCommerceItemRequest$inboundSchema;
  /** @deprecated use `CreateCommerceItemRequest$outboundSchema` instead. */
  export const outboundSchema = CreateCommerceItemRequest$outboundSchema;
  /** @deprecated use `CreateCommerceItemRequest$Outbound` instead. */
  export type Outbound = CreateCommerceItemRequest$Outbound;
}
