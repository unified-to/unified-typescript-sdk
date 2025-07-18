/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { commerceCreateCommerceReview } from "../funcs/commerceCreateCommerceReview.js";
import { commerceGetCommerceReview } from "../funcs/commerceGetCommerceReview.js";
import { commerceListCommerceReviews } from "../funcs/commerceListCommerceReviews.js";
import { commercePatchCommerceReview } from "../funcs/commercePatchCommerceReview.js";
import { commerceRemoveCommerceReview } from "../funcs/commerceRemoveCommerceReview.js";
import { commerceUpdateCommerceReview } from "../funcs/commerceUpdateCommerceReview.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Review extends ClientSDK {
  /**
   * Create a review
   */
  async createCommerceReview(
    request: operations.CreateCommerceReviewRequest,
    options?: RequestOptions,
  ): Promise<shared.CommerceReview> {
    return unwrapAsync(commerceCreateCommerceReview(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve a review
   */
  async getCommerceReview(
    request: operations.GetCommerceReviewRequest,
    options?: RequestOptions,
  ): Promise<shared.CommerceReview> {
    return unwrapAsync(commerceGetCommerceReview(
      this,
      request,
      options,
    ));
  }

  /**
   * List all reviews
   */
  async listCommerceReviews(
    request: operations.ListCommerceReviewsRequest,
    options?: RequestOptions,
  ): Promise<Array<shared.CommerceReview>> {
    return unwrapAsync(commerceListCommerceReviews(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a review
   */
  async patchCommerceReview(
    request: operations.PatchCommerceReviewRequest,
    options?: RequestOptions,
  ): Promise<shared.CommerceReview> {
    return unwrapAsync(commercePatchCommerceReview(
      this,
      request,
      options,
    ));
  }

  /**
   * Remove a review
   */
  async removeCommerceReview(
    request: operations.RemoveCommerceReviewRequest,
    options?: RequestOptions,
  ): Promise<operations.RemoveCommerceReviewResponse | undefined> {
    return unwrapAsync(commerceRemoveCommerceReview(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a review
   */
  async updateCommerceReview(
    request: operations.UpdateCommerceReviewRequest,
    options?: RequestOptions,
  ): Promise<shared.CommerceReview> {
    return unwrapAsync(commerceUpdateCommerceReview(
      this,
      request,
      options,
    ));
  }
}
