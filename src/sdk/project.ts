/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { projectCreateTaskProject } from "../funcs/projectCreateTaskProject.js";
import { projectGetTaskProject } from "../funcs/projectGetTaskProject.js";
import { projectListTaskProjects } from "../funcs/projectListTaskProjects.js";
import { projectPatchTaskProject } from "../funcs/projectPatchTaskProject.js";
import { projectRemoveTaskProject } from "../funcs/projectRemoveTaskProject.js";
import { projectUpdateTaskProject } from "../funcs/projectUpdateTaskProject.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Project extends ClientSDK {
    /**
     * Create a project
     */
    async createTaskProject(
        request: operations.CreateTaskProjectRequest,
        options?: RequestOptions
    ): Promise<shared.TaskProject> {
        return unwrapAsync(projectCreateTaskProject(this, request, options));
    }

    /**
     * Retrieve a project
     */
    async getTaskProject(
        request: operations.GetTaskProjectRequest,
        options?: RequestOptions
    ): Promise<shared.TaskProject> {
        return unwrapAsync(projectGetTaskProject(this, request, options));
    }

    /**
     * List all projects
     */
    async listTaskProjects(
        request: operations.ListTaskProjectsRequest,
        options?: RequestOptions
    ): Promise<Array<shared.TaskProject>> {
        return unwrapAsync(projectListTaskProjects(this, request, options));
    }

    /**
     * Update a project
     */
    async patchTaskProject(
        request: operations.PatchTaskProjectRequest,
        options?: RequestOptions
    ): Promise<shared.TaskProject> {
        return unwrapAsync(projectPatchTaskProject(this, request, options));
    }

    /**
     * Remove a project
     */
    async removeTaskProject(
        request: operations.RemoveTaskProjectRequest,
        options?: RequestOptions
    ): Promise<void> {
        return unwrapAsync(projectRemoveTaskProject(this, request, options));
    }

    /**
     * Update a project
     */
    async updateTaskProject(
        request: operations.UpdateTaskProjectRequest,
        options?: RequestOptions
    ): Promise<shared.TaskProject> {
        return unwrapAsync(projectUpdateTaskProject(this, request, options));
    }
}
