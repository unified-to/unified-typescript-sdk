/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type RemoveAtsActivityRequest = {
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * ID of the Activity
   */
  id: string;
};

export type RemoveAtsActivityResponse = {
  headers: { [k: string]: Array<string> };
};

/** @internal */
export const RemoveAtsActivityRequest$inboundSchema: z.ZodType<
  RemoveAtsActivityRequest,
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
export type RemoveAtsActivityRequest$Outbound = {
  connection_id: string;
  id: string;
};

/** @internal */
export const RemoveAtsActivityRequest$outboundSchema: z.ZodType<
  RemoveAtsActivityRequest$Outbound,
  z.ZodTypeDef,
  RemoveAtsActivityRequest
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
export namespace RemoveAtsActivityRequest$ {
  /** @deprecated use `RemoveAtsActivityRequest$inboundSchema` instead. */
  export const inboundSchema = RemoveAtsActivityRequest$inboundSchema;
  /** @deprecated use `RemoveAtsActivityRequest$outboundSchema` instead. */
  export const outboundSchema = RemoveAtsActivityRequest$outboundSchema;
  /** @deprecated use `RemoveAtsActivityRequest$Outbound` instead. */
  export type Outbound = RemoveAtsActivityRequest$Outbound;
}

/** @internal */
export const RemoveAtsActivityResponse$inboundSchema: z.ZodType<
  RemoveAtsActivityResponse,
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
export type RemoveAtsActivityResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
};

/** @internal */
export const RemoveAtsActivityResponse$outboundSchema: z.ZodType<
  RemoveAtsActivityResponse$Outbound,
  z.ZodTypeDef,
  RemoveAtsActivityResponse
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
export namespace RemoveAtsActivityResponse$ {
  /** @deprecated use `RemoveAtsActivityResponse$inboundSchema` instead. */
  export const inboundSchema = RemoveAtsActivityResponse$inboundSchema;
  /** @deprecated use `RemoveAtsActivityResponse$outboundSchema` instead. */
  export const outboundSchema = RemoveAtsActivityResponse$outboundSchema;
  /** @deprecated use `RemoveAtsActivityResponse$Outbound` instead. */
  export type Outbound = RemoveAtsActivityResponse$Outbound;
}
