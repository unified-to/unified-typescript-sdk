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
  EnrichEmail,
  EnrichEmail$inboundSchema,
  EnrichEmail$Outbound,
  EnrichEmail$outboundSchema,
} from "./enrichemail.js";
import {
  EnrichPersonWorkHistory,
  EnrichPersonWorkHistory$inboundSchema,
  EnrichPersonWorkHistory$Outbound,
  EnrichPersonWorkHistory$outboundSchema,
} from "./enrichpersonworkhistory.js";
import {
  EnrichTelephone,
  EnrichTelephone$inboundSchema,
  EnrichTelephone$Outbound,
  EnrichTelephone$outboundSchema,
} from "./enrichtelephone.js";
import {
  PropertyEnrichPersonAddress,
  PropertyEnrichPersonAddress$inboundSchema,
  PropertyEnrichPersonAddress$Outbound,
  PropertyEnrichPersonAddress$outboundSchema,
} from "./propertyenrichpersonaddress.js";

export const Gender = {
  Male: "MALE",
  Female: "FEMALE",
} as const;
export type Gender = OpenEnum<typeof Gender>;

/**
 * A person object from an enrichment integration
 */
export type EnrichPerson = {
  /**
   * The address of the person
   */
  address?: PropertyEnrichPersonAddress | undefined;
  bio?: string | undefined;
  birthdate?: string | undefined;
  company?: string | undefined;
  companyDomain?: string | undefined;
  createdAt?: Date | undefined;
  /**
   * An array of email addresses for this person
   */
  emails?: Array<EnrichEmail> | undefined;
  facebookUrl?: string | undefined;
  gender?: Gender | undefined;
  githubUrl?: string | undefined;
  githubUsername?: string | undefined;
  id?: string | undefined;
  imageUrl?: string | undefined;
  linkedinUrl?: string | undefined;
  name?: string | undefined;
  /**
   * The raw data returned by the integration for this person
   */
  raw?: { [k: string]: any } | undefined;
  /**
   * An array of telephones for this person
   */
  telephones?: Array<EnrichTelephone> | undefined;
  timezone?: string | undefined;
  title?: string | undefined;
  twitterHandle?: string | undefined;
  twitterUrl?: string | undefined;
  updatedAt?: Date | undefined;
  utcOffset?: number | undefined;
  workHistories?: Array<EnrichPersonWorkHistory> | undefined;
};

