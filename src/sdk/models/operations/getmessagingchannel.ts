/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetMessagingChannelRequest = {
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the Channel
   */
  id: string;
};

/** @internal */
export const GetMessagingChannelRequest$inboundSchema: z.ZodType<
  GetMessagingChannelRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "connection_id": "connectionId",
  });
});

/** @internal */
export type GetMessagingChannelRequest$Outbound = {
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const GetMessagingChannelRequest$outboundSchema: z.ZodType<
  GetMessagingChannelRequest$Outbound,
  z.ZodTypeDef,
  GetMessagingChannelRequest
> = z.object({
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetMessagingChannelRequest$ {
  /** @deprecated use `GetMessagingChannelRequest$inboundSchema` instead. */
  export const inboundSchema = GetMessagingChannelRequest$inboundSchema;
  /** @deprecated use `GetMessagingChannelRequest$outboundSchema` instead. */
  export const outboundSchema = GetMessagingChannelRequest$outboundSchema;
  /** @deprecated use `GetMessagingChannelRequest$Outbound` instead. */
  export type Outbound = GetMessagingChannelRequest$Outbound;
}

export function getMessagingChannelRequestToJSON(
  getMessagingChannelRequest: GetMessagingChannelRequest,
): string {
  return JSON.stringify(
    GetMessagingChannelRequest$outboundSchema.parse(getMessagingChannelRequest),
  );
}

export function getMessagingChannelRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetMessagingChannelRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetMessagingChannelRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetMessagingChannelRequest' from JSON`,
  );
}
