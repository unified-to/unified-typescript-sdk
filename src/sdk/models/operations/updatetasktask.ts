/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type UpdateTaskTaskRequest = {
    taskTask?: shared.TaskTask | undefined;
    /**
     * ID of the connection
     */
    connectionId: string;
    /**
     * ID of the Task
     */
    id: string;
};

/** @internal */
export const UpdateTaskTaskRequest$inboundSchema: z.ZodType<
    UpdateTaskTaskRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        TaskTask: shared.TaskTask$inboundSchema.optional(),
        connection_id: z.string(),
        id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            TaskTask: "taskTask",
            connection_id: "connectionId",
        });
    });

/** @internal */
export type UpdateTaskTaskRequest$Outbound = {
    TaskTask?: shared.TaskTask$Outbound | undefined;
    connection_id: string;
    id: string;
};

/** @internal */
export const UpdateTaskTaskRequest$outboundSchema: z.ZodType<
    UpdateTaskTaskRequest$Outbound,
    z.ZodTypeDef,
    UpdateTaskTaskRequest
> = z
    .object({
        taskTask: shared.TaskTask$outboundSchema.optional(),
        connectionId: z.string(),
        id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            taskTask: "TaskTask",
            connectionId: "connection_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateTaskTaskRequest$ {
    /** @deprecated use `UpdateTaskTaskRequest$inboundSchema` instead. */
    export const inboundSchema = UpdateTaskTaskRequest$inboundSchema;
    /** @deprecated use `UpdateTaskTaskRequest$outboundSchema` instead. */
    export const outboundSchema = UpdateTaskTaskRequest$outboundSchema;
    /** @deprecated use `UpdateTaskTaskRequest$Outbound` instead. */
    export type Outbound = UpdateTaskTaskRequest$Outbound;
}
