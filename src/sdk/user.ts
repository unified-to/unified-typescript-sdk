/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { scimCreateScimUsers } from "../funcs/scimCreateScimUsers.js";
import { scimGetScimUsers } from "../funcs/scimGetScimUsers.js";
import { scimListScimUsers } from "../funcs/scimListScimUsers.js";
import { scimPatchScimUsers } from "../funcs/scimPatchScimUsers.js";
import { scimRemoveScimUsers } from "../funcs/scimRemoveScimUsers.js";
import { scimUpdateScimUsers } from "../funcs/scimUpdateScimUsers.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class User extends ClientSDK {
  /**
   * Create user
   */
  async createScimUsers(
    request: operations.CreateScimUsersRequest,
    options?: RequestOptions,
  ): Promise<shared.ScimUser> {
    return unwrapAsync(scimCreateScimUsers(
      this,
      request,
      options,
    ));
  }

  /**
   * Get user
   */
  async getScimUsers(
    request: operations.GetScimUsersRequest,
    options?: RequestOptions,
  ): Promise<shared.ScimUser> {
    return unwrapAsync(scimGetScimUsers(
      this,
      request,
      options,
    ));
  }

  /**
   * List users
   */
  async listScimUsers(
    request: operations.ListScimUsersRequest,
    options?: RequestOptions,
  ): Promise<Array<shared.ScimUser>> {
    return unwrapAsync(scimListScimUsers(
      this,
      request,
      options,
    ));
  }

  /**
   * Update user
   */
  async patchScimUsers(
    request: operations.PatchScimUsersRequest,
    options?: RequestOptions,
  ): Promise<shared.ScimUser> {
    return unwrapAsync(scimPatchScimUsers(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete user
   */
  async removeScimUsers(
    request: operations.RemoveScimUsersRequest,
    options?: RequestOptions,
  ): Promise<operations.RemoveScimUsersResponse | undefined> {
    return unwrapAsync(scimRemoveScimUsers(
      this,
      request,
      options,
    ));
  }

  /**
   * Update user
   */
  async updateScimUsers(
    request: operations.UpdateScimUsersRequest,
    options?: RequestOptions,
  ): Promise<shared.ScimUser> {
    return unwrapAsync(scimUpdateScimUsers(
      this,
      request,
      options,
    ));
  }
}
