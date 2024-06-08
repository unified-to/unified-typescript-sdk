/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

export enum Event {
    Updated = "updated",
    Created = "created",
    Deleted = "deleted",
}

export enum ObjectType {
    AccountingAccount = "accounting_account",
    AccountingTransaction = "accounting_transaction",
    AccountingContact = "accounting_contact",
    AccountingInvoice = "accounting_invoice",
    AccountingTaxrate = "accounting_taxrate",
    AccountingOrganization = "accounting_organization",
    PaymentPayment = "payment_payment",
    PaymentLink = "payment_link",
    PaymentPayout = "payment_payout",
    PaymentRefund = "payment_refund",
    CommerceItem = "commerce_item",
    CommerceCollection = "commerce_collection",
    CommerceInventory = "commerce_inventory",
    CommerceLocation = "commerce_location",
    AtsActivity = "ats_activity",
    AtsApplication = "ats_application",
    AtsApplicationstatus = "ats_applicationstatus",
    AtsCandidate = "ats_candidate",
    AtsDocument = "ats_document",
    AtsInterview = "ats_interview",
    AtsJob = "ats_job",
    AtsScorecard = "ats_scorecard",
    AtsCompany = "ats_company",
    CrmCompany = "crm_company",
    CrmContact = "crm_contact",
    CrmDeal = "crm_deal",
    CrmEvent = "crm_event",
    CrmLead = "crm_lead",
    CrmPipeline = "crm_pipeline",
    HrisEmployee = "hris_employee",
    HrisGroup = "hris_group",
    HrisPayslip = "hris_payslip",
    HrisTimeoff = "hris_timeoff",
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
    StorageFile = "storage_file",
    GenaiModel = "genai_model",
    GenaiPrompt = "genai_prompt",
    MessagingMessage = "messaging_message",
    MessagingChannel = "messaging_channel",
    KmsSpace = "kms_space",
    KmsPage = "kms_page",
    TaskProject = "task_project",
    TaskTask = "task_task",
}

export enum WebhookType {
    Virtual = "virtual",
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
    connectionId: string;

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
    @Expose({ name: "fields" })
    fields?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "filters" })
    filters?: Record<string, string>;

    @SpeakeasyMetadata()
    @Expose({ name: "hook_url" })
    hookUrl: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "integration_type" })
    integrationType?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "interval" })
    interval?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "is_healthy" })
    isHealthy?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "meta" })
    meta?: Record<string, any>;

    @SpeakeasyMetadata()
    @Expose({ name: "object_type" })
    objectType: ObjectType;

    @SpeakeasyMetadata()
    @Expose({ name: "page_max_limit" })
    pageMaxLimit?: number;

    /**
     * An array of the most revent virtual webhook runs
     */
    @SpeakeasyMetadata()
    @Expose({ name: "runs" })
    runs?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "webhook_type" })
    webhookType?: WebhookType;

    @SpeakeasyMetadata()
    @Expose({ name: "workspace_id" })
    workspaceId?: string;
}
