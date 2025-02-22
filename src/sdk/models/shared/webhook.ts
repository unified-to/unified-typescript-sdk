/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const DbType = {
  Mongodb: "mongodb",
  Mysql: "mysql",
  Postgres: "postgres",
  Mssql: "mssql",
  Mariadb: "mariadb",
} as const;
export type DbType = ClosedEnum<typeof DbType>;

export const Event = {
  Updated: "updated",
  Created: "created",
  Deleted: "deleted",
} as const;
export type Event = ClosedEnum<typeof Event>;

export type Meta = {};

export const ObjectType = {
  AccountingAccount: "accounting_account",
  AccountingTransaction: "accounting_transaction",
  AccountingJournal: "accounting_journal",
  AccountingContact: "accounting_contact",
  AccountingInvoice: "accounting_invoice",
  AccountingTaxrate: "accounting_taxrate",
  AccountingOrganization: "accounting_organization",
  AccountingOrder: "accounting_order",
  PaymentPayment: "payment_payment",
  PaymentLink: "payment_link",
  PaymentPayout: "payment_payout",
  PaymentRefund: "payment_refund",
  PaymentSubscription: "payment_subscription",
  CommerceItem: "commerce_item",
  CommerceCollection: "commerce_collection",
  CommerceInventory: "commerce_inventory",
  CommerceLocation: "commerce_location",
  AtsActivity: "ats_activity",
  AtsApplication: "ats_application",
  AtsApplicationstatus: "ats_applicationstatus",
  AtsCandidate: "ats_candidate",
  AtsDocument: "ats_document",
  AtsInterview: "ats_interview",
  AtsJob: "ats_job",
  AtsScorecard: "ats_scorecard",
  AtsCompany: "ats_company",
  CrmCompany: "crm_company",
  CrmContact: "crm_contact",
  CrmDeal: "crm_deal",
  CrmEvent: "crm_event",
  CrmLead: "crm_lead",
  CrmPipeline: "crm_pipeline",
  HrisEmployee: "hris_employee",
  HrisGroup: "hris_group",
  HrisPayslip: "hris_payslip",
  HrisTimeoff: "hris_timeoff",
  HrisCompany: "hris_company",
  HrisLocation: "hris_location",
  MartechList: "martech_list",
  MartechMember: "martech_member",
  Passthrough: "passthrough",
  TicketingNote: "ticketing_note",
  TicketingTicket: "ticketing_ticket",
  TicketingCustomer: "ticketing_customer",
  UcContact: "uc_contact",
  UcCall: "uc_call",
  EnrichPerson: "enrich_person",
  EnrichCompany: "enrich_company",
  StorageFile: "storage_file",
  GenaiModel: "genai_model",
  GenaiPrompt: "genai_prompt",
  MessagingMessage: "messaging_message",
  MessagingChannel: "messaging_channel",
  KmsSpace: "kms_space",
  KmsPage: "kms_page",
  KmsComment: "kms_comment",
  TaskProject: "task_project",
  TaskTask: "task_task",
  TaskComment: "task_comment",
  ScimUsers: "scim_users",
  ScimGroups: "scim_groups",
  LmsCourse: "lms_course",
  LmsClass: "lms_class",
  LmsStudent: "lms_student",
  LmsInstructor: "lms_instructor",
  RepoOrganization: "repo_organization",
  RepoRepository: "repo_repository",
  RepoBranch: "repo_branch",
  RepoCommit: "repo_commit",
  RepoPullrequest: "repo_pullrequest",
  MetadataMetadata: "metadata_metadata",
} as const;
export type ObjectType = ClosedEnum<typeof ObjectType>;

export const WebhookType = {
  Virtual: "virtual",
  Native: "native",
} as const;
export type WebhookType = ClosedEnum<typeof WebhookType>;

/**
 * A webhook is used to POST new/updated information to your server.
 */
export type Webhook = {
  checkedAt?: Date | undefined;
  connectionId: string;
  createdAt?: Date | undefined;
  dbNamePrefix?: string | undefined;
  dbType?: DbType | undefined;
  dbUrl?: string | undefined;
  environment?: string | undefined;
  event: Event;
  fields?: string | undefined;
  filters?: { [k: string]: string } | undefined;
  hookUrl?: string | undefined;
  id?: string | undefined;
  integrationType?: string | undefined;
  interval?: number | undefined;
  isHealthy?: boolean | undefined;
  isPaused?: boolean | undefined;
  meta?: Meta | undefined;
  objectType: ObjectType;
  pageMaxLimit?: number | undefined;
  /**
   * An array of the most revent virtual webhook runs
   */
  runs?: Array<string> | undefined;
  updatedAt?: Date | undefined;
  webhookType?: WebhookType | undefined;
  workspaceId?: string | undefined;
};

