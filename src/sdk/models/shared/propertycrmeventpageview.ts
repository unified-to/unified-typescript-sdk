/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PropertyCrmEventPageView = {
  average?: number | undefined;
  count?: number | undefined;
  url?: string | undefined;
};

/** @internal */
export const PropertyCrmEventPageView$inboundSchema: z.ZodType<
  PropertyCrmEventPageView,
  z.ZodTypeDef,
  unknown
> = z.object({
  average: z.number().optional(),
  count: z.number().optional(),
  url: z.string().optional(),
});

/** @internal */
export type PropertyCrmEventPageView$Outbound = {
  average?: number | undefined;
  count?: number | undefined;
  url?: string | undefined;
};

/** @internal */
export const PropertyCrmEventPageView$outboundSchema: z.ZodType<
  PropertyCrmEventPageView$Outbound,
  z.ZodTypeDef,
  PropertyCrmEventPageView
> = z.object({
  average: z.number().optional(),
  count: z.number().optional(),
  url: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PropertyCrmEventPageView$ {
  /** @deprecated use `PropertyCrmEventPageView$inboundSchema` instead. */
  export const inboundSchema = PropertyCrmEventPageView$inboundSchema;
  /** @deprecated use `PropertyCrmEventPageView$outboundSchema` instead. */
  export const outboundSchema = PropertyCrmEventPageView$outboundSchema;
  /** @deprecated use `PropertyCrmEventPageView$Outbound` instead. */
  export type Outbound = PropertyCrmEventPageView$Outbound;
}

export function propertyCrmEventPageViewToJSON(
  propertyCrmEventPageView: PropertyCrmEventPageView,
): string {
  return JSON.stringify(
    PropertyCrmEventPageView$outboundSchema.parse(propertyCrmEventPageView),
  );
}

export function propertyCrmEventPageViewFromJSON(
  jsonString: string,
): SafeParseResult<PropertyCrmEventPageView, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PropertyCrmEventPageView$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PropertyCrmEventPageView' from JSON`,
  );
}