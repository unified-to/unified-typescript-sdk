/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type UpdateCalendarCalendarRequest = {
  calendarCalendar: shared.CalendarCalendar;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the Calendar
   */
  id: string;
  /**
   * Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar
   */
  raw?: string | undefined;
};

/** @internal */
export const UpdateCalendarCalendarRequest$inboundSchema: z.ZodType<
  UpdateCalendarCalendarRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  CalendarCalendar: shared.CalendarCalendar$inboundSchema,
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
  raw: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "CalendarCalendar": "calendarCalendar",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type UpdateCalendarCalendarRequest$Outbound = {
  CalendarCalendar: shared.CalendarCalendar$Outbound;
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
  raw?: string | undefined;
};

/** @internal */
export const UpdateCalendarCalendarRequest$outboundSchema: z.ZodType<
  UpdateCalendarCalendarRequest$Outbound,
  z.ZodTypeDef,
  UpdateCalendarCalendarRequest
> = z.object({
  calendarCalendar: shared.CalendarCalendar$outboundSchema,
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
  raw: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    calendarCalendar: "CalendarCalendar",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateCalendarCalendarRequest$ {
  /** @deprecated use `UpdateCalendarCalendarRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateCalendarCalendarRequest$inboundSchema;
  /** @deprecated use `UpdateCalendarCalendarRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateCalendarCalendarRequest$outboundSchema;
  /** @deprecated use `UpdateCalendarCalendarRequest$Outbound` instead. */
  export type Outbound = UpdateCalendarCalendarRequest$Outbound;
}

export function updateCalendarCalendarRequestToJSON(
  updateCalendarCalendarRequest: UpdateCalendarCalendarRequest,
): string {
  return JSON.stringify(
    UpdateCalendarCalendarRequest$outboundSchema.parse(
      updateCalendarCalendarRequest,
    ),
  );
}

export function updateCalendarCalendarRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateCalendarCalendarRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateCalendarCalendarRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateCalendarCalendarRequest' from JSON`,
  );
}
