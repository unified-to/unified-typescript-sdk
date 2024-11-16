/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type CreateMartechMemberRequest = {
  /**
   * A member represents a person
   */
  marketingMember?: shared.MarketingMember | undefined;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
};

/** @internal */
export const CreateMartechMemberRequest$inboundSchema: z.ZodType<
  CreateMartechMemberRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  MarketingMember: shared.MarketingMember$inboundSchema.optional(),
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "MarketingMember": "marketingMember",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type CreateMartechMemberRequest$Outbound = {
  MarketingMember?: shared.MarketingMember$Outbound | undefined;
  connection_id: string;
  fields?: Array<string> | undefined;
};

/** @internal */
export const CreateMartechMemberRequest$outboundSchema: z.ZodType<
  CreateMartechMemberRequest$Outbound,
  z.ZodTypeDef,
  CreateMartechMemberRequest
> = z.object({
  marketingMember: shared.MarketingMember$outboundSchema.optional(),
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
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
export namespace CreateMartechMemberRequest$ {
  /** @deprecated use `CreateMartechMemberRequest$inboundSchema` instead. */
  export const inboundSchema = CreateMartechMemberRequest$inboundSchema;
  /** @deprecated use `CreateMartechMemberRequest$outboundSchema` instead. */
  export const outboundSchema = CreateMartechMemberRequest$outboundSchema;
  /** @deprecated use `CreateMartechMemberRequest$Outbound` instead. */
  export type Outbound = CreateMartechMemberRequest$Outbound;
}

export function createMartechMemberRequestToJSON(
  createMartechMemberRequest: CreateMartechMemberRequest,
): string {
  return JSON.stringify(
    CreateMartechMemberRequest$outboundSchema.parse(createMartechMemberRequest),
  );
}

export function createMartechMemberRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateMartechMemberRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateMartechMemberRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateMartechMemberRequest' from JSON`,
  );
}
