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
