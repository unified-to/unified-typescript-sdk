/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import {
  catchUnrecognizedEnum,
  OpenEnum,
  Unrecognized,
} from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  PropertyCrmEventCall,
  PropertyCrmEventCall$inboundSchema,
  PropertyCrmEventCall$Outbound,
  PropertyCrmEventCall$outboundSchema,
} from "./propertycrmeventcall.js";
import {
  PropertyCrmEventEmail,
  PropertyCrmEventEmail$inboundSchema,
  PropertyCrmEventEmail$Outbound,
  PropertyCrmEventEmail$outboundSchema,
} from "./propertycrmeventemail.js";
import {
  PropertyCrmEventForm,
  PropertyCrmEventForm$inboundSchema,
  PropertyCrmEventForm$Outbound,
  PropertyCrmEventForm$outboundSchema,
} from "./propertycrmeventform.js";
import {
  PropertyCrmEventMarketingEmail,
  PropertyCrmEventMarketingEmail$inboundSchema,
  PropertyCrmEventMarketingEmail$Outbound,
  PropertyCrmEventMarketingEmail$outboundSchema,
} from "./propertycrmeventmarketingemail.js";
import {
  PropertyCrmEventMeeting,
  PropertyCrmEventMeeting$inboundSchema,
  PropertyCrmEventMeeting$Outbound,
  PropertyCrmEventMeeting$outboundSchema,
} from "./propertycrmeventmeeting.js";
import {
  PropertyCrmEventNote,
  PropertyCrmEventNote$inboundSchema,
  PropertyCrmEventNote$Outbound,
  PropertyCrmEventNote$outboundSchema,
} from "./propertycrmeventnote.js";
import {
  PropertyCrmEventPageView,
  PropertyCrmEventPageView$inboundSchema,
  PropertyCrmEventPageView$Outbound,
  PropertyCrmEventPageView$outboundSchema,
} from "./propertycrmeventpageview.js";
import {
  PropertyCrmEventTask,
  PropertyCrmEventTask$inboundSchema,
  PropertyCrmEventTask$Outbound,
  PropertyCrmEventTask$outboundSchema,
} from "./propertycrmeventtask.js";

export const CrmEventType = {
  Note: "NOTE",
  Email: "EMAIL",
  Task: "TASK",
  Meeting: "MEETING",
  Call: "CALL",
  MarketingEmail: "MARKETING_EMAIL",
  Form: "FORM",
  PageView: "PAGE_VIEW",
} as const;
export type CrmEventType = OpenEnum<typeof CrmEventType>;

/**
 * An event represents an event, activity, or engagement and is always associated with a deal, contact, or company
 */
export type CrmEvent = {
  /**
   * The call object, when type = call
   */
  call?: PropertyCrmEventCall | undefined;
  /**
   * An array of company IDs associated with this event
   */
  companyIds?: Array<string> | undefined;
  /**
   * An array of contact IDs associated with this event
   */
  contactIds?: Array<string> | undefined;
  createdAt?: Date | undefined;
  /**
   * An array of deal IDs associated with this event
   */
  dealIds?: Array<string> | undefined;
  /**
   * The email object, when type = email
   */
  email?: PropertyCrmEventEmail | undefined;
  form?: PropertyCrmEventForm | undefined;
  id?: string | undefined;
  leadIds?: Array<string> | undefined;
  marketingEmail?: PropertyCrmEventMarketingEmail | undefined;
  /**
   * The meeting object, when type = meeting
   */
  meeting?: PropertyCrmEventMeeting | undefined;
  /**
   * The note object, when type = note
   */
  note?: PropertyCrmEventNote | undefined;
  pageView?: PropertyCrmEventPageView | undefined;
  raw?: { [k: string]: any } | undefined;
  /**
   * The task object, when type = task
   */
  task?: PropertyCrmEventTask | undefined;
  type?: CrmEventType | undefined;
  updatedAt?: Date | undefined;
  userId?: string | undefined;
};

/** @internal */
export const CrmEventType$inboundSchema: z.ZodType<
  CrmEventType,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(CrmEventType),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const CrmEventType$outboundSchema: z.ZodType<
  CrmEventType,
  z.ZodTypeDef,
  CrmEventType
