/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type PatchScimGroupsRequest = {
  scimGroup?: shared.ScimGroup | undefined;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * ID of the Group
   */
  id: string;
};

/** @internal */
export const PatchScimGroupsRequest$inboundSchema: z.ZodType<
  PatchScimGroupsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  ScimGroup: shared.ScimGroup$inboundSchema.optional(),
  connection_id: z.string(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "ScimGroup": "scimGroup",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type PatchScimGroupsRequest$Outbound = {
  ScimGroup?: shared.ScimGroup$Outbound | undefined;
  connection_id: string;
  id: string;
};

/** @internal */
export const PatchScimGroupsRequest$outboundSchema: z.ZodType<
  PatchScimGroupsRequest$Outbound,
  z.ZodTypeDef,
  PatchScimGroupsRequest
> = z.object({
  scimGroup: shared.ScimGroup$outboundSchema.optional(),
  connectionId: z.string(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    scimGroup: "ScimGroup",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchScimGroupsRequest$ {
  /** @deprecated use `PatchScimGroupsRequest$inboundSchema` instead. */
  export const inboundSchema = PatchScimGroupsRequest$inboundSchema;
  /** @deprecated use `PatchScimGroupsRequest$outboundSchema` instead. */
  export const outboundSchema = PatchScimGroupsRequest$outboundSchema;
  /** @deprecated use `PatchScimGroupsRequest$Outbound` instead. */
  export type Outbound = PatchScimGroupsRequest$Outbound;
}

export function patchScimGroupsRequestToJSON(
  patchScimGroupsRequest: PatchScimGroupsRequest,
): string {
  return JSON.stringify(
    PatchScimGroupsRequest$outboundSchema.parse(patchScimGroupsRequest),
  );
}

export function patchScimGroupsRequestFromJSON(
  jsonString: string,
): SafeParseResult<PatchScimGroupsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchScimGroupsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchScimGroupsRequest' from JSON`,
  );
}
