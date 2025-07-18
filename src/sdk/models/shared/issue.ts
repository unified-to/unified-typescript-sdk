/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import {
  catchUnrecognizedEnum,
  OpenEnum,
  Unrecognized,
} from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const IssueStatus = {
  Completed: "COMPLETED",
  New: "NEW",
  Roadmap: "ROADMAP",
  InProgress: "IN_PROGRESS",
  OnHold: "ON_HOLD",
  Validating: "VALIDATING",
  Rejected: "REJECTED",
} as const;
export type IssueStatus = OpenEnum<typeof IssueStatus>;

export type Issue = {
  createdAt?: string | undefined;
  id?: string | undefined;
  importance?: number | undefined;
  resolutionTime?: number | undefined;
  size?: number | undefined;
  status: IssueStatus;
  ticketRef: string;
  title: string;
  type?: Array<string> | undefined;
  updatedAt?: string | undefined;
  url?: string | undefined;
  workspaceId: string;
};

/** @internal */
export const IssueStatus$inboundSchema: z.ZodType<
  IssueStatus,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(IssueStatus),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const IssueStatus$outboundSchema: z.ZodType<
  IssueStatus,
  z.ZodTypeDef,
  IssueStatus
> = z.union([
  z.nativeEnum(IssueStatus),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IssueStatus$ {
  /** @deprecated use `IssueStatus$inboundSchema` instead. */
  export const inboundSchema = IssueStatus$inboundSchema;
  /** @deprecated use `IssueStatus$outboundSchema` instead. */
  export const outboundSchema = IssueStatus$outboundSchema;
}

/** @internal */
export const Issue$inboundSchema: z.ZodType<Issue, z.ZodTypeDef, unknown> = z
  .object({
    created_at: z.string().optional(),
    id: z.string().optional(),
    importance: z.number().optional(),
    resolution_time: z.number().optional(),
    size: z.number().optional(),
    status: IssueStatus$inboundSchema,
    ticket_ref: z.string(),
    title: z.string(),
    type: z.array(z.string()).optional(),
    updated_at: z.string().optional(),
    url: z.string().optional(),
    workspace_id: z.string(),
  }).transform((v) => {
    return remap$(v, {
      "created_at": "createdAt",
      "resolution_time": "resolutionTime",
      "ticket_ref": "ticketRef",
      "updated_at": "updatedAt",
      "workspace_id": "workspaceId",
    });
  });

/** @internal */
export type Issue$Outbound = {
  created_at?: string | undefined;
  id?: string | undefined;
  importance?: number | undefined;
  resolution_time?: number | undefined;
  size?: number | undefined;
  status: string;
  ticket_ref: string;
  title: string;
  type?: Array<string> | undefined;
  updated_at?: string | undefined;
  url?: string | undefined;
  workspace_id: string;
};

/** @internal */
export const Issue$outboundSchema: z.ZodType<
  Issue$Outbound,
  z.ZodTypeDef,
  Issue
> = z.object({
  createdAt: z.string().optional(),
  id: z.string().optional(),
  importance: z.number().optional(),
  resolutionTime: z.number().optional(),
  size: z.number().optional(),
  status: IssueStatus$outboundSchema,
  ticketRef: z.string(),
  title: z.string(),
  type: z.array(z.string()).optional(),
  updatedAt: z.string().optional(),
  url: z.string().optional(),
  workspaceId: z.string(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    resolutionTime: "resolution_time",
    ticketRef: "ticket_ref",
    updatedAt: "updated_at",
    workspaceId: "workspace_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Issue$ {
  /** @deprecated use `Issue$inboundSchema` instead. */
  export const inboundSchema = Issue$inboundSchema;
  /** @deprecated use `Issue$outboundSchema` instead. */
  export const outboundSchema = Issue$outboundSchema;
  /** @deprecated use `Issue$Outbound` instead. */
  export type Outbound = Issue$Outbound;
}

export function issueToJSON(issue: Issue): string {
  return JSON.stringify(Issue$outboundSchema.parse(issue));
}

export function issueFromJSON(
  jsonString: string,
): SafeParseResult<Issue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Issue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Issue' from JSON`,
  );
}
