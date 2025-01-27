/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const PropertyIntegrationSupportWebhookEventsCreated = {
  Virtual: "virtual",
  Native: "native",
} as const;
export type PropertyIntegrationSupportWebhookEventsCreated = ClosedEnum<
  typeof PropertyIntegrationSupportWebhookEventsCreated
>;

/** @internal */
export const PropertyIntegrationSupportWebhookEventsCreated$inboundSchema:
  z.ZodNativeEnum<typeof PropertyIntegrationSupportWebhookEventsCreated> = z
    .nativeEnum(PropertyIntegrationSupportWebhookEventsCreated);

/** @internal */
export const PropertyIntegrationSupportWebhookEventsCreated$outboundSchema:
  z.ZodNativeEnum<typeof PropertyIntegrationSupportWebhookEventsCreated> =
    PropertyIntegrationSupportWebhookEventsCreated$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PropertyIntegrationSupportWebhookEventsCreated$ {
  /** @deprecated use `PropertyIntegrationSupportWebhookEventsCreated$inboundSchema` instead. */
  export const inboundSchema =
    PropertyIntegrationSupportWebhookEventsCreated$inboundSchema;
  /** @deprecated use `PropertyIntegrationSupportWebhookEventsCreated$outboundSchema` instead. */
  export const outboundSchema =
    PropertyIntegrationSupportWebhookEventsCreated$outboundSchema;
}
