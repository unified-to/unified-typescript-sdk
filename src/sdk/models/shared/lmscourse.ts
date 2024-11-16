/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  LmsMedia,
  LmsMedia$inboundSchema,
  LmsMedia$Outbound,
  LmsMedia$outboundSchema,
} from "./lmsmedia.js";

export type LmsCourse = {
  categories?: Array<string> | undefined;
  createdAt?: Date | undefined;
  currency?: string | undefined;
  description?: string | undefined;
  id?: string | undefined;
  instructorIds?: Array<string> | undefined;
  isActive?: boolean | undefined;
  isPrivate?: boolean | undefined;
  languages?: Array<string> | undefined;
  media?: Array<LmsMedia> | undefined;
  name: string;
  priceAmount?: number | undefined;
  raw?: { [k: string]: any } | undefined;
  studentIds?: Array<string> | undefined;
  updatedAt?: Date | undefined;
};

/** @internal */
export const LmsCourse$inboundSchema: z.ZodType<
  LmsCourse,
  z.ZodTypeDef,
  unknown
> = z.object({
  categories: z.array(z.string()).optional(),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  currency: z.string().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
  instructor_ids: z.array(z.string()).optional(),
  is_active: z.boolean().optional(),
  is_private: z.boolean().optional(),
  languages: z.array(z.string()).optional(),
  media: z.array(LmsMedia$inboundSchema).optional(),
  name: z.string(),
  price_amount: z.number().optional(),
  raw: z.record(z.any()).optional(),
  student_ids: z.array(z.string()).optional(),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "instructor_ids": "instructorIds",
    "is_active": "isActive",
    "is_private": "isPrivate",
    "price_amount": "priceAmount",
    "student_ids": "studentIds",
    "updated_at": "updatedAt",
  });
});

/** @internal */
export type LmsCourse$Outbound = {
  categories?: Array<string> | undefined;
  created_at?: string | undefined;
  currency?: string | undefined;
  description?: string | undefined;
  id?: string | undefined;
  instructor_ids?: Array<string> | undefined;
  is_active?: boolean | undefined;
  is_private?: boolean | undefined;
  languages?: Array<string> | undefined;
  media?: Array<LmsMedia$Outbound> | undefined;
  name: string;
  price_amount?: number | undefined;
  raw?: { [k: string]: any } | undefined;
  student_ids?: Array<string> | undefined;
  updated_at?: string | undefined;
};

/** @internal */
export const LmsCourse$outboundSchema: z.ZodType<
  LmsCourse$Outbound,
  z.ZodTypeDef,
  LmsCourse
> = z.object({
  categories: z.array(z.string()).optional(),
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  currency: z.string().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
  instructorIds: z.array(z.string()).optional(),
  isActive: z.boolean().optional(),
  isPrivate: z.boolean().optional(),
  languages: z.array(z.string()).optional(),
  media: z.array(LmsMedia$outboundSchema).optional(),
  name: z.string(),
  priceAmount: z.number().optional(),
  raw: z.record(z.any()).optional(),
  studentIds: z.array(z.string()).optional(),
  updatedAt: z.date().transform(v => v.toISOString()).optional(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    instructorIds: "instructor_ids",
    isActive: "is_active",
    isPrivate: "is_private",
    priceAmount: "price_amount",
    studentIds: "student_ids",
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LmsCourse$ {
  /** @deprecated use `LmsCourse$inboundSchema` instead. */
  export const inboundSchema = LmsCourse$inboundSchema;
  /** @deprecated use `LmsCourse$outboundSchema` instead. */
  export const outboundSchema = LmsCourse$outboundSchema;
  /** @deprecated use `LmsCourse$Outbound` instead. */
  export type Outbound = LmsCourse$Outbound;
}

export function lmsCourseToJSON(lmsCourse: LmsCourse): string {
  return JSON.stringify(LmsCourse$outboundSchema.parse(lmsCourse));
}

export function lmsCourseFromJSON(
  jsonString: string,
): SafeParseResult<LmsCourse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LmsCourse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LmsCourse' from JSON`,
  );
}
