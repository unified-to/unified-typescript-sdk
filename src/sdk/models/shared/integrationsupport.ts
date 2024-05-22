/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PropertyIntegrationSupportWebhookEvents } from "./propertyintegrationsupportwebhookevents";
import { Expose, Type } from "class-transformer";

export class IntegrationSupport extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "inbound_fields" })
    inboundFields?: Record<string, any>;

    @SpeakeasyMetadata()
    @Expose({ name: "list_account_id" })
    listAccountId?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "list_application_id" })
    listApplicationId?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "list_candidate_id" })
    listCandidateId?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "list_channel_id" })
    listChannelId?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "list_collection_id" })
    listCollectionId?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "list_company_id" })
    listCompanyId?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "list_contact_id" })
    listContactId?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "list_customer_id" })
    listCustomerId?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "list_deal_id" })
    listDealId?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "list_interview_id" })
    listInterviewId?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "list_invoice_id" })
    listInvoiceId?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "list_item_id" })
    listItemId?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "list_job_id" })
    listJobId?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "list_limit" })
    listLimit?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "list_list_id" })
    listListId?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "list_location_id" })
    listLocationId?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "list_offset" })
    listOffset?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "list_order" })
    listOrder?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "list_parent_id" })
    listParentId?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "list_query" })
    listQuery?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "list_sort_by_created_at" })
    listSortByCreatedAt?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "list_sort_by_name" })
    listSortByName?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "list_sort_by_updated_at" })
    listSortByUpdatedAt?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "list_space_id" })
    listSpaceId?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "list_ticket_id" })
    listTicketId?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "list_type" })
    listType?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "list_updated_gte" })
    listUpdatedGte?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "list_user_id" })
    listUserId?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "methods" })
    methods?: Record<string, boolean>;

    @SpeakeasyMetadata()
    @Expose({ name: "outbound_fields" })
    outboundFields?: Record<string, any>;

    @SpeakeasyMetadata()
    @Expose({ name: "search_domain" })
    searchDomain?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "search_email" })
    searchEmail?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "search_linkedinurl" })
    searchLinkedinurl?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "search_name" })
    searchName?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "search_twitter" })
    searchTwitter?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "webhook_events" })
    @Type(() => PropertyIntegrationSupportWebhookEvents)
    webhookEvents?: PropertyIntegrationSupportWebhookEvents;
}
