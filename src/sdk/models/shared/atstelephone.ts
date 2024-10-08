/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const AtsTelephoneType = {
  Work: "WORK",
  Home: "HOME",
  Other: "OTHER",
  Fax: "FAX",
  Mobile: "MOBILE",
} as const;
export type AtsTelephoneType = ClosedEnum<typeof AtsTelephoneType>;

export type AtsTelephone = {
  telephone: string;
  type?: AtsTelephoneType | undefined;
};

/** @internal */
export const AtsTelephoneType$inboundSchema: z.ZodNativeEnum<
  typeof AtsTelephoneType
> = z.nativeEnum(AtsTelephoneType);

/** @internal */
export const AtsTelephoneType$outboundSchema: z.ZodNativeEnum<
  typeof AtsTelephoneType
> = AtsTelephoneType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsTelephoneType$ {
  /** @deprecated use `AtsTelephoneType$inboundSchema` instead. */
  export const inboundSchema = AtsTelephoneType$inboundSchema;
  /** @deprecated use `AtsTelephoneType$outboundSchema` instead. */
  export const outboundSchema = AtsTelephoneType$outboundSchema;
}

/** @internal */
export const AtsTelephone$inboundSchema: z.ZodType<
  AtsTelephone,
  z.ZodTypeDef,
  unknown
> = z.object({
  telephone: z.string(),
  type: AtsTelephoneType$inboundSchema.optional(),
});

/** @internal */
export type AtsTelephone$Outbound = {
  telephone: string;
  type?: string | undefined;
};

/** @internal */
export const AtsTelephone$outboundSchema: z.ZodType<
  AtsTelephone$Outbound,
  z.ZodTypeDef,
  AtsTelephone
> = z.object({
  telephone: z.string(),
  type: AtsTelephoneType$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsTelephone$ {
  /** @deprecated use `AtsTelephone$inboundSchema` instead. */
  export const inboundSchema = AtsTelephone$inboundSchema;
  /** @deprecated use `AtsTelephone$outboundSchema` instead. */
  export const outboundSchema = AtsTelephone$outboundSchema;
  /** @deprecated use `AtsTelephone$Outbound` instead. */
  export type Outbound = AtsTelephone$Outbound;
}
