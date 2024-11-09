/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { commitCreateRepoCommit } from "../funcs/commitCreateRepoCommit.js";
import { commitGetRepoCommit } from "../funcs/commitGetRepoCommit.js";
import { commitListRepoCommits } from "../funcs/commitListRepoCommits.js";
import { commitPatchRepoCommit } from "../funcs/commitPatchRepoCommit.js";
import { commitRemoveRepoCommit } from "../funcs/commitRemoveRepoCommit.js";
import { commitUpdateRepoCommit } from "../funcs/commitUpdateRepoCommit.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Commit extends ClientSDK {
  /**
   * Create a commit
   */
  async createRepoCommit(
    request: operations.CreateRepoCommitRequest,
    options?: RequestOptions,
  ): Promise<shared.RepoCommit> {
    return unwrapAsync(commitCreateRepoCommit(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve a commit
   */
  async getRepoCommit(
    request: operations.GetRepoCommitRequest,
    options?: RequestOptions,
  ): Promise<shared.RepoCommit> {
    return unwrapAsync(commitGetRepoCommit(
      this,
      request,
      options,
    ));
  }

  /**
   * List all commits
   */
  async listRepoCommits(
    request: operations.ListRepoCommitsRequest,
    options?: RequestOptions,
  ): Promise<Array<shared.RepoCommit>> {
    return unwrapAsync(commitListRepoCommits(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a commit
   */
  async patchRepoCommit(
    request: operations.PatchRepoCommitRequest,
    options?: RequestOptions,
  ): Promise<shared.RepoCommit> {
    return unwrapAsync(commitPatchRepoCommit(
      this,
      request,
      options,
    ));
  }

  /**
   * Remove a commit
   */
  async removeRepoCommit(
    request: operations.RemoveRepoCommitRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(commitRemoveRepoCommit(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a commit
   */
  async updateRepoCommit(
    request: operations.UpdateRepoCommitRequest,
    options?: RequestOptions,
  ): Promise<shared.RepoCommit> {
    return unwrapAsync(commitUpdateRepoCommit(
      this,
      request,
      options,
    ));
  }
}
