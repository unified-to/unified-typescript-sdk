/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type UpdateLmsClassRequest = {
  lmsClass?: shared.LmsClass | undefined;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the Class
   */
  id: string;
};

/** @internal */
export const UpdateLmsClassRequest$inboundSchema: z.ZodType<
  UpdateLmsClassRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  LmsClass: shared.LmsClass$inboundSchema.optional(),
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "LmsClass": "lmsClass",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type UpdateLmsClassRequest$Outbound = {
  LmsClass?: shared.LmsClass$Outbound | undefined;
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const UpdateLmsClassRequest$outboundSchema: z.ZodType<
  UpdateLmsClassRequest$Outbound,
  z.ZodTypeDef,
  UpdateLmsClassRequest
> = z.object({
  lmsClass: shared.LmsClass$outboundSchema.optional(),
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    lmsClass: "LmsClass",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateLmsClassRequest$ {
  /** @deprecated use `UpdateLmsClassRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateLmsClassRequest$inboundSchema;
  /** @deprecated use `UpdateLmsClassRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateLmsClassRequest$outboundSchema;
  /** @deprecated use `UpdateLmsClassRequest$Outbound` instead. */
  export type Outbound = UpdateLmsClassRequest$Outbound;
}
