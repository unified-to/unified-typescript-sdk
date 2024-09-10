/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type PatchAtsDocumentRequest = {
  atsDocument?: shared.AtsDocument | undefined;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * ID of the Document
   */
  id: string;
};

/** @internal */
export const PatchAtsDocumentRequest$inboundSchema: z.ZodType<
  PatchAtsDocumentRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  AtsDocument: shared.AtsDocument$inboundSchema.optional(),
  connection_id: z.string(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "AtsDocument": "atsDocument",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type PatchAtsDocumentRequest$Outbound = {
  AtsDocument?: shared.AtsDocument$Outbound | undefined;
  connection_id: string;
  id: string;
};

/** @internal */
export const PatchAtsDocumentRequest$outboundSchema: z.ZodType<
  PatchAtsDocumentRequest$Outbound,
  z.ZodTypeDef,
  PatchAtsDocumentRequest
> = z.object({
  atsDocument: shared.AtsDocument$outboundSchema.optional(),
  connectionId: z.string(),
  id: z.string(),
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
export namespace PatchAtsDocumentRequest$ {
  /** @deprecated use `PatchAtsDocumentRequest$inboundSchema` instead. */
  export const inboundSchema = PatchAtsDocumentRequest$inboundSchema;
  /** @deprecated use `PatchAtsDocumentRequest$outboundSchema` instead. */
  export const outboundSchema = PatchAtsDocumentRequest$outboundSchema;
  /** @deprecated use `PatchAtsDocumentRequest$Outbound` instead. */
  export type Outbound = PatchAtsDocumentRequest$Outbound;
}
