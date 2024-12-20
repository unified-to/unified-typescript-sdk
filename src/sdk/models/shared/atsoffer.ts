/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AtsOffer = {};

/** @internal */
export const AtsOffer$inboundSchema: z.ZodType<
  AtsOffer,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type AtsOffer$Outbound = {};

/** @internal */
export const AtsOffer$outboundSchema: z.ZodType<
  AtsOffer$Outbound,
  z.ZodTypeDef,
  AtsOffer
> = z.object({});

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
