/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { instructorCreateLmsInstructor } from "../funcs/instructorCreateLmsInstructor.js";
import { instructorGetLmsInstructor } from "../funcs/instructorGetLmsInstructor.js";
import { instructorListLmsInstructors } from "../funcs/instructorListLmsInstructors.js";
import { instructorPatchLmsInstructor } from "../funcs/instructorPatchLmsInstructor.js";
import { instructorRemoveLmsInstructor } from "../funcs/instructorRemoveLmsInstructor.js";
import { instructorUpdateLmsInstructor } from "../funcs/instructorUpdateLmsInstructor.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Instructor extends ClientSDK {
  /**
   * Create an instructor
   */
  async createLmsInstructor(
    request: operations.CreateLmsInstructorRequest,
    options?: RequestOptions,
  ): Promise<shared.LmsInstructor> {
    return unwrapAsync(instructorCreateLmsInstructor(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve an instructor
   */
  async getLmsInstructor(
    request: operations.GetLmsInstructorRequest,
    options?: RequestOptions,
  ): Promise<shared.LmsInstructor> {
    return unwrapAsync(instructorGetLmsInstructor(
      this,
      request,
      options,
    ));
  }

  /**
   * List all instructors
   */
  async listLmsInstructors(
    request: operations.ListLmsInstructorsRequest,
    options?: RequestOptions,
  ): Promise<Array<shared.LmsInstructor>> {
    return unwrapAsync(instructorListLmsInstructors(
      this,
      request,
      options,
    ));
  }

  /**
   * Update an instructor
   */
  async patchLmsInstructor(
    request: operations.PatchLmsInstructorRequest,
    options?: RequestOptions,
  ): Promise<shared.LmsInstructor> {
    return unwrapAsync(instructorPatchLmsInstructor(
      this,
      request,
      options,
    ));
  }

  /**
   * Remove an instructor
   */
  async removeLmsInstructor(
    request: operations.RemoveLmsInstructorRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(instructorRemoveLmsInstructor(
      this,
      request,
      options,
    ));
  }

  /**
   * Update an instructor
   */
  async updateLmsInstructor(
    request: operations.UpdateLmsInstructorRequest,
    options?: RequestOptions,
  ): Promise<shared.LmsInstructor> {
    return unwrapAsync(instructorUpdateLmsInstructor(
      this,
      request,
      options,
    ));
  }
}