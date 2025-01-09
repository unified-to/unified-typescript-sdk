/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CrmEventFormOption = {
  label?: string | undefined;
  value?: string | undefined;
};

/** @internal */
export const CrmEventFormOption$inboundSchema: z.ZodType<
  CrmEventFormOption,
  z.ZodTypeDef,
  unknown
> = z.object({
  label: z.string().optional(),
  value: z.string().optional(),
});

/** @internal */
export type CrmEventFormOption$Outbound = {
  label?: string | undefined;
  value?: string | undefined;
};

/** @internal */
export const CrmEventFormOption$outboundSchema: z.ZodType<
  CrmEventFormOption$Outbound,
  z.ZodTypeDef,
  CrmEventFormOption
> = z.object({
  label: z.string().optional(),
  value: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmEventFormOption$ {
  /** @deprecated use `CrmEventFormOption$inboundSchema` instead. */
  export const inboundSchema = CrmEventFormOption$inboundSchema;
  /** @deprecated use `CrmEventFormOption$outboundSchema` instead. */
  export const outboundSchema = CrmEventFormOption$outboundSchema;
  /** @deprecated use `CrmEventFormOption$Outbound` instead. */
  export type Outbound = CrmEventFormOption$Outbound;
}

export function crmEventFormOptionToJSON(
  crmEventFormOption: CrmEventFormOption,
): string {
  return JSON.stringify(
    CrmEventFormOption$outboundSchema.parse(crmEventFormOption),
  );
}

export function crmEventFormOptionFromJSON(
  jsonString: string,
): SafeParseResult<CrmEventFormOption, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmEventFormOption$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmEventFormOption' from JSON`,
  );
}