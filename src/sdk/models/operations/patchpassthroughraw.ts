/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type PatchPassthroughRawRequest = {
  /**
   * integration-specific payload
   */
  requestBody?:
    | ReadableStream<Uint8Array>
    | Blob
    | ArrayBuffer
    | Uint8Array
    | undefined;
  /**
   * ID of the connection
   */
  connectionId: string;
  path: string;
};

export type PatchPassthroughRawResponseResult =
  | ReadableStream<Uint8Array>
  | any
  | string
  | string
  | string;

export type PatchPassthroughRawResponse = {
  headers: { [k: string]: Array<string> };
  result?:
    | ReadableStream<Uint8Array>
    | any
    | string
    | string
    | string
    | undefined;
};

/** @internal */
export const PatchPassthroughRawRequest$inboundSchema: z.ZodType<
  PatchPassthroughRawRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  RequestBody: z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
    z.instanceof(Uint8Array),
  ]).optional(),
  connection_id: z.string(),
  path: z.string(),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type PatchPassthroughRawRequest$Outbound = {
  RequestBody?:
    | ReadableStream<Uint8Array>
    | Blob
    | ArrayBuffer
    | Uint8Array
    | undefined;
  connection_id: string;
  path: string;
};

/** @internal */
export const PatchPassthroughRawRequest$outboundSchema: z.ZodType<
  PatchPassthroughRawRequest$Outbound,
  z.ZodTypeDef,
  PatchPassthroughRawRequest
> = z.object({
  requestBody: z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
    z.instanceof(Uint8Array),
  ]).optional(),
  connectionId: z.string(),
  path: z.string(),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchPassthroughRawRequest$ {
  /** @deprecated use `PatchPassthroughRawRequest$inboundSchema` instead. */
  export const inboundSchema = PatchPassthroughRawRequest$inboundSchema;
  /** @deprecated use `PatchPassthroughRawRequest$outboundSchema` instead. */
  export const outboundSchema = PatchPassthroughRawRequest$outboundSchema;
  /** @deprecated use `PatchPassthroughRawRequest$Outbound` instead. */
  export type Outbound = PatchPassthroughRawRequest$Outbound;
}

/** @internal */
export const PatchPassthroughRawResponseResult$inboundSchema: z.ZodType<
  PatchPassthroughRawResponseResult,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.instanceof(ReadableStream<Uint8Array>),
  z.any(),
  z.string(),
  z.string(),
  z.string(),
]);

/** @internal */
export type PatchPassthroughRawResponseResult$Outbound =
  | ReadableStream<Uint8Array>
  | any
  | string
  | string
  | string;

/** @internal */
export const PatchPassthroughRawResponseResult$outboundSchema: z.ZodType<
  PatchPassthroughRawResponseResult$Outbound,
  z.ZodTypeDef,
  PatchPassthroughRawResponseResult
> = z.union([
  z.instanceof(ReadableStream<Uint8Array>),
  z.any(),
  z.string(),
  z.string(),
  z.string(),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchPassthroughRawResponseResult$ {
  /** @deprecated use `PatchPassthroughRawResponseResult$inboundSchema` instead. */
  export const inboundSchema = PatchPassthroughRawResponseResult$inboundSchema;
  /** @deprecated use `PatchPassthroughRawResponseResult$outboundSchema` instead. */
  export const outboundSchema =
    PatchPassthroughRawResponseResult$outboundSchema;
  /** @deprecated use `PatchPassthroughRawResponseResult$Outbound` instead. */
  export type Outbound = PatchPassthroughRawResponseResult$Outbound;
}

/** @internal */
export const PatchPassthroughRawResponse$inboundSchema: z.ZodType<
  PatchPassthroughRawResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Headers: z.record(z.array(z.string())),
  Result: z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.any(),
    z.string(),
    z.string(),
    z.string(),
  ]).optional(),
}).transform((v) => {
  return remap$(v, {
    "Headers": "headers",
    "Result": "result",
  });
});

/** @internal */
export type PatchPassthroughRawResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result?:
    | ReadableStream<Uint8Array>
    | any
    | string
    | string
    | string
    | undefined;
};

/** @internal */
export const PatchPassthroughRawResponse$outboundSchema: z.ZodType<
  PatchPassthroughRawResponse$Outbound,
  z.ZodTypeDef,
  PatchPassthroughRawResponse
> = z.object({
  headers: z.record(z.array(z.string())),
  result: z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.any(),
    z.string(),
    z.string(),
    z.string(),
  ]).optional(),
}).transform((v) => {
  return remap$(v, {
    headers: "Headers",
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchPassthroughRawResponse$ {
  /** @deprecated use `PatchPassthroughRawResponse$inboundSchema` instead. */
  export const inboundSchema = PatchPassthroughRawResponse$inboundSchema;
  /** @deprecated use `PatchPassthroughRawResponse$outboundSchema` instead. */
  export const outboundSchema = PatchPassthroughRawResponse$outboundSchema;
  /** @deprecated use `PatchPassthroughRawResponse$Outbound` instead. */
  export type Outbound = PatchPassthroughRawResponse$Outbound;
}
