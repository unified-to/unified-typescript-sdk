/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { kmsCreateKmsPage } from "../funcs/kmsCreateKmsPage.js";
import { kmsCreateKmsSpace } from "../funcs/kmsCreateKmsSpace.js";
import { kmsGetKmsPage } from "../funcs/kmsGetKmsPage.js";
import { kmsGetKmsSpace } from "../funcs/kmsGetKmsSpace.js";
import { kmsListKmsPages } from "../funcs/kmsListKmsPages.js";
import { kmsListKmsSpaces } from "../funcs/kmsListKmsSpaces.js";
import { kmsPatchKmsPage } from "../funcs/kmsPatchKmsPage.js";
import { kmsPatchKmsSpace } from "../funcs/kmsPatchKmsSpace.js";
import { kmsRemoveKmsPage } from "../funcs/kmsRemoveKmsPage.js";
import { kmsRemoveKmsSpace } from "../funcs/kmsRemoveKmsSpace.js";
import { kmsUpdateKmsPage } from "../funcs/kmsUpdateKmsPage.js";
import { kmsUpdateKmsSpace } from "../funcs/kmsUpdateKmsSpace.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Kms extends ClientSDK {
  /**
   * Create a page
   */
  async createKmsPage(
    request: operations.CreateKmsPageRequest,
    options?: RequestOptions,
  ): Promise<shared.KmsPage> {
    return unwrapAsync(kmsCreateKmsPage(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a space
   */
  async createKmsSpace(
    request: operations.CreateKmsSpaceRequest,
    options?: RequestOptions,
  ): Promise<shared.KmsSpace> {
    return unwrapAsync(kmsCreateKmsSpace(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve a page
   */
  async getKmsPage(
    request: operations.GetKmsPageRequest,
    options?: RequestOptions,
  ): Promise<shared.KmsPage> {
    return unwrapAsync(kmsGetKmsPage(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve a space
   */
  async getKmsSpace(
    request: operations.GetKmsSpaceRequest,
    options?: RequestOptions,
  ): Promise<shared.KmsSpace> {
    return unwrapAsync(kmsGetKmsSpace(
      this,
      request,
      options,
    ));
  }

  /**
   * List all pages
   */
  async listKmsPages(
    request: operations.ListKmsPagesRequest,
    options?: RequestOptions,
  ): Promise<Array<shared.KmsPage>> {
    return unwrapAsync(kmsListKmsPages(
      this,
      request,
      options,
    ));
  }

  /**
   * List all spaces
   */
  async listKmsSpaces(
    request: operations.ListKmsSpacesRequest,
    options?: RequestOptions,
  ): Promise<Array<shared.KmsSpace>> {
    return unwrapAsync(kmsListKmsSpaces(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a page
   */
  async patchKmsPage(
    request: operations.PatchKmsPageRequest,
    options?: RequestOptions,
  ): Promise<shared.KmsPage> {
    return unwrapAsync(kmsPatchKmsPage(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a space
   */
  async patchKmsSpace(
    request: operations.PatchKmsSpaceRequest,
    options?: RequestOptions,
  ): Promise<shared.KmsSpace> {
    return unwrapAsync(kmsPatchKmsSpace(
      this,
      request,
      options,
    ));
  }

  /**
   * Remove a page
   */
  async removeKmsPage(
    request: operations.RemoveKmsPageRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(kmsRemoveKmsPage(
      this,
      request,
      options,
    ));
  }

  /**
   * Remove a space
   */
  async removeKmsSpace(
    request: operations.RemoveKmsSpaceRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(kmsRemoveKmsSpace(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a page
   */
  async updateKmsPage(
    request: operations.UpdateKmsPageRequest,
    options?: RequestOptions,
  ): Promise<shared.KmsPage> {
    return unwrapAsync(kmsUpdateKmsPage(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a space
   */
  async updateKmsSpace(
    request: operations.UpdateKmsSpaceRequest,
    options?: RequestOptions,
  ): Promise<shared.KmsSpace> {
    return unwrapAsync(kmsUpdateKmsSpace(
      this,
      request,
      options,
    ));
  }
}
