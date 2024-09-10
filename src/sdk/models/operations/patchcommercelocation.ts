/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type PatchCommerceLocationRequest = {
  commerceLocation?: shared.CommerceLocation | undefined;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * ID of the Location
   */
  id: string;
};

/** @internal */
export const PatchCommerceLocationRequest$inboundSchema: z.ZodType<
  PatchCommerceLocationRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  CommerceLocation: shared.CommerceLocation$inboundSchema.optional(),
  connection_id: z.string(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "CommerceLocation": "commerceLocation",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type PatchCommerceLocationRequest$Outbound = {
  CommerceLocation?: shared.CommerceLocation$Outbound | undefined;
  connection_id: string;
  id: string;
};

/** @internal */
export const PatchCommerceLocationRequest$outboundSchema: z.ZodType<
  PatchCommerceLocationRequest$Outbound,
  z.ZodTypeDef,
  PatchCommerceLocationRequest
> = z.object({
  commerceLocation: shared.CommerceLocation$outboundSchema.optional(),
  connectionId: z.string(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    commerceLocation: "CommerceLocation",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchCommerceLocationRequest$ {
  /** @deprecated use `PatchCommerceLocationRequest$inboundSchema` instead. */
  export const inboundSchema = PatchCommerceLocationRequest$inboundSchema;
  /** @deprecated use `PatchCommerceLocationRequest$outboundSchema` instead. */
  export const outboundSchema = PatchCommerceLocationRequest$outboundSchema;
  /** @deprecated use `PatchCommerceLocationRequest$Outbound` instead. */
  export type Outbound = PatchCommerceLocationRequest$Outbound;
}
