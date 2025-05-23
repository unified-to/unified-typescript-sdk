/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type PatchCrmCompanyRequest = {
  /**
   * A company represents an organization that optionally is associated with a deal and/or contacts
   */
  crmCompany: shared.CrmCompany;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the Company
   */
  id: string;
  /**
   * Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar
   */
  raw?: string | undefined;
};

/** @internal */
export const PatchCrmCompanyRequest$inboundSchema: z.ZodType<
  PatchCrmCompanyRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  CrmCompany: shared.CrmCompany$inboundSchema,
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
  raw: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "CrmCompany": "crmCompany",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type PatchCrmCompanyRequest$Outbound = {
  CrmCompany: shared.CrmCompany$Outbound;
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
  raw?: string | undefined;
};

/** @internal */
export const PatchCrmCompanyRequest$outboundSchema: z.ZodType<
  PatchCrmCompanyRequest$Outbound,
  z.ZodTypeDef,
  PatchCrmCompanyRequest
> = z.object({
  crmCompany: shared.CrmCompany$outboundSchema,
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
  raw: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    crmCompany: "CrmCompany",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchCrmCompanyRequest$ {
  /** @deprecated use `PatchCrmCompanyRequest$inboundSchema` instead. */
  export const inboundSchema = PatchCrmCompanyRequest$inboundSchema;
  /** @deprecated use `PatchCrmCompanyRequest$outboundSchema` instead. */
  export const outboundSchema = PatchCrmCompanyRequest$outboundSchema;
  /** @deprecated use `PatchCrmCompanyRequest$Outbound` instead. */
  export type Outbound = PatchCrmCompanyRequest$Outbound;
}

export function patchCrmCompanyRequestToJSON(
  patchCrmCompanyRequest: PatchCrmCompanyRequest,
): string {
  return JSON.stringify(
    PatchCrmCompanyRequest$outboundSchema.parse(patchCrmCompanyRequest),
  );
}

export function patchCrmCompanyRequestFromJSON(
  jsonString: string,
): SafeParseResult<PatchCrmCompanyRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchCrmCompanyRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchCrmCompanyRequest' from JSON`,
  );
}
