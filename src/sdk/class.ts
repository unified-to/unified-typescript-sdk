/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { classCreateLmsClass } from "../funcs/classCreateLmsClass.js";
import { classGetLmsClass } from "../funcs/classGetLmsClass.js";
import { classListLmsClasses } from "../funcs/classListLmsClasses.js";
import { classPatchLmsClass } from "../funcs/classPatchLmsClass.js";
import { classRemoveLmsClass } from "../funcs/classRemoveLmsClass.js";
import { classUpdateLmsClass } from "../funcs/classUpdateLmsClass.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Class extends ClientSDK {
  /**
   * Create a class
   */
  async createLmsClass(
    request: operations.CreateLmsClassRequest,
    options?: RequestOptions,
  ): Promise<shared.LmsClass> {
    return unwrapAsync(classCreateLmsClass(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve a class
   */
  async getLmsClass(
    request: operations.GetLmsClassRequest,
    options?: RequestOptions,
  ): Promise<shared.LmsClass> {
    return unwrapAsync(classGetLmsClass(
      this,
      request,
      options,
    ));
  }

  /**
   * List all classes
   */
  async listLmsClasses(
    request: operations.ListLmsClassesRequest,
    options?: RequestOptions,
  ): Promise<Array<shared.LmsClass>> {
    return unwrapAsync(classListLmsClasses(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a class
   */
  async patchLmsClass(
    request: operations.PatchLmsClassRequest,
    options?: RequestOptions,
  ): Promise<shared.LmsClass> {
    return unwrapAsync(classPatchLmsClass(
      this,
      request,
      options,
    ));
  }

  /**
   * Remove a class
   */
  async removeLmsClass(
    request: operations.RemoveLmsClassRequest,
    options?: RequestOptions,
  ): Promise<operations.RemoveLmsClassResponse | undefined> {
    return unwrapAsync(classRemoveLmsClass(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a class
   */
  async updateLmsClass(
    request: operations.UpdateLmsClassRequest,
    options?: RequestOptions,
  ): Promise<shared.LmsClass> {
    return unwrapAsync(classUpdateLmsClass(
      this,
      request,
      options,
    ));
  }
}
