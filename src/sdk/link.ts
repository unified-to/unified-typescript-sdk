/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { linkCreatePaymentLink } from "../funcs/linkCreatePaymentLink.js";
import { linkGetPaymentLink } from "../funcs/linkGetPaymentLink.js";
import { linkListPaymentLinks } from "../funcs/linkListPaymentLinks.js";
import { linkPatchPaymentLink } from "../funcs/linkPatchPaymentLink.js";
import { linkRemovePaymentLink } from "../funcs/linkRemovePaymentLink.js";
import { linkUpdatePaymentLink } from "../funcs/linkUpdatePaymentLink.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Link extends ClientSDK {
  /**
   * Create a link
   */
  async createPaymentLink(
    request: operations.CreatePaymentLinkRequest,
    options?: RequestOptions,
  ): Promise<shared.PaymentLink> {
    return unwrapAsync(linkCreatePaymentLink(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve a link
   */
  async getPaymentLink(
    request: operations.GetPaymentLinkRequest,
    options?: RequestOptions,
  ): Promise<shared.PaymentLink> {
    return unwrapAsync(linkGetPaymentLink(
      this,
      request,
      options,
    ));
  }

  /**
   * List all links
   */
  async listPaymentLinks(
    request: operations.ListPaymentLinksRequest,
    options?: RequestOptions,
  ): Promise<Array<shared.PaymentLink>> {
    return unwrapAsync(linkListPaymentLinks(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a link
   */
  async patchPaymentLink(
    request: operations.PatchPaymentLinkRequest,
    options?: RequestOptions,
  ): Promise<shared.PaymentLink> {
    return unwrapAsync(linkPatchPaymentLink(
      this,
      request,
      options,
    ));
  }

  /**
   * Remove a link
   */
  async removePaymentLink(
    request: operations.RemovePaymentLinkRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(linkRemovePaymentLink(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a link
   */
  async updatePaymentLink(
    request: operations.UpdatePaymentLinkRequest,
    options?: RequestOptions,
  ): Promise<shared.PaymentLink> {
    return unwrapAsync(linkUpdatePaymentLink(
      this,
      request,
      options,
    ));
  }
}
