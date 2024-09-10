/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type GetCrmLeadRequest = {
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the Lead
   */
  id: string;
};

/** @internal */
export const GetCrmLeadRequest$inboundSchema: z.ZodType<
  GetCrmLeadRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "connection_id": "connectionId",
  });
});

/** @internal */
export type GetCrmLeadRequest$Outbound = {
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const GetCrmLeadRequest$outboundSchema: z.ZodType<
  GetCrmLeadRequest$Outbound,
  z.ZodTypeDef,
  GetCrmLeadRequest
> = z.object({
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCrmLeadRequest$ {
  /** @deprecated use `GetCrmLeadRequest$inboundSchema` instead. */
  export const inboundSchema = GetCrmLeadRequest$inboundSchema;
  /** @deprecated use `GetCrmLeadRequest$outboundSchema` instead. */
  export const outboundSchema = GetCrmLeadRequest$outboundSchema;
  /** @deprecated use `GetCrmLeadRequest$Outbound` instead. */
  export type Outbound = GetCrmLeadRequest$Outbound;
}
