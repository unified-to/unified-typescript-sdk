/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export enum Scopes {
    AuthLogin = "auth_login",
    AccountingAccountRead = "accounting_account_read",
    AccountingTransactionWrite = "accounting_transaction_write",
    AccountingInvoiceRead = "accounting_invoice_read",
    AccountingInvoiceWrite = "accounting_invoice_write",
    AccountingCustomerRead = "accounting_customer_read",
    AccountingCustomerWrite = "accounting_customer_write",
    AccountingPaymentRead = "accounting_payment_read",
    AccountingPaymentWrite = "accounting_payment_write",
    AtsScorecardRead = "ats_scorecard_read",
    AtsScorecardWrite = "ats_scorecard_write",
    AtsApplicationRead = "ats_application_read",
    AtsApplicationWrite = "ats_application_write",
    AtsCandidateRead = "ats_candidate_read",
    AtsCandidateWrite = "ats_candidate_write",
    AtsInterviewRead = "ats_interview_read",
    AtsInterviewWrite = "ats_interview_write",
    AtsJobRead = "ats_job_read",
    AtsJobWrite = "ats_job_write",
    AtsDocumentRead = "ats_document_read",
    AtsDocumentWrite = "ats_document_write",
    CrmCompanyRead = "crm_company_read",
    CrmCompanyWrite = "crm_company_write",
    CrmContactRead = "crm_contact_read",
    CrmContactWrite = "crm_contact_write",
    CrmDealRead = "crm_deal_read",
    CrmDealWrite = "crm_deal_write",
    CrmEventRead = "crm_event_read",
    CrmEventWrite = "crm_event_write",
    CrmLeadRead = "crm_lead_read",
    CrmLeadWrite = "crm_lead_write",
    CrmFileRead = "crm_file_read",
    CrmFileWrite = "crm_file_write",
    CrmPipelineRead = "crm_pipeline_read",
    CrmPipelineWrite = "crm_pipeline_write",
    MartechListRead = "martech_list_read",
    MartechListWrite = "martech_list_write",
    MartechMemberRead = "martech_member_read",
    MartechMemberWrite = "martech_member_write",
    TicketingCustomerRead = "ticketing_customer_read",
    TicketingCustomerWrite = "ticketing_customer_write",
    TicketingTicketRead = "ticketing_ticket_read",
    TicketingTicketWrite = "ticketing_ticket_write",
    TicketingNoteRead = "ticketing_note_read",
    TicketingNoteWrite = "ticketing_note_write",
    HrisEmployeeRead = "hris_employee_read",
    HrisEmployeeWrite = "hris_employee_write",
    HrisGroupRead = "hris_group_read",
    HrisGroupWrite = "hris_group_write",
    UcCallRead = "uc_call_read",
    Webhook = "webhook",
}

export class GetUnifiedIntegrationAuthRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=env" })
    env?: string;

    /**
     * Your user identifier to associate with the new Integration
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=external_xref" })
    externalXref?: string;

    /**
     * The URL where you want the user to be redirect to after an unsuccessful authentication. An "error" variable will be appended.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=failure_redirect" })
    failureRedirect?: string;

    /**
     * Type of the supported integration
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=integration_type" })
    integrationType: string;

    /**
     * Language: en, fr, es, it, pt, zh, hi
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
    lang?: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=redirect" })
    redirect?: boolean;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scopes" })
    scopes?: Scopes[];

    /**
     * Extra state to send back to your success URL
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" })
    state?: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subdomain" })
    subdomain?: string;

    /**
     * The URL where you want the user to be redirect to after a successful authentication.  The connection ID will be appended with (id=<connectionId>) to this URL, as will the state that was provided.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=success_redirect" })
    successRedirect?: string;

    /**
     * The ID of the workspace
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" })
    workspaceId: string;
}

export class GetUnifiedIntegrationAuthResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;

    /**
     * Successful
     */
    @SpeakeasyMetadata()
    res?: string;
}
