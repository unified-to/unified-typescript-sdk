/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import {
  EnrichTelephone,
  EnrichTelephone$inboundSchema,
  EnrichTelephone$Outbound,
  EnrichTelephone$outboundSchema,
} from "./enrichtelephone.js";
import {
  PropertyEnrichCompanyAddress,
  PropertyEnrichCompanyAddress$inboundSchema,
  PropertyEnrichCompanyAddress$Outbound,
  PropertyEnrichCompanyAddress$outboundSchema,
} from "./propertyenrichcompanyaddress.js";

/**
 * A company object from an enrichment integration
 */
export type EnrichCompany = {
  /**
   * The address of the company
   */
  address?: PropertyEnrichCompanyAddress | undefined;
  alexaRank?: number | undefined;
  createdAt?: Date | undefined;
  crunchbaseUrl?: string | undefined;
  description?: string | undefined;
  domain?: string | undefined;
  employees?: string | undefined;
  exchange?: string | undefined;
  facebookUrl?: string | undefined;
  id?: string | undefined;
  industry?: string | undefined;
  instagramUrl?: string | undefined;
  linkedinUrl?: string | undefined;
  logoUrl?: string | undefined;
  naicsCode?: number | undefined;
  name?: string | undefined;
  /**
   * The raw data returned by the integration for this company
   */
  raw?: { [k: string]: any } | undefined;
  revenue?: string | undefined;
  sicCode?: number | undefined;
  stock?: string | undefined;
  /**
   * An array of telephones for this company
   */
  telephones?: Array<EnrichTelephone> | undefined;
  twitterHandle?: string | undefined;
  twitterUrl?: string | undefined;
  updatedAt?: Date | undefined;
  yearFounded?: number | undefined;
  yelpUrl?: string | undefined;
  youtubeUrl?: string | undefined;
};

/** @internal */
export const EnrichCompany$inboundSchema: z.ZodType<
  EnrichCompany,
  z.ZodTypeDef,
  unknown
> = z.object({
  address: PropertyEnrichCompanyAddress$inboundSchema.optional(),
  alexa_rank: z.number().optional(),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  crunchbase_url: z.string().optional(),
  description: z.string().optional(),
  domain: z.string().optional(),
  employees: z.string().optional(),
  exchange: z.string().optional(),
  facebook_url: z.string().optional(),
  id: z.string().optional(),
  industry: z.string().optional(),
  instagram_url: z.string().optional(),
  linkedin_url: z.string().optional(),
  logo_url: z.string().optional(),
  naics_code: z.number().optional(),
  name: z.string().optional(),
  raw: z.record(z.any()).optional(),
  revenue: z.string().optional(),
  sic_code: z.number().optional(),
  stock: z.string().optional(),
  telephones: z.array(EnrichTelephone$inboundSchema).optional(),
  twitter_handle: z.string().optional(),
  twitter_url: z.string().optional(),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  year_founded: z.number().optional(),
  yelp_url: z.string().optional(),
  youtube_url: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "alexa_rank": "alexaRank",
    "created_at": "createdAt",
    "crunchbase_url": "crunchbaseUrl",
    "facebook_url": "facebookUrl",
    "instagram_url": "instagramUrl",
    "linkedin_url": "linkedinUrl",
    "logo_url": "logoUrl",
    "naics_code": "naicsCode",
    "sic_code": "sicCode",
    "twitter_handle": "twitterHandle",
    "twitter_url": "twitterUrl",
    "updated_at": "updatedAt",
    "year_founded": "yearFounded",
    "yelp_url": "yelpUrl",
    "youtube_url": "youtubeUrl",
  });
});

/** @internal */
export type EnrichCompany$Outbound = {
  address?: PropertyEnrichCompanyAddress$Outbound | undefined;
  alexa_rank?: number | undefined;
  created_at?: string | undefined;
  crunchbase_url?: string | undefined;
  description?: string | undefined;
  domain?: string | undefined;
  employees?: string | undefined;
  exchange?: string | undefined;
  facebook_url?: string | undefined;
  id?: string | undefined;
  industry?: string | undefined;
  instagram_url?: string | undefined;
  linkedin_url?: string | undefined;
  logo_url?: string | undefined;
  naics_code?: number | undefined;
  name?: string | undefined;
  raw?: { [k: string]: any } | undefined;
  revenue?: string | undefined;
  sic_code?: number | undefined;
  stock?: string | undefined;
  telephones?: Array<EnrichTelephone$Outbound> | undefined;
  twitter_handle?: string | undefined;
  twitter_url?: string | undefined;
  updated_at?: string | undefined;
  year_founded?: number | undefined;
  yelp_url?: string | undefined;
  youtube_url?: string | undefined;
};

/** @internal */
export const EnrichCompany$outboundSchema: z.ZodType<
  EnrichCompany$Outbound,
  z.ZodTypeDef,
  EnrichCompany
> = z.object({
  address: PropertyEnrichCompanyAddress$outboundSchema.optional(),
  alexaRank: z.number().optional(),
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  crunchbaseUrl: z.string().optional(),
  description: z.string().optional(),
  domain: z.string().optional(),
  employees: z.string().optional(),
  exchange: z.string().optional(),
  facebookUrl: z.string().optional(),
  id: z.string().optional(),
  industry: z.string().optional(),
  instagramUrl: z.string().optional(),
  linkedinUrl: z.string().optional(),
  logoUrl: z.string().optional(),
  naicsCode: z.number().optional(),
  name: z.string().optional(),
  raw: z.record(z.any()).optional(),
  revenue: z.string().optional(),
  sicCode: z.number().optional(),
  stock: z.string().optional(),
  telephones: z.array(EnrichTelephone$outboundSchema).optional(),
  twitterHandle: z.string().optional(),
  twitterUrl: z.string().optional(),
  updatedAt: z.date().transform(v => v.toISOString()).optional(),
  yearFounded: z.number().optional(),
  yelpUrl: z.string().optional(),
  youtubeUrl: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    alexaRank: "alexa_rank",
    createdAt: "created_at",
    crunchbaseUrl: "crunchbase_url",
    facebookUrl: "facebook_url",
    instagramUrl: "instagram_url",
    linkedinUrl: "linkedin_url",
    logoUrl: "logo_url",
    naicsCode: "naics_code",
    sicCode: "sic_code",
    twitterHandle: "twitter_handle",
    twitterUrl: "twitter_url",
    updatedAt: "updated_at",
    yearFounded: "year_founded",
    yelpUrl: "yelp_url",
    youtubeUrl: "youtube_url",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EnrichCompany$ {
  /** @deprecated use `EnrichCompany$inboundSchema` instead. */
  export const inboundSchema = EnrichCompany$inboundSchema;
  /** @deprecated use `EnrichCompany$outboundSchema` instead. */
  export const outboundSchema = EnrichCompany$outboundSchema;
  /** @deprecated use `EnrichCompany$Outbound` instead. */
  export type Outbound = EnrichCompany$Outbound;
}
