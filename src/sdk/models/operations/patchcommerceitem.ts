/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type PatchCommerceItemRequest = {
  commerceItem?: shared.CommerceItem | undefined;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the Item
   */
  id: string;
};

/** @internal */
export const PatchCommerceItemRequest$inboundSchema: z.ZodType<
  PatchCommerceItemRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  CommerceItem: shared.CommerceItem$inboundSchema.optional(),
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "CommerceItem": "commerceItem",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type PatchCommerceItemRequest$Outbound = {
  CommerceItem?: shared.CommerceItem$Outbound | undefined;
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const PatchCommerceItemRequest$outboundSchema: z.ZodType<
  PatchCommerceItemRequest$Outbound,
  z.ZodTypeDef,
  PatchCommerceItemRequest
> = z.object({
  commerceItem: shared.CommerceItem$outboundSchema.optional(),
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    commerceItem: "CommerceItem",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchCommerceItemRequest$ {
  /** @deprecated use `PatchCommerceItemRequest$inboundSchema` instead. */
  export const inboundSchema = PatchCommerceItemRequest$inboundSchema;
  /** @deprecated use `PatchCommerceItemRequest$outboundSchema` instead. */
  export const outboundSchema = PatchCommerceItemRequest$outboundSchema;
  /** @deprecated use `PatchCommerceItemRequest$Outbound` instead. */
  export type Outbound = PatchCommerceItemRequest$Outbound;
}

export function patchCommerceItemRequestToJSON(
  patchCommerceItemRequest: PatchCommerceItemRequest,
): string {
  return JSON.stringify(
    PatchCommerceItemRequest$outboundSchema.parse(patchCommerceItemRequest),
  );
}

export function patchCommerceItemRequestFromJSON(
  jsonString: string,
): SafeParseResult<PatchCommerceItemRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchCommerceItemRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchCommerceItemRequest' from JSON`,
  );
}
