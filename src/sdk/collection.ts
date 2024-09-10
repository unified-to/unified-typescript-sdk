/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { collectionCreateCommerceCollection } from "../funcs/collectionCreateCommerceCollection.js";
import { collectionGetCommerceCollection } from "../funcs/collectionGetCommerceCollection.js";
import { collectionListCommerceCollections } from "../funcs/collectionListCommerceCollections.js";
import { collectionPatchCommerceCollection } from "../funcs/collectionPatchCommerceCollection.js";
import { collectionRemoveCommerceCollection } from "../funcs/collectionRemoveCommerceCollection.js";
import { collectionUpdateCommerceCollection } from "../funcs/collectionUpdateCommerceCollection.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Collection extends ClientSDK {
  /**
   * Create a collection
   */
  async createCommerceCollection(
    request: operations.CreateCommerceCollectionRequest,
    options?: RequestOptions,
  ): Promise<shared.CommerceCollection> {
    return unwrapAsync(collectionCreateCommerceCollection(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve a collection
   */
  async getCommerceCollection(
    request: operations.GetCommerceCollectionRequest,
    options?: RequestOptions,
  ): Promise<shared.CommerceCollection> {
    return unwrapAsync(collectionGetCommerceCollection(
      this,
      request,
      options,
    ));
  }

  /**
   * List all collections
   */
  async listCommerceCollections(
    request: operations.ListCommerceCollectionsRequest,
    options?: RequestOptions,
  ): Promise<Array<shared.CommerceCollection>> {
    return unwrapAsync(collectionListCommerceCollections(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a collection
   */
  async patchCommerceCollection(
    request: operations.PatchCommerceCollectionRequest,
    options?: RequestOptions,
  ): Promise<shared.CommerceCollection> {
    return unwrapAsync(collectionPatchCommerceCollection(
      this,
      request,
      options,
    ));
  }

  /**
   * Remove a collection
   */
  async removeCommerceCollection(
    request: operations.RemoveCommerceCollectionRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(collectionRemoveCommerceCollection(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a collection
   */
  async updateCommerceCollection(
    request: operations.UpdateCommerceCollectionRequest,
    options?: RequestOptions,
  ): Promise<shared.CommerceCollection> {
    return unwrapAsync(collectionUpdateCommerceCollection(
      this,
      request,
      options,
    ));
  }
}
