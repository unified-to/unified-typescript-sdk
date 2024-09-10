/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type GetCrmContactRequest = {
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
export const GetCrmContactRequest$inboundSchema: z.ZodType<
  GetCrmContactRequest,
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
export type GetCrmContactRequest$Outbound = {
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const GetCrmContactRequest$outboundSchema: z.ZodType<
  GetCrmContactRequest$Outbound,
  z.ZodTypeDef,
  GetCrmContactRequest
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
export namespace GetCrmContactRequest$ {
  /** @deprecated use `GetCrmContactRequest$inboundSchema` instead. */
  export const inboundSchema = GetCrmContactRequest$inboundSchema;
  /** @deprecated use `GetCrmContactRequest$outboundSchema` instead. */
  export const outboundSchema = GetCrmContactRequest$outboundSchema;
  /** @deprecated use `GetCrmContactRequest$Outbound` instead. */
  export type Outbound = GetCrmContactRequest$Outbound;
}
