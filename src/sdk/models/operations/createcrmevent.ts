/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type CreateCrmEventRequest = {
  /**
   * An event represents an event, activity, or engagement and is always associated with a deal, contact, or company
   */
  crmEvent?: shared.CrmEvent | undefined;
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
export const CreateCrmEventRequest$inboundSchema: z.ZodType<
  CreateCrmEventRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  CrmEvent: shared.CrmEvent$inboundSchema.optional(),
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "CrmEvent": "crmEvent",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type CreateCrmEventRequest$Outbound = {
  CrmEvent?: shared.CrmEvent$Outbound | undefined;
  connection_id: string;
  fields?: Array<string> | undefined;
};

/** @internal */
export const CreateCrmEventRequest$outboundSchema: z.ZodType<
  CreateCrmEventRequest$Outbound,
  z.ZodTypeDef,
  CreateCrmEventRequest
> = z.object({
  crmEvent: shared.CrmEvent$outboundSchema.optional(),
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    crmEvent: "CrmEvent",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCrmEventRequest$ {
  /** @deprecated use `CreateCrmEventRequest$inboundSchema` instead. */
  export const inboundSchema = CreateCrmEventRequest$inboundSchema;
  /** @deprecated use `CreateCrmEventRequest$outboundSchema` instead. */
  export const outboundSchema = CreateCrmEventRequest$outboundSchema;
  /** @deprecated use `CreateCrmEventRequest$Outbound` instead. */
  export type Outbound = CreateCrmEventRequest$Outbound;
}
