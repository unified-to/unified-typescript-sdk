/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const Scopes = {
    AuthLogin: "auth_login",
    AccountingAccountRead: "accounting_account_read",
    AccountingAccountWrite: "accounting_account_write",
    AccountingTransactionRead: "accounting_transaction_read",
    AccountingTransactionWrite: "accounting_transaction_write",
    AccountingJournalRead: "accounting_journal_read",
    AccountingJournalWrite: "accounting_journal_write",
    AccountingInvoiceRead: "accounting_invoice_read",
    AccountingInvoiceWrite: "accounting_invoice_write",
    AccountingContactRead: "accounting_contact_read",
    AccountingContactWrite: "accounting_contact_write",
    AccountingTaxrateRead: "accounting_taxrate_read",
    AccountingTaxrateWrite: "accounting_taxrate_write",
    AccountingOrganizationRead: "accounting_organization_read",
    PaymentPaymentRead: "payment_payment_read",
    PaymentPaymentWrite: "payment_payment_write",
    PaymentPayoutRead: "payment_payout_read",
    PaymentRefundRead: "payment_refund_read",
    PaymentLinkRead: "payment_link_read",
    PaymentLinkWrite: "payment_link_write",
    CommerceItemRead: "commerce_item_read",
    CommerceItemWrite: "commerce_item_write",
    CommerceCollectionRead: "commerce_collection_read",
    CommerceCollectionWrite: "commerce_collection_write",
    CommerceInventoryRead: "commerce_inventory_read",
    CommerceInventoryWrite: "commerce_inventory_write",
    CommerceLocationRead: "commerce_location_read",
    CommerceLocationWrite: "commerce_location_write",
    AtsActivityRead: "ats_activity_read",
    AtsActivityWrite: "ats_activity_write",
    AtsApplicationRead: "ats_application_read",
    AtsApplicationWrite: "ats_application_write",
    AtsApplicationstatusRead: "ats_applicationstatus_read",
    AtsCandidateRead: "ats_candidate_read",
    AtsCandidateWrite: "ats_candidate_write",
    AtsInterviewRead: "ats_interview_read",
    AtsInterviewWrite: "ats_interview_write",
    AtsJobRead: "ats_job_read",
    AtsJobWrite: "ats_job_write",
    AtsCompanyRead: "ats_company_read",
    AtsDocumentRead: "ats_document_read",
    AtsDocumentWrite: "ats_document_write",
    AtsScorecardRead: "ats_scorecard_read",
    AtsScorecardWrite: "ats_scorecard_write",
    CrmCompanyRead: "crm_company_read",
    CrmCompanyWrite: "crm_company_write",
    CrmContactRead: "crm_contact_read",
    CrmContactWrite: "crm_contact_write",
    CrmDealRead: "crm_deal_read",
    CrmDealWrite: "crm_deal_write",
    CrmEventRead: "crm_event_read",
    CrmEventWrite: "crm_event_write",
    CrmLeadRead: "crm_lead_read",
    CrmLeadWrite: "crm_lead_write",
    CrmPipelineRead: "crm_pipeline_read",
    CrmPipelineWrite: "crm_pipeline_write",
    MartechListRead: "martech_list_read",
    MartechListWrite: "martech_list_write",
    MartechMemberRead: "martech_member_read",
    MartechMemberWrite: "martech_member_write",
    TicketingCustomerRead: "ticketing_customer_read",
    TicketingCustomerWrite: "ticketing_customer_write",
    TicketingTicketRead: "ticketing_ticket_read",
    TicketingTicketWrite: "ticketing_ticket_write",
    TicketingNoteRead: "ticketing_note_read",
    TicketingNoteWrite: "ticketing_note_write",
    HrisEmployeeRead: "hris_employee_read",
    HrisEmployeeWrite: "hris_employee_write",
    HrisGroupRead: "hris_group_read",
    HrisGroupWrite: "hris_group_write",
    HrisPayslipRead: "hris_payslip_read",
    HrisPayslipWrite: "hris_payslip_write",
    HrisTimeoffRead: "hris_timeoff_read",
    HrisTimeoffWrite: "hris_timeoff_write",
    HrisCompanyRead: "hris_company_read",
    HrisCompanyWrite: "hris_company_write",
    HrisLocationRead: "hris_location_read",
    HrisLocationWrite: "hris_location_write",
    UcCallRead: "uc_call_read",
    StorageFileRead: "storage_file_read",
    StorageFileWrite: "storage_file_write",
    Webhook: "webhook",
    GenaiModelRead: "genai_model_read",
    GenaiPromptRead: "genai_prompt_read",
    GenaiPromptWrite: "genai_prompt_write",
    MessagingMessageRead: "messaging_message_read",
    MessagingMessageWrite: "messaging_message_write",
    MessagingChannelRead: "messaging_channel_read",
    KmsSpaceRead: "kms_space_read",
    KmsSpaceWrite: "kms_space_write",
    KmsPageRead: "kms_page_read",
    KmsPageWrite: "kms_page_write",
    KmsCommentRead: "kms_comment_read",
    KmsCommentWrite: "kms_comment_write",
    TaskProjectRead: "task_project_read",
    TaskProjectWrite: "task_project_write",
    TaskTaskRead: "task_task_read",
    TaskTaskWrite: "task_task_write",
} as const;
export type Scopes = ClosedEnum<typeof Scopes>;

