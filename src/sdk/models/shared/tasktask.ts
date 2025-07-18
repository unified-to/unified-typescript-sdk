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
import {
  TaskMetadata,
  TaskMetadata$inboundSchema,
  TaskMetadata$Outbound,
  TaskMetadata$outboundSchema,
} from "./taskmetadata.js";

export const TaskTaskStatus = {
  Opened: "OPENED",
  InProgress: "IN_PROGRESS",
  Completed: "COMPLETED",
} as const;
export type TaskTaskStatus = OpenEnum<typeof TaskTaskStatus>;

export type TaskTask = {
  assignedUserIds?: Array<string> | undefined;
  /**
   * Array of attachment IDs retrieved from StorageFile.Get endpoint
   */
  attachmentIds?: Array<string> | undefined;
  completedAt?: Date | undefined;
  createdAt?: Date | undefined;
  creatorUserId?: string | undefined;
  dueAt?: Date | undefined;
  followerUserIds?: Array<string> | undefined;
  groupIds?: Array<string> | undefined;
  hasChildren?: boolean | undefined;
  id?: string | undefined;
  metadata?: Array<TaskMetadata> | undefined;
  name?: string | undefined;
  notes?: string | undefined;
  parentId?: string | undefined;
  priority?: string | undefined;
  projectId?: string | undefined;
  raw?: { [k: string]: any } | undefined;
  status?: TaskTaskStatus | undefined;
  tags?: Array<string> | undefined;
  updatedAt?: Date | undefined;
  url?: string | undefined;
};

/** @internal */
export const TaskTaskStatus$inboundSchema: z.ZodType<
  TaskTaskStatus,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(TaskTaskStatus),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const TaskTaskStatus$outboundSchema: z.ZodType<
  TaskTaskStatus,
  z.ZodTypeDef,
  TaskTaskStatus
> = z.union([
  z.nativeEnum(TaskTaskStatus),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaskTaskStatus$ {
  /** @deprecated use `TaskTaskStatus$inboundSchema` instead. */
  export const inboundSchema = TaskTaskStatus$inboundSchema;
  /** @deprecated use `TaskTaskStatus$outboundSchema` instead. */
  export const outboundSchema = TaskTaskStatus$outboundSchema;
}

/** @internal */
export const TaskTask$inboundSchema: z.ZodType<
  TaskTask,
  z.ZodTypeDef,
  unknown
> = z.object({
  assigned_user_ids: z.array(z.string()).optional(),
  attachment_ids: z.array(z.string()).optional(),
  completed_at: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ).optional(),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  creator_user_id: z.string().optional(),
  due_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  follower_user_ids: z.array(z.string()).optional(),
  group_ids: z.array(z.string()).optional(),
  has_children: z.boolean().optional(),
  id: z.string().optional(),
  metadata: z.array(TaskMetadata$inboundSchema).optional(),
  name: z.string().optional(),
  notes: z.string().optional(),
  parent_id: z.string().optional(),
  priority: z.string().optional(),
  project_id: z.string().optional(),
  raw: z.record(z.any()).optional(),
  status: TaskTaskStatus$inboundSchema.optional(),
  tags: z.array(z.string()).optional(),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  url: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "assigned_user_ids": "assignedUserIds",
    "attachment_ids": "attachmentIds",
    "completed_at": "completedAt",
    "created_at": "createdAt",
    "creator_user_id": "creatorUserId",
    "due_at": "dueAt",
    "follower_user_ids": "followerUserIds",
    "group_ids": "groupIds",
    "has_children": "hasChildren",
    "parent_id": "parentId",
    "project_id": "projectId",
    "updated_at": "updatedAt",
  });
});

/** @internal */
export type TaskTask$Outbound = {
  assigned_user_ids?: Array<string> | undefined;
  attachment_ids?: Array<string> | undefined;
  completed_at?: string | undefined;
  created_at?: string | undefined;
  creator_user_id?: string | undefined;
  due_at?: string | undefined;
  follower_user_ids?: Array<string> | undefined;
  group_ids?: Array<string> | undefined;
  has_children?: boolean | undefined;
  id?: string | undefined;
  metadata?: Array<TaskMetadata$Outbound> | undefined;
  name?: string | undefined;
  notes?: string | undefined;
  parent_id?: string | undefined;
  priority?: string | undefined;
  project_id?: string | undefined;
  raw?: { [k: string]: any } | undefined;
  status?: string | undefined;
  tags?: Array<string> | undefined;
  updated_at?: string | undefined;
  url?: string | undefined;
};

/** @internal */
export const TaskTask$outboundSchema: z.ZodType<
  TaskTask$Outbound,
  z.ZodTypeDef,
  TaskTask
> = z.object({
  assignedUserIds: z.array(z.string()).optional(),
  attachmentIds: z.array(z.string()).optional(),
  completedAt: z.date().transform(v => v.toISOString()).optional(),
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  creatorUserId: z.string().optional(),
  dueAt: z.date().transform(v => v.toISOString()).optional(),
  followerUserIds: z.array(z.string()).optional(),
  groupIds: z.array(z.string()).optional(),
  hasChildren: z.boolean().optional(),
  id: z.string().optional(),
  metadata: z.array(TaskMetadata$outboundSchema).optional(),
  name: z.string().optional(),
  notes: z.string().optional(),
  parentId: z.string().optional(),
  priority: z.string().optional(),
  projectId: z.string().optional(),
  raw: z.record(z.any()).optional(),
  status: TaskTaskStatus$outboundSchema.optional(),
  tags: z.array(z.string()).optional(),
  updatedAt: z.date().transform(v => v.toISOString()).optional(),
  url: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    assignedUserIds: "assigned_user_ids",
    attachmentIds: "attachment_ids",
    completedAt: "completed_at",
    createdAt: "created_at",
    creatorUserId: "creator_user_id",
    dueAt: "due_at",
    followerUserIds: "follower_user_ids",
    groupIds: "group_ids",
    hasChildren: "has_children",
    parentId: "parent_id",
    projectId: "project_id",
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaskTask$ {
  /** @deprecated use `TaskTask$inboundSchema` instead. */
  export const inboundSchema = TaskTask$inboundSchema;
  /** @deprecated use `TaskTask$outboundSchema` instead. */
  export const outboundSchema = TaskTask$outboundSchema;
  /** @deprecated use `TaskTask$Outbound` instead. */
  export type Outbound = TaskTask$Outbound;
}

export function taskTaskToJSON(taskTask: TaskTask): string {
  return JSON.stringify(TaskTask$outboundSchema.parse(taskTask));
}

export function taskTaskFromJSON(
  jsonString: string,
): SafeParseResult<TaskTask, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TaskTask$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TaskTask' from JSON`,
  );
}
