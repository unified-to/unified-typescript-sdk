/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CrmEventFormField,
  CrmEventFormField$inboundSchema,
  CrmEventFormField$Outbound,
  CrmEventFormField$outboundSchema,
} from "./crmeventformfield.js";

export type PropertyCrmEventForm = {
  archivedAt?: Date | undefined;
  fields?: Array<CrmEventFormField> | undefined;
  name?: string | undefined;
  redirectUrl?: string | undefined;
};

/** @internal */
export const PropertyCrmEventForm$inboundSchema: z.ZodType<
  PropertyCrmEventForm,
  z.ZodTypeDef,
  unknown
> = z.object({
  archived_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  fields: z.array(CrmEventFormField$inboundSchema).optional(),
  name: z.string().optional(),
  redirect_url: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "archived_at": "archivedAt",
    "redirect_url": "redirectUrl",
  });
});

/** @internal */
export type PropertyCrmEventForm$Outbound = {
  archived_at?: string | undefined;
  fields?: Array<CrmEventFormField$Outbound> | undefined;
  name?: string | undefined;
  redirect_url?: string | undefined;
};

/** @internal */
export const PropertyCrmEventForm$outboundSchema: z.ZodType<
  PropertyCrmEventForm$Outbound,
  z.ZodTypeDef,
  PropertyCrmEventForm
> = z.object({
  archivedAt: z.date().transform(v => v.toISOString()).optional(),
  fields: z.array(CrmEventFormField$outboundSchema).optional(),
  name: z.string().optional(),
  redirectUrl: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    archivedAt: "archived_at",
    redirectUrl: "redirect_url",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PropertyCrmEventForm$ {
  /** @deprecated use `PropertyCrmEventForm$inboundSchema` instead. */
  export const inboundSchema = PropertyCrmEventForm$inboundSchema;
  /** @deprecated use `PropertyCrmEventForm$outboundSchema` instead. */
  export const outboundSchema = PropertyCrmEventForm$outboundSchema;
  /** @deprecated use `PropertyCrmEventForm$Outbound` instead. */
  export type Outbound = PropertyCrmEventForm$Outbound;
}

export function propertyCrmEventFormToJSON(
  propertyCrmEventForm: PropertyCrmEventForm,
): string {
  return JSON.stringify(
    PropertyCrmEventForm$outboundSchema.parse(propertyCrmEventForm),
  );
}

export function propertyCrmEventFormFromJSON(
  jsonString: string,
): SafeParseResult<PropertyCrmEventForm, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PropertyCrmEventForm$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PropertyCrmEventForm' from JSON`,
  );
}
