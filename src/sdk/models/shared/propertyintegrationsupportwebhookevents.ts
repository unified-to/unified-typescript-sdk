/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PropertyPropertyIntegrationSupportWebhookEventsCreated } from "./propertypropertyintegrationsupportwebhookeventscreated";
import { PropertyPropertyIntegrationSupportWebhookEventsDeleted } from "./propertypropertyintegrationsupportwebhookeventsdeleted";
import { PropertyPropertyIntegrationSupportWebhookEventsUpdated } from "./propertypropertyintegrationsupportwebhookeventsupdated";
import { Expose } from "class-transformer";

export class PropertyIntegrationSupportWebhookEvents extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "created" })
    created?: PropertyPropertyIntegrationSupportWebhookEventsCreated[];

    @SpeakeasyMetadata()
    @Expose({ name: "deleted" })
    deleted?: PropertyPropertyIntegrationSupportWebhookEventsDeleted[];

    @SpeakeasyMetadata()
    @Expose({ name: "updated" })
    updated?: PropertyPropertyIntegrationSupportWebhookEventsUpdated[];
}
