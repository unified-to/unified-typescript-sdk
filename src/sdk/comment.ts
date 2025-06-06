/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { commentCreateKmsComment } from "../funcs/commentCreateKmsComment.js";
import { commentCreateTaskComment } from "../funcs/commentCreateTaskComment.js";
import { commentCreateUcComment } from "../funcs/commentCreateUcComment.js";
import { commentGetKmsComment } from "../funcs/commentGetKmsComment.js";
import { commentGetTaskComment } from "../funcs/commentGetTaskComment.js";
import { commentGetUcComment } from "../funcs/commentGetUcComment.js";
import { commentListKmsComments } from "../funcs/commentListKmsComments.js";
import { commentListTaskComments } from "../funcs/commentListTaskComments.js";
import { commentListUcComments } from "../funcs/commentListUcComments.js";
import { commentPatchKmsComment } from "../funcs/commentPatchKmsComment.js";
import { commentPatchTaskComment } from "../funcs/commentPatchTaskComment.js";
import { commentPatchUcComment } from "../funcs/commentPatchUcComment.js";
import { commentRemoveKmsComment } from "../funcs/commentRemoveKmsComment.js";
import { commentRemoveTaskComment } from "../funcs/commentRemoveTaskComment.js";
import { commentRemoveUcComment } from "../funcs/commentRemoveUcComment.js";
import { commentUpdateKmsComment } from "../funcs/commentUpdateKmsComment.js";
import { commentUpdateTaskComment } from "../funcs/commentUpdateTaskComment.js";
import { commentUpdateUcComment } from "../funcs/commentUpdateUcComment.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Comment extends ClientSDK {
  /**
   * Create a comment
   */
  async createKmsComment(
    request: operations.CreateKmsCommentRequest,
    options?: RequestOptions,
  ): Promise<shared.KmsComment> {
    return unwrapAsync(commentCreateKmsComment(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a comment
   */
  async createTaskComment(
    request: operations.CreateTaskCommentRequest,
    options?: RequestOptions,
  ): Promise<shared.TaskComment> {
    return unwrapAsync(commentCreateTaskComment(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a comment
   */
  async createUcComment(
    request: operations.CreateUcCommentRequest,
    options?: RequestOptions,
  ): Promise<shared.UcComment> {
    return unwrapAsync(commentCreateUcComment(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve a comment
   */
  async getKmsComment(
    request: operations.GetKmsCommentRequest,
    options?: RequestOptions,
  ): Promise<shared.KmsComment> {
    return unwrapAsync(commentGetKmsComment(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve a comment
   */
  async getTaskComment(
    request: operations.GetTaskCommentRequest,
    options?: RequestOptions,
  ): Promise<shared.TaskComment> {
    return unwrapAsync(commentGetTaskComment(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve a comment
   */
  async getUcComment(
    request: operations.GetUcCommentRequest,
    options?: RequestOptions,
  ): Promise<shared.UcComment> {
    return unwrapAsync(commentGetUcComment(
      this,
      request,
      options,
    ));
  }

  /**
   * List all comments
   */
  async listKmsComments(
    request: operations.ListKmsCommentsRequest,
    options?: RequestOptions,
  ): Promise<Array<shared.KmsComment>> {
    return unwrapAsync(commentListKmsComments(
      this,
      request,
      options,
    ));
  }

  /**
   * List all comments
   */
  async listTaskComments(
    request: operations.ListTaskCommentsRequest,
    options?: RequestOptions,
  ): Promise<Array<shared.TaskComment>> {
    return unwrapAsync(commentListTaskComments(
      this,
      request,
      options,
    ));
  }

  /**
   * List all comments
   */
  async listUcComments(
    request: operations.ListUcCommentsRequest,
    options?: RequestOptions,
  ): Promise<Array<shared.UcComment>> {
    return unwrapAsync(commentListUcComments(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a comment
   */
  async patchKmsComment(
    request: operations.PatchKmsCommentRequest,
    options?: RequestOptions,
  ): Promise<shared.KmsComment> {
    return unwrapAsync(commentPatchKmsComment(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a comment
   */
  async patchTaskComment(
    request: operations.PatchTaskCommentRequest,
    options?: RequestOptions,
  ): Promise<shared.TaskComment> {
    return unwrapAsync(commentPatchTaskComment(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a comment
   */
  async patchUcComment(
    request: operations.PatchUcCommentRequest,
    options?: RequestOptions,
  ): Promise<shared.UcComment> {
    return unwrapAsync(commentPatchUcComment(
      this,
      request,
      options,
    ));
  }

  /**
   * Remove a comment
   */
  async removeKmsComment(
    request: operations.RemoveKmsCommentRequest,
    options?: RequestOptions,
  ): Promise<operations.RemoveKmsCommentResponse | undefined> {
    return unwrapAsync(commentRemoveKmsComment(
      this,
      request,
      options,
    ));
  }

  /**
   * Remove a comment
   */
  async removeTaskComment(
    request: operations.RemoveTaskCommentRequest,
    options?: RequestOptions,
  ): Promise<operations.RemoveTaskCommentResponse | undefined> {
    return unwrapAsync(commentRemoveTaskComment(
      this,
      request,
      options,
    ));
  }

  /**
   * Remove a comment
   */
  async removeUcComment(
    request: operations.RemoveUcCommentRequest,
    options?: RequestOptions,
  ): Promise<operations.RemoveUcCommentResponse | undefined> {
    return unwrapAsync(commentRemoveUcComment(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a comment
   */
  async updateKmsComment(
    request: operations.UpdateKmsCommentRequest,
    options?: RequestOptions,
  ): Promise<shared.KmsComment> {
    return unwrapAsync(commentUpdateKmsComment(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a comment
   */
  async updateTaskComment(
    request: operations.UpdateTaskCommentRequest,
    options?: RequestOptions,
  ): Promise<shared.TaskComment> {
    return unwrapAsync(commentUpdateTaskComment(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a comment
   */
  async updateUcComment(
    request: operations.UpdateUcCommentRequest,
    options?: RequestOptions,
  ): Promise<shared.UcComment> {
    return unwrapAsync(commentUpdateUcComment(
      this,
      request,
      options,
    ));
  }
}
