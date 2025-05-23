/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type CreateRepoCommitRequest = {
  repoCommit: shared.RepoCommit;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar
   */
  raw?: string | undefined;
};

/** @internal */
export const CreateRepoCommitRequest$inboundSchema: z.ZodType<
  CreateRepoCommitRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  RepoCommit: shared.RepoCommit$inboundSchema,
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  raw: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "RepoCommit": "repoCommit",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type CreateRepoCommitRequest$Outbound = {
  RepoCommit: shared.RepoCommit$Outbound;
  connection_id: string;
  fields?: Array<string> | undefined;
  raw?: string | undefined;
};

/** @internal */
export const CreateRepoCommitRequest$outboundSchema: z.ZodType<
  CreateRepoCommitRequest$Outbound,
  z.ZodTypeDef,
  CreateRepoCommitRequest
> = z.object({
  repoCommit: shared.RepoCommit$outboundSchema,
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  raw: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    repoCommit: "RepoCommit",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateRepoCommitRequest$ {
  /** @deprecated use `CreateRepoCommitRequest$inboundSchema` instead. */
  export const inboundSchema = CreateRepoCommitRequest$inboundSchema;
  /** @deprecated use `CreateRepoCommitRequest$outboundSchema` instead. */
  export const outboundSchema = CreateRepoCommitRequest$outboundSchema;
  /** @deprecated use `CreateRepoCommitRequest$Outbound` instead. */
  export type Outbound = CreateRepoCommitRequest$Outbound;
}

export function createRepoCommitRequestToJSON(
  createRepoCommitRequest: CreateRepoCommitRequest,
): string {
  return JSON.stringify(
    CreateRepoCommitRequest$outboundSchema.parse(createRepoCommitRequest),
  );
}

export function createRepoCommitRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateRepoCommitRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateRepoCommitRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateRepoCommitRequest' from JSON`,
  );
}
