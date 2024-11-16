/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetMartechMemberRequest = {
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the Member
   */
  id: string;
};

/** @internal */
export const GetMartechMemberRequest$inboundSchema: z.ZodType<
  GetMartechMemberRequest,
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
export type GetMartechMemberRequest$Outbound = {
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const GetMartechMemberRequest$outboundSchema: z.ZodType<
  GetMartechMemberRequest$Outbound,
  z.ZodTypeDef,
  GetMartechMemberRequest
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
export namespace GetMartechMemberRequest$ {
  /** @deprecated use `GetMartechMemberRequest$inboundSchema` instead. */
  export const inboundSchema = GetMartechMemberRequest$inboundSchema;
  /** @deprecated use `GetMartechMemberRequest$outboundSchema` instead. */
  export const outboundSchema = GetMartechMemberRequest$outboundSchema;
  /** @deprecated use `GetMartechMemberRequest$Outbound` instead. */
  export type Outbound = GetMartechMemberRequest$Outbound;
}

export function getMartechMemberRequestToJSON(
  getMartechMemberRequest: GetMartechMemberRequest,
): string {
  return JSON.stringify(
    GetMartechMemberRequest$outboundSchema.parse(getMartechMemberRequest),
  );
}

export function getMartechMemberRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetMartechMemberRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetMartechMemberRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetMartechMemberRequest' from JSON`,
  );
}
