/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { atsCreateAtsApplication } from "../funcs/atsCreateAtsApplication.js";
import { atsGetAtsApplication } from "../funcs/atsGetAtsApplication.js";
import { atsListAtsApplications } from "../funcs/atsListAtsApplications.js";
import { atsPatchAtsApplication } from "../funcs/atsPatchAtsApplication.js";
import { atsRemoveAtsApplication } from "../funcs/atsRemoveAtsApplication.js";
import { atsUpdateAtsApplication } from "../funcs/atsUpdateAtsApplication.js";
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
    options?: RequestOptions,
  ): Promise<shared.AtsApplication> {
    return unwrapAsync(atsCreateAtsApplication(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve an application
   */
  async getAtsApplication(
    request: operations.GetAtsApplicationRequest,
    options?: RequestOptions,
  ): Promise<shared.AtsApplication> {
    return unwrapAsync(atsGetAtsApplication(
      this,
      request,
      options,
    ));
  }

  /**
   * List all applications
   */
  async listAtsApplications(
    request: operations.ListAtsApplicationsRequest,
    options?: RequestOptions,
  ): Promise<Array<shared.AtsApplication>> {
    return unwrapAsync(atsListAtsApplications(
      this,
      request,
      options,
    ));
  }

  /**
   * Update an application
   */
  async patchAtsApplication(
    request: operations.PatchAtsApplicationRequest,
    options?: RequestOptions,
  ): Promise<shared.AtsApplication> {
    return unwrapAsync(atsPatchAtsApplication(
      this,
      request,
      options,
    ));
  }

  /**
   * Remove an application
   */
  async removeAtsApplication(
    request: operations.RemoveAtsApplicationRequest,
    options?: RequestOptions,
  ): Promise<operations.RemoveAtsApplicationResponse | undefined> {
    return unwrapAsync(atsRemoveAtsApplication(
      this,
      request,
      options,
    ));
  }

  /**
   * Update an application
   */
  async updateAtsApplication(
    request: operations.UpdateAtsApplicationRequest,
    options?: RequestOptions,
  ): Promise<shared.AtsApplication> {
    return unwrapAsync(atsUpdateAtsApplication(
      this,
      request,
      options,
    ));
  }
}
