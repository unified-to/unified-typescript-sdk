/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const ScimImsType = {
  Aim: "aim",
  Qtalk: "qtalk",
  Icq: "icq",
  Xmpp: "xmpp",
  Msn: "msn",
  Skype: "skype",
  Qq: "qq",
  Yahoo: "yahoo",
} as const;
export type ScimImsType = ClosedEnum<typeof ScimImsType>;

export type ScimIms = {
  display?: string | undefined;
  primary?: boolean | undefined;
  type?: ScimImsType | undefined;
  value?: string | undefined;
};

/** @internal */
export const ScimImsType$inboundSchema: z.ZodNativeEnum<typeof ScimImsType> = z
  .nativeEnum(ScimImsType);

/** @internal */
export const ScimImsType$outboundSchema: z.ZodNativeEnum<typeof ScimImsType> =
  ScimImsType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ScimImsType$ {
  /** @deprecated use `ScimImsType$inboundSchema` instead. */
  export const inboundSchema = ScimImsType$inboundSchema;
  /** @deprecated use `ScimImsType$outboundSchema` instead. */
  export const outboundSchema = ScimImsType$outboundSchema;
}

/** @internal */
export const ScimIms$inboundSchema: z.ZodType<ScimIms, z.ZodTypeDef, unknown> =
  z.object({
    display: z.string().optional(),
    primary: z.boolean().optional(),
    type: ScimImsType$inboundSchema.optional(),
    value: z.string().optional(),
  });

/** @internal */
export type ScimIms$Outbound = {
  display?: string | undefined;
  primary?: boolean | undefined;
  type?: string | undefined;
  value?: string | undefined;
};

/** @internal */
export const ScimIms$outboundSchema: z.ZodType<
  ScimIms$Outbound,
  z.ZodTypeDef,
  ScimIms
> = z.object({
  display: z.string().optional(),
  primary: z.boolean().optional(),
  type: ScimImsType$outboundSchema.optional(),
  value: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ScimIms$ {
  /** @deprecated use `ScimIms$inboundSchema` instead. */
  export const inboundSchema = ScimIms$inboundSchema;
  /** @deprecated use `ScimIms$outboundSchema` instead. */
  export const outboundSchema = ScimIms$outboundSchema;
  /** @deprecated use `ScimIms$Outbound` instead. */
  export type Outbound = ScimIms$Outbound;
}

export function scimImsToJSON(scimIms: ScimIms): string {
  return JSON.stringify(ScimIms$outboundSchema.parse(scimIms));
}

export function scimImsFromJSON(
  jsonString: string,
): SafeParseResult<ScimIms, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ScimIms$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ScimIms' from JSON`,
  );
}
