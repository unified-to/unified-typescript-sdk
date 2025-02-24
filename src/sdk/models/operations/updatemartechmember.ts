/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type UpdateMartechMemberRequest = {
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
export const UpdateMartechMemberRequest$inboundSchema: z.ZodType<
  UpdateMartechMemberRequest,
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
export type UpdateMartechMemberRequest$Outbound = {
  MarketingMember: shared.MarketingMember$Outbound;
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const UpdateMartechMemberRequest$outboundSchema: z.ZodType<
  UpdateMartechMemberRequest$Outbound,
  z.ZodTypeDef,
  UpdateMartechMemberRequest
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
export namespace UpdateMartechMemberRequest$ {
  /** @deprecated use `UpdateMartechMemberRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateMartechMemberRequest$inboundSchema;
  /** @deprecated use `UpdateMartechMemberRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateMartechMemberRequest$outboundSchema;
  /** @deprecated use `UpdateMartechMemberRequest$Outbound` instead. */
  export type Outbound = UpdateMartechMemberRequest$Outbound;
}

export function updateMartechMemberRequestToJSON(
  updateMartechMemberRequest: UpdateMartechMemberRequest,
): string {
  return JSON.stringify(
    UpdateMartechMemberRequest$outboundSchema.parse(updateMartechMemberRequest),
  );
}

export function updateMartechMemberRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateMartechMemberRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateMartechMemberRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateMartechMemberRequest' from JSON`,
  );
}
