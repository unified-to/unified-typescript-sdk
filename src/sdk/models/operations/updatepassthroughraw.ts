/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as b64$ from "../../../lib/base64.js";
import { remap as remap$ } from "../../../lib/primitives.js";

export type UpdatePassthroughRawRequest = {
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

export type UpdatePassthroughRawResponseResult =
  | any
  | string
  | Uint8Array
  | string;

export type UpdatePassthroughRawResponse = {
  headers: { [k: string]: Array<string> };
  result?: any | string | Uint8Array | string | undefined;
};

/** @internal */
export const UpdatePassthroughRawRequest$inboundSchema: z.ZodType<
  UpdatePassthroughRawRequest,
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
export type UpdatePassthroughRawRequest$Outbound = {
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
export const UpdatePassthroughRawRequest$outboundSchema: z.ZodType<
  UpdatePassthroughRawRequest$Outbound,
  z.ZodTypeDef,
  UpdatePassthroughRawRequest
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
export namespace UpdatePassthroughRawRequest$ {
  /** @deprecated use `UpdatePassthroughRawRequest$inboundSchema` instead. */
  export const inboundSchema = UpdatePassthroughRawRequest$inboundSchema;
  /** @deprecated use `UpdatePassthroughRawRequest$outboundSchema` instead. */
  export const outboundSchema = UpdatePassthroughRawRequest$outboundSchema;
  /** @deprecated use `UpdatePassthroughRawRequest$Outbound` instead. */
  export type Outbound = UpdatePassthroughRawRequest$Outbound;
}

/** @internal */
export const UpdatePassthroughRawResponseResult$inboundSchema: z.ZodType<
  UpdatePassthroughRawResponseResult,
  z.ZodTypeDef,
  unknown
> = z.union([z.any(), z.string(), b64$.zodInbound]);

/** @internal */
export type UpdatePassthroughRawResponseResult$Outbound =
  | any
  | string
  | Uint8Array;

/** @internal */
export const UpdatePassthroughRawResponseResult$outboundSchema: z.ZodType<
  UpdatePassthroughRawResponseResult$Outbound,
  z.ZodTypeDef,
  UpdatePassthroughRawResponseResult
> = z.union([z.any(), z.string(), b64$.zodOutbound]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdatePassthroughRawResponseResult$ {
  /** @deprecated use `UpdatePassthroughRawResponseResult$inboundSchema` instead. */
  export const inboundSchema = UpdatePassthroughRawResponseResult$inboundSchema;
  /** @deprecated use `UpdatePassthroughRawResponseResult$outboundSchema` instead. */
  export const outboundSchema =
    UpdatePassthroughRawResponseResult$outboundSchema;
  /** @deprecated use `UpdatePassthroughRawResponseResult$Outbound` instead. */
  export type Outbound = UpdatePassthroughRawResponseResult$Outbound;
}

/** @internal */
export const UpdatePassthroughRawResponse$inboundSchema: z.ZodType<
  UpdatePassthroughRawResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Headers: z.record(z.array(z.string())),
  Result: z.union([z.any(), z.string(), b64$.zodInbound]).optional(),
}).transform((v) => {
  return remap$(v, {
    "Headers": "headers",
    "Result": "result",
  });
});

/** @internal */
export type UpdatePassthroughRawResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result?: any | string | Uint8Array | undefined;
};

/** @internal */
export const UpdatePassthroughRawResponse$outboundSchema: z.ZodType<
  UpdatePassthroughRawResponse$Outbound,
  z.ZodTypeDef,
  UpdatePassthroughRawResponse
> = z.object({
  headers: z.record(z.array(z.string())),
  result: z.union([z.any(), z.string(), b64$.zodOutbound]).optional(),
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
export namespace UpdatePassthroughRawResponse$ {
  /** @deprecated use `UpdatePassthroughRawResponse$inboundSchema` instead. */
  export const inboundSchema = UpdatePassthroughRawResponse$inboundSchema;
  /** @deprecated use `UpdatePassthroughRawResponse$outboundSchema` instead. */
  export const outboundSchema = UpdatePassthroughRawResponse$outboundSchema;
  /** @deprecated use `UpdatePassthroughRawResponse$Outbound` instead. */
  export type Outbound = UpdatePassthroughRawResponse$Outbound;
}