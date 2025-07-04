/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type PatchAtsCompanyRequest = {
  atsCompany: shared.AtsCompany;
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
export const PatchAtsCompanyRequest$inboundSchema: z.ZodType<
  PatchAtsCompanyRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  AtsCompany: shared.AtsCompany$inboundSchema,
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
  raw: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "AtsCompany": "atsCompany",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type PatchAtsCompanyRequest$Outbound = {
  AtsCompany: shared.AtsCompany$Outbound;
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
  raw?: string | undefined;
};

/** @internal */
export const PatchAtsCompanyRequest$outboundSchema: z.ZodType<
  PatchAtsCompanyRequest$Outbound,
  z.ZodTypeDef,
  PatchAtsCompanyRequest
> = z.object({
  atsCompany: shared.AtsCompany$outboundSchema,
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
  raw: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    atsCompany: "AtsCompany",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchAtsCompanyRequest$ {
  /** @deprecated use `PatchAtsCompanyRequest$inboundSchema` instead. */
  export const inboundSchema = PatchAtsCompanyRequest$inboundSchema;
  /** @deprecated use `PatchAtsCompanyRequest$outboundSchema` instead. */
  export const outboundSchema = PatchAtsCompanyRequest$outboundSchema;
  /** @deprecated use `PatchAtsCompanyRequest$Outbound` instead. */
  export type Outbound = PatchAtsCompanyRequest$Outbound;
}

export function patchAtsCompanyRequestToJSON(
  patchAtsCompanyRequest: PatchAtsCompanyRequest,
): string {
  return JSON.stringify(
    PatchAtsCompanyRequest$outboundSchema.parse(patchAtsCompanyRequest),
  );
}

export function patchAtsCompanyRequestFromJSON(
  jsonString: string,
): SafeParseResult<PatchAtsCompanyRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchAtsCompanyRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchAtsCompanyRequest' from JSON`,
  );
}
