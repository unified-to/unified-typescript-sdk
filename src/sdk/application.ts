/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { applicationCreateAtsApplication } from "../funcs/applicationCreateAtsApplication.js";
import { applicationGetAtsApplication } from "../funcs/applicationGetAtsApplication.js";
import { applicationListAtsApplications } from "../funcs/applicationListAtsApplications.js";
import { applicationPatchAtsApplication } from "../funcs/applicationPatchAtsApplication.js";
import { applicationRemoveAtsApplication } from "../funcs/applicationRemoveAtsApplication.js";
import { applicationUpdateAtsApplication } from "../funcs/applicationUpdateAtsApplication.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Application extends ClientSDK {
    /**
     * Create an application
     */
    async createAtsApplication(
        request: operations.CreateAtsApplicationRequest,
        options?: RequestOptions
    ): Promise<shared.AtsApplication> {
        return unwrapAsync(applicationCreateAtsApplication(this, request, options));
    }

    /**
     * Retrieve an application
     */
    async getAtsApplication(
        request: operations.GetAtsApplicationRequest,
        options?: RequestOptions
    ): Promise<shared.AtsApplication> {
        return unwrapAsync(applicationGetAtsApplication(this, request, options));
    }

    /**
     * List all applications
     */
    async listAtsApplications(
        request: operations.ListAtsApplicationsRequest,
        options?: RequestOptions
    ): Promise<Array<shared.AtsApplication>> {
        return unwrapAsync(applicationListAtsApplications(this, request, options));
    }

    /**
     * Update an application
     */
    async patchAtsApplication(
        request: operations.PatchAtsApplicationRequest,
        options?: RequestOptions
    ): Promise<shared.AtsApplication> {
        return unwrapAsync(applicationPatchAtsApplication(this, request, options));
    }

    /**
     * Remove an application
     */
    async removeAtsApplication(
        request: operations.RemoveAtsApplicationRequest,
        options?: RequestOptions
    ): Promise<void> {
        return unwrapAsync(applicationRemoveAtsApplication(this, request, options));
    }

    /**
     * Update an application
     */
    async updateAtsApplication(
        request: operations.UpdateAtsApplicationRequest,
        options?: RequestOptions
    ): Promise<shared.AtsApplication> {
        return unwrapAsync(applicationUpdateAtsApplication(this, request, options));
    }
}
