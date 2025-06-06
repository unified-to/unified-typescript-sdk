/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  HrisCompensation,
  HrisCompensation$inboundSchema,
  HrisCompensation$Outbound,
  HrisCompensation$outboundSchema,
} from "./hriscompensation.js";

export type HrisTimeshift = {
  approvedAt?: Date | undefined;
  approverUserId?: string | undefined;
  companyId?: string | undefined;
  compensation?: Array<HrisCompensation> | undefined;
  createdAt?: Date | undefined;
  employeeUserId?: string | undefined;
  endAt?: Date | undefined;
  groupId?: string | undefined;
  hours?: number | undefined;
  id?: string | undefined;
  isApproved?: boolean | undefined;
  locationId?: string | undefined;
  raw?: { [k: string]: any } | undefined;
  startAt?: Date | undefined;
  updatedAt?: Date | undefined;
};

/** @internal */
export const HrisTimeshift$inboundSchema: z.ZodType<
  HrisTimeshift,
  z.ZodTypeDef,
  unknown
> = z.object({
  approved_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  approver_user_id: z.string().optional(),
  company_id: z.string().optional(),
  compensation: z.array(HrisCompensation$inboundSchema).optional(),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  employee_user_id: z.string().optional(),
  end_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  group_id: z.string().optional(),
  hours: z.number().optional(),
  id: z.string().optional(),
  is_approved: z.boolean().optional(),
  location_id: z.string().optional(),
  raw: z.record(z.any()).optional(),
  start_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "approved_at": "approvedAt",
    "approver_user_id": "approverUserId",
    "company_id": "companyId",
    "created_at": "createdAt",
    "employee_user_id": "employeeUserId",
    "end_at": "endAt",
    "group_id": "groupId",
    "is_approved": "isApproved",
    "location_id": "locationId",
    "start_at": "startAt",
    "updated_at": "updatedAt",
  });
});

/** @internal */
export type HrisTimeshift$Outbound = {
  approved_at?: string | undefined;
  approver_user_id?: string | undefined;
  company_id?: string | undefined;
  compensation?: Array<HrisCompensation$Outbound> | undefined;
  created_at?: string | undefined;
  employee_user_id?: string | undefined;
  end_at?: string | undefined;
  group_id?: string | undefined;
  hours?: number | undefined;
  id?: string | undefined;
  is_approved?: boolean | undefined;
  location_id?: string | undefined;
  raw?: { [k: string]: any } | undefined;
  start_at?: string | undefined;
  updated_at?: string | undefined;
};

/** @internal */
export const HrisTimeshift$outboundSchema: z.ZodType<
  HrisTimeshift$Outbound,
  z.ZodTypeDef,
  HrisTimeshift
> = z.object({
  approvedAt: z.date().transform(v => v.toISOString()).optional(),
  approverUserId: z.string().optional(),
  companyId: z.string().optional(),
  compensation: z.array(HrisCompensation$outboundSchema).optional(),
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  employeeUserId: z.string().optional(),
  endAt: z.date().transform(v => v.toISOString()).optional(),
  groupId: z.string().optional(),
  hours: z.number().optional(),
  id: z.string().optional(),
  isApproved: z.boolean().optional(),
  locationId: z.string().optional(),
  raw: z.record(z.any()).optional(),
  startAt: z.date().transform(v => v.toISOString()).optional(),
  updatedAt: z.date().transform(v => v.toISOString()).optional(),
}).transform((v) => {
  return remap$(v, {
    approvedAt: "approved_at",
    approverUserId: "approver_user_id",
    companyId: "company_id",
    createdAt: "created_at",
    employeeUserId: "employee_user_id",
    endAt: "end_at",
    groupId: "group_id",
    isApproved: "is_approved",
    locationId: "location_id",
    startAt: "start_at",
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisTimeshift$ {
  /** @deprecated use `HrisTimeshift$inboundSchema` instead. */
  export const inboundSchema = HrisTimeshift$inboundSchema;
  /** @deprecated use `HrisTimeshift$outboundSchema` instead. */
  export const outboundSchema = HrisTimeshift$outboundSchema;
  /** @deprecated use `HrisTimeshift$Outbound` instead. */
  export type Outbound = HrisTimeshift$Outbound;
}

export function hrisTimeshiftToJSON(hrisTimeshift: HrisTimeshift): string {
  return JSON.stringify(HrisTimeshift$outboundSchema.parse(hrisTimeshift));
}

export function hrisTimeshiftFromJSON(
  jsonString: string,
): SafeParseResult<HrisTimeshift, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisTimeshift$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisTimeshift' from JSON`,
  );
}
