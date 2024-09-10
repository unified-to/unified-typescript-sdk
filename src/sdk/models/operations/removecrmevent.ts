/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type RemoveCrmEventRequest = {
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * ID of the Event
   */
  id: string;
};

/** @internal */
export const RemoveCrmEventRequest$inboundSchema: z.ZodType<
  RemoveCrmEventRequest,
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
export type RemoveCrmEventRequest$Outbound = {
  connection_id: string;
  id: string;
};

/** @internal */
export const RemoveCrmEventRequest$outboundSchema: z.ZodType<
  RemoveCrmEventRequest$Outbound,
  z.ZodTypeDef,
  RemoveCrmEventRequest
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
export namespace RemoveCrmEventRequest$ {
  /** @deprecated use `RemoveCrmEventRequest$inboundSchema` instead. */
  export const inboundSchema = RemoveCrmEventRequest$inboundSchema;
  /** @deprecated use `RemoveCrmEventRequest$outboundSchema` instead. */
  export const outboundSchema = RemoveCrmEventRequest$outboundSchema;
  /** @deprecated use `RemoveCrmEventRequest$Outbound` instead. */
  export type Outbound = RemoveCrmEventRequest$Outbound;
}
