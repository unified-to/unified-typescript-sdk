/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CalendarRecordingMedia,
  CalendarRecordingMedia$inboundSchema,
  CalendarRecordingMedia$Outbound,
  CalendarRecordingMedia$outboundSchema,
} from "./calendarrecordingmedia.js";

export type CalendarRecordingRaw = {};

export type CalendarRecording = {
  createdAt?: Date | undefined;
  endAt?: Date | undefined;
  eventId?: string | undefined;
  expiresAt?: Date | undefined;
  id?: string | undefined;
  media?: Array<CalendarRecordingMedia> | undefined;
  raw?: CalendarRecordingRaw | undefined;
  startAt?: Date | undefined;
  updatedAt?: Date | undefined;
  webUrl?: string | undefined;
};

/** @internal */
export const CalendarRecordingRaw$inboundSchema: z.ZodType<
  CalendarRecordingRaw,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type CalendarRecordingRaw$Outbound = {};

/** @internal */
export const CalendarRecordingRaw$outboundSchema: z.ZodType<
  CalendarRecordingRaw$Outbound,
  z.ZodTypeDef,
  CalendarRecordingRaw
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CalendarRecordingRaw$ {
  /** @deprecated use `CalendarRecordingRaw$inboundSchema` instead. */
  export const inboundSchema = CalendarRecordingRaw$inboundSchema;
  /** @deprecated use `CalendarRecordingRaw$outboundSchema` instead. */
  export const outboundSchema = CalendarRecordingRaw$outboundSchema;
  /** @deprecated use `CalendarRecordingRaw$Outbound` instead. */
  export type Outbound = CalendarRecordingRaw$Outbound;
}

export function calendarRecordingRawToJSON(
  calendarRecordingRaw: CalendarRecordingRaw,
): string {
  return JSON.stringify(
    CalendarRecordingRaw$outboundSchema.parse(calendarRecordingRaw),
  );
}

export function calendarRecordingRawFromJSON(
  jsonString: string,
): SafeParseResult<CalendarRecordingRaw, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CalendarRecordingRaw$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CalendarRecordingRaw' from JSON`,
  );
}

/** @internal */
export const CalendarRecording$inboundSchema: z.ZodType<
  CalendarRecording,
  z.ZodTypeDef,
  unknown
> = z.object({
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  end_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  event_id: z.string().optional(),
  expires_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  id: z.string().optional(),
  media: z.array(CalendarRecordingMedia$inboundSchema).optional(),
  raw: z.lazy(() => CalendarRecordingRaw$inboundSchema).optional(),
  start_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  web_url: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "end_at": "endAt",
    "event_id": "eventId",
    "expires_at": "expiresAt",
    "start_at": "startAt",
    "updated_at": "updatedAt",
    "web_url": "webUrl",
  });
});

/** @internal */
export type CalendarRecording$Outbound = {
  created_at?: string | undefined;
  end_at?: string | undefined;
  event_id?: string | undefined;
  expires_at?: string | undefined;
  id?: string | undefined;
  media?: Array<CalendarRecordingMedia$Outbound> | undefined;
  raw?: CalendarRecordingRaw$Outbound | undefined;
  start_at?: string | undefined;
  updated_at?: string | undefined;
  web_url?: string | undefined;
};

/** @internal */
export const CalendarRecording$outboundSchema: z.ZodType<
  CalendarRecording$Outbound,
  z.ZodTypeDef,
  CalendarRecording
> = z.object({
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  endAt: z.date().transform(v => v.toISOString()).optional(),
  eventId: z.string().optional(),
  expiresAt: z.date().transform(v => v.toISOString()).optional(),
  id: z.string().optional(),
  media: z.array(CalendarRecordingMedia$outboundSchema).optional(),
  raw: z.lazy(() => CalendarRecordingRaw$outboundSchema).optional(),
  startAt: z.date().transform(v => v.toISOString()).optional(),
  updatedAt: z.date().transform(v => v.toISOString()).optional(),
  webUrl: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    endAt: "end_at",
    eventId: "event_id",
    expiresAt: "expires_at",
    startAt: "start_at",
    updatedAt: "updated_at",
    webUrl: "web_url",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CalendarRecording$ {
  /** @deprecated use `CalendarRecording$inboundSchema` instead. */
  export const inboundSchema = CalendarRecording$inboundSchema;
  /** @deprecated use `CalendarRecording$outboundSchema` instead. */
  export const outboundSchema = CalendarRecording$outboundSchema;
  /** @deprecated use `CalendarRecording$Outbound` instead. */
  export type Outbound = CalendarRecording$Outbound;
}

export function calendarRecordingToJSON(
  calendarRecording: CalendarRecording,
): string {
  return JSON.stringify(
    CalendarRecording$outboundSchema.parse(calendarRecording),
  );
}

export function calendarRecordingFromJSON(
  jsonString: string,
): SafeParseResult<CalendarRecording, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CalendarRecording$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CalendarRecording' from JSON`,
  );
}
