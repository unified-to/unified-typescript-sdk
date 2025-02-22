/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetUnifiedIntegrationLoginRequest = {
  env?: string | undefined;
  /**
   * The URL where you want the user to be redirect to after an unsuccessful authentication. An "error" variable will be appended.
   */
  failureRedirect?: string | undefined;
  /**
   * Type of the supported integration
   */
  integrationType: string;
  redirect?: boolean | undefined;
  /**
   * Extra state to send back to your success URL
   */
  state?: string | undefined;
  /**
   * The URL where you want the user to be redirect to after a successful authentication/sign-in.  A "jwt" parameter will be appended to the URL which will contain a name and email of the user who just signed-in.
   */
  successRedirect?: string | undefined;
  /**
   * The ID of the workspace
   */
  workspaceId: string;
};

/** @internal */
export const GetUnifiedIntegrationLoginRequest$inboundSchema: z.ZodType<
  GetUnifiedIntegrationLoginRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  env: z.string().optional(),
  failure_redirect: z.string().optional(),
  integration_type: z.string(),
  redirect: z.boolean().optional(),
  state: z.string().optional(),
  success_redirect: z.string().optional(),
  workspace_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "failure_redirect": "failureRedirect",
    "integration_type": "integrationType",
    "success_redirect": "successRedirect",
    "workspace_id": "workspaceId",
  });
});

/** @internal */
export type GetUnifiedIntegrationLoginRequest$Outbound = {
  env?: string | undefined;
  failure_redirect?: string | undefined;
  integration_type: string;
  redirect?: boolean | undefined;
  state?: string | undefined;
  success_redirect?: string | undefined;
  workspace_id: string;
};

/** @internal */
export const GetUnifiedIntegrationLoginRequest$outboundSchema: z.ZodType<
  GetUnifiedIntegrationLoginRequest$Outbound,
  z.ZodTypeDef,
  GetUnifiedIntegrationLoginRequest
> = z.object({
  env: z.string().optional(),
  failureRedirect: z.string().optional(),
  integrationType: z.string(),
  redirect: z.boolean().optional(),
  state: z.string().optional(),
  successRedirect: z.string().optional(),
  workspaceId: z.string(),
}).transform((v) => {
  return remap$(v, {
    failureRedirect: "failure_redirect",
    integrationType: "integration_type",
    successRedirect: "success_redirect",
    workspaceId: "workspace_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetUnifiedIntegrationLoginRequest$ {
  /** @deprecated use `GetUnifiedIntegrationLoginRequest$inboundSchema` instead. */
  export const inboundSchema = GetUnifiedIntegrationLoginRequest$inboundSchema;
  /** @deprecated use `GetUnifiedIntegrationLoginRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetUnifiedIntegrationLoginRequest$outboundSchema;
  /** @deprecated use `GetUnifiedIntegrationLoginRequest$Outbound` instead. */
  export type Outbound = GetUnifiedIntegrationLoginRequest$Outbound;
}

export function getUnifiedIntegrationLoginRequestToJSON(
  getUnifiedIntegrationLoginRequest: GetUnifiedIntegrationLoginRequest,
): string {
  return JSON.stringify(
    GetUnifiedIntegrationLoginRequest$outboundSchema.parse(
      getUnifiedIntegrationLoginRequest,
    ),
  );
}

export function getUnifiedIntegrationLoginRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetUnifiedIntegrationLoginRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetUnifiedIntegrationLoginRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetUnifiedIntegrationLoginRequest' from JSON`,
  );
}
