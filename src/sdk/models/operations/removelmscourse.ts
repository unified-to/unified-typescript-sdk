/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type RemoveLmsCourseRequest = {
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * ID of the Course
   */
  id: string;
};

export type RemoveLmsCourseResponse = {
  headers: { [k: string]: Array<string> };
};

/** @internal */
export const RemoveLmsCourseRequest$inboundSchema: z.ZodType<
  RemoveLmsCourseRequest,
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
export type RemoveLmsCourseRequest$Outbound = {
  connection_id: string;
  id: string;
};

/** @internal */
export const RemoveLmsCourseRequest$outboundSchema: z.ZodType<
  RemoveLmsCourseRequest$Outbound,
  z.ZodTypeDef,
  RemoveLmsCourseRequest
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
export namespace RemoveLmsCourseRequest$ {
  /** @deprecated use `RemoveLmsCourseRequest$inboundSchema` instead. */
  export const inboundSchema = RemoveLmsCourseRequest$inboundSchema;
  /** @deprecated use `RemoveLmsCourseRequest$outboundSchema` instead. */
  export const outboundSchema = RemoveLmsCourseRequest$outboundSchema;
  /** @deprecated use `RemoveLmsCourseRequest$Outbound` instead. */
  export type Outbound = RemoveLmsCourseRequest$Outbound;
}

/** @internal */
export const RemoveLmsCourseResponse$inboundSchema: z.ZodType<
  RemoveLmsCourseResponse,
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
export type RemoveLmsCourseResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
};

/** @internal */
export const RemoveLmsCourseResponse$outboundSchema: z.ZodType<
  RemoveLmsCourseResponse$Outbound,
  z.ZodTypeDef,
  RemoveLmsCourseResponse
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
export namespace RemoveLmsCourseResponse$ {
  /** @deprecated use `RemoveLmsCourseResponse$inboundSchema` instead. */
  export const inboundSchema = RemoveLmsCourseResponse$inboundSchema;
  /** @deprecated use `RemoveLmsCourseResponse$outboundSchema` instead. */
  export const outboundSchema = RemoveLmsCourseResponse$outboundSchema;
  /** @deprecated use `RemoveLmsCourseResponse$Outbound` instead. */
  export type Outbound = RemoveLmsCourseResponse$Outbound;
}
