/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { listCreateMartechList } from "../funcs/listCreateMartechList.js";
import { listGetMartechList } from "../funcs/listGetMartechList.js";
import { listListMartechLists } from "../funcs/listListMartechLists.js";
import { listPatchMartechList } from "../funcs/listPatchMartechList.js";
import { listRemoveMartechList } from "../funcs/listRemoveMartechList.js";
import { listUpdateMartechList } from "../funcs/listUpdateMartechList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class List extends ClientSDK {
  /**
   * Create a list
   */
  async createMartechList(
    request: operations.CreateMartechListRequest,
    options?: RequestOptions,
  ): Promise<shared.MarketingList> {
    return unwrapAsync(listCreateMartechList(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve a list
   */
  async getMartechList(
    request: operations.GetMartechListRequest,
    options?: RequestOptions,
  ): Promise<shared.MarketingList> {
    return unwrapAsync(listGetMartechList(
      this,
      request,
      options,
    ));
  }

  /**
   * List all lists
   */
  async listMartechLists(
    request: operations.ListMartechListsRequest,
    options?: RequestOptions,
  ): Promise<Array<shared.MarketingList>> {
    return unwrapAsync(listListMartechLists(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a list
   */
  async patchMartechList(
    request: operations.PatchMartechListRequest,
    options?: RequestOptions,
  ): Promise<shared.MarketingList> {
    return unwrapAsync(listPatchMartechList(
      this,
      request,
      options,
    ));
  }

  /**
   * Remove a list
   */
  async removeMartechList(
    request: operations.RemoveMartechListRequest,
    options?: RequestOptions,
  ): Promise<operations.RemoveMartechListResponse | undefined> {
    return unwrapAsync(listRemoveMartechList(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a list
   */
  async updateMartechList(
    request: operations.UpdateMartechListRequest,
    options?: RequestOptions,
  ): Promise<shared.MarketingList> {
    return unwrapAsync(listUpdateMartechList(
      this,
      request,
      options,
    ));
  }
}
