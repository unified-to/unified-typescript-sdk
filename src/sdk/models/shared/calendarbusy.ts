/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CalendarBusy = {
  description?: string | undefined;
  endAt: Date;
  id?: string | undefined;
  raw?: { [k: string]: any } | undefined;
  startAt: Date;
  timezone?: string | undefined;
};

/** @internal */
export const CalendarBusy$inboundSchema: z.ZodType<
  CalendarBusy,
  z.ZodTypeDef,
  unknown
> = z.object({
  description: z.string().optional(),
  end_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  id: z.string().optional(),
  raw: z.record(z.any()).optional(),
  start_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  timezone: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "end_at": "endAt",
    "start_at": "startAt",
  });
});

/** @internal */
export type CalendarBusy$Outbound = {
  description?: string | undefined;
  end_at: string;
  id?: string | undefined;
  raw?: { [k: string]: any } | undefined;
  start_at: string;
  timezone?: string | undefined;
};

/** @internal */
export const CalendarBusy$outboundSchema: z.ZodType<
  CalendarBusy$Outbound,
  z.ZodTypeDef,
  CalendarBusy
> = z.object({
  description: z.string().optional(),
  endAt: z.date().transform(v => v.toISOString()),
  id: z.string().optional(),
  raw: z.record(z.any()).optional(),
  startAt: z.date().transform(v => v.toISOString()),
  timezone: z.string().optional(),
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
export namespace CalendarBusy$ {
  /** @deprecated use `CalendarBusy$inboundSchema` instead. */
  export const inboundSchema = CalendarBusy$inboundSchema;
  /** @deprecated use `CalendarBusy$outboundSchema` instead. */
  export const outboundSchema = CalendarBusy$outboundSchema;
  /** @deprecated use `CalendarBusy$Outbound` instead. */
  export type Outbound = CalendarBusy$Outbound;
}

export function calendarBusyToJSON(calendarBusy: CalendarBusy): string {
  return JSON.stringify(CalendarBusy$outboundSchema.parse(calendarBusy));
}

export function calendarBusyFromJSON(
  jsonString: string,
): SafeParseResult<CalendarBusy, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CalendarBusy$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CalendarBusy' from JSON`,
  );
}
