/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type UpdateCrmLeadRequest = {
  crmLead?: shared.CrmLead | undefined;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the Lead
   */
  id: string;
};

/** @internal */
export const UpdateCrmLeadRequest$inboundSchema: z.ZodType<
  UpdateCrmLeadRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  CrmLead: shared.CrmLead$inboundSchema.optional(),
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "CrmLead": "crmLead",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type UpdateCrmLeadRequest$Outbound = {
  CrmLead?: shared.CrmLead$Outbound | undefined;
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const UpdateCrmLeadRequest$outboundSchema: z.ZodType<
  UpdateCrmLeadRequest$Outbound,
  z.ZodTypeDef,
  UpdateCrmLeadRequest
> = z.object({
  crmLead: shared.CrmLead$outboundSchema.optional(),
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
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
export namespace UpdateCrmLeadRequest$ {
  /** @deprecated use `UpdateCrmLeadRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateCrmLeadRequest$inboundSchema;
  /** @deprecated use `UpdateCrmLeadRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateCrmLeadRequest$outboundSchema;
  /** @deprecated use `UpdateCrmLeadRequest$Outbound` instead. */
  export type Outbound = UpdateCrmLeadRequest$Outbound;
}

export function updateCrmLeadRequestToJSON(
  updateCrmLeadRequest: UpdateCrmLeadRequest,
): string {
  return JSON.stringify(
    UpdateCrmLeadRequest$outboundSchema.parse(updateCrmLeadRequest),
  );
}

export function updateCrmLeadRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateCrmLeadRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateCrmLeadRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateCrmLeadRequest' from JSON`,
  );
}
