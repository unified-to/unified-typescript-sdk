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

export const MetadataMetadataFormat = {
  Text: "TEXT",
  Number: "NUMBER",
  Date: "DATE",
  Boolean: "BOOLEAN",
  File: "FILE",
  Textarea: "TEXTAREA",
  SingleSelect: "SINGLE_SELECT",
  MultipleSelect: "MULTIPLE_SELECT",
  Measurement: "MEASUREMENT",
  Price: "PRICE",
  YesNo: "YES_NO",
  Currency: "CURRENCY",
  Url: "URL",
} as const;
export type MetadataMetadataFormat = OpenEnum<typeof MetadataMetadataFormat>;

export type MetadataMetadata = {
  createdAt?: Date | undefined;
  format?: MetadataMetadataFormat | undefined;
  id?: string | undefined;
  name: string;
  objectType: string;
  objects?: { [k: string]: any } | undefined;
  options?: Array<string> | undefined;
  originalFormat?: string | undefined;
  raw?: { [k: string]: any } | undefined;
  slug?: string | undefined;
  updatedAt?: Date | undefined;
};

/** @internal */
export const MetadataMetadataFormat$inboundSchema: z.ZodType<
  MetadataMetadataFormat,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(MetadataMetadataFormat),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const MetadataMetadataFormat$outboundSchema: z.ZodType<
  MetadataMetadataFormat,
  z.ZodTypeDef,
  MetadataMetadataFormat
> = z.union([
  z.nativeEnum(MetadataMetadataFormat),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MetadataMetadataFormat$ {
  /** @deprecated use `MetadataMetadataFormat$inboundSchema` instead. */
  export const inboundSchema = MetadataMetadataFormat$inboundSchema;
  /** @deprecated use `MetadataMetadataFormat$outboundSchema` instead. */
  export const outboundSchema = MetadataMetadataFormat$outboundSchema;
}

/** @internal */
export const MetadataMetadata$inboundSchema: z.ZodType<
  MetadataMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  format: MetadataMetadataFormat$inboundSchema.optional(),
  id: z.string().optional(),
  name: z.string(),
  object_type: z.string(),
  objects: z.record(z.any()).optional(),
  options: z.array(z.string()).optional(),
  original_format: z.string().optional(),
  raw: z.record(z.any()).optional(),
  slug: z.string().optional(),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "object_type": "objectType",
    "original_format": "originalFormat",
    "updated_at": "updatedAt",
  });
});

/** @internal */
export type MetadataMetadata$Outbound = {
  created_at?: string | undefined;
  format?: string | undefined;
  id?: string | undefined;
  name: string;
  object_type: string;
  objects?: { [k: string]: any } | undefined;
  options?: Array<string> | undefined;
  original_format?: string | undefined;
  raw?: { [k: string]: any } | undefined;
  slug?: string | undefined;
  updated_at?: string | undefined;
};

/** @internal */
export const MetadataMetadata$outboundSchema: z.ZodType<
  MetadataMetadata$Outbound,
  z.ZodTypeDef,
  MetadataMetadata
> = z.object({
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  format: MetadataMetadataFormat$outboundSchema.optional(),
  id: z.string().optional(),
  name: z.string(),
  objectType: z.string(),
  objects: z.record(z.any()).optional(),
  options: z.array(z.string()).optional(),
  originalFormat: z.string().optional(),
  raw: z.record(z.any()).optional(),
  slug: z.string().optional(),
  updatedAt: z.date().transform(v => v.toISOString()).optional(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    objectType: "object_type",
    originalFormat: "original_format",
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MetadataMetadata$ {
  /** @deprecated use `MetadataMetadata$inboundSchema` instead. */
  export const inboundSchema = MetadataMetadata$inboundSchema;
  /** @deprecated use `MetadataMetadata$outboundSchema` instead. */
  export const outboundSchema = MetadataMetadata$outboundSchema;
  /** @deprecated use `MetadataMetadata$Outbound` instead. */
  export type Outbound = MetadataMetadata$Outbound;
}

export function metadataMetadataToJSON(
  metadataMetadata: MetadataMetadata,
): string {
  return JSON.stringify(
    MetadataMetadata$outboundSchema.parse(metadataMetadata),
  );
}

export function metadataMetadataFromJSON(
  jsonString: string,
): SafeParseResult<MetadataMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MetadataMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MetadataMetadata' from JSON`,
  );
}
