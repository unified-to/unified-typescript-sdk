/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type CreateHrisCompanyRequest = {
  hrisCompany: shared.HrisCompany;
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
export const CreateHrisCompanyRequest$inboundSchema: z.ZodType<
  CreateHrisCompanyRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  HrisCompany: shared.HrisCompany$inboundSchema,
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "HrisCompany": "hrisCompany",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type CreateHrisCompanyRequest$Outbound = {
  HrisCompany: shared.HrisCompany$Outbound;
  connection_id: string;
  fields?: Array<string> | undefined;
};

/** @internal */
export const CreateHrisCompanyRequest$outboundSchema: z.ZodType<
  CreateHrisCompanyRequest$Outbound,
  z.ZodTypeDef,
  CreateHrisCompanyRequest
> = z.object({
  hrisCompany: shared.HrisCompany$outboundSchema,
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    hrisCompany: "HrisCompany",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateHrisCompanyRequest$ {
  /** @deprecated use `CreateHrisCompanyRequest$inboundSchema` instead. */
  export const inboundSchema = CreateHrisCompanyRequest$inboundSchema;
  /** @deprecated use `CreateHrisCompanyRequest$outboundSchema` instead. */
  export const outboundSchema = CreateHrisCompanyRequest$outboundSchema;
  /** @deprecated use `CreateHrisCompanyRequest$Outbound` instead. */
  export type Outbound = CreateHrisCompanyRequest$Outbound;
}

export function createHrisCompanyRequestToJSON(
  createHrisCompanyRequest: CreateHrisCompanyRequest,
): string {
  return JSON.stringify(
    CreateHrisCompanyRequest$outboundSchema.parse(createHrisCompanyRequest),
  );
}

export function createHrisCompanyRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateHrisCompanyRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateHrisCompanyRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateHrisCompanyRequest' from JSON`,
  );
}
