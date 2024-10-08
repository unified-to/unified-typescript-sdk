/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type RemoveCommerceItemRequest = {
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * ID of the Item
   */
  id: string;
};

/** @internal */
export const RemoveCommerceItemRequest$inboundSchema: z.ZodType<
  RemoveCommerceItemRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  connection_id: z.string(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "connection_id": "connectionId",
  });
});

/** @internal */
export type RemoveCommerceItemRequest$Outbound = {
  connection_id: string;
  id: string;
};

/** @internal */
export const RemoveCommerceItemRequest$outboundSchema: z.ZodType<
  RemoveCommerceItemRequest$Outbound,
  z.ZodTypeDef,
  RemoveCommerceItemRequest
> = z.object({
  connectionId: z.string(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RemoveCommerceItemRequest$ {
  /** @deprecated use `RemoveCommerceItemRequest$inboundSchema` instead. */
  export const inboundSchema = RemoveCommerceItemRequest$inboundSchema;
  /** @deprecated use `RemoveCommerceItemRequest$outboundSchema` instead. */
  export const outboundSchema = RemoveCommerceItemRequest$outboundSchema;
  /** @deprecated use `RemoveCommerceItemRequest$Outbound` instead. */
  export type Outbound = RemoveCommerceItemRequest$Outbound;
}
