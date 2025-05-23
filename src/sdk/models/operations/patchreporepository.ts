/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type PatchRepoRepositoryRequest = {
  repoRepository: shared.RepoRepository;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the Repository
   */
  id: string;
  /**
   * Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar
   */
  raw?: string | undefined;
};

/** @internal */
export const PatchRepoRepositoryRequest$inboundSchema: z.ZodType<
  PatchRepoRepositoryRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  RepoRepository: shared.RepoRepository$inboundSchema,
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
  raw: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "RepoRepository": "repoRepository",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type PatchRepoRepositoryRequest$Outbound = {
  RepoRepository: shared.RepoRepository$Outbound;
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
  raw?: string | undefined;
};

/** @internal */
export const PatchRepoRepositoryRequest$outboundSchema: z.ZodType<
  PatchRepoRepositoryRequest$Outbound,
  z.ZodTypeDef,
  PatchRepoRepositoryRequest
> = z.object({
  repoRepository: shared.RepoRepository$outboundSchema,
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
  raw: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    repoRepository: "RepoRepository",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchRepoRepositoryRequest$ {
  /** @deprecated use `PatchRepoRepositoryRequest$inboundSchema` instead. */
  export const inboundSchema = PatchRepoRepositoryRequest$inboundSchema;
  /** @deprecated use `PatchRepoRepositoryRequest$outboundSchema` instead. */
  export const outboundSchema = PatchRepoRepositoryRequest$outboundSchema;
  /** @deprecated use `PatchRepoRepositoryRequest$Outbound` instead. */
  export type Outbound = PatchRepoRepositoryRequest$Outbound;
}

export function patchRepoRepositoryRequestToJSON(
  patchRepoRepositoryRequest: PatchRepoRepositoryRequest,
): string {
  return JSON.stringify(
    PatchRepoRepositoryRequest$outboundSchema.parse(patchRepoRepositoryRequest),
  );
}

export function patchRepoRepositoryRequestFromJSON(
  jsonString: string,
): SafeParseResult<PatchRepoRepositoryRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchRepoRepositoryRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchRepoRepositoryRequest' from JSON`,
  );
}
