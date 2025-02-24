/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type CreateCrmLeadRequest = {
  crmLead: shared.CrmLead;
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
export const CreateCrmLeadRequest$inboundSchema: z.ZodType<
  CreateCrmLeadRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  CrmLead: shared.CrmLead$inboundSchema,
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "CrmLead": "crmLead",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type CreateCrmLeadRequest$Outbound = {
  CrmLead: shared.CrmLead$Outbound;
  connection_id: string;
  fields?: Array<string> | undefined;
};

/** @internal */
export const CreateCrmLeadRequest$outboundSchema: z.ZodType<
  CreateCrmLeadRequest$Outbound,
  z.ZodTypeDef,
  CreateCrmLeadRequest
> = z.object({
  crmLead: shared.CrmLead$outboundSchema,
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    crmLead: "CrmLead",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCrmLeadRequest$ {
  /** @deprecated use `CreateCrmLeadRequest$inboundSchema` instead. */
  export const inboundSchema = CreateCrmLeadRequest$inboundSchema;
  /** @deprecated use `CreateCrmLeadRequest$outboundSchema` instead. */
  export const outboundSchema = CreateCrmLeadRequest$outboundSchema;
  /** @deprecated use `CreateCrmLeadRequest$Outbound` instead. */
  export type Outbound = CreateCrmLeadRequest$Outbound;
}

export function createCrmLeadRequestToJSON(
  createCrmLeadRequest: CreateCrmLeadRequest,
): string {
  return JSON.stringify(
    CreateCrmLeadRequest$outboundSchema.parse(createCrmLeadRequest),
  );
}

export function createCrmLeadRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateCrmLeadRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateCrmLeadRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateCrmLeadRequest' from JSON`,
  );
}
