/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { jobCreateAtsJob } from "../funcs/jobCreateAtsJob.js";
import { jobGetAtsJob } from "../funcs/jobGetAtsJob.js";
import { jobListAtsJobs } from "../funcs/jobListAtsJobs.js";
import { jobPatchAtsJob } from "../funcs/jobPatchAtsJob.js";
import { jobRemoveAtsJob } from "../funcs/jobRemoveAtsJob.js";
import { jobUpdateAtsJob } from "../funcs/jobUpdateAtsJob.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Job extends ClientSDK {
    /**
     * Create a job
     */
    async createAtsJob(
        request: operations.CreateAtsJobRequest,
        options?: RequestOptions
    ): Promise<shared.AtsJob> {
        return unwrapAsync(jobCreateAtsJob(this, request, options));
    }

    /**
     * Retrieve a job
     */
    async getAtsJob(
        request: operations.GetAtsJobRequest,
        options?: RequestOptions
    ): Promise<shared.AtsJob> {
        return unwrapAsync(jobGetAtsJob(this, request, options));
    }

    /**
     * List all jobs
     */
    async listAtsJobs(
        request: operations.ListAtsJobsRequest,
        options?: RequestOptions
    ): Promise<Array<shared.AtsJob>> {
        return unwrapAsync(jobListAtsJobs(this, request, options));
    }

    /**
     * Update a job
     */
    async patchAtsJob(
        request: operations.PatchAtsJobRequest,
        options?: RequestOptions
    ): Promise<shared.AtsJob> {
        return unwrapAsync(jobPatchAtsJob(this, request, options));
    }

    /**
     * Remove a job
     */
    async removeAtsJob(
        request: operations.RemoveAtsJobRequest,
        options?: RequestOptions
    ): Promise<string> {
        return unwrapAsync(jobRemoveAtsJob(this, request, options));
    }

    /**
     * Update a job
     */
    async updateAtsJob(
        request: operations.UpdateAtsJobRequest,
        options?: RequestOptions
    ): Promise<shared.AtsJob> {
        return unwrapAsync(jobUpdateAtsJob(this, request, options));
    }
}
