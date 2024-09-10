/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type GetUcContactRequest = {
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the Contact
   */
  id: string;
};

/** @internal */
export const GetUcContactRequest$inboundSchema: z.ZodType<
  GetUcContactRequest,
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
export type GetUcContactRequest$Outbound = {
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const GetUcContactRequest$outboundSchema: z.ZodType<
  GetUcContactRequest$Outbound,
  z.ZodTypeDef,
  GetUcContactRequest
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
export namespace GetUcContactRequest$ {
  /** @deprecated use `GetUcContactRequest$inboundSchema` instead. */
  export const inboundSchema = GetUcContactRequest$inboundSchema;
  /** @deprecated use `GetUcContactRequest$outboundSchema` instead. */
  export const outboundSchema = GetUcContactRequest$outboundSchema;
  /** @deprecated use `GetUcContactRequest$Outbound` instead. */
  export type Outbound = GetUcContactRequest$Outbound;
}
