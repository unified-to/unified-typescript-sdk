/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const PropertyAtsJobPublicJobUrls = {
  Unknown: "",
} as const;
export type PropertyAtsJobPublicJobUrls = ClosedEnum<
  typeof PropertyAtsJobPublicJobUrls
>;

/** @internal */
export const PropertyAtsJobPublicJobUrls$inboundSchema: z.ZodNativeEnum<
  typeof PropertyAtsJobPublicJobUrls
> = z.nativeEnum(PropertyAtsJobPublicJobUrls);

/** @internal */
export const PropertyAtsJobPublicJobUrls$outboundSchema: z.ZodNativeEnum<
  typeof PropertyAtsJobPublicJobUrls
> = PropertyAtsJobPublicJobUrls$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PropertyAtsJobPublicJobUrls$ {
  /** @deprecated use `PropertyAtsJobPublicJobUrls$inboundSchema` instead. */
  export const inboundSchema = PropertyAtsJobPublicJobUrls$inboundSchema;
  /** @deprecated use `PropertyAtsJobPublicJobUrls$outboundSchema` instead. */
  export const outboundSchema = PropertyAtsJobPublicJobUrls$outboundSchema;
}
