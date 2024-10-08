/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type PatchHrisEmployeeRequest = {
  hrisEmployee?: shared.HrisEmployee | undefined;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the Employee
   */
  id: string;
};

/** @internal */
export const PatchHrisEmployeeRequest$inboundSchema: z.ZodType<
  PatchHrisEmployeeRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  HrisEmployee: shared.HrisEmployee$inboundSchema.optional(),
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "HrisEmployee": "hrisEmployee",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type PatchHrisEmployeeRequest$Outbound = {
  HrisEmployee?: shared.HrisEmployee$Outbound | undefined;
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const PatchHrisEmployeeRequest$outboundSchema: z.ZodType<
  PatchHrisEmployeeRequest$Outbound,
  z.ZodTypeDef,
  PatchHrisEmployeeRequest
> = z.object({
  hrisEmployee: shared.HrisEmployee$outboundSchema.optional(),
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    hrisEmployee: "HrisEmployee",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchHrisEmployeeRequest$ {
  /** @deprecated use `PatchHrisEmployeeRequest$inboundSchema` instead. */
  export const inboundSchema = PatchHrisEmployeeRequest$inboundSchema;
  /** @deprecated use `PatchHrisEmployeeRequest$outboundSchema` instead. */
  export const outboundSchema = PatchHrisEmployeeRequest$outboundSchema;
  /** @deprecated use `PatchHrisEmployeeRequest$Outbound` instead. */
  export type Outbound = PatchHrisEmployeeRequest$Outbound;
}
