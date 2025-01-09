/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PropertyCrmEventMarketingEmail = {
  attachmentFileIds?: Array<string> | undefined;
  body?: string | undefined;
  /**
   * The event email's cc name & email (name <test@test.com>)
   */
  cc?: Array<string> | undefined;
  from?: string | undefined;
  name?: string | undefined;
  subject?: string | undefined;
  /**
   * The event email's "to" name & email (name <test@test.com>)
   */
  to?: Array<string> | undefined;
};

/** @internal */
export const PropertyCrmEventMarketingEmail$inboundSchema: z.ZodType<
  PropertyCrmEventMarketingEmail,
  z.ZodTypeDef,
  unknown
> = z.object({
  attachment_file_ids: z.array(z.string()).optional(),
  body: z.string().optional(),
  cc: z.array(z.string()).optional(),
  from: z.string().optional(),
  name: z.string().optional(),
  subject: z.string().optional(),
  to: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "attachment_file_ids": "attachmentFileIds",
  });
});

/** @internal */
export type PropertyCrmEventMarketingEmail$Outbound = {
  attachment_file_ids?: Array<string> | undefined;
  body?: string | undefined;
  cc?: Array<string> | undefined;
  from?: string | undefined;
  name?: string | undefined;
  subject?: string | undefined;
  to?: Array<string> | undefined;
};

/** @internal */
export const PropertyCrmEventMarketingEmail$outboundSchema: z.ZodType<
  PropertyCrmEventMarketingEmail$Outbound,
  z.ZodTypeDef,
  PropertyCrmEventMarketingEmail
> = z.object({
  attachmentFileIds: z.array(z.string()).optional(),
  body: z.string().optional(),
  cc: z.array(z.string()).optional(),
  from: z.string().optional(),
  name: z.string().optional(),
  subject: z.string().optional(),
  to: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    attachmentFileIds: "attachment_file_ids",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PropertyCrmEventMarketingEmail$ {
  /** @deprecated use `PropertyCrmEventMarketingEmail$inboundSchema` instead. */
  export const inboundSchema = PropertyCrmEventMarketingEmail$inboundSchema;
  /** @deprecated use `PropertyCrmEventMarketingEmail$outboundSchema` instead. */
  export const outboundSchema = PropertyCrmEventMarketingEmail$outboundSchema;
  /** @deprecated use `PropertyCrmEventMarketingEmail$Outbound` instead. */
  export type Outbound = PropertyCrmEventMarketingEmail$Outbound;
}

export function propertyCrmEventMarketingEmailToJSON(
  propertyCrmEventMarketingEmail: PropertyCrmEventMarketingEmail,
): string {
  return JSON.stringify(
    PropertyCrmEventMarketingEmail$outboundSchema.parse(
      propertyCrmEventMarketingEmail,
    ),
  );
}

export function propertyCrmEventMarketingEmailFromJSON(
  jsonString: string,
): SafeParseResult<PropertyCrmEventMarketingEmail, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PropertyCrmEventMarketingEmail$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PropertyCrmEventMarketingEmail' from JSON`,
  );
}