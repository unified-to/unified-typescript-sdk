/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const HrisTelephoneType = {
  Work: "WORK",
  Home: "HOME",
  Other: "OTHER",
  Fax: "FAX",
  Mobile: "MOBILE",
} as const;
export type HrisTelephoneType = ClosedEnum<typeof HrisTelephoneType>;

export type HrisTelephone = {
  telephone: string;
  type?: HrisTelephoneType | undefined;
};

/** @internal */
export const HrisTelephoneType$inboundSchema: z.ZodNativeEnum<
  typeof HrisTelephoneType
> = z.nativeEnum(HrisTelephoneType);

/** @internal */
export const HrisTelephoneType$outboundSchema: z.ZodNativeEnum<
  typeof HrisTelephoneType
> = HrisTelephoneType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisTelephoneType$ {
  /** @deprecated use `HrisTelephoneType$inboundSchema` instead. */
  export const inboundSchema = HrisTelephoneType$inboundSchema;
  /** @deprecated use `HrisTelephoneType$outboundSchema` instead. */
  export const outboundSchema = HrisTelephoneType$outboundSchema;
}

/** @internal */
export const HrisTelephone$inboundSchema: z.ZodType<
  HrisTelephone,
  z.ZodTypeDef,
  unknown
> = z.object({
  telephone: z.string(),
  type: HrisTelephoneType$inboundSchema.optional(),
});

/** @internal */
export type HrisTelephone$Outbound = {
  telephone: string;
  type?: string | undefined;
};

/** @internal */
export const HrisTelephone$outboundSchema: z.ZodType<
  HrisTelephone$Outbound,
  z.ZodTypeDef,
  HrisTelephone
> = z.object({
  telephone: z.string(),
  type: HrisTelephoneType$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisTelephone$ {
  /** @deprecated use `HrisTelephone$inboundSchema` instead. */
  export const inboundSchema = HrisTelephone$inboundSchema;
  /** @deprecated use `HrisTelephone$outboundSchema` instead. */
  export const outboundSchema = HrisTelephone$outboundSchema;
  /** @deprecated use `HrisTelephone$Outbound` instead. */
  export type Outbound = HrisTelephone$Outbound;
}

export function hrisTelephoneToJSON(hrisTelephone: HrisTelephone): string {
  return JSON.stringify(HrisTelephone$outboundSchema.parse(hrisTelephone));
}

export function hrisTelephoneFromJSON(
  jsonString: string,
): SafeParseResult<HrisTelephone, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisTelephone$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisTelephone' from JSON`,
  );
}
