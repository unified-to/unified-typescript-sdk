/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type MetadataMetadata = {
  createdAt?: Date | undefined;
  id?: string | undefined;
  name: string;
  objectType: string;
  objects?: { [k: string]: string } | undefined;
  raw?: { [k: string]: any } | undefined;
  type?: string | undefined;
  updatedAt?: Date | undefined;
};

/** @internal */
export const MetadataMetadata$inboundSchema: z.ZodType<
  MetadataMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  id: z.string().optional(),
  name: z.string(),
  object_type: z.string(),
  objects: z.record(z.string()).optional(),
  raw: z.record(z.any()).optional(),
  type: z.string().optional(),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "object_type": "objectType",
    "updated_at": "updatedAt",
  });
});

/** @internal */
export type MetadataMetadata$Outbound = {
  created_at?: string | undefined;
  id?: string | undefined;
  name: string;
  object_type: string;
  objects?: { [k: string]: string } | undefined;
  raw?: { [k: string]: any } | undefined;
  type?: string | undefined;
  updated_at?: string | undefined;
};

/** @internal */
export const MetadataMetadata$outboundSchema: z.ZodType<
  MetadataMetadata$Outbound,
  z.ZodTypeDef,
  MetadataMetadata
> = z.object({
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  id: z.string().optional(),
  name: z.string(),
  objectType: z.string(),
  objects: z.record(z.string()).optional(),
  raw: z.record(z.any()).optional(),
  type: z.string().optional(),
  updatedAt: z.date().transform(v => v.toISOString()).optional(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    objectType: "object_type",
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