> = z.union([
  z.nativeEnum(CrmEventType),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmEventType$ {
  /** @deprecated use `CrmEventType$inboundSchema` instead. */
  export const inboundSchema = CrmEventType$inboundSchema;
  /** @deprecated use `CrmEventType$outboundSchema` instead. */
  export const outboundSchema = CrmEventType$outboundSchema;
}

/** @internal */
export const CrmEvent$inboundSchema: z.ZodType<
  CrmEvent,
  z.ZodTypeDef,
  unknown
> = z.object({
  call: PropertyCrmEventCall$inboundSchema.optional(),
  company_ids: z.array(z.string()).optional(),
  contact_ids: z.array(z.string()).optional(),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  deal_ids: z.array(z.string()).optional(),
  email: PropertyCrmEventEmail$inboundSchema.optional(),
  form: PropertyCrmEventForm$inboundSchema.optional(),
  id: z.string().optional(),
  lead_ids: z.array(z.string()).optional(),
  marketing_email: PropertyCrmEventMarketingEmail$inboundSchema.optional(),
  meeting: PropertyCrmEventMeeting$inboundSchema.optional(),
  note: PropertyCrmEventNote$inboundSchema.optional(),
  page_view: PropertyCrmEventPageView$inboundSchema.optional(),
  raw: z.record(z.any()).optional(),
  task: PropertyCrmEventTask$inboundSchema.optional(),
  type: CrmEventType$inboundSchema.optional(),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  user_id: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "company_ids": "companyIds",
    "contact_ids": "contactIds",
    "created_at": "createdAt",
    "deal_ids": "dealIds",
    "lead_ids": "leadIds",
    "marketing_email": "marketingEmail",
    "page_view": "pageView",
    "updated_at": "updatedAt",
    "user_id": "userId",
  });
});

/** @internal */
export type CrmEvent$Outbound = {
  call?: PropertyCrmEventCall$Outbound | undefined;
  company_ids?: Array<string> | undefined;
  contact_ids?: Array<string> | undefined;
  created_at?: string | undefined;
  deal_ids?: Array<string> | undefined;
  email?: PropertyCrmEventEmail$Outbound | undefined;
  form?: PropertyCrmEventForm$Outbound | undefined;
  id?: string | undefined;
  lead_ids?: Array<string> | undefined;
  marketing_email?: PropertyCrmEventMarketingEmail$Outbound | undefined;
  meeting?: PropertyCrmEventMeeting$Outbound | undefined;
  note?: PropertyCrmEventNote$Outbound | undefined;
  page_view?: PropertyCrmEventPageView$Outbound | undefined;
  raw?: { [k: string]: any } | undefined;
  task?: PropertyCrmEventTask$Outbound | undefined;
  type?: string | undefined;
  updated_at?: string | undefined;
  user_id?: string | undefined;
};

/** @internal */
export const CrmEvent$outboundSchema: z.ZodType<
  CrmEvent$Outbound,
  z.ZodTypeDef,
  CrmEvent
> = z.object({
  call: PropertyCrmEventCall$outboundSchema.optional(),
  companyIds: z.array(z.string()).optional(),
  contactIds: z.array(z.string()).optional(),
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  dealIds: z.array(z.string()).optional(),
  email: PropertyCrmEventEmail$outboundSchema.optional(),
  form: PropertyCrmEventForm$outboundSchema.optional(),
  id: z.string().optional(),
  leadIds: z.array(z.string()).optional(),
  marketingEmail: PropertyCrmEventMarketingEmail$outboundSchema.optional(),
  meeting: PropertyCrmEventMeeting$outboundSchema.optional(),
  note: PropertyCrmEventNote$outboundSchema.optional(),
  pageView: PropertyCrmEventPageView$outboundSchema.optional(),
  raw: z.record(z.any()).optional(),
  task: PropertyCrmEventTask$outboundSchema.optional(),
  type: CrmEventType$outboundSchema.optional(),
  updatedAt: z.date().transform(v => v.toISOString()).optional(),
  userId: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    companyIds: "company_ids",
    contactIds: "contact_ids",
    createdAt: "created_at",
    dealIds: "deal_ids",
    leadIds: "lead_ids",
    marketingEmail: "marketing_email",
    pageView: "page_view",
    updatedAt: "updated_at",
    userId: "user_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmEvent$ {
  /** @deprecated use `CrmEvent$inboundSchema` instead. */
  export const inboundSchema = CrmEvent$inboundSchema;
  /** @deprecated use `CrmEvent$outboundSchema` instead. */
  export const outboundSchema = CrmEvent$outboundSchema;
  /** @deprecated use `CrmEvent$Outbound` instead. */
  export type Outbound = CrmEvent$Outbound;
}

export function crmEventToJSON(crmEvent: CrmEvent): string {
  return JSON.stringify(CrmEvent$outboundSchema.parse(crmEvent));
}

export function crmEventFromJSON(
  jsonString: string,
): SafeParseResult<CrmEvent, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmEvent$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmEvent' from JSON`,
  );
}
