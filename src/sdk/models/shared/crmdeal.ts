/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CrmMetadata,
  CrmMetadata$inboundSchema,
  CrmMetadata$Outbound,
  CrmMetadata$outboundSchema,
} from "./crmmetadata.js";

/**
 * A deal represents an opportunity with companies and/or contacts
 */
export type CrmDeal = {
  amount?: number | undefined;
  closedAt?: Date | undefined;
  companyIds?: Array<string> | undefined;
  contactIds?: Array<string> | undefined;
  createdAt?: Date | undefined;
  currency?: string | undefined;
  id?: string | undefined;
  lostReason?: string | undefined;
  metadata?: Array<CrmMetadata> | undefined;
  name?: string | undefined;
  pipeline?: string | undefined;
  pipelineId?: string | undefined;
  probability?: number | undefined;
  raw?: { [k: string]: any } | undefined;
  source?: string | undefined;
  stage?: string | undefined;
  stageId?: string | undefined;
  tags?: Array<string> | undefined;
  updatedAt?: Date | undefined;
  userId?: string | undefined;
  wonReason?: string | undefined;
};

/** @internal */
export const CrmDeal$inboundSchema: z.ZodType<CrmDeal, z.ZodTypeDef, unknown> =
  z.object({
    amount: z.number().optional(),
    closed_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
      .optional(),
    company_ids: z.array(z.string()).optional(),
    contact_ids: z.array(z.string()).optional(),
    created_at: z.string().datetime({ offset: true }).transform(v =>
      new Date(v)
    ).optional(),
    currency: z.string().optional(),
    id: z.string().optional(),
    lost_reason: z.string().optional(),
    metadata: z.array(CrmMetadata$inboundSchema).optional(),
    name: z.string().optional(),
    pipeline: z.string().optional(),
    pipeline_id: z.string().optional(),
    probability: z.number().optional(),
    raw: z.record(z.any()).optional(),
    source: z.string().optional(),
    stage: z.string().optional(),
    stage_id: z.string().optional(),
    tags: z.array(z.string()).optional(),
    updated_at: z.string().datetime({ offset: true }).transform(v =>
      new Date(v)
    ).optional(),
    user_id: z.string().optional(),
    won_reason: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      "closed_at": "closedAt",
      "company_ids": "companyIds",
      "contact_ids": "contactIds",
      "created_at": "createdAt",
      "lost_reason": "lostReason",
      "pipeline_id": "pipelineId",
      "stage_id": "stageId",
      "updated_at": "updatedAt",
      "user_id": "userId",
      "won_reason": "wonReason",
    });
  });

/** @internal */
export type CrmDeal$Outbound = {
  amount?: number | undefined;
  closed_at?: string | undefined;
  company_ids?: Array<string> | undefined;
  contact_ids?: Array<string> | undefined;
  created_at?: string | undefined;
  currency?: string | undefined;
  id?: string | undefined;
  lost_reason?: string | undefined;
  metadata?: Array<CrmMetadata$Outbound> | undefined;
  name?: string | undefined;
  pipeline?: string | undefined;
  pipeline_id?: string | undefined;
  probability?: number | undefined;
  raw?: { [k: string]: any } | undefined;
  source?: string | undefined;
  stage?: string | undefined;
  stage_id?: string | undefined;
  tags?: Array<string> | undefined;
  updated_at?: string | undefined;
  user_id?: string | undefined;
  won_reason?: string | undefined;
};

/** @internal */
export const CrmDeal$outboundSchema: z.ZodType<
  CrmDeal$Outbound,
  z.ZodTypeDef,
  CrmDeal
> = z.object({
  amount: z.number().optional(),
  closedAt: z.date().transform(v => v.toISOString()).optional(),
  companyIds: z.array(z.string()).optional(),
  contactIds: z.array(z.string()).optional(),
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  currency: z.string().optional(),
  id: z.string().optional(),
  lostReason: z.string().optional(),
  metadata: z.array(CrmMetadata$outboundSchema).optional(),
  name: z.string().optional(),
  pipeline: z.string().optional(),
  pipelineId: z.string().optional(),
  probability: z.number().optional(),
  raw: z.record(z.any()).optional(),
  source: z.string().optional(),
  stage: z.string().optional(),
  stageId: z.string().optional(),
  tags: z.array(z.string()).optional(),
  updatedAt: z.date().transform(v => v.toISOString()).optional(),
  userId: z.string().optional(),
  wonReason: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    closedAt: "closed_at",
    companyIds: "company_ids",
    contactIds: "contact_ids",
    createdAt: "created_at",
    lostReason: "lost_reason",
    pipelineId: "pipeline_id",
    stageId: "stage_id",
    updatedAt: "updated_at",
    userId: "user_id",
    wonReason: "won_reason",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmDeal$ {
  /** @deprecated use `CrmDeal$inboundSchema` instead. */
  export const inboundSchema = CrmDeal$inboundSchema;
  /** @deprecated use `CrmDeal$outboundSchema` instead. */
  export const outboundSchema = CrmDeal$outboundSchema;
  /** @deprecated use `CrmDeal$Outbound` instead. */
  export type Outbound = CrmDeal$Outbound;
}

export function crmDealToJSON(crmDeal: CrmDeal): string {
  return JSON.stringify(CrmDeal$outboundSchema.parse(crmDeal));
}

export function crmDealFromJSON(
  jsonString: string,
): SafeParseResult<CrmDeal, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmDeal$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmDeal' from JSON`,
  );
}
