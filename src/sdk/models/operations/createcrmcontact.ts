/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type CreateCrmContactRequest = {
  /**
   * A contact represents a person that optionally is associated with a deal and/or a company
   */
  crmContact?: shared.CrmContact | undefined;
  /**
   * ID of the connection
   */
  connectionId: string;
};

/** @internal */
export const CreateCrmContactRequest$inboundSchema: z.ZodType<
  CreateCrmContactRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  CrmContact: shared.CrmContact$inboundSchema.optional(),
  connection_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "CrmContact": "crmContact",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type CreateCrmContactRequest$Outbound = {
  CrmContact?: shared.CrmContact$Outbound | undefined;
  connection_id: string;
};

/** @internal */
export const CreateCrmContactRequest$outboundSchema: z.ZodType<
  CreateCrmContactRequest$Outbound,
  z.ZodTypeDef,
  CreateCrmContactRequest
> = z.object({
  crmContact: shared.CrmContact$outboundSchema.optional(),
  connectionId: z.string(),
}).transform((v) => {
  return remap$(v, {
    crmContact: "CrmContact",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCrmContactRequest$ {
  /** @deprecated use `CreateCrmContactRequest$inboundSchema` instead. */
  export const inboundSchema = CreateCrmContactRequest$inboundSchema;
  /** @deprecated use `CreateCrmContactRequest$outboundSchema` instead. */
  export const outboundSchema = CreateCrmContactRequest$outboundSchema;
  /** @deprecated use `CreateCrmContactRequest$Outbound` instead. */
  export type Outbound = CreateCrmContactRequest$Outbound;
}
