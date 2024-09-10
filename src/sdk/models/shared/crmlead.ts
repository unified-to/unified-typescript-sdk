/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import {
  CrmEmail,
  CrmEmail$inboundSchema,
  CrmEmail$Outbound,
  CrmEmail$outboundSchema,
} from "./crmemail.js";
import {
  CrmTelephone,
  CrmTelephone$inboundSchema,
  CrmTelephone$Outbound,
  CrmTelephone$outboundSchema,
} from "./crmtelephone.js";
import {
  PropertyCrmLeadAddress,
  PropertyCrmLeadAddress$inboundSchema,
  PropertyCrmLeadAddress$Outbound,
  PropertyCrmLeadAddress$outboundSchema,
} from "./propertycrmleadaddress.js";

export type CrmLead = {
  address?: PropertyCrmLeadAddress | undefined;
  companyId?: string | undefined;
  companyName?: string | undefined;
  contactId?: string | undefined;
  createdAt?: Date | undefined;
  creatorUserId?: string | undefined;
  emails?: Array<CrmEmail> | undefined;
  id?: string | undefined;
  isActive?: boolean | undefined;
  name?: string | undefined;
  raw?: { [k: string]: any } | undefined;
  source?: string | undefined;
  status?: string | undefined;
  telephones?: Array<CrmTelephone> | undefined;
  updatedAt?: Date | undefined;
  userId?: string | undefined;
};

/** @internal */
export const CrmLead$inboundSchema: z.ZodType<CrmLead, z.ZodTypeDef, unknown> =
  z.object({
    address: PropertyCrmLeadAddress$inboundSchema.optional(),
    company_id: z.string().optional(),
    company_name: z.string().optional(),
    contact_id: z.string().optional(),
    created_at: z.string().datetime({ offset: true }).transform(v =>
      new Date(v)
    ).optional(),
    creator_user_id: z.string().optional(),
    emails: z.array(CrmEmail$inboundSchema).optional(),
    id: z.string().optional(),
    is_active: z.boolean().optional(),
    name: z.string().optional(),
    raw: z.record(z.any()).optional(),
    source: z.string().optional(),
    status: z.string().optional(),
    telephones: z.array(CrmTelephone$inboundSchema).optional(),
    updated_at: z.string().datetime({ offset: true }).transform(v =>
      new Date(v)
    ).optional(),
    user_id: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      "company_id": "companyId",
      "company_name": "companyName",
      "contact_id": "contactId",
      "created_at": "createdAt",
      "creator_user_id": "creatorUserId",
      "is_active": "isActive",
      "updated_at": "updatedAt",
      "user_id": "userId",
    });
  });

/** @internal */
export type CrmLead$Outbound = {
  address?: PropertyCrmLeadAddress$Outbound | undefined;
  company_id?: string | undefined;
  company_name?: string | undefined;
  contact_id?: string | undefined;
  created_at?: string | undefined;
  creator_user_id?: string | undefined;
  emails?: Array<CrmEmail$Outbound> | undefined;
  id?: string | undefined;
  is_active?: boolean | undefined;
  name?: string | undefined;
  raw?: { [k: string]: any } | undefined;
  source?: string | undefined;
  status?: string | undefined;
  telephones?: Array<CrmTelephone$Outbound> | undefined;
  updated_at?: string | undefined;
  user_id?: string | undefined;
};

/** @internal */
export const CrmLead$outboundSchema: z.ZodType<
  CrmLead$Outbound,
  z.ZodTypeDef,
  CrmLead
> = z.object({
  address: PropertyCrmLeadAddress$outboundSchema.optional(),
  companyId: z.string().optional(),
  companyName: z.string().optional(),
  contactId: z.string().optional(),
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  creatorUserId: z.string().optional(),
  emails: z.array(CrmEmail$outboundSchema).optional(),
  id: z.string().optional(),
  isActive: z.boolean().optional(),
  name: z.string().optional(),
  raw: z.record(z.any()).optional(),
  source: z.string().optional(),
  status: z.string().optional(),
  telephones: z.array(CrmTelephone$outboundSchema).optional(),
  updatedAt: z.date().transform(v => v.toISOString()).optional(),
  userId: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    companyId: "company_id",
    companyName: "company_name",
    contactId: "contact_id",
    createdAt: "created_at",
    creatorUserId: "creator_user_id",
    isActive: "is_active",
    updatedAt: "updated_at",
    userId: "user_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmLead$ {
  /** @deprecated use `CrmLead$inboundSchema` instead. */
  export const inboundSchema = CrmLead$inboundSchema;
  /** @deprecated use `CrmLead$outboundSchema` instead. */
  export const outboundSchema = CrmLead$outboundSchema;
  /** @deprecated use `CrmLead$Outbound` instead. */
  export type Outbound = CrmLead$Outbound;
}
