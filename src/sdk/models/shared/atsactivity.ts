/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AtsEmail,
  AtsEmail$inboundSchema,
  AtsEmail$Outbound,
  AtsEmail$outboundSchema,
} from "./atsemail.js";
import {
  PropertyAtsActivityFrom,
  PropertyAtsActivityFrom$inboundSchema,
  PropertyAtsActivityFrom$Outbound,
  PropertyAtsActivityFrom$outboundSchema,
} from "./propertyatsactivityfrom.js";

export type AtsActivityRaw = {};

export const AtsActivityType = {
  Note: "NOTE",
  Task: "TASK",
  Email: "EMAIL",
} as const;
export type AtsActivityType = ClosedEnum<typeof AtsActivityType>;

export type AtsActivity = {
  applicationId?: string | undefined;
  bcc?: Array<AtsEmail> | undefined;
  candidateId?: string | undefined;
  cc?: Array<AtsEmail> | undefined;
  createdAt?: Date | undefined;
  description?: string | undefined;
  documentId?: string | undefined;
  /**
   * IDs for AtsDocument.get
   */
  documentIds?: Array<string> | undefined;
  from?: PropertyAtsActivityFrom | undefined;
  id?: string | undefined;
  interviewId?: string | undefined;
  isPrivate?: boolean | undefined;
  jobId?: string | undefined;
  raw?: AtsActivityRaw | undefined;
  subType?: string | undefined;
  title?: string | undefined;
  to?: Array<AtsEmail> | undefined;
  type?: AtsActivityType | undefined;
  updatedAt?: Date | undefined;
  /**
   * id values of the recruiters associated with the activity.
   */
  userIds?: Array<string> | undefined;
};

/** @internal */
export const AtsActivityRaw$inboundSchema: z.ZodType<
  AtsActivityRaw,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type AtsActivityRaw$Outbound = {};

/** @internal */
export const AtsActivityRaw$outboundSchema: z.ZodType<
  AtsActivityRaw$Outbound,
  z.ZodTypeDef,
  AtsActivityRaw
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsActivityRaw$ {
  /** @deprecated use `AtsActivityRaw$inboundSchema` instead. */
  export const inboundSchema = AtsActivityRaw$inboundSchema;
  /** @deprecated use `AtsActivityRaw$outboundSchema` instead. */
  export const outboundSchema = AtsActivityRaw$outboundSchema;
  /** @deprecated use `AtsActivityRaw$Outbound` instead. */
  export type Outbound = AtsActivityRaw$Outbound;
}

export function atsActivityRawToJSON(atsActivityRaw: AtsActivityRaw): string {
  return JSON.stringify(AtsActivityRaw$outboundSchema.parse(atsActivityRaw));
}

export function atsActivityRawFromJSON(
  jsonString: string,
): SafeParseResult<AtsActivityRaw, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AtsActivityRaw$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsActivityRaw' from JSON`,
  );
}

/** @internal */
export const AtsActivityType$inboundSchema: z.ZodNativeEnum<
  typeof AtsActivityType
> = z.nativeEnum(AtsActivityType);

/** @internal */
export const AtsActivityType$outboundSchema: z.ZodNativeEnum<
  typeof AtsActivityType
> = AtsActivityType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsActivityType$ {
  /** @deprecated use `AtsActivityType$inboundSchema` instead. */
  export const inboundSchema = AtsActivityType$inboundSchema;
  /** @deprecated use `AtsActivityType$outboundSchema` instead. */
  export const outboundSchema = AtsActivityType$outboundSchema;
}

/** @internal */
export const AtsActivity$inboundSchema: z.ZodType<
  AtsActivity,
  z.ZodTypeDef,
  unknown
