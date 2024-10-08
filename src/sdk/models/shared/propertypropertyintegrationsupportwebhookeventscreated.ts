/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const PropertyPropertyIntegrationSupportWebhookEventsCreated = {
  Virtual: "virtual",
  Native: "native",
} as const;
export type PropertyPropertyIntegrationSupportWebhookEventsCreated = ClosedEnum<
  typeof PropertyPropertyIntegrationSupportWebhookEventsCreated
>;

/** @internal */
export const PropertyPropertyIntegrationSupportWebhookEventsCreated$inboundSchema:
  z.ZodNativeEnum<
    typeof PropertyPropertyIntegrationSupportWebhookEventsCreated
  > = z.nativeEnum(PropertyPropertyIntegrationSupportWebhookEventsCreated);

/** @internal */
export const PropertyPropertyIntegrationSupportWebhookEventsCreated$outboundSchema:
  z.ZodNativeEnum<
    typeof PropertyPropertyIntegrationSupportWebhookEventsCreated
  > = PropertyPropertyIntegrationSupportWebhookEventsCreated$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PropertyPropertyIntegrationSupportWebhookEventsCreated$ {
  /** @deprecated use `PropertyPropertyIntegrationSupportWebhookEventsCreated$inboundSchema` instead. */
  export const inboundSchema =
    PropertyPropertyIntegrationSupportWebhookEventsCreated$inboundSchema;
  /** @deprecated use `PropertyPropertyIntegrationSupportWebhookEventsCreated$outboundSchema` instead. */
  export const outboundSchema =
    PropertyPropertyIntegrationSupportWebhookEventsCreated$outboundSchema;
}
