/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type UpdateCommerceLocationRequest = {
  commerceLocation?: shared.CommerceLocation | undefined;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the Location
   */
  id: string;
};

/** @internal */
export const UpdateCommerceLocationRequest$inboundSchema: z.ZodType<
  UpdateCommerceLocationRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  CommerceLocation: shared.CommerceLocation$inboundSchema.optional(),
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "CommerceLocation": "commerceLocation",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type UpdateCommerceLocationRequest$Outbound = {
  CommerceLocation?: shared.CommerceLocation$Outbound | undefined;
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const UpdateCommerceLocationRequest$outboundSchema: z.ZodType<
  UpdateCommerceLocationRequest$Outbound,
  z.ZodTypeDef,
  UpdateCommerceLocationRequest
> = z.object({
  commerceLocation: shared.CommerceLocation$outboundSchema.optional(),
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
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
export namespace UpdateCommerceLocationRequest$ {
  /** @deprecated use `UpdateCommerceLocationRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateCommerceLocationRequest$inboundSchema;
  /** @deprecated use `UpdateCommerceLocationRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateCommerceLocationRequest$outboundSchema;
  /** @deprecated use `UpdateCommerceLocationRequest$Outbound` instead. */
  export type Outbound = UpdateCommerceLocationRequest$Outbound;
}
