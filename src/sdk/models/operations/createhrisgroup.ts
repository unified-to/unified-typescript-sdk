/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type CreateHrisGroupRequest = {
  hrisGroup?: shared.HrisGroup | undefined;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
};

/** @internal */
export const CreateHrisGroupRequest$inboundSchema: z.ZodType<
  CreateHrisGroupRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  HrisGroup: shared.HrisGroup$inboundSchema.optional(),
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "HrisGroup": "hrisGroup",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type CreateHrisGroupRequest$Outbound = {
  HrisGroup?: shared.HrisGroup$Outbound | undefined;
  connection_id: string;
  fields?: Array<string> | undefined;
};

/** @internal */
export const CreateHrisGroupRequest$outboundSchema: z.ZodType<
  CreateHrisGroupRequest$Outbound,
  z.ZodTypeDef,
  CreateHrisGroupRequest
> = z.object({
  hrisGroup: shared.HrisGroup$outboundSchema.optional(),
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    hrisGroup: "HrisGroup",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateHrisGroupRequest$ {
  /** @deprecated use `CreateHrisGroupRequest$inboundSchema` instead. */
  export const inboundSchema = CreateHrisGroupRequest$inboundSchema;
  /** @deprecated use `CreateHrisGroupRequest$outboundSchema` instead. */
  export const outboundSchema = CreateHrisGroupRequest$outboundSchema;
  /** @deprecated use `CreateHrisGroupRequest$Outbound` instead. */
  export type Outbound = CreateHrisGroupRequest$Outbound;
}
