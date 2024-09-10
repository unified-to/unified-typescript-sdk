/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type ListPassthroughsRequest = {
  /**
   * ID of the connection
   */
  connectionId: string;
  path: string;
};

/** @internal */
export const ListPassthroughsRequest$inboundSchema: z.ZodType<
  ListPassthroughsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  connection_id: z.string(),
  path: z.string(),
}).transform((v) => {
  return remap$(v, {
    "connection_id": "connectionId",
  });
});

/** @internal */
export type ListPassthroughsRequest$Outbound = {
  connection_id: string;
  path: string;
};

/** @internal */
export const ListPassthroughsRequest$outboundSchema: z.ZodType<
  ListPassthroughsRequest$Outbound,
  z.ZodTypeDef,
  ListPassthroughsRequest
> = z.object({
  connectionId: z.string(),
  path: z.string(),
}).transform((v) => {
  return remap$(v, {
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListPassthroughsRequest$ {
  /** @deprecated use `ListPassthroughsRequest$inboundSchema` instead. */
  export const inboundSchema = ListPassthroughsRequest$inboundSchema;
  /** @deprecated use `ListPassthroughsRequest$outboundSchema` instead. */
  export const outboundSchema = ListPassthroughsRequest$outboundSchema;
  /** @deprecated use `ListPassthroughsRequest$Outbound` instead. */
  export type Outbound = ListPassthroughsRequest$Outbound;
}
