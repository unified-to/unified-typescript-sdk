/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { activityCreateAtsActivity } from "../funcs/activityCreateAtsActivity.js";
import { activityGetAtsActivity } from "../funcs/activityGetAtsActivity.js";
import { activityListAtsActivities } from "../funcs/activityListAtsActivities.js";
import { activityPatchAtsActivity } from "../funcs/activityPatchAtsActivity.js";
import { activityRemoveAtsActivity } from "../funcs/activityRemoveAtsActivity.js";
import { activityUpdateAtsActivity } from "../funcs/activityUpdateAtsActivity.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Activity extends ClientSDK {
  /**
   * Create an activity
   */
  async createAtsActivity(
    request: operations.CreateAtsActivityRequest,
    options?: RequestOptions,
  ): Promise<shared.AtsActivity> {
    return unwrapAsync(activityCreateAtsActivity(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve an activity
   */
  async getAtsActivity(
    request: operations.GetAtsActivityRequest,
    options?: RequestOptions,
  ): Promise<shared.AtsActivity> {
    return unwrapAsync(activityGetAtsActivity(
      this,
      request,
      options,
    ));
  }

  /**
   * List all activities
   */
  async listAtsActivities(
    request: operations.ListAtsActivitiesRequest,
    options?: RequestOptions,
  ): Promise<Array<shared.AtsActivity>> {
    return unwrapAsync(activityListAtsActivities(
      this,
      request,
      options,
    ));
  }

  /**
   * Update an activity
   */
  async patchAtsActivity(
    request: operations.PatchAtsActivityRequest,
    options?: RequestOptions,
  ): Promise<shared.AtsActivity> {
    return unwrapAsync(activityPatchAtsActivity(
      this,
      request,
      options,
    ));
  }

  /**
   * Remove an activity
   */
  async removeAtsActivity(
    request: operations.RemoveAtsActivityRequest,
    options?: RequestOptions,
  ): Promise<operations.RemoveAtsActivityResponse | undefined> {
    return unwrapAsync(activityRemoveAtsActivity(
      this,
      request,
      options,
    ));
  }

  /**
   * Update an activity
   */
  async updateAtsActivity(
    request: operations.UpdateAtsActivityRequest,
    options?: RequestOptions,
  ): Promise<shared.AtsActivity> {
    return unwrapAsync(activityUpdateAtsActivity(
      this,
      request,
      options,
    ));
  }
}
