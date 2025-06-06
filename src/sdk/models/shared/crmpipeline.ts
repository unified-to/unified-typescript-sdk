/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CrmStage,
  CrmStage$inboundSchema,
  CrmStage$Outbound,
  CrmStage$outboundSchema,
} from "./crmstage.js";

export type CrmPipeline = {
  createdAt?: Date | undefined;
  dealProbability?: number | undefined;
  displayOrder?: number | undefined;
  id?: string | undefined;
  isActive?: boolean | undefined;
  name?: string | undefined;
  raw?: { [k: string]: any } | undefined;
  stages?: Array<CrmStage> | undefined;
  updatedAt?: Date | undefined;
};

/** @internal */
export const CrmPipeline$inboundSchema: z.ZodType<
  CrmPipeline,
  z.ZodTypeDef,
  unknown
> = z.object({
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  deal_probability: z.number().optional(),
  display_order: z.number().optional(),
  id: z.string().optional(),
  is_active: z.boolean().optional(),
  name: z.string().optional(),
  raw: z.record(z.any()).optional(),
  stages: z.array(CrmStage$inboundSchema).optional(),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "deal_probability": "dealProbability",
    "display_order": "displayOrder",
    "is_active": "isActive",
    "updated_at": "updatedAt",
  });
});

/** @internal */
export type CrmPipeline$Outbound = {
  created_at?: string | undefined;
  deal_probability?: number | undefined;
  display_order?: number | undefined;
  id?: string | undefined;
  is_active?: boolean | undefined;
  name?: string | undefined;
  raw?: { [k: string]: any } | undefined;
  stages?: Array<CrmStage$Outbound> | undefined;
  updated_at?: string | undefined;
};

/** @internal */
export const CrmPipeline$outboundSchema: z.ZodType<
  CrmPipeline$Outbound,
  z.ZodTypeDef,
  CrmPipeline
> = z.object({
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  dealProbability: z.number().optional(),
  displayOrder: z.number().optional(),
  id: z.string().optional(),
  isActive: z.boolean().optional(),
  name: z.string().optional(),
  raw: z.record(z.any()).optional(),
  stages: z.array(CrmStage$outboundSchema).optional(),
  updatedAt: z.date().transform(v => v.toISOString()).optional(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    dealProbability: "deal_probability",
    displayOrder: "display_order",
    isActive: "is_active",
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmPipeline$ {
  /** @deprecated use `CrmPipeline$inboundSchema` instead. */
  export const inboundSchema = CrmPipeline$inboundSchema;
  /** @deprecated use `CrmPipeline$outboundSchema` instead. */
  export const outboundSchema = CrmPipeline$outboundSchema;
  /** @deprecated use `CrmPipeline$Outbound` instead. */
  export type Outbound = CrmPipeline$Outbound;
}

export function crmPipelineToJSON(crmPipeline: CrmPipeline): string {
  return JSON.stringify(CrmPipeline$outboundSchema.parse(crmPipeline));
}

export function crmPipelineFromJSON(
  jsonString: string,
): SafeParseResult<CrmPipeline, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmPipeline$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmPipeline' from JSON`,
  );
}
