/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type PatchMartechMemberRequest = {
  /**
   * A member represents a person
   */
  marketingMember: shared.MarketingMember;
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
export const PatchMartechMemberRequest$inboundSchema: z.ZodType<
  PatchMartechMemberRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  MarketingMember: shared.MarketingMember$inboundSchema,
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "MarketingMember": "marketingMember",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type PatchMartechMemberRequest$Outbound = {
  MarketingMember: shared.MarketingMember$Outbound;
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const PatchMartechMemberRequest$outboundSchema: z.ZodType<
  PatchMartechMemberRequest$Outbound,
  z.ZodTypeDef,
  PatchMartechMemberRequest
> = z.object({
  marketingMember: shared.MarketingMember$outboundSchema,
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    marketingMember: "MarketingMember",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchMartechMemberRequest$ {
  /** @deprecated use `PatchMartechMemberRequest$inboundSchema` instead. */
  export const inboundSchema = PatchMartechMemberRequest$inboundSchema;
  /** @deprecated use `PatchMartechMemberRequest$outboundSchema` instead. */
  export const outboundSchema = PatchMartechMemberRequest$outboundSchema;
  /** @deprecated use `PatchMartechMemberRequest$Outbound` instead. */
  export type Outbound = PatchMartechMemberRequest$Outbound;
}

export function patchMartechMemberRequestToJSON(
  patchMartechMemberRequest: PatchMartechMemberRequest,
): string {
  return JSON.stringify(
    PatchMartechMemberRequest$outboundSchema.parse(patchMartechMemberRequest),
  );
}

export function patchMartechMemberRequestFromJSON(
  jsonString: string,
): SafeParseResult<PatchMartechMemberRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchMartechMemberRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchMartechMemberRequest' from JSON`,
  );
}
