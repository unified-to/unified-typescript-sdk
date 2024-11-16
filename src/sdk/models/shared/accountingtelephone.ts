/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const AccountingTelephoneType = {
  Work: "WORK",
  Home: "HOME",
  Other: "OTHER",
  Fax: "FAX",
  Mobile: "MOBILE",
} as const;
export type AccountingTelephoneType = ClosedEnum<
  typeof AccountingTelephoneType
>;

export type AccountingTelephone = {
  telephone?: string | undefined;
  type?: AccountingTelephoneType | undefined;
};

/** @internal */
export const AccountingTelephoneType$inboundSchema: z.ZodNativeEnum<
  typeof AccountingTelephoneType
> = z.nativeEnum(AccountingTelephoneType);

/** @internal */
export const AccountingTelephoneType$outboundSchema: z.ZodNativeEnum<
  typeof AccountingTelephoneType
> = AccountingTelephoneType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingTelephoneType$ {
  /** @deprecated use `AccountingTelephoneType$inboundSchema` instead. */
  export const inboundSchema = AccountingTelephoneType$inboundSchema;
  /** @deprecated use `AccountingTelephoneType$outboundSchema` instead. */
  export const outboundSchema = AccountingTelephoneType$outboundSchema;
}

/** @internal */
export const AccountingTelephone$inboundSchema: z.ZodType<
  AccountingTelephone,
  z.ZodTypeDef,
  unknown
> = z.object({
  telephone: z.string().optional(),
  type: AccountingTelephoneType$inboundSchema.optional(),
});

/** @internal */
export type AccountingTelephone$Outbound = {
  telephone?: string | undefined;
  type?: string | undefined;
};

/** @internal */
export const AccountingTelephone$outboundSchema: z.ZodType<
  AccountingTelephone$Outbound,
  z.ZodTypeDef,
  AccountingTelephone
> = z.object({
  telephone: z.string().optional(),
  type: AccountingTelephoneType$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingTelephone$ {
  /** @deprecated use `AccountingTelephone$inboundSchema` instead. */
  export const inboundSchema = AccountingTelephone$inboundSchema;
  /** @deprecated use `AccountingTelephone$outboundSchema` instead. */
  export const outboundSchema = AccountingTelephone$outboundSchema;
  /** @deprecated use `AccountingTelephone$Outbound` instead. */
  export type Outbound = AccountingTelephone$Outbound;
}

export function accountingTelephoneToJSON(
  accountingTelephone: AccountingTelephone,
): string {
  return JSON.stringify(
    AccountingTelephone$outboundSchema.parse(accountingTelephone),
  );
}

export function accountingTelephoneFromJSON(
  jsonString: string,
): SafeParseResult<AccountingTelephone, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingTelephone$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingTelephone' from JSON`,
  );
}
