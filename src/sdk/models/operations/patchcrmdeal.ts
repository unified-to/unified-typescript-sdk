/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type PatchCrmDealRequest = {
  /**
   * A deal represents an opportunity with companies and/or contacts
   */
  crmDeal: shared.CrmDeal;
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
  /**
   * Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar
   */
  raw?: string | undefined;
};

/** @internal */
export const PatchCrmDealRequest$inboundSchema: z.ZodType<
  PatchCrmDealRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  CrmDeal: shared.CrmDeal$inboundSchema,
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
  raw: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "CrmDeal": "crmDeal",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type PatchCrmDealRequest$Outbound = {
  CrmDeal: shared.CrmDeal$Outbound;
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
  raw?: string | undefined;
};

/** @internal */
export const PatchCrmDealRequest$outboundSchema: z.ZodType<
  PatchCrmDealRequest$Outbound,
  z.ZodTypeDef,
  PatchCrmDealRequest
> = z.object({
  crmDeal: shared.CrmDeal$outboundSchema,
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
  raw: z.string().optional(),
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
export namespace PatchCrmDealRequest$ {
  /** @deprecated use `PatchCrmDealRequest$inboundSchema` instead. */
  export const inboundSchema = PatchCrmDealRequest$inboundSchema;
  /** @deprecated use `PatchCrmDealRequest$outboundSchema` instead. */
  export const outboundSchema = PatchCrmDealRequest$outboundSchema;
  /** @deprecated use `PatchCrmDealRequest$Outbound` instead. */
  export type Outbound = PatchCrmDealRequest$Outbound;
}

export function patchCrmDealRequestToJSON(
  patchCrmDealRequest: PatchCrmDealRequest,
): string {
  return JSON.stringify(
    PatchCrmDealRequest$outboundSchema.parse(patchCrmDealRequest),
  );
}

export function patchCrmDealRequestFromJSON(
  jsonString: string,
): SafeParseResult<PatchCrmDealRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchCrmDealRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchCrmDealRequest' from JSON`,
  );
}
