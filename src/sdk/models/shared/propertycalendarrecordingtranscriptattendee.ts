/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import {
  catchUnrecognizedEnum,
  OpenEnum,
  Unrecognized,
} from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const PropertyCalendarRecordingTranscriptAttendeeStatus = {
  Accepted: "ACCEPTED",
  Rejected: "REJECTED",
  Tentative: "TENTATIVE",
} as const;
export type PropertyCalendarRecordingTranscriptAttendeeStatus = OpenEnum<
  typeof PropertyCalendarRecordingTranscriptAttendeeStatus
>;

export type PropertyCalendarRecordingTranscriptAttendee = {
  email?: string | undefined;
  name?: string | undefined;
  required?: boolean | undefined;
  status?: PropertyCalendarRecordingTranscriptAttendeeStatus | undefined;
  userId?: string | undefined;
};

/** @internal */
export const PropertyCalendarRecordingTranscriptAttendeeStatus$inboundSchema:
  z.ZodType<
    PropertyCalendarRecordingTranscriptAttendeeStatus,
    z.ZodTypeDef,
    unknown
  > = z
    .union([
      z.nativeEnum(PropertyCalendarRecordingTranscriptAttendeeStatus),
      z.string().transform(catchUnrecognizedEnum),
    ]);

/** @internal */
export const PropertyCalendarRecordingTranscriptAttendeeStatus$outboundSchema:
  z.ZodType<
    PropertyCalendarRecordingTranscriptAttendeeStatus,
    z.ZodTypeDef,
    PropertyCalendarRecordingTranscriptAttendeeStatus
  > = z.union([
    z.nativeEnum(PropertyCalendarRecordingTranscriptAttendeeStatus),
    z.string().and(z.custom<Unrecognized<string>>()),
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PropertyCalendarRecordingTranscriptAttendeeStatus$ {
  /** @deprecated use `PropertyCalendarRecordingTranscriptAttendeeStatus$inboundSchema` instead. */
  export const inboundSchema =
    PropertyCalendarRecordingTranscriptAttendeeStatus$inboundSchema;
  /** @deprecated use `PropertyCalendarRecordingTranscriptAttendeeStatus$outboundSchema` instead. */
  export const outboundSchema =
    PropertyCalendarRecordingTranscriptAttendeeStatus$outboundSchema;
}

/** @internal */
export const PropertyCalendarRecordingTranscriptAttendee$inboundSchema:
  z.ZodType<
    PropertyCalendarRecordingTranscriptAttendee,
    z.ZodTypeDef,
    unknown
  > = z.object({
    email: z.string().optional(),
    name: z.string().optional(),
    required: z.boolean().optional(),
    status: PropertyCalendarRecordingTranscriptAttendeeStatus$inboundSchema
      .optional(),
    user_id: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      "user_id": "userId",
    });
  });

/** @internal */
export type PropertyCalendarRecordingTranscriptAttendee$Outbound = {
  email?: string | undefined;
  name?: string | undefined;
  required?: boolean | undefined;
  status?: string | undefined;
  user_id?: string | undefined;
};

/** @internal */
export const PropertyCalendarRecordingTranscriptAttendee$outboundSchema:
  z.ZodType<
    PropertyCalendarRecordingTranscriptAttendee$Outbound,
    z.ZodTypeDef,
    PropertyCalendarRecordingTranscriptAttendee
  > = z.object({
    email: z.string().optional(),
    name: z.string().optional(),
    required: z.boolean().optional(),
    status: PropertyCalendarRecordingTranscriptAttendeeStatus$outboundSchema
      .optional(),
    userId: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      userId: "user_id",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PropertyCalendarRecordingTranscriptAttendee$ {
  /** @deprecated use `PropertyCalendarRecordingTranscriptAttendee$inboundSchema` instead. */
  export const inboundSchema =
    PropertyCalendarRecordingTranscriptAttendee$inboundSchema;
  /** @deprecated use `PropertyCalendarRecordingTranscriptAttendee$outboundSchema` instead. */
  export const outboundSchema =
    PropertyCalendarRecordingTranscriptAttendee$outboundSchema;
  /** @deprecated use `PropertyCalendarRecordingTranscriptAttendee$Outbound` instead. */
  export type Outbound = PropertyCalendarRecordingTranscriptAttendee$Outbound;
}

export function propertyCalendarRecordingTranscriptAttendeeToJSON(
  propertyCalendarRecordingTranscriptAttendee:
    PropertyCalendarRecordingTranscriptAttendee,
): string {
  return JSON.stringify(
    PropertyCalendarRecordingTranscriptAttendee$outboundSchema.parse(
      propertyCalendarRecordingTranscriptAttendee,
    ),
  );
}

export function propertyCalendarRecordingTranscriptAttendeeFromJSON(
  jsonString: string,
): SafeParseResult<
  PropertyCalendarRecordingTranscriptAttendee,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PropertyCalendarRecordingTranscriptAttendee$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PropertyCalendarRecordingTranscriptAttendee' from JSON`,
  );
}
