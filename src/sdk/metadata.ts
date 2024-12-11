/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { metadataCreateMetadataMetadata } from "../funcs/metadataCreateMetadataMetadata.js";
import { metadataGetMetadataMetadata } from "../funcs/metadataGetMetadataMetadata.js";
import { metadataListMetadataMetadatas } from "../funcs/metadataListMetadataMetadatas.js";
import { metadataPatchMetadataMetadata } from "../funcs/metadataPatchMetadataMetadata.js";
import { metadataRemoveMetadataMetadata } from "../funcs/metadataRemoveMetadataMetadata.js";
import { metadataUpdateMetadataMetadata } from "../funcs/metadataUpdateMetadataMetadata.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Metadata extends ClientSDK {
  /**
   * Create a metadata
   */
  async createMetadataMetadata(
    request: operations.CreateMetadataMetadataRequest,
    options?: RequestOptions,
  ): Promise<shared.MetadataMetadata> {
    return unwrapAsync(metadataCreateMetadataMetadata(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve a metadata
   */
  async getMetadataMetadata(
    request: operations.GetMetadataMetadataRequest,
    options?: RequestOptions,
  ): Promise<shared.MetadataMetadata> {
    return unwrapAsync(metadataGetMetadataMetadata(
      this,
      request,
      options,
    ));
  }

  /**
   * List all metadatas
   */
  async listMetadataMetadatas(
    request: operations.ListMetadataMetadatasRequest,
    options?: RequestOptions,
  ): Promise<Array<shared.MetadataMetadata>> {
    return unwrapAsync(metadataListMetadataMetadatas(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a metadata
   */
  async patchMetadataMetadata(
    request: operations.PatchMetadataMetadataRequest,
    options?: RequestOptions,
  ): Promise<shared.MetadataMetadata> {
    return unwrapAsync(metadataPatchMetadataMetadata(
      this,
      request,
      options,
    ));
  }

  /**
   * Remove a metadata
   */
  async removeMetadataMetadata(
    request: operations.RemoveMetadataMetadataRequest,
    options?: RequestOptions,
  ): Promise<operations.RemoveMetadataMetadataResponse | undefined> {
    return unwrapAsync(metadataRemoveMetadataMetadata(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a metadata
   */
  async updateMetadataMetadata(
    request: operations.UpdateMetadataMetadataRequest,
    options?: RequestOptions,
  ): Promise<shared.MetadataMetadata> {
    return unwrapAsync(metadataUpdateMetadataMetadata(
      this,
      request,
      options,
    ));
  }
}
