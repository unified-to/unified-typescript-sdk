/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  PropertyPropertyIntegrationSupportWebhookEventsCreated,
  PropertyPropertyIntegrationSupportWebhookEventsCreated$inboundSchema,
  PropertyPropertyIntegrationSupportWebhookEventsCreated$outboundSchema,
} from "./propertypropertyintegrationsupportwebhookeventscreated.js";
import {
  PropertyPropertyIntegrationSupportWebhookEventsDeleted,
  PropertyPropertyIntegrationSupportWebhookEventsDeleted$inboundSchema,
  PropertyPropertyIntegrationSupportWebhookEventsDeleted$outboundSchema,
} from "./propertypropertyintegrationsupportwebhookeventsdeleted.js";
import {
  PropertyPropertyIntegrationSupportWebhookEventsUpdated,
  PropertyPropertyIntegrationSupportWebhookEventsUpdated$inboundSchema,
  PropertyPropertyIntegrationSupportWebhookEventsUpdated$outboundSchema,
} from "./propertypropertyintegrationsupportwebhookeventsupdated.js";

export type PropertyIntegrationSupportWebhookEvents = {
  created?:
    | Array<PropertyPropertyIntegrationSupportWebhookEventsCreated>
    | undefined;
  deleted?:
    | Array<PropertyPropertyIntegrationSupportWebhookEventsDeleted>
    | undefined;
  updated?:
    | Array<PropertyPropertyIntegrationSupportWebhookEventsUpdated>
    | undefined;
};

/** @internal */
export const PropertyIntegrationSupportWebhookEvents$inboundSchema: z.ZodType<
  PropertyIntegrationSupportWebhookEvents,
  z.ZodTypeDef,
  unknown
> = z.object({
  created: z.array(
    PropertyPropertyIntegrationSupportWebhookEventsCreated$inboundSchema,
  ).optional(),
  deleted: z.array(
    PropertyPropertyIntegrationSupportWebhookEventsDeleted$inboundSchema,
  ).optional(),
  updated: z.array(
    PropertyPropertyIntegrationSupportWebhookEventsUpdated$inboundSchema,
  ).optional(),
});

/** @internal */
export type PropertyIntegrationSupportWebhookEvents$Outbound = {
  created?: Array<string> | undefined;
  deleted?: Array<string> | undefined;
  updated?: Array<string> | undefined;
};

/** @internal */
export const PropertyIntegrationSupportWebhookEvents$outboundSchema: z.ZodType<
  PropertyIntegrationSupportWebhookEvents$Outbound,
  z.ZodTypeDef,
  PropertyIntegrationSupportWebhookEvents
> = z.object({
  created: z.array(
    PropertyPropertyIntegrationSupportWebhookEventsCreated$outboundSchema,
  ).optional(),
  deleted: z.array(
    PropertyPropertyIntegrationSupportWebhookEventsDeleted$outboundSchema,
  ).optional(),
  updated: z.array(
    PropertyPropertyIntegrationSupportWebhookEventsUpdated$outboundSchema,
  ).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PropertyIntegrationSupportWebhookEvents$ {
  /** @deprecated use `PropertyIntegrationSupportWebhookEvents$inboundSchema` instead. */
  export const inboundSchema =
    PropertyIntegrationSupportWebhookEvents$inboundSchema;
  /** @deprecated use `PropertyIntegrationSupportWebhookEvents$outboundSchema` instead. */
  export const outboundSchema =
    PropertyIntegrationSupportWebhookEvents$outboundSchema;
  /** @deprecated use `PropertyIntegrationSupportWebhookEvents$Outbound` instead. */
  export type Outbound = PropertyIntegrationSupportWebhookEvents$Outbound;
}
