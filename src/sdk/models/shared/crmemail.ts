/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import {
  catchUnrecognizedEnum,
  OpenEnum,
  Unrecognized,
} from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const CrmEmailType = {
  Work: "WORK",
  Home: "HOME",
  Other: "OTHER",
} as const;
export type CrmEmailType = OpenEnum<typeof CrmEmailType>;

export type CrmEmail = {
  email?: string | undefined;
  type?: CrmEmailType | undefined;
};

/** @internal */
export const CrmEmailType$inboundSchema: z.ZodType<
  CrmEmailType,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(CrmEmailType),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const CrmEmailType$outboundSchema: z.ZodType<
  CrmEmailType,
  z.ZodTypeDef,
  CrmEmailType
> = z.union([
  z.nativeEnum(CrmEmailType),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmEmailType$ {
  /** @deprecated use `CrmEmailType$inboundSchema` instead. */
  export const inboundSchema = CrmEmailType$inboundSchema;
  /** @deprecated use `CrmEmailType$outboundSchema` instead. */
  export const outboundSchema = CrmEmailType$outboundSchema;
}

/** @internal */
export const CrmEmail$inboundSchema: z.ZodType<
  CrmEmail,
  z.ZodTypeDef,
  unknown
> = z.object({
  email: z.string().optional(),
  type: CrmEmailType$inboundSchema.optional(),
});

/** @internal */
export type CrmEmail$Outbound = {
  email?: string | undefined;
  type?: string | undefined;
};

/** @internal */
export const CrmEmail$outboundSchema: z.ZodType<
  CrmEmail$Outbound,
  z.ZodTypeDef,
  CrmEmail
> = z.object({
  email: z.string().optional(),
  type: CrmEmailType$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmEmail$ {
  /** @deprecated use `CrmEmail$inboundSchema` instead. */
  export const inboundSchema = CrmEmail$inboundSchema;
  /** @deprecated use `CrmEmail$outboundSchema` instead. */
  export const outboundSchema = CrmEmail$outboundSchema;
  /** @deprecated use `CrmEmail$Outbound` instead. */
  export type Outbound = CrmEmail$Outbound;
}

export function crmEmailToJSON(crmEmail: CrmEmail): string {
  return JSON.stringify(CrmEmail$outboundSchema.parse(crmEmail));
}

export function crmEmailFromJSON(
  jsonString: string,
): SafeParseResult<CrmEmail, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmEmail$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmEmail' from JSON`,
  );
}
