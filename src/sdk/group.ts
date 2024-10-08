/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { groupCreateHrisGroup } from "../funcs/groupCreateHrisGroup.js";
import { groupGetHrisGroup } from "../funcs/groupGetHrisGroup.js";
import { groupListHrisGroups } from "../funcs/groupListHrisGroups.js";
import { groupPatchHrisGroup } from "../funcs/groupPatchHrisGroup.js";
import { groupRemoveHrisGroup } from "../funcs/groupRemoveHrisGroup.js";
import { groupUpdateHrisGroup } from "../funcs/groupUpdateHrisGroup.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Group extends ClientSDK {
  /**
   * Create a group
   */
  async createHrisGroup(
    request: operations.CreateHrisGroupRequest,
    options?: RequestOptions,
  ): Promise<shared.HrisGroup> {
    return unwrapAsync(groupCreateHrisGroup(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve a group
   */
  async getHrisGroup(
    request: operations.GetHrisGroupRequest,
    options?: RequestOptions,
  ): Promise<shared.HrisGroup> {
    return unwrapAsync(groupGetHrisGroup(
      this,
      request,
      options,
    ));
  }

  /**
   * List all groups
   */
  async listHrisGroups(
    request: operations.ListHrisGroupsRequest,
    options?: RequestOptions,
  ): Promise<Array<shared.HrisGroup>> {
    return unwrapAsync(groupListHrisGroups(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a group
   */
  async patchHrisGroup(
    request: operations.PatchHrisGroupRequest,
    options?: RequestOptions,
  ): Promise<shared.HrisGroup> {
    return unwrapAsync(groupPatchHrisGroup(
      this,
      request,
      options,
    ));
  }

  /**
   * Remove a group
   */
  async removeHrisGroup(
    request: operations.RemoveHrisGroupRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(groupRemoveHrisGroup(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a group
   */
  async updateHrisGroup(
    request: operations.UpdateHrisGroupRequest,
    options?: RequestOptions,
  ): Promise<shared.HrisGroup> {
    return unwrapAsync(groupUpdateHrisGroup(
      this,
      request,
      options,
    ));
  }
}
