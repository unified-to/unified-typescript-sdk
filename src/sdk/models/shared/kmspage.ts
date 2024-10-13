/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";

export const KmsPageType = {
  Html: "HTML",
  Markdown: "MARKDOWN",
  Text: "TEXT",
} as const;
export type KmsPageType = ClosedEnum<typeof KmsPageType>;

export type KmsPage = {
  createdAt?: Date | undefined;
  downloadUrl: string;
  id?: string | undefined;
  isActive?: boolean | undefined;
  parentPageId?: string | undefined;
  raw?: { [k: string]: any } | undefined;
  spaceId: string;
  title: string;
  type: KmsPageType;
  updatedAt?: Date | undefined;
  userId?: string | undefined;
};

/** @internal */
export const KmsPageType$inboundSchema: z.ZodNativeEnum<typeof KmsPageType> = z
  .nativeEnum(KmsPageType);

/** @internal */
export const KmsPageType$outboundSchema: z.ZodNativeEnum<typeof KmsPageType> =
  KmsPageType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace KmsPageType$ {
  /** @deprecated use `KmsPageType$inboundSchema` instead. */
  export const inboundSchema = KmsPageType$inboundSchema;
  /** @deprecated use `KmsPageType$outboundSchema` instead. */
  export const outboundSchema = KmsPageType$outboundSchema;
}

/** @internal */
export const KmsPage$inboundSchema: z.ZodType<KmsPage, z.ZodTypeDef, unknown> =
  z.object({
    created_at: z.string().datetime({ offset: true }).transform(v =>
      new Date(v)
    ).optional(),
    download_url: z.string(),
    id: z.string().optional(),
    is_active: z.boolean().optional(),
    parent_page_id: z.string().optional(),
    raw: z.record(z.any()).optional(),
    space_id: z.string(),
    title: z.string(),
    type: KmsPageType$inboundSchema,
    updated_at: z.string().datetime({ offset: true }).transform(v =>
      new Date(v)
    ).optional(),
    user_id: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      "created_at": "createdAt",
      "download_url": "downloadUrl",
      "is_active": "isActive",
      "parent_page_id": "parentPageId",
      "space_id": "spaceId",
      "updated_at": "updatedAt",
      "user_id": "userId",
    });
  });

/** @internal */
export type KmsPage$Outbound = {
  created_at?: string | undefined;
  download_url: string;
  id?: string | undefined;
  is_active?: boolean | undefined;
  parent_page_id?: string | undefined;
  raw?: { [k: string]: any } | undefined;
  space_id: string;
  title: string;
  type: string;
  updated_at?: string | undefined;
  user_id?: string | undefined;
};

/** @internal */
export const KmsPage$outboundSchema: z.ZodType<
  KmsPage$Outbound,
  z.ZodTypeDef,
  KmsPage
> = z.object({
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  downloadUrl: z.string(),
  id: z.string().optional(),
  isActive: z.boolean().optional(),
  parentPageId: z.string().optional(),
  raw: z.record(z.any()).optional(),
  spaceId: z.string(),
  title: z.string(),
  type: KmsPageType$outboundSchema,
  updatedAt: z.date().transform(v => v.toISOString()).optional(),
  userId: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    downloadUrl: "download_url",
    isActive: "is_active",
    parentPageId: "parent_page_id",
    spaceId: "space_id",
    updatedAt: "updated_at",
    userId: "user_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace KmsPage$ {
  /** @deprecated use `KmsPage$inboundSchema` instead. */
  export const inboundSchema = KmsPage$inboundSchema;
  /** @deprecated use `KmsPage$outboundSchema` instead. */
  export const outboundSchema = KmsPage$outboundSchema;
  /** @deprecated use `KmsPage$Outbound` instead. */
  export type Outbound = KmsPage$Outbound;
}
