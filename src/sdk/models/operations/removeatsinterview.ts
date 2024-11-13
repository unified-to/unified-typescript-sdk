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

export type RemoveAtsInterviewResponse = {
  headers: { [k: string]: Array<string> };
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

/** @internal */
export const RemoveAtsInterviewResponse$inboundSchema: z.ZodType<
  RemoveAtsInterviewResponse,
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
export type RemoveAtsInterviewResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
};

/** @internal */
export const RemoveAtsInterviewResponse$outboundSchema: z.ZodType<
  RemoveAtsInterviewResponse$Outbound,
  z.ZodTypeDef,
  RemoveAtsInterviewResponse
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
export namespace RemoveAtsInterviewResponse$ {
  /** @deprecated use `RemoveAtsInterviewResponse$inboundSchema` instead. */
  export const inboundSchema = RemoveAtsInterviewResponse$inboundSchema;
  /** @deprecated use `RemoveAtsInterviewResponse$outboundSchema` instead. */
  export const outboundSchema = RemoveAtsInterviewResponse$outboundSchema;
  /** @deprecated use `RemoveAtsInterviewResponse$Outbound` instead. */
  export type Outbound = RemoveAtsInterviewResponse$Outbound;
}
