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

export const PropertyCalendarEventOrganizerStatus = {
  Accepted: "ACCEPTED",
  Rejected: "REJECTED",
  Tentative: "TENTATIVE",
} as const;
export type PropertyCalendarEventOrganizerStatus = OpenEnum<
  typeof PropertyCalendarEventOrganizerStatus
>;

export type PropertyCalendarEventOrganizer = {
  email?: string | undefined;
  name?: string | undefined;
  required?: boolean | undefined;
  status?: PropertyCalendarEventOrganizerStatus | undefined;
  userId?: string | undefined;
};

/** @internal */
export const PropertyCalendarEventOrganizerStatus$inboundSchema: z.ZodType<
  PropertyCalendarEventOrganizerStatus,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(PropertyCalendarEventOrganizerStatus),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const PropertyCalendarEventOrganizerStatus$outboundSchema: z.ZodType<
  PropertyCalendarEventOrganizerStatus,
  z.ZodTypeDef,
  PropertyCalendarEventOrganizerStatus
> = z.union([
  z.nativeEnum(PropertyCalendarEventOrganizerStatus),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PropertyCalendarEventOrganizerStatus$ {
  /** @deprecated use `PropertyCalendarEventOrganizerStatus$inboundSchema` instead. */
  export const inboundSchema =
    PropertyCalendarEventOrganizerStatus$inboundSchema;
  /** @deprecated use `PropertyCalendarEventOrganizerStatus$outboundSchema` instead. */
  export const outboundSchema =
    PropertyCalendarEventOrganizerStatus$outboundSchema;
}

/** @internal */
export const PropertyCalendarEventOrganizer$inboundSchema: z.ZodType<
  PropertyCalendarEventOrganizer,
  z.ZodTypeDef,
  unknown
> = z.object({
  email: z.string().optional(),
  name: z.string().optional(),
  required: z.boolean().optional(),
  status: PropertyCalendarEventOrganizerStatus$inboundSchema.optional(),
  user_id: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "user_id": "userId",
  });
});

/** @internal */
export type PropertyCalendarEventOrganizer$Outbound = {
  email?: string | undefined;
  name?: string | undefined;
  required?: boolean | undefined;
  status?: string | undefined;
  user_id?: string | undefined;
};

/** @internal */
export const PropertyCalendarEventOrganizer$outboundSchema: z.ZodType<
  PropertyCalendarEventOrganizer$Outbound,
  z.ZodTypeDef,
  PropertyCalendarEventOrganizer
> = z.object({
  email: z.string().optional(),
  name: z.string().optional(),
  required: z.boolean().optional(),
  status: PropertyCalendarEventOrganizerStatus$outboundSchema.optional(),
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
export namespace PropertyCalendarEventOrganizer$ {
  /** @deprecated use `PropertyCalendarEventOrganizer$inboundSchema` instead. */
  export const inboundSchema = PropertyCalendarEventOrganizer$inboundSchema;
  /** @deprecated use `PropertyCalendarEventOrganizer$outboundSchema` instead. */
  export const outboundSchema = PropertyCalendarEventOrganizer$outboundSchema;
  /** @deprecated use `PropertyCalendarEventOrganizer$Outbound` instead. */
  export type Outbound = PropertyCalendarEventOrganizer$Outbound;
}

export function propertyCalendarEventOrganizerToJSON(
  propertyCalendarEventOrganizer: PropertyCalendarEventOrganizer,
): string {
  return JSON.stringify(
    PropertyCalendarEventOrganizer$outboundSchema.parse(
      propertyCalendarEventOrganizer,
    ),
  );
}

export function propertyCalendarEventOrganizerFromJSON(
  jsonString: string,
): SafeParseResult<PropertyCalendarEventOrganizer, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PropertyCalendarEventOrganizer$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PropertyCalendarEventOrganizer' from JSON`,
  );
}
