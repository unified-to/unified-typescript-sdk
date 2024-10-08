/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type RemoveAtsInterviewRequest = {
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * ID of the Interview
   */
  id: string;
};

/** @internal */
export const RemoveAtsInterviewRequest$inboundSchema: z.ZodType<
  RemoveAtsInterviewRequest,
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
export type RemoveAtsInterviewRequest$Outbound = {
  connection_id: string;
  id: string;
};

/** @internal */
export const RemoveAtsInterviewRequest$outboundSchema: z.ZodType<
  RemoveAtsInterviewRequest$Outbound,
  z.ZodTypeDef,
  RemoveAtsInterviewRequest
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
export namespace RemoveAtsInterviewRequest$ {
  /** @deprecated use `RemoveAtsInterviewRequest$inboundSchema` instead. */
  export const inboundSchema = RemoveAtsInterviewRequest$inboundSchema;
  /** @deprecated use `RemoveAtsInterviewRequest$outboundSchema` instead. */
  export const outboundSchema = RemoveAtsInterviewRequest$outboundSchema;
  /** @deprecated use `RemoveAtsInterviewRequest$Outbound` instead. */
  export type Outbound = RemoveAtsInterviewRequest$Outbound;
}
