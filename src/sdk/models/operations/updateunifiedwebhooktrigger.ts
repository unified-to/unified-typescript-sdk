/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type UpdateUnifiedWebhookTriggerRequest = {
  /**
   * ID of the Webhook
   */
  id: string;
};

export type UpdateUnifiedWebhookTriggerResponse = {
  headers: { [k: string]: Array<string> };
};

/** @internal */
export const UpdateUnifiedWebhookTriggerRequest$inboundSchema: z.ZodType<
  UpdateUnifiedWebhookTriggerRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type UpdateUnifiedWebhookTriggerRequest$Outbound = {
  id: string;
};

/** @internal */
export const UpdateUnifiedWebhookTriggerRequest$outboundSchema: z.ZodType<
  UpdateUnifiedWebhookTriggerRequest$Outbound,
  z.ZodTypeDef,
  UpdateUnifiedWebhookTriggerRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateUnifiedWebhookTriggerRequest$ {
  /** @deprecated use `UpdateUnifiedWebhookTriggerRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateUnifiedWebhookTriggerRequest$inboundSchema;
  /** @deprecated use `UpdateUnifiedWebhookTriggerRequest$outboundSchema` instead. */
  export const outboundSchema =
    UpdateUnifiedWebhookTriggerRequest$outboundSchema;
  /** @deprecated use `UpdateUnifiedWebhookTriggerRequest$Outbound` instead. */
  export type Outbound = UpdateUnifiedWebhookTriggerRequest$Outbound;
}

/** @internal */
export const UpdateUnifiedWebhookTriggerResponse$inboundSchema: z.ZodType<
  UpdateUnifiedWebhookTriggerResponse,
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
export type UpdateUnifiedWebhookTriggerResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
};

/** @internal */
export const UpdateUnifiedWebhookTriggerResponse$outboundSchema: z.ZodType<
  UpdateUnifiedWebhookTriggerResponse$Outbound,
  z.ZodTypeDef,
  UpdateUnifiedWebhookTriggerResponse
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
export namespace UpdateUnifiedWebhookTriggerResponse$ {
  /** @deprecated use `UpdateUnifiedWebhookTriggerResponse$inboundSchema` instead. */
  export const inboundSchema =
    UpdateUnifiedWebhookTriggerResponse$inboundSchema;
  /** @deprecated use `UpdateUnifiedWebhookTriggerResponse$outboundSchema` instead. */
  export const outboundSchema =
    UpdateUnifiedWebhookTriggerResponse$outboundSchema;
  /** @deprecated use `UpdateUnifiedWebhookTriggerResponse$Outbound` instead. */
  export type Outbound = UpdateUnifiedWebhookTriggerResponse$Outbound;
}
