/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CalendarAttendee,
  CalendarAttendee$inboundSchema,
  CalendarAttendee$Outbound,
  CalendarAttendee$outboundSchema,
} from "./calendarattendee.js";
import {
  PropertyCalendarEventOrganizer,
  PropertyCalendarEventOrganizer$inboundSchema,
  PropertyCalendarEventOrganizer$Outbound,
  PropertyCalendarEventOrganizer$outboundSchema,
} from "./propertycalendareventorganizer.js";

export type CalendarEventRaw = {};

export const CalendarEventStatus = {
  Canceled: "CANCELED",
  Confirmed: "CONFIRMED",
  Tentative: "TENTATIVE",
} as const;
export type CalendarEventStatus = ClosedEnum<typeof CalendarEventStatus>;

export type CalendarEvent = {
  attendees?: Array<CalendarAttendee> | undefined;
  calendarId?: string | undefined;
  createdAt?: string | undefined;
  endAt: string;
  id?: string | undefined;
  isAllDay?: boolean | undefined;
  isFree?: boolean | undefined;
  isPrivate?: boolean | undefined;
  location?: string | undefined;
  notes?: string | undefined;
  organizer?: PropertyCalendarEventOrganizer | undefined;
  raw?: CalendarEventRaw | undefined;
  startAt: string;
  status?: CalendarEventStatus | undefined;
  subject: string;
  timezone?: string | undefined;
  updatedAt?: string | undefined;
  webUrl?: string | undefined;
};

/** @internal */
export const CalendarEventRaw$inboundSchema: z.ZodType<
  CalendarEventRaw,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type CalendarEventRaw$Outbound = {};

/** @internal */
export const CalendarEventRaw$outboundSchema: z.ZodType<
  CalendarEventRaw$Outbound,
  z.ZodTypeDef,
  CalendarEventRaw
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CalendarEventRaw$ {
  /** @deprecated use `CalendarEventRaw$inboundSchema` instead. */
  export const inboundSchema = CalendarEventRaw$inboundSchema;
  /** @deprecated use `CalendarEventRaw$outboundSchema` instead. */
  export const outboundSchema = CalendarEventRaw$outboundSchema;
  /** @deprecated use `CalendarEventRaw$Outbound` instead. */
  export type Outbound = CalendarEventRaw$Outbound;
}

export function calendarEventRawToJSON(
  calendarEventRaw: CalendarEventRaw,
): string {
  return JSON.stringify(
    CalendarEventRaw$outboundSchema.parse(calendarEventRaw),
  );
}

export function calendarEventRawFromJSON(
  jsonString: string,
): SafeParseResult<CalendarEventRaw, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CalendarEventRaw$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CalendarEventRaw' from JSON`,
  );
}

/** @internal */
export const CalendarEventStatus$inboundSchema: z.ZodNativeEnum<
  typeof CalendarEventStatus
> = z.nativeEnum(CalendarEventStatus);

/** @internal */
export const CalendarEventStatus$outboundSchema: z.ZodNativeEnum<
  typeof CalendarEventStatus
> = CalendarEventStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CalendarEventStatus$ {
  /** @deprecated use `CalendarEventStatus$inboundSchema` instead. */
  export const inboundSchema = CalendarEventStatus$inboundSchema;
  /** @deprecated use `CalendarEventStatus$outboundSchema` instead. */
  export const outboundSchema = CalendarEventStatus$outboundSchema;
}

/** @internal */
export const CalendarEvent$inboundSchema: z.ZodType<
  CalendarEvent,
  z.ZodTypeDef,
  unknown
> = z.object({
  attendees: z.array(CalendarAttendee$inboundSchema).optional(),
  calendar_id: z.string().optional(),
  created_at: z.string().optional(),
  end_at: z.string(),
  id: z.string().optional(),
  is_all_day: z.boolean().optional(),
  is_free: z.boolean().optional(),
  is_private: z.boolean().optional(),
  location: z.string().optional(),
  notes: z.string().optional(),
  organizer: PropertyCalendarEventOrganizer$inboundSchema.optional(),
  raw: z.lazy(() => CalendarEventRaw$inboundSchema).optional(),
  start_at: z.string(),
  status: CalendarEventStatus$inboundSchema.optional(),
  subject: z.string(),
  timezone: z.string().optional(),
  updated_at: z.string().optional(),
  web_url: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "calendar_id": "calendarId",
    "created_at": "createdAt",
    "end_at": "endAt",
    "is_all_day": "isAllDay",
    "is_free": "isFree",
    "is_private": "isPrivate",
    "start_at": "startAt",
    "updated_at": "updatedAt",
    "web_url": "webUrl",
  });
});

/** @internal */
export type CalendarEvent$Outbound = {
  attendees?: Array<CalendarAttendee$Outbound> | undefined;
  calendar_id?: string | undefined;
  created_at?: string | undefined;
  end_at: string;
  id?: string | undefined;
  is_all_day?: boolean | undefined;
  is_free?: boolean | undefined;
  is_private?: boolean | undefined;
  location?: string | undefined;
  notes?: string | undefined;
  organizer?: PropertyCalendarEventOrganizer$Outbound | undefined;
  raw?: CalendarEventRaw$Outbound | undefined;
  start_at: string;
  status?: string | undefined;
  subject: string;
  timezone?: string | undefined;
  updated_at?: string | undefined;
  web_url?: string | undefined;
};

/** @internal */
export const CalendarEvent$outboundSchema: z.ZodType<
  CalendarEvent$Outbound,
  z.ZodTypeDef,
  CalendarEvent
> = z.object({
  attendees: z.array(CalendarAttendee$outboundSchema).optional(),
  calendarId: z.string().optional(),
  createdAt: z.string().optional(),
  endAt: z.string(),
  id: z.string().optional(),
  isAllDay: z.boolean().optional(),
  isFree: z.boolean().optional(),
  isPrivate: z.boolean().optional(),
  location: z.string().optional(),
  notes: z.string().optional(),
  organizer: PropertyCalendarEventOrganizer$outboundSchema.optional(),
  raw: z.lazy(() => CalendarEventRaw$outboundSchema).optional(),
  startAt: z.string(),
  status: CalendarEventStatus$outboundSchema.optional(),
  subject: z.string(),
  timezone: z.string().optional(),
  updatedAt: z.string().optional(),
  webUrl: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    calendarId: "calendar_id",
    createdAt: "created_at",
    endAt: "end_at",
    isAllDay: "is_all_day",
    isFree: "is_free",
    isPrivate: "is_private",
    startAt: "start_at",
    updatedAt: "updated_at",
    webUrl: "web_url",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CalendarEvent$ {
  /** @deprecated use `CalendarEvent$inboundSchema` instead. */
  export const inboundSchema = CalendarEvent$inboundSchema;
  /** @deprecated use `CalendarEvent$outboundSchema` instead. */
  export const outboundSchema = CalendarEvent$outboundSchema;
  /** @deprecated use `CalendarEvent$Outbound` instead. */
  export type Outbound = CalendarEvent$Outbound;
}

export function calendarEventToJSON(calendarEvent: CalendarEvent): string {
  return JSON.stringify(CalendarEvent$outboundSchema.parse(calendarEvent));
}

export function calendarEventFromJSON(
  jsonString: string,
): SafeParseResult<CalendarEvent, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CalendarEvent$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CalendarEvent' from JSON`,
  );
}
