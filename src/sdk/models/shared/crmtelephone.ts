/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const CrmTelephoneType = {
    Work: "WORK",
    Home: "HOME",
    Other: "OTHER",
    Fax: "FAX",
    Mobile: "MOBILE",
} as const;
export type CrmTelephoneType = ClosedEnum<typeof CrmTelephoneType>;

export type CrmTelephone = {
    telephone: string;
    type?: CrmTelephoneType | undefined;
};

/** @internal */
export const CrmTelephoneType$inboundSchema: z.ZodNativeEnum<typeof CrmTelephoneType> =
    z.nativeEnum(CrmTelephoneType);

/** @internal */
export const CrmTelephoneType$outboundSchema: z.ZodNativeEnum<typeof CrmTelephoneType> =
    CrmTelephoneType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmTelephoneType$ {
    /** @deprecated use `CrmTelephoneType$inboundSchema` instead. */
    export const inboundSchema = CrmTelephoneType$inboundSchema;
    /** @deprecated use `CrmTelephoneType$outboundSchema` instead. */
    export const outboundSchema = CrmTelephoneType$outboundSchema;
}

/** @internal */
export const CrmTelephone$inboundSchema: z.ZodType<CrmTelephone, z.ZodTypeDef, unknown> = z.object({
    telephone: z.string(),
    type: CrmTelephoneType$inboundSchema.optional(),
});

/** @internal */
export type CrmTelephone$Outbound = {
    telephone: string;
    type?: string | undefined;
};

/** @internal */
export const CrmTelephone$outboundSchema: z.ZodType<
    CrmTelephone$Outbound,
    z.ZodTypeDef,
    CrmTelephone
> = z.object({
    telephone: z.string(),
    type: CrmTelephoneType$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmTelephone$ {
    /** @deprecated use `CrmTelephone$inboundSchema` instead. */
    export const inboundSchema = CrmTelephone$inboundSchema;
    /** @deprecated use `CrmTelephone$outboundSchema` instead. */
    export const outboundSchema = CrmTelephone$outboundSchema;
    /** @deprecated use `CrmTelephone$Outbound` instead. */
    export type Outbound = CrmTelephone$Outbound;
}
