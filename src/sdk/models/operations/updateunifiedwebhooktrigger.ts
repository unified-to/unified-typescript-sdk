/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type UpdateUnifiedWebhookTriggerRequest = {
  /**
   * ID of the Webhook
   */
  id: string;
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