/** @internal */
export const DbType$inboundSchema: z.ZodNativeEnum<typeof DbType> = z
  .nativeEnum(DbType);

/** @internal */
export const DbType$outboundSchema: z.ZodNativeEnum<typeof DbType> =
  DbType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DbType$ {
  /** @deprecated use `DbType$inboundSchema` instead. */
  export const inboundSchema = DbType$inboundSchema;
  /** @deprecated use `DbType$outboundSchema` instead. */
  export const outboundSchema = DbType$outboundSchema;
}

/** @internal */
export const Event$inboundSchema: z.ZodNativeEnum<typeof Event> = z.nativeEnum(
  Event,
);

/** @internal */
export const Event$outboundSchema: z.ZodNativeEnum<typeof Event> =
  Event$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Event$ {
  /** @deprecated use `Event$inboundSchema` instead. */
  export const inboundSchema = Event$inboundSchema;
  /** @deprecated use `Event$outboundSchema` instead. */
  export const outboundSchema = Event$outboundSchema;
}

/** @internal */
export const Meta$inboundSchema: z.ZodType<Meta, z.ZodTypeDef, unknown> = z
  .object({});

/** @internal */
export type Meta$Outbound = {};

/** @internal */
export const Meta$outboundSchema: z.ZodType<Meta$Outbound, z.ZodTypeDef, Meta> =
  z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Meta$ {
  /** @deprecated use `Meta$inboundSchema` instead. */
  export const inboundSchema = Meta$inboundSchema;
  /** @deprecated use `Meta$outboundSchema` instead. */
  export const outboundSchema = Meta$outboundSchema;
  /** @deprecated use `Meta$Outbound` instead. */
  export type Outbound = Meta$Outbound;
}

export function metaToJSON(meta: Meta): string {
  return JSON.stringify(Meta$outboundSchema.parse(meta));
}

export function metaFromJSON(
  jsonString: string,
): SafeParseResult<Meta, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Meta$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Meta' from JSON`,
  );
}

/** @internal */
export const ObjectType$inboundSchema: z.ZodNativeEnum<typeof ObjectType> = z
  .nativeEnum(ObjectType);

/** @internal */
export const ObjectType$outboundSchema: z.ZodNativeEnum<typeof ObjectType> =
  ObjectType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ObjectType$ {
  /** @deprecated use `ObjectType$inboundSchema` instead. */
  export const inboundSchema = ObjectType$inboundSchema;
  /** @deprecated use `ObjectType$outboundSchema` instead. */
  export const outboundSchema = ObjectType$outboundSchema;
}

/** @internal */
export const WebhookType$inboundSchema: z.ZodNativeEnum<typeof WebhookType> = z
  .nativeEnum(WebhookType);

/** @internal */
export const WebhookType$outboundSchema: z.ZodNativeEnum<typeof WebhookType> =
  WebhookType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WebhookType$ {
  /** @deprecated use `WebhookType$inboundSchema` instead. */
  export const inboundSchema = WebhookType$inboundSchema;
  /** @deprecated use `WebhookType$outboundSchema` instead. */
  export const outboundSchema = WebhookType$outboundSchema;
}

