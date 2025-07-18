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
  AtsAddress,
  AtsAddress$inboundSchema,
  AtsAddress$Outbound,
  AtsAddress$outboundSchema,
} from "./atsaddress.js";
import {
  AtsCompensation,
  AtsCompensation$inboundSchema,
  AtsCompensation$Outbound,
  AtsCompensation$outboundSchema,
} from "./atscompensation.js";
import {
  AtsGroup,
  AtsGroup$inboundSchema,
  AtsGroup$Outbound,
  AtsGroup$outboundSchema,
} from "./atsgroup.js";
import {
  AtsJobOpening,
  AtsJobOpening$inboundSchema,
  AtsJobOpening$Outbound,
  AtsJobOpening$outboundSchema,
} from "./atsjobopening.js";
import {
  AtsJobPosting,
  AtsJobPosting$inboundSchema,
  AtsJobPosting$Outbound,
  AtsJobPosting$outboundSchema,
} from "./atsjobposting.js";
import {
  AtsJobQuestion,
  AtsJobQuestion$inboundSchema,
  AtsJobQuestion$Outbound,
  AtsJobQuestion$outboundSchema,
} from "./atsjobquestion.js";
import {
  AtsMetadata,
  AtsMetadata$inboundSchema,
  AtsMetadata$Outbound,
  AtsMetadata$outboundSchema,
} from "./atsmetadata.js";

export const EmploymentType = {
  FullTime: "FULL_TIME",
  PartTime: "PART_TIME",
  Contractor: "CONTRACTOR",
  Intern: "INTERN",
  Consultant: "CONSULTANT",
  Volunteer: "VOLUNTEER",
  Casual: "CASUAL",
  Seasonal: "SEASONAL",
  Freelance: "FREELANCE",
  Other: "OTHER",
} as const;
export type EmploymentType = OpenEnum<typeof EmploymentType>;

export const AtsJobStatus = {
  Archived: "ARCHIVED",
  Pending: "PENDING",
  Draft: "DRAFT",
  Open: "OPEN",
  Closed: "CLOSED",
} as const;
export type AtsJobStatus = OpenEnum<typeof AtsJobStatus>;

export type AtsJob = {
  addresses?: Array<AtsAddress> | undefined;
  closedAt?: Date | undefined;
  companyId?: string | undefined;
  compensation?: Array<AtsCompensation> | undefined;
  createdAt?: Date | undefined;
  /**
   * @deprecated Use `groups` instead
   */
  departments?: Array<string> | undefined;
  description?: string | undefined;
  employmentType?: EmploymentType | undefined;
  /**
   * The departments/divisions/teams that this job belongs to
   */
  groups?: Array<AtsGroup> | undefined;
  hiringManagerIds?: Array<string> | undefined;
  id?: string | undefined;
  languageLocale?: string | undefined;
  metadata?: Array<AtsMetadata> | undefined;
  name?: string | undefined;
  numberOfOpenings?: number | undefined;
  openings?: Array<AtsJobOpening> | undefined;
  /**
   * Public job postings
   */
  postings?: Array<AtsJobPosting> | undefined;
  /**
   * URLs for pages containing public listings for the job
   */
  publicJobUrls?: Array<string> | undefined;
  questions?: Array<AtsJobQuestion> | undefined;
  raw?: { [k: string]: any } | undefined;
  recruiterIds?: Array<string> | undefined;
  remote?: boolean | undefined;
  status?: AtsJobStatus | undefined;
  updatedAt?: Date | undefined;
};

/** @internal */
export const EmploymentType$inboundSchema: z.ZodType<
  EmploymentType,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(EmploymentType),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const EmploymentType$outboundSchema: z.ZodType<
  EmploymentType,
  z.ZodTypeDef,
  EmploymentType
