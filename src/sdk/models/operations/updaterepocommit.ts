/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type UpdateRepoCommitRequest = {
  repoCommit?: shared.RepoCommit | undefined;
  /**
   * ID of the connection
   */
  connectionId: string;
  /**
   * Comma-delimited fields to return
   */
  fields?: Array<string> | undefined;
  /**
   * ID of the Commit
   */
  id: string;
};

/** @internal */
export const UpdateRepoCommitRequest$inboundSchema: z.ZodType<
  UpdateRepoCommitRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  RepoCommit: shared.RepoCommit$inboundSchema.optional(),
  connection_id: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "RepoCommit": "repoCommit",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type UpdateRepoCommitRequest$Outbound = {
  RepoCommit?: shared.RepoCommit$Outbound | undefined;
  connection_id: string;
  fields?: Array<string> | undefined;
  id: string;
};

/** @internal */
export const UpdateRepoCommitRequest$outboundSchema: z.ZodType<
  UpdateRepoCommitRequest$Outbound,
  z.ZodTypeDef,
  UpdateRepoCommitRequest
> = z.object({
  repoCommit: shared.RepoCommit$outboundSchema.optional(),
  connectionId: z.string(),
  fields: z.array(z.string()).optional(),
  id: z.string(),
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
export namespace UpdateRepoCommitRequest$ {
  /** @deprecated use `UpdateRepoCommitRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateRepoCommitRequest$inboundSchema;
  /** @deprecated use `UpdateRepoCommitRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateRepoCommitRequest$outboundSchema;
  /** @deprecated use `UpdateRepoCommitRequest$Outbound` instead. */
  export type Outbound = UpdateRepoCommitRequest$Outbound;
}