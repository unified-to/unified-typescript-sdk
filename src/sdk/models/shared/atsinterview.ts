/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const AtsInterviewStatus = {
  Scheduled: "SCHEDULED",
  AwaitingFeedback: "AWAITING_FEEDBACK",
  Complete: "COMPLETE",
  Canceled: "CANCELED",
  NeedsScheduling: "NEEDS_SCHEDULING",
} as const;
export type AtsInterviewStatus = ClosedEnum<typeof AtsInterviewStatus>;

export type AtsInterview = {
  applicationId?: string | undefined;
  candidateId?: string | undefined;
  createdAt?: Date | undefined;
  endAt?: Date | undefined;
  externalEventXref?: string | undefined;
  id?: string | undefined;
  jobId?: string | undefined;
  location?: string | undefined;
  raw?: { [k: string]: any } | undefined;
  startAt?: Date | undefined;
  status?: AtsInterviewStatus | undefined;
  updatedAt?: Date | undefined;
  userIds?: Array<string> | undefined;
};

/** @internal */
export const AtsInterviewStatus$inboundSchema: z.ZodNativeEnum<
  typeof AtsInterviewStatus
> = z.nativeEnum(AtsInterviewStatus);

/** @internal */
export const AtsInterviewStatus$outboundSchema: z.ZodNativeEnum<
  typeof AtsInterviewStatus
> = AtsInterviewStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsInterviewStatus$ {
  /** @deprecated use `AtsInterviewStatus$inboundSchema` instead. */
  export const inboundSchema = AtsInterviewStatus$inboundSchema;
  /** @deprecated use `AtsInterviewStatus$outboundSchema` instead. */
  export const outboundSchema = AtsInterviewStatus$outboundSchema;
}

/** @internal */
export const AtsInterview$inboundSchema: z.ZodType<
  AtsInterview,
  z.ZodTypeDef,
  unknown
> = z.object({
  application_id: z.string().optional(),
  candidate_id: z.string().optional(),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  end_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  external_event_xref: z.string().optional(),
  id: z.string().optional(),
  job_id: z.string().optional(),
  location: z.string().optional(),
  raw: z.record(z.any()).optional(),
  start_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  status: AtsInterviewStatus$inboundSchema.optional(),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  user_ids: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "application_id": "applicationId",
    "candidate_id": "candidateId",
    "created_at": "createdAt",
    "end_at": "endAt",
    "external_event_xref": "externalEventXref",
    "job_id": "jobId",
    "start_at": "startAt",
    "updated_at": "updatedAt",
    "user_ids": "userIds",
  });
});

/** @internal */
export type AtsInterview$Outbound = {
  application_id?: string | undefined;
  candidate_id?: string | undefined;
  created_at?: string | undefined;
  end_at?: string | undefined;
  external_event_xref?: string | undefined;
  id?: string | undefined;
  job_id?: string | undefined;
  location?: string | undefined;
  raw?: { [k: string]: any } | undefined;
  start_at?: string | undefined;
  status?: string | undefined;
  updated_at?: string | undefined;
  user_ids?: Array<string> | undefined;
};

/** @internal */
export const AtsInterview$outboundSchema: z.ZodType<
  AtsInterview$Outbound,
  z.ZodTypeDef,
  AtsInterview
> = z.object({
  applicationId: z.string().optional(),
  candidateId: z.string().optional(),
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  endAt: z.date().transform(v => v.toISOString()).optional(),
  externalEventXref: z.string().optional(),
  id: z.string().optional(),
  jobId: z.string().optional(),
  location: z.string().optional(),
  raw: z.record(z.any()).optional(),
  startAt: z.date().transform(v => v.toISOString()).optional(),
  status: AtsInterviewStatus$outboundSchema.optional(),
  updatedAt: z.date().transform(v => v.toISOString()).optional(),
  userIds: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    applicationId: "application_id",
    candidateId: "candidate_id",
    createdAt: "created_at",
    endAt: "end_at",
    externalEventXref: "external_event_xref",
    jobId: "job_id",
    startAt: "start_at",
    updatedAt: "updated_at",
    userIds: "user_ids",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsInterview$ {
  /** @deprecated use `AtsInterview$inboundSchema` instead. */
  export const inboundSchema = AtsInterview$inboundSchema;
  /** @deprecated use `AtsInterview$outboundSchema` instead. */
  export const outboundSchema = AtsInterview$outboundSchema;
  /** @deprecated use `AtsInterview$Outbound` instead. */
  export type Outbound = AtsInterview$Outbound;
}

export function atsInterviewToJSON(atsInterview: AtsInterview): string {
  return JSON.stringify(AtsInterview$outboundSchema.parse(atsInterview));
}

export function atsInterviewFromJSON(
  jsonString: string,
): SafeParseResult<AtsInterview, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AtsInterview$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsInterview' from JSON`,
  );
}