/** @internal */
export const Webhook$inboundSchema: z.ZodType<Webhook, z.ZodTypeDef, unknown> =
  z.object({
    checked_at: z.string().datetime({ offset: true }).transform(v =>
      new Date(v)
    ).optional(),
    connection_id: z.string(),
    created_at: z.string().datetime({ offset: true }).transform(v =>
      new Date(v)
    ).optional(),
    db_name_prefix: z.string().optional(),
    db_type: DbType$inboundSchema.optional(),
    db_url: z.string().optional(),
    environment: z.string().default("Production"),
    event: Event$inboundSchema,
    fields: z.string().optional(),
    filters: z.record(z.string()).optional(),
    hook_url: z.string().optional(),
    id: z.string().optional(),
    integration_type: z.string().optional(),
    interval: z.number().optional(),
    is_healthy: z.boolean().optional(),
    is_paused: z.boolean().optional(),
    meta: z.lazy(() => Meta$inboundSchema).optional(),
    object_type: ObjectType$inboundSchema,
    page_max_limit: z.number().optional(),
    runs: z.array(z.string()).optional(),
    updated_at: z.string().datetime({ offset: true }).transform(v =>
      new Date(v)
    ).optional(),
    webhook_type: WebhookType$inboundSchema.optional(),
    workspace_id: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      "checked_at": "checkedAt",
      "connection_id": "connectionId",
      "created_at": "createdAt",
      "db_name_prefix": "dbNamePrefix",
      "db_type": "dbType",
      "db_url": "dbUrl",
      "hook_url": "hookUrl",
      "integration_type": "integrationType",
      "is_healthy": "isHealthy",
      "is_paused": "isPaused",
      "object_type": "objectType",
      "page_max_limit": "pageMaxLimit",
      "updated_at": "updatedAt",
      "webhook_type": "webhookType",
      "workspace_id": "workspaceId",
    });
  });

/** @internal */
export type Webhook$Outbound = {
  checked_at?: string | undefined;
  connection_id: string;
  created_at?: string | undefined;
  db_name_prefix?: string | undefined;
  db_type?: string | undefined;
  db_url?: string | undefined;
  environment: string;
  event: string;
  fields?: string | undefined;
  filters?: { [k: string]: string } | undefined;
  hook_url?: string | undefined;
  id?: string | undefined;
  integration_type?: string | undefined;
  interval?: number | undefined;
  is_healthy?: boolean | undefined;
  is_paused?: boolean | undefined;
  meta?: Meta$Outbound | undefined;
  object_type: string;
  page_max_limit?: number | undefined;
  runs?: Array<string> | undefined;
  updated_at?: string | undefined;
  webhook_type?: string | undefined;
  workspace_id?: string | undefined;
};

/** @internal */
export const Webhook$outboundSchema: z.ZodType<
  Webhook$Outbound,
  z.ZodTypeDef,
  Webhook
> = z.object({
  checkedAt: z.date().transform(v => v.toISOString()).optional(),
  connectionId: z.string(),
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  dbNamePrefix: z.string().optional(),
  dbType: DbType$outboundSchema.optional(),
  dbUrl: z.string().optional(),
  environment: z.string().default("Production"),
  event: Event$outboundSchema,
  fields: z.string().optional(),
  filters: z.record(z.string()).optional(),
  hookUrl: z.string().optional(),
  id: z.string().optional(),
  integrationType: z.string().optional(),
  interval: z.number().optional(),
  isHealthy: z.boolean().optional(),
  isPaused: z.boolean().optional(),
  meta: z.lazy(() => Meta$outboundSchema).optional(),
  objectType: ObjectType$outboundSchema,
  pageMaxLimit: z.number().optional(),
  runs: z.array(z.string()).optional(),
  updatedAt: z.date().transform(v => v.toISOString()).optional(),
  webhookType: WebhookType$outboundSchema.optional(),
  workspaceId: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    checkedAt: "checked_at",
    connectionId: "connection_id",
    createdAt: "created_at",
    dbNamePrefix: "db_name_prefix",
    dbType: "db_type",
    dbUrl: "db_url",
    hookUrl: "hook_url",
    integrationType: "integration_type",
    isHealthy: "is_healthy",
    isPaused: "is_paused",
    objectType: "object_type",
    pageMaxLimit: "page_max_limit",
    updatedAt: "updated_at",
    webhookType: "webhook_type",
    workspaceId: "workspace_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Webhook$ {
  /** @deprecated use `Webhook$inboundSchema` instead. */
  export const inboundSchema = Webhook$inboundSchema;
  /** @deprecated use `Webhook$outboundSchema` instead. */
  export const outboundSchema = Webhook$outboundSchema;
  /** @deprecated use `Webhook$Outbound` instead. */
  export type Outbound = Webhook$Outbound;
}

export function webhookToJSON(webhook: Webhook): string {
  return JSON.stringify(Webhook$outboundSchema.parse(webhook));
}

export function webhookFromJSON(
  jsonString: string,
): SafeParseResult<Webhook, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Webhook$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Webhook' from JSON`,
  );
}
