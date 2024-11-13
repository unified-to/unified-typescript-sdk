/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type RemoveCrmPipelineRequest = {
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * ID of the Pipeline
   */
  id: string;
};

export type RemoveCrmPipelineResponse = {
  headers: { [k: string]: Array<string> };
};

/** @internal */
export const RemoveCrmPipelineRequest$inboundSchema: z.ZodType<
  RemoveCrmPipelineRequest,
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
export type RemoveCrmPipelineRequest$Outbound = {
  connection_id: string;
  id: string;
};

/** @internal */
export const RemoveCrmPipelineRequest$outboundSchema: z.ZodType<
  RemoveCrmPipelineRequest$Outbound,
  z.ZodTypeDef,
  RemoveCrmPipelineRequest
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
export namespace RemoveCrmPipelineRequest$ {
  /** @deprecated use `RemoveCrmPipelineRequest$inboundSchema` instead. */
  export const inboundSchema = RemoveCrmPipelineRequest$inboundSchema;
  /** @deprecated use `RemoveCrmPipelineRequest$outboundSchema` instead. */
  export const outboundSchema = RemoveCrmPipelineRequest$outboundSchema;
  /** @deprecated use `RemoveCrmPipelineRequest$Outbound` instead. */
  export type Outbound = RemoveCrmPipelineRequest$Outbound;
}

/** @internal */
export const RemoveCrmPipelineResponse$inboundSchema: z.ZodType<
  RemoveCrmPipelineResponse,
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
export type RemoveCrmPipelineResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
};

/** @internal */
export const RemoveCrmPipelineResponse$outboundSchema: z.ZodType<
  RemoveCrmPipelineResponse$Outbound,
  z.ZodTypeDef,
  RemoveCrmPipelineResponse
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
export namespace RemoveCrmPipelineResponse$ {
  /** @deprecated use `RemoveCrmPipelineResponse$inboundSchema` instead. */
  export const inboundSchema = RemoveCrmPipelineResponse$inboundSchema;
  /** @deprecated use `RemoveCrmPipelineResponse$outboundSchema` instead. */
  export const outboundSchema = RemoveCrmPipelineResponse$outboundSchema;
  /** @deprecated use `RemoveCrmPipelineResponse$Outbound` instead. */
  export type Outbound = RemoveCrmPipelineResponse$Outbound;
}