export type GetUnifiedIntegrationAuthRequest = {
    env?: string | undefined;
    /**
     * Your user identifier to associate with the new Integration
     */
    externalXref?: string | undefined;
    /**
     * The URL where you want the user to be redirect to after an unsuccessful authentication. An "error" variable will be appended.
     */
    failureRedirect?: string | undefined;
    /**
     * Type of the supported integration
     */
    integrationType: string;
    /**
     * Language: en, fr, es, it, pt, zh, hi
     */
    lang?: string | undefined;
    redirect?: boolean | undefined;
    scopes?: Array<Scopes> | undefined;
    /**
     * Extra state to send back to your success URL
     */
    state?: string | undefined;
    subdomain?: string | undefined;
    /**
     * The URL where you want the user to be redirect to after a successful authorization.  The connection ID will be appended with (id=<connectionId>) to this URL, as will the state that was provided.
     */
    successRedirect?: string | undefined;
    /**
     * The ID of the workspace
     */
    workspaceId: string;
};

/** @internal */
export const Scopes$inboundSchema: z.ZodNativeEnum<typeof Scopes> = z.nativeEnum(Scopes);

/** @internal */
export const Scopes$outboundSchema: z.ZodNativeEnum<typeof Scopes> = Scopes$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Scopes$ {
    /** @deprecated use `Scopes$inboundSchema` instead. */
    export const inboundSchema = Scopes$inboundSchema;
    /** @deprecated use `Scopes$outboundSchema` instead. */
    export const outboundSchema = Scopes$outboundSchema;
}

/** @internal */
export const GetUnifiedIntegrationAuthRequest$inboundSchema: z.ZodType<
    GetUnifiedIntegrationAuthRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        env: z.string().optional(),
        external_xref: z.string().optional(),
        failure_redirect: z.string().optional(),
        integration_type: z.string(),
        lang: z.string().optional(),
        redirect: z.boolean().optional(),
        scopes: z.array(Scopes$inboundSchema).optional(),
        state: z.string().optional(),
        subdomain: z.string().optional(),
        success_redirect: z.string().optional(),
        workspace_id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            external_xref: "externalXref",
            failure_redirect: "failureRedirect",
            integration_type: "integrationType",
            success_redirect: "successRedirect",
            workspace_id: "workspaceId",
        });
    });

/** @internal */
export type GetUnifiedIntegrationAuthRequest$Outbound = {
    env?: string | undefined;
    external_xref?: string | undefined;
    failure_redirect?: string | undefined;
    integration_type: string;
    lang?: string | undefined;
    redirect?: boolean | undefined;
    scopes?: Array<string> | undefined;
    state?: string | undefined;
    subdomain?: string | undefined;
    success_redirect?: string | undefined;
    workspace_id: string;
};

/** @internal */
export const GetUnifiedIntegrationAuthRequest$outboundSchema: z.ZodType<
    GetUnifiedIntegrationAuthRequest$Outbound,
    z.ZodTypeDef,
    GetUnifiedIntegrationAuthRequest
> = z
    .object({
        env: z.string().optional(),
        externalXref: z.string().optional(),
        failureRedirect: z.string().optional(),
        integrationType: z.string(),
        lang: z.string().optional(),
        redirect: z.boolean().optional(),
        scopes: z.array(Scopes$outboundSchema).optional(),
        state: z.string().optional(),
        subdomain: z.string().optional(),
        successRedirect: z.string().optional(),
        workspaceId: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            externalXref: "external_xref",
            failureRedirect: "failure_redirect",
            integrationType: "integration_type",
            successRedirect: "success_redirect",
            workspaceId: "workspace_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetUnifiedIntegrationAuthRequest$ {
    /** @deprecated use `GetUnifiedIntegrationAuthRequest$inboundSchema` instead. */
    export const inboundSchema = GetUnifiedIntegrationAuthRequest$inboundSchema;
    /** @deprecated use `GetUnifiedIntegrationAuthRequest$outboundSchema` instead. */
    export const outboundSchema = GetUnifiedIntegrationAuthRequest$outboundSchema;
    /** @deprecated use `GetUnifiedIntegrationAuthRequest$Outbound` instead. */
    export type Outbound = GetUnifiedIntegrationAuthRequest$Outbound;
}
