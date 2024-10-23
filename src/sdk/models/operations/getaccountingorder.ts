/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type GetAccountingOrderRequest = {
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the Order
   */
  id: string;
};

/** @internal */
export const GetAccountingOrderRequest$inboundSchema: z.ZodType<
  GetAccountingOrderRequest,
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
export type GetAccountingOrderRequest$Outbound = {
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const GetAccountingOrderRequest$outboundSchema: z.ZodType<
  GetAccountingOrderRequest$Outbound,
  z.ZodTypeDef,
  GetAccountingOrderRequest
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
export namespace GetAccountingOrderRequest$ {
  /** @deprecated use `GetAccountingOrderRequest$inboundSchema` instead. */
  export const inboundSchema = GetAccountingOrderRequest$inboundSchema;
  /** @deprecated use `GetAccountingOrderRequest$outboundSchema` instead. */
  export const outboundSchema = GetAccountingOrderRequest$outboundSchema;
  /** @deprecated use `GetAccountingOrderRequest$Outbound` instead. */
  export type Outbound = GetAccountingOrderRequest$Outbound;
}
