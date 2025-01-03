/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type UpdateCrmDealRequest = {
  /**
   * A deal represents an opportunity with companies and/or contacts
   */
  crmDeal?: shared.CrmDeal | undefined;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the Deal
   */
  id: string;
};

/** @internal */
export const UpdateCrmDealRequest$inboundSchema: z.ZodType<
  UpdateCrmDealRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  CrmDeal: shared.CrmDeal$inboundSchema.optional(),
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "CrmDeal": "crmDeal",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type UpdateCrmDealRequest$Outbound = {
  CrmDeal?: shared.CrmDeal$Outbound | undefined;
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const UpdateCrmDealRequest$outboundSchema: z.ZodType<
  UpdateCrmDealRequest$Outbound,
  z.ZodTypeDef,
  UpdateCrmDealRequest
> = z.object({
  crmDeal: shared.CrmDeal$outboundSchema.optional(),
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    crmDeal: "CrmDeal",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateCrmDealRequest$ {
  /** @deprecated use `UpdateCrmDealRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateCrmDealRequest$inboundSchema;
  /** @deprecated use `UpdateCrmDealRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateCrmDealRequest$outboundSchema;
  /** @deprecated use `UpdateCrmDealRequest$Outbound` instead. */
  export type Outbound = UpdateCrmDealRequest$Outbound;
}

export function updateCrmDealRequestToJSON(
  updateCrmDealRequest: UpdateCrmDealRequest,
): string {
  return JSON.stringify(
    UpdateCrmDealRequest$outboundSchema.parse(updateCrmDealRequest),
  );
}

export function updateCrmDealRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateCrmDealRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateCrmDealRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateCrmDealRequest' from JSON`,
  );
}
