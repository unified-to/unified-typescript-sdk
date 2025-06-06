/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type PatchCommerceLocationRequest = {
  commerceLocation: shared.CommerceLocation;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the Location
   */
  id: string;
  /**
   * Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar
   */
  raw?: string | undefined;
};

/** @internal */
export const PatchCommerceLocationRequest$inboundSchema: z.ZodType<
  PatchCommerceLocationRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  CommerceLocation: shared.CommerceLocation$inboundSchema,
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
  raw: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "CommerceLocation": "commerceLocation",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type PatchCommerceLocationRequest$Outbound = {
  CommerceLocation: shared.CommerceLocation$Outbound;
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
  raw?: string | undefined;
};

/** @internal */
export const PatchCommerceLocationRequest$outboundSchema: z.ZodType<
  PatchCommerceLocationRequest$Outbound,
  z.ZodTypeDef,
  PatchCommerceLocationRequest
> = z.object({
  commerceLocation: shared.CommerceLocation$outboundSchema,
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
  raw: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    commerceLocation: "CommerceLocation",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchCommerceLocationRequest$ {
  /** @deprecated use `PatchCommerceLocationRequest$inboundSchema` instead. */
  export const inboundSchema = PatchCommerceLocationRequest$inboundSchema;
  /** @deprecated use `PatchCommerceLocationRequest$outboundSchema` instead. */
  export const outboundSchema = PatchCommerceLocationRequest$outboundSchema;
  /** @deprecated use `PatchCommerceLocationRequest$Outbound` instead. */
  export type Outbound = PatchCommerceLocationRequest$Outbound;
}

export function patchCommerceLocationRequestToJSON(
  patchCommerceLocationRequest: PatchCommerceLocationRequest,
): string {
  return JSON.stringify(
    PatchCommerceLocationRequest$outboundSchema.parse(
      patchCommerceLocationRequest,
    ),
  );
}

export function patchCommerceLocationRequestFromJSON(
  jsonString: string,
): SafeParseResult<PatchCommerceLocationRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchCommerceLocationRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchCommerceLocationRequest' from JSON`,
  );
}