> = z.union([
  z.nativeEnum(EmploymentType),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmploymentType$ {
  /** @deprecated use `EmploymentType$inboundSchema` instead. */
  export const inboundSchema = EmploymentType$inboundSchema;
  /** @deprecated use `EmploymentType$outboundSchema` instead. */
  export const outboundSchema = EmploymentType$outboundSchema;
}

/** @internal */
export const AtsJobStatus$inboundSchema: z.ZodType<
  AtsJobStatus,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(AtsJobStatus),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const AtsJobStatus$outboundSchema: z.ZodType<
  AtsJobStatus,
  z.ZodTypeDef,
  AtsJobStatus
> = z.union([
  z.nativeEnum(AtsJobStatus),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsJobStatus$ {
  /** @deprecated use `AtsJobStatus$inboundSchema` instead. */
  export const inboundSchema = AtsJobStatus$inboundSchema;
  /** @deprecated use `AtsJobStatus$outboundSchema` instead. */
  export const outboundSchema = AtsJobStatus$outboundSchema;
}

/** @internal */
export const AtsJob$inboundSchema: z.ZodType<AtsJob, z.ZodTypeDef, unknown> = z
  .object({
    addresses: z.array(AtsAddress$inboundSchema).optional(),
    closed_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
      .optional(),
    company_id: z.string().optional(),
    compensation: z.array(AtsCompensation$inboundSchema).optional(),
    created_at: z.string().datetime({ offset: true }).transform(v =>
      new Date(v)
    ).optional(),
    departments: z.array(z.string()).optional(),
    description: z.string().optional(),
    employment_type: EmploymentType$inboundSchema.optional(),
    groups: z.array(AtsGroup$inboundSchema).optional(),
    hiring_manager_ids: z.array(z.string()).optional(),
    id: z.string().optional(),
    language_locale: z.string().optional(),
    metadata: z.array(AtsMetadata$inboundSchema).optional(),
    name: z.string().optional(),
    number_of_openings: z.number().optional(),
    openings: z.array(AtsJobOpening$inboundSchema).optional(),
    postings: z.array(AtsJobPosting$inboundSchema).optional(),
    public_job_urls: z.array(z.string()).optional(),
    questions: z.array(AtsJobQuestion$inboundSchema).optional(),
    raw: z.record(z.any()).optional(),
    recruiter_ids: z.array(z.string()).optional(),
    remote: z.boolean().optional(),
    status: AtsJobStatus$inboundSchema.optional(),
    updated_at: z.string().datetime({ offset: true }).transform(v =>
      new Date(v)
    ).optional(),
  }).transform((v) => {
    return remap$(v, {
      "closed_at": "closedAt",
      "company_id": "companyId",
      "created_at": "createdAt",
      "employment_type": "employmentType",
      "hiring_manager_ids": "hiringManagerIds",
      "language_locale": "languageLocale",
      "number_of_openings": "numberOfOpenings",
      "public_job_urls": "publicJobUrls",
      "recruiter_ids": "recruiterIds",
      "updated_at": "updatedAt",
    });
  });

/** @internal */
export type AtsJob$Outbound = {
  addresses?: Array<AtsAddress$Outbound> | undefined;
  closed_at?: string | undefined;
  company_id?: string | undefined;
  compensation?: Array<AtsCompensation$Outbound> | undefined;
  created_at?: string | undefined;
  departments?: Array<string> | undefined;
  description?: string | undefined;
  employment_type?: string | undefined;
  groups?: Array<AtsGroup$Outbound> | undefined;
  hiring_manager_ids?: Array<string> | undefined;
  id?: string | undefined;
  language_locale?: string | undefined;
  metadata?: Array<AtsMetadata$Outbound> | undefined;
  name?: string | undefined;
  number_of_openings?: number | undefined;
  openings?: Array<AtsJobOpening$Outbound> | undefined;
  postings?: Array<AtsJobPosting$Outbound> | undefined;
  public_job_urls?: Array<string> | undefined;
  questions?: Array<AtsJobQuestion$Outbound> | undefined;
  raw?: { [k: string]: any } | undefined;
  recruiter_ids?: Array<string> | undefined;
  remote?: boolean | undefined;
  status?: string | undefined;
  updated_at?: string | undefined;
};

/** @internal */
export const AtsJob$outboundSchema: z.ZodType<
  AtsJob$Outbound,
  z.ZodTypeDef,
  AtsJob
> = z.object({
  addresses: z.array(AtsAddress$outboundSchema).optional(),
  closedAt: z.date().transform(v => v.toISOString()).optional(),
  companyId: z.string().optional(),
  compensation: z.array(AtsCompensation$outboundSchema).optional(),
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  departments: z.array(z.string()).optional(),
  description: z.string().optional(),
  employmentType: EmploymentType$outboundSchema.optional(),
  groups: z.array(AtsGroup$outboundSchema).optional(),
  hiringManagerIds: z.array(z.string()).optional(),
  id: z.string().optional(),
  languageLocale: z.string().optional(),
  metadata: z.array(AtsMetadata$outboundSchema).optional(),
  name: z.string().optional(),
  numberOfOpenings: z.number().optional(),
  openings: z.array(AtsJobOpening$outboundSchema).optional(),
  postings: z.array(AtsJobPosting$outboundSchema).optional(),
  publicJobUrls: z.array(z.string()).optional(),
  questions: z.array(AtsJobQuestion$outboundSchema).optional(),
  raw: z.record(z.any()).optional(),
  recruiterIds: z.array(z.string()).optional(),
  remote: z.boolean().optional(),
  status: AtsJobStatus$outboundSchema.optional(),
  updatedAt: z.date().transform(v => v.toISOString()).optional(),
}).transform((v) => {
  return remap$(v, {
    closedAt: "closed_at",
    companyId: "company_id",
    createdAt: "created_at",
    employmentType: "employment_type",
    hiringManagerIds: "hiring_manager_ids",
    languageLocale: "language_locale",
    numberOfOpenings: "number_of_openings",
    publicJobUrls: "public_job_urls",
    recruiterIds: "recruiter_ids",
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsJob$ {
  /** @deprecated use `AtsJob$inboundSchema` instead. */
  export const inboundSchema = AtsJob$inboundSchema;
  /** @deprecated use `AtsJob$outboundSchema` instead. */
  export const outboundSchema = AtsJob$outboundSchema;
  /** @deprecated use `AtsJob$Outbound` instead. */
  export type Outbound = AtsJob$Outbound;
}

export function atsJobToJSON(atsJob: AtsJob): string {
  return JSON.stringify(AtsJob$outboundSchema.parse(atsJob));
}

export function atsJobFromJSON(
  jsonString: string,
): SafeParseResult<AtsJob, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AtsJob$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsJob' from JSON`,
  );
}