> = z.object({
  application_id: z.string().optional(),
  bcc: z.array(AtsEmail$inboundSchema).optional(),
  candidate_id: z.string().optional(),
  cc: z.array(AtsEmail$inboundSchema).optional(),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  description: z.string().optional(),
  document_id: z.string().optional(),
  document_ids: z.array(z.string()).optional(),
  from: PropertyAtsActivityFrom$inboundSchema.optional(),
  id: z.string().optional(),
  interview_id: z.string().optional(),
  is_private: z.boolean().optional(),
  job_id: z.string().optional(),
  raw: z.lazy(() => AtsActivityRaw$inboundSchema).optional(),
  sub_type: z.string().optional(),
  title: z.string().optional(),
  to: z.array(AtsEmail$inboundSchema).optional(),
  type: AtsActivityType$inboundSchema.optional(),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  user_ids: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "application_id": "applicationId",
    "candidate_id": "candidateId",
    "created_at": "createdAt",
    "document_id": "documentId",
    "document_ids": "documentIds",
    "interview_id": "interviewId",
    "is_private": "isPrivate",
    "job_id": "jobId",
    "sub_type": "subType",
    "updated_at": "updatedAt",
    "user_ids": "userIds",
  });
});

/** @internal */
export type AtsActivity$Outbound = {
  application_id?: string | undefined;
  bcc?: Array<AtsEmail$Outbound> | undefined;
  candidate_id?: string | undefined;
  cc?: Array<AtsEmail$Outbound> | undefined;
  created_at?: string | undefined;
  description?: string | undefined;
  document_id?: string | undefined;
  document_ids?: Array<string> | undefined;
  from?: PropertyAtsActivityFrom$Outbound | undefined;
  id?: string | undefined;
  interview_id?: string | undefined;
  is_private?: boolean | undefined;
  job_id?: string | undefined;
  raw?: AtsActivityRaw$Outbound | undefined;
  sub_type?: string | undefined;
  title?: string | undefined;
  to?: Array<AtsEmail$Outbound> | undefined;
  type?: string | undefined;
  updated_at?: string | undefined;
  user_ids?: Array<string> | undefined;
};

/** @internal */
export const AtsActivity$outboundSchema: z.ZodType<
  AtsActivity$Outbound,
  z.ZodTypeDef,
  AtsActivity
> = z.object({
  applicationId: z.string().optional(),
  bcc: z.array(AtsEmail$outboundSchema).optional(),
  candidateId: z.string().optional(),
  cc: z.array(AtsEmail$outboundSchema).optional(),
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  description: z.string().optional(),
  documentId: z.string().optional(),
  documentIds: z.array(z.string()).optional(),
  from: PropertyAtsActivityFrom$outboundSchema.optional(),
  id: z.string().optional(),
  interviewId: z.string().optional(),
  isPrivate: z.boolean().optional(),
  jobId: z.string().optional(),
  raw: z.lazy(() => AtsActivityRaw$outboundSchema).optional(),
  subType: z.string().optional(),
  title: z.string().optional(),
  to: z.array(AtsEmail$outboundSchema).optional(),
  type: AtsActivityType$outboundSchema.optional(),
  updatedAt: z.date().transform(v => v.toISOString()).optional(),
  userIds: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    applicationId: "application_id",
    candidateId: "candidate_id",
    createdAt: "created_at",
    documentId: "document_id",
    documentIds: "document_ids",
    interviewId: "interview_id",
    isPrivate: "is_private",
    jobId: "job_id",
    subType: "sub_type",
    updatedAt: "updated_at",
    userIds: "user_ids",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsActivity$ {
  /** @deprecated use `AtsActivity$inboundSchema` instead. */
  export const inboundSchema = AtsActivity$inboundSchema;
  /** @deprecated use `AtsActivity$outboundSchema` instead. */
  export const outboundSchema = AtsActivity$outboundSchema;
  /** @deprecated use `AtsActivity$Outbound` instead. */
  export type Outbound = AtsActivity$Outbound;
}

export function atsActivityToJSON(atsActivity: AtsActivity): string {
  return JSON.stringify(AtsActivity$outboundSchema.parse(atsActivity));
}

export function atsActivityFromJSON(
  jsonString: string,
): SafeParseResult<AtsActivity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AtsActivity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsActivity' from JSON`,
  );
}
