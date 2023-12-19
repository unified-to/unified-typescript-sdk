/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PropertyWebhookEvents } from "./propertywebhookevents";
import { PropertyWebhookMeta } from "./propertywebhookmeta";
import { Expose, Transform, Type } from "class-transformer";

export enum Event {
    Updated = "updated",
    Created = "created",
}

export enum ObjectType {
    AccountingAccount = "accounting_account",
    AccountingTransaction = "accounting_transaction",
    AccountingCustomer = "accounting_customer",
    AccountingInvoice = "accounting_invoice",
    AccountingPayment = "accounting_payment",
    AccountingTaxrate = "accounting_taxrate",
    AccountingOrganization = "accounting_organization",
    AtsApplication = "ats_application",
    AtsApplicationstatus = "ats_applicationstatus",
    AtsCandidate = "ats_candidate",
    AtsDocument = "ats_document",
    AtsInterview = "ats_interview",
    AtsJob = "ats_job",
    AtsScorecard = "ats_scorecard",
    CrmCompany = "crm_company",
    CrmContact = "crm_contact",
    CrmDeal = "crm_deal",
    CrmEvent = "crm_event",
    CrmFile = "crm_file",
    CrmLead = "crm_lead",
    CrmPipeline = "crm_pipeline",
    HrisEmployee = "hris_employee",
    HrisGroup = "hris_group",
    MartechList = "martech_list",
    MartechMember = "martech_member",
    Passthrough = "passthrough",
    TicketingNote = "ticketing_note",
    TicketingTicket = "ticketing_ticket",
    TicketingCustomer = "ticketing_customer",
    UcContact = "uc_contact",
    UcCall = "uc_call",
    EnrichPerson = "enrich_person",
    EnrichCompany = "enrich_company",
}

export enum WebhookWebhookType {
    Virtual = "virtual",
    None = "none",
    Native = "native",
}

/**
 * A webhook is used to POST new/updated information to your server.
 */
export class Webhook extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "checked_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    checkedAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "connection_id" })
    connectionId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "environment" })
    environment?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "event" })
    event: Event;

    @SpeakeasyMetadata()
    @Expose({ name: "events" })
    events: PropertyWebhookEvents[];

    @SpeakeasyMetadata()
    @Expose({ name: "fields" })
    fields?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "hook_url" })
    hookUrl: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "include_raw" })
    includeRaw?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "integration_type" })
    integrationType?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "interval" })
    interval: number;

    @SpeakeasyMetadata()
    @Expose({ name: "is_healthy" })
    isHealthy?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "meta" })
    @Type(() => PropertyWebhookMeta)
    meta?: PropertyWebhookMeta;

    @SpeakeasyMetadata()
    @Expose({ name: "object_type" })
    objectType: ObjectType;

    /**
     * An array of the most revent virtual webhook runs
     */
    @SpeakeasyMetadata()
    @Expose({ name: "runs" })
    runs?: string[];

    /**
     * integration-specific subscriptions IDs
     */
    @SpeakeasyMetadata()
    @Expose({ name: "subscriptions" })
    subscriptions?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "webhook_type" })
    webhookType?: WebhookWebhookType;

    @SpeakeasyMetadata()
    @Expose({ name: "workspace_id" })
    workspaceId?: string;
}
