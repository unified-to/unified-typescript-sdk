/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type UpdateHrisCompanyRequest = {
  hrisCompany?: shared.HrisCompany | undefined;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * ID of the Company
   */
  id: string;
};

/** @internal */
export const UpdateHrisCompanyRequest$inboundSchema: z.ZodType<
  UpdateHrisCompanyRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  HrisCompany: shared.HrisCompany$inboundSchema.optional(),
  connection_id: z.string(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "HrisCompany": "hrisCompany",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type UpdateHrisCompanyRequest$Outbound = {
  HrisCompany?: shared.HrisCompany$Outbound | undefined;
  connection_id: string;
  id: string;
};

/** @internal */
export const UpdateHrisCompanyRequest$outboundSchema: z.ZodType<
  UpdateHrisCompanyRequest$Outbound,
  z.ZodTypeDef,
  UpdateHrisCompanyRequest
> = z.object({
  hrisCompany: shared.HrisCompany$outboundSchema.optional(),
  connectionId: z.string(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    hrisCompany: "HrisCompany",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateHrisCompanyRequest$ {
  /** @deprecated use `UpdateHrisCompanyRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateHrisCompanyRequest$inboundSchema;
  /** @deprecated use `UpdateHrisCompanyRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateHrisCompanyRequest$outboundSchema;
  /** @deprecated use `UpdateHrisCompanyRequest$Outbound` instead. */
  export type Outbound = UpdateHrisCompanyRequest$Outbound;
}
