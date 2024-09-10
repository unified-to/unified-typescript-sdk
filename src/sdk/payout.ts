/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { payoutGetPaymentPayout } from "../funcs/payoutGetPaymentPayout.js";
import { payoutListPaymentPayouts } from "../funcs/payoutListPaymentPayouts.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Payout extends ClientSDK {
  /**
   * Retrieve a payout
   */
  async getPaymentPayout(
    request: operations.GetPaymentPayoutRequest,
    options?: RequestOptions,
  ): Promise<shared.PaymentPayout> {
    return unwrapAsync(payoutGetPaymentPayout(
      this,
      request,
      options,
    ));
  }

  /**
   * List all payouts
   */
  async listPaymentPayouts(
    request: operations.ListPaymentPayoutsRequest,
    options?: RequestOptions,
  ): Promise<Array<shared.PaymentPayout>> {
    return unwrapAsync(payoutListPaymentPayouts(
      this,
      request,
      options,
    ));
  }
}
