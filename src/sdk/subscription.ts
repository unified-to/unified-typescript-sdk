/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { paymentCreatePaymentSubscription } from "../funcs/paymentCreatePaymentSubscription.js";
import { paymentGetPaymentSubscription } from "../funcs/paymentGetPaymentSubscription.js";
import { paymentListPaymentSubscriptions } from "../funcs/paymentListPaymentSubscriptions.js";
import { paymentPatchPaymentSubscription } from "../funcs/paymentPatchPaymentSubscription.js";
import { paymentRemovePaymentSubscription } from "../funcs/paymentRemovePaymentSubscription.js";
import { paymentUpdatePaymentSubscription } from "../funcs/paymentUpdatePaymentSubscription.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Subscription extends ClientSDK {
  /**
   * Create a subscription
   */
  async createPaymentSubscription(
    request: operations.CreatePaymentSubscriptionRequest,
    options?: RequestOptions,
  ): Promise<shared.PaymentSubscription> {
    return unwrapAsync(paymentCreatePaymentSubscription(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve a subscription
   */
  async getPaymentSubscription(
    request: operations.GetPaymentSubscriptionRequest,
    options?: RequestOptions,
  ): Promise<shared.PaymentSubscription> {
    return unwrapAsync(paymentGetPaymentSubscription(
      this,
      request,
      options,
    ));
  }

  /**
   * List all subscriptions
   */
  async listPaymentSubscriptions(
    request: operations.ListPaymentSubscriptionsRequest,
    options?: RequestOptions,
  ): Promise<Array<shared.PaymentSubscription>> {
    return unwrapAsync(paymentListPaymentSubscriptions(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a subscription
   */
  async patchPaymentSubscription(
    request: operations.PatchPaymentSubscriptionRequest,
    options?: RequestOptions,
  ): Promise<shared.PaymentSubscription> {
    return unwrapAsync(paymentPatchPaymentSubscription(
      this,
      request,
      options,
    ));
  }

  /**
   * Remove a subscription
   */
  async removePaymentSubscription(
    request: operations.RemovePaymentSubscriptionRequest,
    options?: RequestOptions,
  ): Promise<operations.RemovePaymentSubscriptionResponse | undefined> {
    return unwrapAsync(paymentRemovePaymentSubscription(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a subscription
   */
  async updatePaymentSubscription(
    request: operations.UpdatePaymentSubscriptionRequest,
    options?: RequestOptions,
  ): Promise<shared.PaymentSubscription> {
    return unwrapAsync(paymentUpdatePaymentSubscription(
      this,
      request,
      options,
    ));
  }
}
