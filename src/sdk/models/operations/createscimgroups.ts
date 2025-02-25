/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type CreateScimGroupsRequest = {
  scimGroup: shared.ScimGroup;
  /**
   * ID of the connection
   */
  connectionId: string;
};

/** @internal */
export const CreateScimGroupsRequest$inboundSchema: z.ZodType<
  CreateScimGroupsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  ScimGroup: shared.ScimGroup$inboundSchema,
  connection_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "ScimGroup": "scimGroup",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type CreateScimGroupsRequest$Outbound = {
  ScimGroup: shared.ScimGroup$Outbound;
  connection_id: string;
};

/** @internal */
export const CreateScimGroupsRequest$outboundSchema: z.ZodType<
  CreateScimGroupsRequest$Outbound,
  z.ZodTypeDef,
  CreateScimGroupsRequest
> = z.object({
  scimGroup: shared.ScimGroup$outboundSchema,
  connectionId: z.string(),
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
export namespace CreateScimGroupsRequest$ {
  /** @deprecated use `CreateScimGroupsRequest$inboundSchema` instead. */
  export const inboundSchema = CreateScimGroupsRequest$inboundSchema;
  /** @deprecated use `CreateScimGroupsRequest$outboundSchema` instead. */
  export const outboundSchema = CreateScimGroupsRequest$outboundSchema;
  /** @deprecated use `CreateScimGroupsRequest$Outbound` instead. */
  export type Outbound = CreateScimGroupsRequest$Outbound;
}

export function createScimGroupsRequestToJSON(
  createScimGroupsRequest: CreateScimGroupsRequest,
): string {
  return JSON.stringify(
    CreateScimGroupsRequest$outboundSchema.parse(createScimGroupsRequest),
  );
}

export function createScimGroupsRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateScimGroupsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateScimGroupsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateScimGroupsRequest' from JSON`,
  );
}
