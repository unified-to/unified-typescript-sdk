/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListScimGroupsRequest = {
  /**
   * ID of the connection
   */
  connectionId: string;
  count?: number | undefined;
  filter?: string | undefined;
  sortBy?: string | undefined;
  sortOrder?: string | undefined;
  startIndex?: number | undefined;
};

/** @internal */
export const ListScimGroupsRequest$inboundSchema: z.ZodType<
  ListScimGroupsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  connection_id: z.string(),
  count: z.number().optional(),
  filter: z.string().optional(),
  sortBy: z.string().optional(),
  sortOrder: z.string().optional(),
  startIndex: z.number().optional(),
}).transform((v) => {
  return remap$(v, {
    "connection_id": "connectionId",
  });
});

/** @internal */
export type ListScimGroupsRequest$Outbound = {
  connection_id: string;
  count?: number | undefined;
  filter?: string | undefined;
  sortBy?: string | undefined;
  sortOrder?: string | undefined;
  startIndex?: number | undefined;
};

/** @internal */
export const ListScimGroupsRequest$outboundSchema: z.ZodType<
  ListScimGroupsRequest$Outbound,
  z.ZodTypeDef,
  ListScimGroupsRequest
> = z.object({
  connectionId: z.string(),
  count: z.number().optional(),
  filter: z.string().optional(),
  sortBy: z.string().optional(),
  sortOrder: z.string().optional(),
  startIndex: z.number().optional(),
}).transform((v) => {
  return remap$(v, {
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListScimGroupsRequest$ {
  /** @deprecated use `ListScimGroupsRequest$inboundSchema` instead. */
  export const inboundSchema = ListScimGroupsRequest$inboundSchema;
  /** @deprecated use `ListScimGroupsRequest$outboundSchema` instead. */
  export const outboundSchema = ListScimGroupsRequest$outboundSchema;
  /** @deprecated use `ListScimGroupsRequest$Outbound` instead. */
  export type Outbound = ListScimGroupsRequest$Outbound;
}

export function listScimGroupsRequestToJSON(
  listScimGroupsRequest: ListScimGroupsRequest,
): string {
  return JSON.stringify(
    ListScimGroupsRequest$outboundSchema.parse(listScimGroupsRequest),
  );
}

export function listScimGroupsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListScimGroupsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListScimGroupsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListScimGroupsRequest' from JSON`,
  );
}