/** @internal */
export const Gender$inboundSchema: z.ZodType<Gender, z.ZodTypeDef, unknown> = z
  .union([
    z.nativeEnum(Gender),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const Gender$outboundSchema: z.ZodType<Gender, z.ZodTypeDef, Gender> = z
  .union([
    z.nativeEnum(Gender),
    z.string().and(z.custom<Unrecognized<string>>()),
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Gender$ {
  /** @deprecated use `Gender$inboundSchema` instead. */
  export const inboundSchema = Gender$inboundSchema;
  /** @deprecated use `Gender$outboundSchema` instead. */
  export const outboundSchema = Gender$outboundSchema;
}

/** @internal */
export const EnrichPerson$inboundSchema: z.ZodType<
  EnrichPerson,
  z.ZodTypeDef,
  unknown
> = z.object({
  address: PropertyEnrichPersonAddress$inboundSchema.optional(),
  bio: z.string().optional(),
  birthdate: z.string().optional(),
  company: z.string().optional(),
  company_domain: z.string().optional(),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  emails: z.array(EnrichEmail$inboundSchema).optional(),
  facebook_url: z.string().optional(),
  gender: Gender$inboundSchema.optional(),
  github_url: z.string().optional(),
  github_username: z.string().optional(),
  id: z.string().optional(),
  image_url: z.string().optional(),
  linkedin_url: z.string().optional(),
  name: z.string().optional(),
  raw: z.record(z.any()).optional(),
  telephones: z.array(EnrichTelephone$inboundSchema).optional(),
  timezone: z.string().optional(),
  title: z.string().optional(),
  twitter_handle: z.string().optional(),
  twitter_url: z.string().optional(),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  utc_offset: z.number().optional(),
  work_histories: z.array(EnrichPersonWorkHistory$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "company_domain": "companyDomain",
    "created_at": "createdAt",
    "facebook_url": "facebookUrl",
    "github_url": "githubUrl",
    "github_username": "githubUsername",
    "image_url": "imageUrl",
    "linkedin_url": "linkedinUrl",
    "twitter_handle": "twitterHandle",
    "twitter_url": "twitterUrl",
    "updated_at": "updatedAt",
    "utc_offset": "utcOffset",
    "work_histories": "workHistories",
  });
});

/** @internal */
export type EnrichPerson$Outbound = {
  address?: PropertyEnrichPersonAddress$Outbound | undefined;
  bio?: string | undefined;
  birthdate?: string | undefined;
  company?: string | undefined;
  company_domain?: string | undefined;
  created_at?: string | undefined;
  emails?: Array<EnrichEmail$Outbound> | undefined;
  facebook_url?: string | undefined;
  gender?: string | undefined;
  github_url?: string | undefined;
  github_username?: string | undefined;
  id?: string | undefined;
  image_url?: string | undefined;
  linkedin_url?: string | undefined;
  name?: string | undefined;
  raw?: { [k: string]: any } | undefined;
  telephones?: Array<EnrichTelephone$Outbound> | undefined;
  timezone?: string | undefined;
  title?: string | undefined;
  twitter_handle?: string | undefined;
  twitter_url?: string | undefined;
  updated_at?: string | undefined;
  utc_offset?: number | undefined;
  work_histories?: Array<EnrichPersonWorkHistory$Outbound> | undefined;
};

/** @internal */
export const EnrichPerson$outboundSchema: z.ZodType<
  EnrichPerson$Outbound,
  z.ZodTypeDef,
  EnrichPerson
> = z.object({
  address: PropertyEnrichPersonAddress$outboundSchema.optional(),
  bio: z.string().optional(),
  birthdate: z.string().optional(),
  company: z.string().optional(),
  companyDomain: z.string().optional(),
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  emails: z.array(EnrichEmail$outboundSchema).optional(),
  facebookUrl: z.string().optional(),
  gender: Gender$outboundSchema.optional(),
  githubUrl: z.string().optional(),
  githubUsername: z.string().optional(),
  id: z.string().optional(),
  imageUrl: z.string().optional(),
  linkedinUrl: z.string().optional(),
  name: z.string().optional(),
  raw: z.record(z.any()).optional(),
  telephones: z.array(EnrichTelephone$outboundSchema).optional(),
  timezone: z.string().optional(),
  title: z.string().optional(),
  twitterHandle: z.string().optional(),
  twitterUrl: z.string().optional(),
  updatedAt: z.date().transform(v => v.toISOString()).optional(),
  utcOffset: z.number().optional(),
  workHistories: z.array(EnrichPersonWorkHistory$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    companyDomain: "company_domain",
    createdAt: "created_at",
    facebookUrl: "facebook_url",
    githubUrl: "github_url",
    githubUsername: "github_username",
    imageUrl: "image_url",
    linkedinUrl: "linkedin_url",
    twitterHandle: "twitter_handle",
    twitterUrl: "twitter_url",
    updatedAt: "updated_at",
    utcOffset: "utc_offset",
    workHistories: "work_histories",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EnrichPerson$ {
  /** @deprecated use `EnrichPerson$inboundSchema` instead. */
  export const inboundSchema = EnrichPerson$inboundSchema;
  /** @deprecated use `EnrichPerson$outboundSchema` instead. */
  export const outboundSchema = EnrichPerson$outboundSchema;
  /** @deprecated use `EnrichPerson$Outbound` instead. */
  export type Outbound = EnrichPerson$Outbound;
}

export function enrichPersonToJSON(enrichPerson: EnrichPerson): string {
  return JSON.stringify(EnrichPerson$outboundSchema.parse(enrichPerson));
}

export function enrichPersonFromJSON(
  jsonString: string,
): SafeParseResult<EnrichPerson, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EnrichPerson$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EnrichPerson' from JSON`,
  );
}
