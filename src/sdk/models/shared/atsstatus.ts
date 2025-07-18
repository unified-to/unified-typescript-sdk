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

export const AtsStatusStatus = {
  New: "NEW",
  Reviewing: "REVIEWING",
  Screening: "SCREENING",
  Submitted: "SUBMITTED",
  FirstInterview: "FIRST_INTERVIEW",
  SecondInterview: "SECOND_INTERVIEW",
  ThirdInterview: "THIRD_INTERVIEW",
  BackgroundCheck: "BACKGROUND_CHECK",
  Offered: "OFFERED",
  Accepted: "ACCEPTED",
  Hired: "HIRED",
  Rejected: "REJECTED",
  Declined: "DECLINED",
  Withdrawn: "WITHDRAWN",
} as const;
export type AtsStatusStatus = OpenEnum<typeof AtsStatusStatus>;

export type AtsStatus = {
  description?: string | undefined;
  id?: string | undefined;
  originalStatus?: string | undefined;
  raw?: { [k: string]: any } | undefined;
  status?: AtsStatusStatus | undefined;
};

/** @internal */
export const AtsStatusStatus$inboundSchema: z.ZodType<
  AtsStatusStatus,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(AtsStatusStatus),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const AtsStatusStatus$outboundSchema: z.ZodType<
  AtsStatusStatus,
  z.ZodTypeDef,
  AtsStatusStatus
> = z.union([
  z.nativeEnum(AtsStatusStatus),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsStatusStatus$ {
  /** @deprecated use `AtsStatusStatus$inboundSchema` instead. */
  export const inboundSchema = AtsStatusStatus$inboundSchema;
  /** @deprecated use `AtsStatusStatus$outboundSchema` instead. */
  export const outboundSchema = AtsStatusStatus$outboundSchema;
}

/** @internal */
export const AtsStatus$inboundSchema: z.ZodType<
  AtsStatus,
  z.ZodTypeDef,
  unknown
> = z.object({
  description: z.string().optional(),
  id: z.string().optional(),
  original_status: z.string().optional(),
  raw: z.record(z.any()).optional(),
  status: AtsStatusStatus$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "original_status": "originalStatus",
  });
});

/** @internal */
export type AtsStatus$Outbound = {
  description?: string | undefined;
  id?: string | undefined;
  original_status?: string | undefined;
  raw?: { [k: string]: any } | undefined;
  status?: string | undefined;
};

/** @internal */
export const AtsStatus$outboundSchema: z.ZodType<
  AtsStatus$Outbound,
  z.ZodTypeDef,
  AtsStatus
> = z.object({
  description: z.string().optional(),
  id: z.string().optional(),
  originalStatus: z.string().optional(),
  raw: z.record(z.any()).optional(),
  status: AtsStatusStatus$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    originalStatus: "original_status",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsStatus$ {
  /** @deprecated use `AtsStatus$inboundSchema` instead. */
  export const inboundSchema = AtsStatus$inboundSchema;
  /** @deprecated use `AtsStatus$outboundSchema` instead. */
  export const outboundSchema = AtsStatus$outboundSchema;
  /** @deprecated use `AtsStatus$Outbound` instead. */
  export type Outbound = AtsStatus$Outbound;
}

export function atsStatusToJSON(atsStatus: AtsStatus): string {
  return JSON.stringify(AtsStatus$outboundSchema.parse(atsStatus));
}

export function atsStatusFromJSON(
  jsonString: string,
): SafeParseResult<AtsStatus, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AtsStatus$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsStatus' from JSON`,
  );
}
