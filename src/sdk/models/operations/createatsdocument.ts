/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type CreateAtsDocumentRequest = {
  atsDocument?: shared.AtsDocument | undefined;
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
export const CreateAtsDocumentRequest$inboundSchema: z.ZodType<
  CreateAtsDocumentRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  AtsDocument: shared.AtsDocument$inboundSchema.optional(),
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "AtsDocument": "atsDocument",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type CreateAtsDocumentRequest$Outbound = {
  AtsDocument?: shared.AtsDocument$Outbound | undefined;
  connection_id: string;
  fields?: Array<string> | undefined;
};

/** @internal */
export const CreateAtsDocumentRequest$outboundSchema: z.ZodType<
  CreateAtsDocumentRequest$Outbound,
  z.ZodTypeDef,
  CreateAtsDocumentRequest
> = z.object({
  atsDocument: shared.AtsDocument$outboundSchema.optional(),
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    atsDocument: "AtsDocument",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateAtsDocumentRequest$ {
  /** @deprecated use `CreateAtsDocumentRequest$inboundSchema` instead. */
  export const inboundSchema = CreateAtsDocumentRequest$inboundSchema;
  /** @deprecated use `CreateAtsDocumentRequest$outboundSchema` instead. */
  export const outboundSchema = CreateAtsDocumentRequest$outboundSchema;
  /** @deprecated use `CreateAtsDocumentRequest$Outbound` instead. */
  export type Outbound = CreateAtsDocumentRequest$Outbound;
}
