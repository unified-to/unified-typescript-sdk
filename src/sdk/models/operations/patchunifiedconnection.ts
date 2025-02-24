/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type PatchUnifiedConnectionRequest = {
  /**
   * A connection represents a specific authentication of an integration.
   */
  connection: shared.Connection;
  /**
   * ID of the Connection
   */
  id: string;
};

/** @internal */
export const PatchUnifiedConnectionRequest$inboundSchema: z.ZodType<
  PatchUnifiedConnectionRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  Connection: shared.Connection$inboundSchema,
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "Connection": "connection",
  });
});

/** @internal */
export type PatchUnifiedConnectionRequest$Outbound = {
  Connection: shared.Connection$Outbound;
  id: string;
};

/** @internal */
export const PatchUnifiedConnectionRequest$outboundSchema: z.ZodType<
  PatchUnifiedConnectionRequest$Outbound,
  z.ZodTypeDef,
  PatchUnifiedConnectionRequest
> = z.object({
  connection: shared.Connection$outboundSchema,
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    connection: "Connection",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchUnifiedConnectionRequest$ {
  /** @deprecated use `PatchUnifiedConnectionRequest$inboundSchema` instead. */
  export const inboundSchema = PatchUnifiedConnectionRequest$inboundSchema;
  /** @deprecated use `PatchUnifiedConnectionRequest$outboundSchema` instead. */
  export const outboundSchema = PatchUnifiedConnectionRequest$outboundSchema;
  /** @deprecated use `PatchUnifiedConnectionRequest$Outbound` instead. */
  export type Outbound = PatchUnifiedConnectionRequest$Outbound;
}

export function patchUnifiedConnectionRequestToJSON(
  patchUnifiedConnectionRequest: PatchUnifiedConnectionRequest,
): string {
  return JSON.stringify(
    PatchUnifiedConnectionRequest$outboundSchema.parse(
      patchUnifiedConnectionRequest,
    ),
  );
}

export function patchUnifiedConnectionRequestFromJSON(
  jsonString: string,
): SafeParseResult<PatchUnifiedConnectionRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchUnifiedConnectionRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchUnifiedConnectionRequest' from JSON`,
  );
}
