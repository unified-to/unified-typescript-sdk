/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The meeting object, when type = meeting
 */
export type PropertyCrmEventMeeting = {
  description?: string | undefined;
  endAt?: Date | undefined;
  startAt?: Date | undefined;
  title?: string | undefined;
};

/** @internal */
export const PropertyCrmEventMeeting$inboundSchema: z.ZodType<
  PropertyCrmEventMeeting,
  z.ZodTypeDef,
  unknown
> = z.object({
  description: z.string().optional(),
  end_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  start_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  title: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "end_at": "endAt",
    "start_at": "startAt",
  });
});

/** @internal */
export type PropertyCrmEventMeeting$Outbound = {
  description?: string | undefined;
  end_at?: string | undefined;
  start_at?: string | undefined;
  title?: string | undefined;
};

/** @internal */
export const PropertyCrmEventMeeting$outboundSchema: z.ZodType<
  PropertyCrmEventMeeting$Outbound,
  z.ZodTypeDef,
  PropertyCrmEventMeeting
> = z.object({
  description: z.string().optional(),
  endAt: z.date().transform(v => v.toISOString()).optional(),
  startAt: z.date().transform(v => v.toISOString()).optional(),
  title: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    endAt: "end_at",
    startAt: "start_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PropertyCrmEventMeeting$ {
  /** @deprecated use `PropertyCrmEventMeeting$inboundSchema` instead. */
  export const inboundSchema = PropertyCrmEventMeeting$inboundSchema;
  /** @deprecated use `PropertyCrmEventMeeting$outboundSchema` instead. */
  export const outboundSchema = PropertyCrmEventMeeting$outboundSchema;
  /** @deprecated use `PropertyCrmEventMeeting$Outbound` instead. */
  export type Outbound = PropertyCrmEventMeeting$Outbound;
}

export function propertyCrmEventMeetingToJSON(
  propertyCrmEventMeeting: PropertyCrmEventMeeting,
): string {
  return JSON.stringify(
    PropertyCrmEventMeeting$outboundSchema.parse(propertyCrmEventMeeting),
  );
}

export function propertyCrmEventMeetingFromJSON(
  jsonString: string,
): SafeParseResult<PropertyCrmEventMeeting, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PropertyCrmEventMeeting$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PropertyCrmEventMeeting' from JSON`,
  );
}
