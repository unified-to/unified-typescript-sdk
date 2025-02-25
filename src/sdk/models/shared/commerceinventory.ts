/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CommerceInventoryRaw = {};

export type CommerceInventory = {
  available: number;
  id?: string | undefined;
  itemId?: string | undefined;
  itemOptionId?: string | undefined;
  itemVariantId?: string | undefined;
  locationId?: string | undefined;
  raw?: CommerceInventoryRaw | undefined;
  updatedAt?: Date | undefined;
};

/** @internal */
export const CommerceInventoryRaw$inboundSchema: z.ZodType<
  CommerceInventoryRaw,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type CommerceInventoryRaw$Outbound = {};

/** @internal */
export const CommerceInventoryRaw$outboundSchema: z.ZodType<
  CommerceInventoryRaw$Outbound,
  z.ZodTypeDef,
  CommerceInventoryRaw
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CommerceInventoryRaw$ {
  /** @deprecated use `CommerceInventoryRaw$inboundSchema` instead. */
  export const inboundSchema = CommerceInventoryRaw$inboundSchema;
  /** @deprecated use `CommerceInventoryRaw$outboundSchema` instead. */
  export const outboundSchema = CommerceInventoryRaw$outboundSchema;
  /** @deprecated use `CommerceInventoryRaw$Outbound` instead. */
  export type Outbound = CommerceInventoryRaw$Outbound;
}

export function commerceInventoryRawToJSON(
  commerceInventoryRaw: CommerceInventoryRaw,
): string {
  return JSON.stringify(
    CommerceInventoryRaw$outboundSchema.parse(commerceInventoryRaw),
  );
}

export function commerceInventoryRawFromJSON(
  jsonString: string,
): SafeParseResult<CommerceInventoryRaw, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CommerceInventoryRaw$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CommerceInventoryRaw' from JSON`,
  );
}

/** @internal */
export const CommerceInventory$inboundSchema: z.ZodType<
  CommerceInventory,
  z.ZodTypeDef,
  unknown
> = z.object({
  available: z.number(),
  id: z.string().optional(),
  item_id: z.string().optional(),
  item_option_id: z.string().optional(),
  item_variant_id: z.string().optional(),
  location_id: z.string().optional(),
  raw: z.lazy(() => CommerceInventoryRaw$inboundSchema).optional(),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "item_id": "itemId",
    "item_option_id": "itemOptionId",
    "item_variant_id": "itemVariantId",
    "location_id": "locationId",
    "updated_at": "updatedAt",
  });
});

/** @internal */
export type CommerceInventory$Outbound = {
  available: number;
  id?: string | undefined;
  item_id?: string | undefined;
  item_option_id?: string | undefined;
  item_variant_id?: string | undefined;
  location_id?: string | undefined;
  raw?: CommerceInventoryRaw$Outbound | undefined;
  updated_at?: string | undefined;
};

/** @internal */
export const CommerceInventory$outboundSchema: z.ZodType<
  CommerceInventory$Outbound,
  z.ZodTypeDef,
  CommerceInventory
> = z.object({
  available: z.number(),
  id: z.string().optional(),
  itemId: z.string().optional(),
  itemOptionId: z.string().optional(),
  itemVariantId: z.string().optional(),
  locationId: z.string().optional(),
  raw: z.lazy(() => CommerceInventoryRaw$outboundSchema).optional(),
  updatedAt: z.date().transform(v => v.toISOString()).optional(),
}).transform((v) => {
  return remap$(v, {
    itemId: "item_id",
    itemOptionId: "item_option_id",
    itemVariantId: "item_variant_id",
    locationId: "location_id",
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CommerceInventory$ {
  /** @deprecated use `CommerceInventory$inboundSchema` instead. */
  export const inboundSchema = CommerceInventory$inboundSchema;
  /** @deprecated use `CommerceInventory$outboundSchema` instead. */
  export const outboundSchema = CommerceInventory$outboundSchema;
  /** @deprecated use `CommerceInventory$Outbound` instead. */
  export type Outbound = CommerceInventory$Outbound;
}

export function commerceInventoryToJSON(
  commerceInventory: CommerceInventory,
): string {
  return JSON.stringify(
    CommerceInventory$outboundSchema.parse(commerceInventory),
  );
}

export function commerceInventoryFromJSON(
  jsonString: string,
): SafeParseResult<CommerceInventory, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CommerceInventory$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CommerceInventory' from JSON`,
  );
}
