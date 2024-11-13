/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type RemoveCommerceCollectionRequest = {
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * ID of the Collection
   */
  id: string;
};

export type RemoveCommerceCollectionResponse = {
  headers: { [k: string]: Array<string> };
};

/** @internal */
export const RemoveCommerceCollectionRequest$inboundSchema: z.ZodType<
  RemoveCommerceCollectionRequest,
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
export type RemoveCommerceCollectionRequest$Outbound = {
  connection_id: string;
  id: string;
};

/** @internal */
export const RemoveCommerceCollectionRequest$outboundSchema: z.ZodType<
  RemoveCommerceCollectionRequest$Outbound,
  z.ZodTypeDef,
  RemoveCommerceCollectionRequest
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
export namespace RemoveCommerceCollectionRequest$ {
  /** @deprecated use `RemoveCommerceCollectionRequest$inboundSchema` instead. */
  export const inboundSchema = RemoveCommerceCollectionRequest$inboundSchema;
  /** @deprecated use `RemoveCommerceCollectionRequest$outboundSchema` instead. */
  export const outboundSchema = RemoveCommerceCollectionRequest$outboundSchema;
  /** @deprecated use `RemoveCommerceCollectionRequest$Outbound` instead. */
  export type Outbound = RemoveCommerceCollectionRequest$Outbound;
}

/** @internal */
export const RemoveCommerceCollectionResponse$inboundSchema: z.ZodType<
  RemoveCommerceCollectionResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Headers: z.record(z.array(z.string())),
}).transform((v) => {
  return remap$(v, {
    "Headers": "headers",
  });
});

/** @internal */
export type RemoveCommerceCollectionResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
};

/** @internal */
export const RemoveCommerceCollectionResponse$outboundSchema: z.ZodType<
  RemoveCommerceCollectionResponse$Outbound,
  z.ZodTypeDef,
  RemoveCommerceCollectionResponse
> = z.object({
  headers: z.record(z.array(z.string())),
}).transform((v) => {
  return remap$(v, {
    headers: "Headers",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RemoveCommerceCollectionResponse$ {
  /** @deprecated use `RemoveCommerceCollectionResponse$inboundSchema` instead. */
  export const inboundSchema = RemoveCommerceCollectionResponse$inboundSchema;
  /** @deprecated use `RemoveCommerceCollectionResponse$outboundSchema` instead. */
  export const outboundSchema = RemoveCommerceCollectionResponse$outboundSchema;
  /** @deprecated use `RemoveCommerceCollectionResponse$Outbound` instead. */
  export type Outbound = RemoveCommerceCollectionResponse$Outbound;
}
