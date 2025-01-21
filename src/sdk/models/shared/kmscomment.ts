/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const ContentType = {
  Html: "HTML",
  Markdown: "MARKDOWN",
  Text: "TEXT",
} as const;
export type ContentType = ClosedEnum<typeof ContentType>;

export const KmsCommentType = {
  PageInline: "PAGE-INLINE",
  Page: "PAGE",
} as const;
export type KmsCommentType = ClosedEnum<typeof KmsCommentType>;

export type KmsComment = {
  content: string;
  contentType?: ContentType | undefined;
  createdAt?: Date | undefined;
  id?: string | undefined;
  pageId?: string | undefined;
  parentId?: string | undefined;
  raw?: { [k: string]: any } | undefined;
  type?: KmsCommentType | undefined;
  updatedAt?: Date | undefined;
  userId?: string | undefined;
};

/** @internal */
export const ContentType$inboundSchema: z.ZodNativeEnum<typeof ContentType> = z
  .nativeEnum(ContentType);

/** @internal */
export const ContentType$outboundSchema: z.ZodNativeEnum<typeof ContentType> =
  ContentType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ContentType$ {
  /** @deprecated use `ContentType$inboundSchema` instead. */
  export const inboundSchema = ContentType$inboundSchema;
  /** @deprecated use `ContentType$outboundSchema` instead. */
  export const outboundSchema = ContentType$outboundSchema;
}

/** @internal */
export const KmsCommentType$inboundSchema: z.ZodNativeEnum<
  typeof KmsCommentType
> = z.nativeEnum(KmsCommentType);

/** @internal */
export const KmsCommentType$outboundSchema: z.ZodNativeEnum<
  typeof KmsCommentType
> = KmsCommentType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace KmsCommentType$ {
  /** @deprecated use `KmsCommentType$inboundSchema` instead. */
  export const inboundSchema = KmsCommentType$inboundSchema;
  /** @deprecated use `KmsCommentType$outboundSchema` instead. */
  export const outboundSchema = KmsCommentType$outboundSchema;
}

/** @internal */
export const KmsComment$inboundSchema: z.ZodType<
  KmsComment,
  z.ZodTypeDef,
  unknown
> = z.object({
  content: z.string(),
  content_type: ContentType$inboundSchema.optional(),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  id: z.string().optional(),
  page_id: z.string().optional(),
  parent_id: z.string().optional(),
  raw: z.record(z.any()).optional(),
  type: KmsCommentType$inboundSchema.optional(),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  user_id: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "content_type": "contentType",
    "created_at": "createdAt",
    "page_id": "pageId",
    "parent_id": "parentId",
    "updated_at": "updatedAt",
    "user_id": "userId",
  });
});

/** @internal */
export type KmsComment$Outbound = {
  content: string;
  content_type?: string | undefined;
  created_at?: string | undefined;
  id?: string | undefined;
  page_id?: string | undefined;
  parent_id?: string | undefined;
  raw?: { [k: string]: any } | undefined;
  type?: string | undefined;
  updated_at?: string | undefined;
  user_id?: string | undefined;
};

/** @internal */
export const KmsComment$outboundSchema: z.ZodType<
  KmsComment$Outbound,
  z.ZodTypeDef,
  KmsComment
> = z.object({
  content: z.string(),
  contentType: ContentType$outboundSchema.optional(),
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  id: z.string().optional(),
  pageId: z.string().optional(),
  parentId: z.string().optional(),
  raw: z.record(z.any()).optional(),
  type: KmsCommentType$outboundSchema.optional(),
  updatedAt: z.date().transform(v => v.toISOString()).optional(),
  userId: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "content_type",
    createdAt: "created_at",
    pageId: "page_id",
    parentId: "parent_id",
    updatedAt: "updated_at",
    userId: "user_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace KmsComment$ {
  /** @deprecated use `KmsComment$inboundSchema` instead. */
  export const inboundSchema = KmsComment$inboundSchema;
  /** @deprecated use `KmsComment$outboundSchema` instead. */
  export const outboundSchema = KmsComment$outboundSchema;
  /** @deprecated use `KmsComment$Outbound` instead. */
  export type Outbound = KmsComment$Outbound;
}

export function kmsCommentToJSON(kmsComment: KmsComment): string {
  return JSON.stringify(KmsComment$outboundSchema.parse(kmsComment));
}

export function kmsCommentFromJSON(
  jsonString: string,
): SafeParseResult<KmsComment, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => KmsComment$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'KmsComment' from JSON`,
  );
}