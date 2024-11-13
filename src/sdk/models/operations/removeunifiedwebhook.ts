/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type RemoveUnifiedWebhookRequest = {
  /**
   * ID of the Webhook
   */
  id: string;
};

export type RemoveUnifiedWebhookResponse = {
  headers: { [k: string]: Array<string> };
};

/** @internal */
export const RemoveUnifiedWebhookRequest$inboundSchema: z.ZodType<
  RemoveUnifiedWebhookRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type RemoveUnifiedWebhookRequest$Outbound = {
  id: string;
};

/** @internal */
export const RemoveUnifiedWebhookRequest$outboundSchema: z.ZodType<
  RemoveUnifiedWebhookRequest$Outbound,
  z.ZodTypeDef,
  RemoveUnifiedWebhookRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RemoveUnifiedWebhookRequest$ {
  /** @deprecated use `RemoveUnifiedWebhookRequest$inboundSchema` instead. */
  export const inboundSchema = RemoveUnifiedWebhookRequest$inboundSchema;
  /** @deprecated use `RemoveUnifiedWebhookRequest$outboundSchema` instead. */
  export const outboundSchema = RemoveUnifiedWebhookRequest$outboundSchema;
  /** @deprecated use `RemoveUnifiedWebhookRequest$Outbound` instead. */
  export type Outbound = RemoveUnifiedWebhookRequest$Outbound;
}

/** @internal */
export const RemoveUnifiedWebhookResponse$inboundSchema: z.ZodType<
  RemoveUnifiedWebhookResponse,
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
export type RemoveUnifiedWebhookResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
};

/** @internal */
export const RemoveUnifiedWebhookResponse$outboundSchema: z.ZodType<
  RemoveUnifiedWebhookResponse$Outbound,
  z.ZodTypeDef,
  RemoveUnifiedWebhookResponse
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
export namespace RemoveUnifiedWebhookResponse$ {
  /** @deprecated use `RemoveUnifiedWebhookResponse$inboundSchema` instead. */
  export const inboundSchema = RemoveUnifiedWebhookResponse$inboundSchema;
  /** @deprecated use `RemoveUnifiedWebhookResponse$outboundSchema` instead. */
  export const outboundSchema = RemoveUnifiedWebhookResponse$outboundSchema;
  /** @deprecated use `RemoveUnifiedWebhookResponse$Outbound` instead. */
  export type Outbound = RemoveUnifiedWebhookResponse$Outbound;
}
