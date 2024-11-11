/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type UpdateRepoBranchRequest = {
  repoBranch?: shared.RepoBranch | undefined;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the Branch
   */
  id: string;
};

/** @internal */
export const UpdateRepoBranchRequest$inboundSchema: z.ZodType<
  UpdateRepoBranchRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  RepoBranch: shared.RepoBranch$inboundSchema.optional(),
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "RepoBranch": "repoBranch",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type UpdateRepoBranchRequest$Outbound = {
  RepoBranch?: shared.RepoBranch$Outbound | undefined;
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const UpdateRepoBranchRequest$outboundSchema: z.ZodType<
  UpdateRepoBranchRequest$Outbound,
  z.ZodTypeDef,
  UpdateRepoBranchRequest
> = z.object({
  repoBranch: shared.RepoBranch$outboundSchema.optional(),
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    repoBranch: "RepoBranch",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateRepoBranchRequest$ {
  /** @deprecated use `UpdateRepoBranchRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateRepoBranchRequest$inboundSchema;
  /** @deprecated use `UpdateRepoBranchRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateRepoBranchRequest$outboundSchema;
  /** @deprecated use `UpdateRepoBranchRequest$Outbound` instead. */
  export type Outbound = UpdateRepoBranchRequest$Outbound;
}