/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type RemoveAccountingJournalRequest = {
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * ID of the Journal
   */
  id: string;
};

/** @internal */
export const RemoveAccountingJournalRequest$inboundSchema: z.ZodType<
  RemoveAccountingJournalRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  connection_id: z.string(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "connection_id": "connectionId",
  });
});

/** @internal */
export type RemoveAccountingJournalRequest$Outbound = {
  connection_id: string;
  id: string;
};

/** @internal */
export const RemoveAccountingJournalRequest$outboundSchema: z.ZodType<
  RemoveAccountingJournalRequest$Outbound,
  z.ZodTypeDef,
  RemoveAccountingJournalRequest
> = z.object({
  connectionId: z.string(),
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
export namespace RemoveAccountingJournalRequest$ {
  /** @deprecated use `RemoveAccountingJournalRequest$inboundSchema` instead. */
  export const inboundSchema = RemoveAccountingJournalRequest$inboundSchema;
  /** @deprecated use `RemoveAccountingJournalRequest$outboundSchema` instead. */
  export const outboundSchema = RemoveAccountingJournalRequest$outboundSchema;
  /** @deprecated use `RemoveAccountingJournalRequest$Outbound` instead. */
  export type Outbound = RemoveAccountingJournalRequest$Outbound;
}
