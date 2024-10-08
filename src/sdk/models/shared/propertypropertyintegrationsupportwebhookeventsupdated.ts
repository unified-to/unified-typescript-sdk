/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const PropertyPropertyIntegrationSupportWebhookEventsUpdated = {
  Virtual: "virtual",
  Native: "native",
} as const;
export type PropertyPropertyIntegrationSupportWebhookEventsUpdated = ClosedEnum<
  typeof PropertyPropertyIntegrationSupportWebhookEventsUpdated
>;

/** @internal */
export const PropertyPropertyIntegrationSupportWebhookEventsUpdated$inboundSchema:
  z.ZodNativeEnum<
    typeof PropertyPropertyIntegrationSupportWebhookEventsUpdated
  > = z.nativeEnum(PropertyPropertyIntegrationSupportWebhookEventsUpdated);

/** @internal */
export const PropertyPropertyIntegrationSupportWebhookEventsUpdated$outboundSchema:
  z.ZodNativeEnum<
    typeof PropertyPropertyIntegrationSupportWebhookEventsUpdated
  > = PropertyPropertyIntegrationSupportWebhookEventsUpdated$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PropertyPropertyIntegrationSupportWebhookEventsUpdated$ {
  /** @deprecated use `PropertyPropertyIntegrationSupportWebhookEventsUpdated$inboundSchema` instead. */
  export const inboundSchema =
    PropertyPropertyIntegrationSupportWebhookEventsUpdated$inboundSchema;
  /** @deprecated use `PropertyPropertyIntegrationSupportWebhookEventsUpdated$outboundSchema` instead. */
  export const outboundSchema =
    PropertyPropertyIntegrationSupportWebhookEventsUpdated$outboundSchema;
}
