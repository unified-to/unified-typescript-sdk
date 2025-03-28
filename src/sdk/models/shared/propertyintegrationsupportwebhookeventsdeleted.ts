/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const PropertyIntegrationSupportWebhookEventsDeleted = {
  Virtual: "virtual",
  Native: "native",
} as const;
export type PropertyIntegrationSupportWebhookEventsDeleted = ClosedEnum<
  typeof PropertyIntegrationSupportWebhookEventsDeleted
>;

/** @internal */
export const PropertyIntegrationSupportWebhookEventsDeleted$inboundSchema:
  z.ZodNativeEnum<typeof PropertyIntegrationSupportWebhookEventsDeleted> = z
    .nativeEnum(PropertyIntegrationSupportWebhookEventsDeleted);

/** @internal */
export const PropertyIntegrationSupportWebhookEventsDeleted$outboundSchema:
  z.ZodNativeEnum<typeof PropertyIntegrationSupportWebhookEventsDeleted> =
    PropertyIntegrationSupportWebhookEventsDeleted$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PropertyIntegrationSupportWebhookEventsDeleted$ {
  /** @deprecated use `PropertyIntegrationSupportWebhookEventsDeleted$inboundSchema` instead. */
  export const inboundSchema =
    PropertyIntegrationSupportWebhookEventsDeleted$inboundSchema;
  /** @deprecated use `PropertyIntegrationSupportWebhookEventsDeleted$outboundSchema` instead. */
  export const outboundSchema =
    PropertyIntegrationSupportWebhookEventsDeleted$outboundSchema;
}
