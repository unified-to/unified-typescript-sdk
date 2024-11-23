/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CommerceItemMetadata = {
  extraData?: { [k: string]: any } | undefined;
  id?: string | undefined;
  key: string;
  namespace?: string | undefined;
  type?: string | undefined;
  value?: { [k: string]: any } | undefined;
};

/** @internal */
export const CommerceItemMetadata$inboundSchema: z.ZodType<
  CommerceItemMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({
  extra_data: z.record(z.any()).optional(),
  id: z.string().optional(),
  key: z.string(),
  namespace: z.string().optional(),
  type: z.string().optional(),
  value: z.record(z.any()).optional(),
}).transform((v) => {
  return remap$(v, {
    "extra_data": "extraData",
  });
});

/** @internal */
export type CommerceItemMetadata$Outbound = {
  extra_data?: { [k: string]: any } | undefined;
  id?: string | undefined;
  key: string;
  namespace?: string | undefined;
  type?: string | undefined;
  value?: { [k: string]: any } | undefined;
};

/** @internal */
export const CommerceItemMetadata$outboundSchema: z.ZodType<
  CommerceItemMetadata$Outbound,
  z.ZodTypeDef,
  CommerceItemMetadata
> = z.object({
  extraData: z.record(z.any()).optional(),
  id: z.string().optional(),
  key: z.string(),
  namespace: z.string().optional(),
  type: z.string().optional(),
  value: z.record(z.any()).optional(),
}).transform((v) => {
  return remap$(v, {
    extraData: "extra_data",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CommerceItemMetadata$ {
  /** @deprecated use `CommerceItemMetadata$inboundSchema` instead. */
  export const inboundSchema = CommerceItemMetadata$inboundSchema;
  /** @deprecated use `CommerceItemMetadata$outboundSchema` instead. */
  export const outboundSchema = CommerceItemMetadata$outboundSchema;
  /** @deprecated use `CommerceItemMetadata$Outbound` instead. */
  export type Outbound = CommerceItemMetadata$Outbound;
}

export function commerceItemMetadataToJSON(
  commerceItemMetadata: CommerceItemMetadata,
): string {
  return JSON.stringify(
    CommerceItemMetadata$outboundSchema.parse(commerceItemMetadata),
  );
}

export function commerceItemMetadataFromJSON(
  jsonString: string,
): SafeParseResult<CommerceItemMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CommerceItemMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CommerceItemMetadata' from JSON`,
  );
}