/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type CreatePassthroughJsonRequest = {
  /**
   * integration-specific payload
   */
  requestBody?: any | undefined;
  /**
   * ID of the connection
   */
  connectionId: string;
  path: string;
};

export type CreatePassthroughJsonResponseResult =
  | ReadableStream<Uint8Array>
  | any
  | string
  | string
  | string;

export type CreatePassthroughJsonResponse = {
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
export const CreatePassthroughJsonRequest$inboundSchema: z.ZodType<
  CreatePassthroughJsonRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  RequestBody: z.any().optional(),
  connection_id: z.string(),
  path: z.string(),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type CreatePassthroughJsonRequest$Outbound = {
  RequestBody?: any | undefined;
  connection_id: string;
  path: string;
};

/** @internal */
export const CreatePassthroughJsonRequest$outboundSchema: z.ZodType<
  CreatePassthroughJsonRequest$Outbound,
  z.ZodTypeDef,
  CreatePassthroughJsonRequest
> = z.object({
  requestBody: z.any().optional(),
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
export namespace CreatePassthroughJsonRequest$ {
  /** @deprecated use `CreatePassthroughJsonRequest$inboundSchema` instead. */
  export const inboundSchema = CreatePassthroughJsonRequest$inboundSchema;
  /** @deprecated use `CreatePassthroughJsonRequest$outboundSchema` instead. */
  export const outboundSchema = CreatePassthroughJsonRequest$outboundSchema;
  /** @deprecated use `CreatePassthroughJsonRequest$Outbound` instead. */
  export type Outbound = CreatePassthroughJsonRequest$Outbound;
}

/** @internal */
export const CreatePassthroughJsonResponseResult$inboundSchema: z.ZodType<
  CreatePassthroughJsonResponseResult,
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
export type CreatePassthroughJsonResponseResult$Outbound =
  | ReadableStream<Uint8Array>
  | any
  | string
  | string
  | string;

/** @internal */
export const CreatePassthroughJsonResponseResult$outboundSchema: z.ZodType<
  CreatePassthroughJsonResponseResult$Outbound,
  z.ZodTypeDef,
  CreatePassthroughJsonResponseResult
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
export namespace CreatePassthroughJsonResponseResult$ {
  /** @deprecated use `CreatePassthroughJsonResponseResult$inboundSchema` instead. */
  export const inboundSchema =
    CreatePassthroughJsonResponseResult$inboundSchema;
  /** @deprecated use `CreatePassthroughJsonResponseResult$outboundSchema` instead. */
  export const outboundSchema =
    CreatePassthroughJsonResponseResult$outboundSchema;
  /** @deprecated use `CreatePassthroughJsonResponseResult$Outbound` instead. */
  export type Outbound = CreatePassthroughJsonResponseResult$Outbound;
}

/** @internal */
export const CreatePassthroughJsonResponse$inboundSchema: z.ZodType<
  CreatePassthroughJsonResponse,
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
export type CreatePassthroughJsonResponse$Outbound = {
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
export const CreatePassthroughJsonResponse$outboundSchema: z.ZodType<
  CreatePassthroughJsonResponse$Outbound,
  z.ZodTypeDef,
  CreatePassthroughJsonResponse
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
export namespace CreatePassthroughJsonResponse$ {
  /** @deprecated use `CreatePassthroughJsonResponse$inboundSchema` instead. */
  export const inboundSchema = CreatePassthroughJsonResponse$inboundSchema;
  /** @deprecated use `CreatePassthroughJsonResponse$outboundSchema` instead. */
  export const outboundSchema = CreatePassthroughJsonResponse$outboundSchema;
  /** @deprecated use `CreatePassthroughJsonResponse$Outbound` instead. */
  export type Outbound = CreatePassthroughJsonResponse$Outbound;
}
