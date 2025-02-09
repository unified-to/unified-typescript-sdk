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
  AtsCompensation,
  AtsCompensation$inboundSchema,
  AtsCompensation$Outbound,
  AtsCompensation$outboundSchema,
} from "./atscompensation.js";

export type AtsOfferRaw = {};

export const AtsOfferStatus = {
  Created: "CREATED",
  Sent: "SENT",
  Accepted: "ACCEPTED",
  Rejected: "REJECTED",
} as const;
export type AtsOfferStatus = ClosedEnum<typeof AtsOfferStatus>;

export type AtsOffer = {
  acceptedAt?: Date | undefined;
  /**
   * compensation details for the offer
   */
  compensation?: Array<AtsCompensation> | undefined;
  createdAt?: Date | undefined;
  creatorUserId?: string | undefined;
  employeeUserId?: string | undefined;
  id?: string | undefined;
  raw?: AtsOfferRaw | undefined;
  rejectedAt?: Date | undefined;
  sentAt?: Date | undefined;
  startAt?: Date | undefined;
  status?: AtsOfferStatus | undefined;
  updatedAt?: Date | undefined;
};

/** @internal */
export const AtsOfferRaw$inboundSchema: z.ZodType<
  AtsOfferRaw,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type AtsOfferRaw$Outbound = {};

/** @internal */
export const AtsOfferRaw$outboundSchema: z.ZodType<
  AtsOfferRaw$Outbound,
  z.ZodTypeDef,
  AtsOfferRaw
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsOfferRaw$ {
  /** @deprecated use `AtsOfferRaw$inboundSchema` instead. */
  export const inboundSchema = AtsOfferRaw$inboundSchema;
  /** @deprecated use `AtsOfferRaw$outboundSchema` instead. */
  export const outboundSchema = AtsOfferRaw$outboundSchema;
  /** @deprecated use `AtsOfferRaw$Outbound` instead. */
  export type Outbound = AtsOfferRaw$Outbound;
}

export function atsOfferRawToJSON(atsOfferRaw: AtsOfferRaw): string {
  return JSON.stringify(AtsOfferRaw$outboundSchema.parse(atsOfferRaw));
}

export function atsOfferRawFromJSON(
  jsonString: string,
): SafeParseResult<AtsOfferRaw, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AtsOfferRaw$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsOfferRaw' from JSON`,
  );
}

/** @internal */
export const AtsOfferStatus$inboundSchema: z.ZodNativeEnum<
  typeof AtsOfferStatus
> = z.nativeEnum(AtsOfferStatus);

/** @internal */
export const AtsOfferStatus$outboundSchema: z.ZodNativeEnum<
  typeof AtsOfferStatus
> = AtsOfferStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsOfferStatus$ {
  /** @deprecated use `AtsOfferStatus$inboundSchema` instead. */
  export const inboundSchema = AtsOfferStatus$inboundSchema;
  /** @deprecated use `AtsOfferStatus$outboundSchema` instead. */
  export const outboundSchema = AtsOfferStatus$outboundSchema;
}

/** @internal */
export const AtsOffer$inboundSchema: z.ZodType<
  AtsOffer,
  z.ZodTypeDef,
  unknown
> = z.object({
  accepted_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  compensation: z.array(AtsCompensation$inboundSchema).optional(),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  creator_user_id: z.string().optional(),
  employee_user_id: z.string().optional(),
  id: z.string().optional(),
  raw: z.lazy(() => AtsOfferRaw$inboundSchema).optional(),
  rejected_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  sent_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  start_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  status: AtsOfferStatus$inboundSchema.optional(),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "accepted_at": "acceptedAt",
    "created_at": "createdAt",
    "creator_user_id": "creatorUserId",
    "employee_user_id": "employeeUserId",
    "rejected_at": "rejectedAt",
    "sent_at": "sentAt",
    "start_at": "startAt",
    "updated_at": "updatedAt",
  });
});

/** @internal */
export type AtsOffer$Outbound = {
  accepted_at?: string | undefined;
  compensation?: Array<AtsCompensation$Outbound> | undefined;
  created_at?: string | undefined;
  creator_user_id?: string | undefined;
  employee_user_id?: string | undefined;
  id?: string | undefined;
  raw?: AtsOfferRaw$Outbound | undefined;
  rejected_at?: string | undefined;
  sent_at?: string | undefined;
  start_at?: string | undefined;
  status?: string | undefined;
  updated_at?: string | undefined;
};

/** @internal */
export const AtsOffer$outboundSchema: z.ZodType<
  AtsOffer$Outbound,
  z.ZodTypeDef,
  AtsOffer
> = z.object({
  acceptedAt: z.date().transform(v => v.toISOString()).optional(),
  compensation: z.array(AtsCompensation$outboundSchema).optional(),
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  creatorUserId: z.string().optional(),
  employeeUserId: z.string().optional(),
  id: z.string().optional(),
  raw: z.lazy(() => AtsOfferRaw$outboundSchema).optional(),
  rejectedAt: z.date().transform(v => v.toISOString()).optional(),
  sentAt: z.date().transform(v => v.toISOString()).optional(),
  startAt: z.date().transform(v => v.toISOString()).optional(),
  status: AtsOfferStatus$outboundSchema.optional(),
  updatedAt: z.date().transform(v => v.toISOString()).optional(),
}).transform((v) => {
  return remap$(v, {
    acceptedAt: "accepted_at",
    createdAt: "created_at",
    creatorUserId: "creator_user_id",
    employeeUserId: "employee_user_id",
    rejectedAt: "rejected_at",
    sentAt: "sent_at",
    startAt: "start_at",
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsOffer$ {
  /** @deprecated use `AtsOffer$inboundSchema` instead. */
  export const inboundSchema = AtsOffer$inboundSchema;
  /** @deprecated use `AtsOffer$outboundSchema` instead. */
  export const outboundSchema = AtsOffer$outboundSchema;
  /** @deprecated use `AtsOffer$Outbound` instead. */
  export type Outbound = AtsOffer$Outbound;
}

export function atsOfferToJSON(atsOffer: AtsOffer): string {
  return JSON.stringify(AtsOffer$outboundSchema.parse(atsOffer));
}

export function atsOfferFromJSON(
  jsonString: string,
): SafeParseResult<AtsOffer, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AtsOffer$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsOffer' from JSON`,
  );
}
