/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type CreateAccountingTaxrateRequest = {
  accountingTaxrate?: shared.AccountingTaxrate | undefined;
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
export const CreateAccountingTaxrateRequest$inboundSchema: z.ZodType<
  CreateAccountingTaxrateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  AccountingTaxrate: shared.AccountingTaxrate$inboundSchema.optional(),
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "AccountingTaxrate": "accountingTaxrate",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type CreateAccountingTaxrateRequest$Outbound = {
  AccountingTaxrate?: shared.AccountingTaxrate$Outbound | undefined;
  connection_id: string;
  fields?: Array<string> | undefined;
};

/** @internal */
export const CreateAccountingTaxrateRequest$outboundSchema: z.ZodType<
  CreateAccountingTaxrateRequest$Outbound,
  z.ZodTypeDef,
  CreateAccountingTaxrateRequest
> = z.object({
  accountingTaxrate: shared.AccountingTaxrate$outboundSchema.optional(),
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    accountingTaxrate: "AccountingTaxrate",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateAccountingTaxrateRequest$ {
  /** @deprecated use `CreateAccountingTaxrateRequest$inboundSchema` instead. */
  export const inboundSchema = CreateAccountingTaxrateRequest$inboundSchema;
  /** @deprecated use `CreateAccountingTaxrateRequest$outboundSchema` instead. */
  export const outboundSchema = CreateAccountingTaxrateRequest$outboundSchema;
  /** @deprecated use `CreateAccountingTaxrateRequest$Outbound` instead. */
  export type Outbound = CreateAccountingTaxrateRequest$Outbound;
}

export function createAccountingTaxrateRequestToJSON(
  createAccountingTaxrateRequest: CreateAccountingTaxrateRequest,
): string {
  return JSON.stringify(
    CreateAccountingTaxrateRequest$outboundSchema.parse(
      createAccountingTaxrateRequest,
    ),
  );
}

export function createAccountingTaxrateRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateAccountingTaxrateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateAccountingTaxrateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateAccountingTaxrateRequest' from JSON`,
  );
}
