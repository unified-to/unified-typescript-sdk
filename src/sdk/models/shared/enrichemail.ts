/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const EnrichEmailType = {
  Work: "WORK",
  Home: "HOME",
  Other: "OTHER",
} as const;
export type EnrichEmailType = ClosedEnum<typeof EnrichEmailType>;

export type EnrichEmail = {
  email: string;
  isVerified?: boolean | undefined;
  type?: EnrichEmailType | undefined;
};

/** @internal */
export const EnrichEmailType$inboundSchema: z.ZodNativeEnum<
  typeof EnrichEmailType
> = z.nativeEnum(EnrichEmailType);

/** @internal */
export const EnrichEmailType$outboundSchema: z.ZodNativeEnum<
  typeof EnrichEmailType
> = EnrichEmailType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EnrichEmailType$ {
  /** @deprecated use `EnrichEmailType$inboundSchema` instead. */
  export const inboundSchema = EnrichEmailType$inboundSchema;
  /** @deprecated use `EnrichEmailType$outboundSchema` instead. */
  export const outboundSchema = EnrichEmailType$outboundSchema;
}

/** @internal */
export const EnrichEmail$inboundSchema: z.ZodType<
  EnrichEmail,
  z.ZodTypeDef,
  unknown
> = z.object({
  email: z.string(),
  is_verified: z.boolean().optional(),
  type: EnrichEmailType$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "is_verified": "isVerified",
  });
});

/** @internal */
export type EnrichEmail$Outbound = {
  email: string;
  is_verified?: boolean | undefined;
  type?: string | undefined;
};

/** @internal */
export const EnrichEmail$outboundSchema: z.ZodType<
  EnrichEmail$Outbound,
  z.ZodTypeDef,
  EnrichEmail
> = z.object({
  email: z.string(),
  isVerified: z.boolean().optional(),
  type: EnrichEmailType$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    isVerified: "is_verified",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EnrichEmail$ {
  /** @deprecated use `EnrichEmail$inboundSchema` instead. */
  export const inboundSchema = EnrichEmail$inboundSchema;
  /** @deprecated use `EnrichEmail$outboundSchema` instead. */
  export const outboundSchema = EnrichEmail$outboundSchema;
  /** @deprecated use `EnrichEmail$Outbound` instead. */
  export type Outbound = EnrichEmail$Outbound;
}

export function enrichEmailToJSON(enrichEmail: EnrichEmail): string {
  return JSON.stringify(EnrichEmail$outboundSchema.parse(enrichEmail));
}

export function enrichEmailFromJSON(
  jsonString: string,
): SafeParseResult<EnrichEmail, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EnrichEmail$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EnrichEmail' from JSON`,
  );
}
