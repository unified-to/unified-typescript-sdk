/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type UpdateAccountingAccountRequest = {
  /**
   * Chart of accounts
   */
  accountingAccount: shared.AccountingAccount;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the Account
   */
  id: string;
  /**
   * Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar
   */
  raw?: string | undefined;
};

/** @internal */
export const UpdateAccountingAccountRequest$inboundSchema: z.ZodType<
  UpdateAccountingAccountRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  AccountingAccount: shared.AccountingAccount$inboundSchema,
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
  raw: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "AccountingAccount": "accountingAccount",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type UpdateAccountingAccountRequest$Outbound = {
  AccountingAccount: shared.AccountingAccount$Outbound;
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
  raw?: string | undefined;
};

/** @internal */
export const UpdateAccountingAccountRequest$outboundSchema: z.ZodType<
  UpdateAccountingAccountRequest$Outbound,
  z.ZodTypeDef,
  UpdateAccountingAccountRequest
> = z.object({
  accountingAccount: shared.AccountingAccount$outboundSchema,
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
  raw: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    accountingAccount: "AccountingAccount",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateAccountingAccountRequest$ {
  /** @deprecated use `UpdateAccountingAccountRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateAccountingAccountRequest$inboundSchema;
  /** @deprecated use `UpdateAccountingAccountRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateAccountingAccountRequest$outboundSchema;
  /** @deprecated use `UpdateAccountingAccountRequest$Outbound` instead. */
  export type Outbound = UpdateAccountingAccountRequest$Outbound;
}

export function updateAccountingAccountRequestToJSON(
  updateAccountingAccountRequest: UpdateAccountingAccountRequest,
): string {
  return JSON.stringify(
    UpdateAccountingAccountRequest$outboundSchema.parse(
      updateAccountingAccountRequest,
    ),
  );
}

export function updateAccountingAccountRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateAccountingAccountRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateAccountingAccountRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateAccountingAccountRequest' from JSON`,
  );
}
