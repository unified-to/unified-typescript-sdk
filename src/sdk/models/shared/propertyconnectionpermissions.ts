/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const PropertyConnectionPermissions = {
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
  AccountingOrderRead: "accounting_order_read",
  AccountingOrderWrite: "accounting_order_write",
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
  ScimUsersRead: "scim_users_read",
  ScimUsersWrite: "scim_users_write",
  ScimGroupsRead: "scim_groups_read",
  ScimGroupsWrite: "scim_groups_write",
  LmsCourseRead: "lms_course_read",
  LmsCourseWrite: "lms_course_write",
  LmsClassRead: "lms_class_read",
  LmsClassWrite: "lms_class_write",
  LmsStudentRead: "lms_student_read",
  LmsStudentWrite: "lms_student_write",
  LmsInstructorRead: "lms_instructor_read",
  LmsInstructorWrite: "lms_instructor_write",
  RepoOrganizationRead: "repo_organization_read",
  RepoOrganizationWrite: "repo_organization_write",
  RepoRepositoryRead: "repo_repository_read",
  RepoRepositoryWrite: "repo_repository_write",
  RepoBranchRead: "repo_branch_read",
  RepoBranchWrite: "repo_branch_write",
  RepoCommitRead: "repo_commit_read",
  RepoCommitWrite: "repo_commit_write",
  RepoPullrequestRead: "repo_pullrequest_read",
  RepoPullrequestWrite: "repo_pullrequest_write",
  MetadataMetadataRead: "metadata_metadata_read",
  MetadataMetadataWrite: "metadata_metadata_write",
} as const;
export type PropertyConnectionPermissions = ClosedEnum<
  typeof PropertyConnectionPermissions
>;

/** @internal */
export const PropertyConnectionPermissions$inboundSchema: z.ZodNativeEnum<
  typeof PropertyConnectionPermissions
> = z.nativeEnum(PropertyConnectionPermissions);

/** @internal */
export const PropertyConnectionPermissions$outboundSchema: z.ZodNativeEnum<
  typeof PropertyConnectionPermissions
> = PropertyConnectionPermissions$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PropertyConnectionPermissions$ {
  /** @deprecated use `PropertyConnectionPermissions$inboundSchema` instead. */
  export const inboundSchema = PropertyConnectionPermissions$inboundSchema;
  /** @deprecated use `PropertyConnectionPermissions$outboundSchema` instead. */
  export const outboundSchema = PropertyConnectionPermissions$outboundSchema;
}
