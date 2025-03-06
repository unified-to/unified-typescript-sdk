/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetUnifiedIntegrationAuthRequest = {
  env?: string | undefined;
  /**
   * Your user identifier to associate with the new Integration
   */
  externalXref?: string | undefined;
  /**
   * The URL where you want the user to be redirect to after an unsuccessful authentication. An "error" variable will be appended.
   */
  failureRedirect?: string | undefined;
  /**
   * Type of the supported integration
   */
  integrationType: string;
  /**
   * Language: en, fr, es, it, pt, zh, hi
   */
  lang?: string | undefined;
  redirect?: boolean | undefined;
  scopes?: Array<string> | undefined;
  /**
   * Extra state to send back to your success URL
   */
  state?: string | undefined;
  subdomain?: string | undefined;
  /**
   * The URL where you want the user to be redirect to after a successful authorization.  The connection ID will be appended with (id=<connectionId>) to this URL, as will the state that was provided.
   */
  successRedirect?: string | undefined;
  /**
   * The ID of the workspace
   */
  workspaceId: string;
};

/** @internal */
export const GetUnifiedIntegrationAuthRequest$inboundSchema: z.ZodType<
  GetUnifiedIntegrationAuthRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  env: z.string().optional(),
  external_xref: z.string().optional(),
  failure_redirect: z.string().optional(),
  integration_type: z.string(),
  lang: z.string().optional(),
  redirect: z.boolean().optional(),
  scopes: z.array(z.string()).optional(),
  state: z.string().optional(),
  subdomain: z.string().optional(),
  success_redirect: z.string().optional(),
  workspace_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "external_xref": "externalXref",
    "failure_redirect": "failureRedirect",
    "integration_type": "integrationType",
    "success_redirect": "successRedirect",
    "workspace_id": "workspaceId",
  });
});

/** @internal */
export type GetUnifiedIntegrationAuthRequest$Outbound = {
  env?: string | undefined;
  external_xref?: string | undefined;
  failure_redirect?: string | undefined;
  integration_type: string;
  lang?: string | undefined;
  redirect?: boolean | undefined;
  scopes?: Array<string> | undefined;
  state?: string | undefined;
  subdomain?: string | undefined;
  success_redirect?: string | undefined;
  workspace_id: string;
};

/** @internal */
export const GetUnifiedIntegrationAuthRequest$outboundSchema: z.ZodType<
  GetUnifiedIntegrationAuthRequest$Outbound,
  z.ZodTypeDef,
  GetUnifiedIntegrationAuthRequest
> = z.object({
  env: z.string().optional(),
  externalXref: z.string().optional(),
  failureRedirect: z.string().optional(),
  integrationType: z.string(),
  lang: z.string().optional(),
  redirect: z.boolean().optional(),
  scopes: z.array(z.string()).optional(),
  state: z.string().optional(),
  subdomain: z.string().optional(),
  successRedirect: z.string().optional(),
  workspaceId: z.string(),
}).transform((v) => {
  return remap$(v, {
    externalXref: "external_xref",
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
export namespace GetUnifiedIntegrationAuthRequest$ {
  /** @deprecated use `GetUnifiedIntegrationAuthRequest$inboundSchema` instead. */
  export const inboundSchema = GetUnifiedIntegrationAuthRequest$inboundSchema;
  /** @deprecated use `GetUnifiedIntegrationAuthRequest$outboundSchema` instead. */
  export const outboundSchema = GetUnifiedIntegrationAuthRequest$outboundSchema;
  /** @deprecated use `GetUnifiedIntegrationAuthRequest$Outbound` instead. */
  export type Outbound = GetUnifiedIntegrationAuthRequest$Outbound;
}

export function getUnifiedIntegrationAuthRequestToJSON(
  getUnifiedIntegrationAuthRequest: GetUnifiedIntegrationAuthRequest,
): string {
  return JSON.stringify(
    GetUnifiedIntegrationAuthRequest$outboundSchema.parse(
      getUnifiedIntegrationAuthRequest,
    ),
  );
}

export function getUnifiedIntegrationAuthRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetUnifiedIntegrationAuthRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetUnifiedIntegrationAuthRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetUnifiedIntegrationAuthRequest' from JSON`,
  );
}
