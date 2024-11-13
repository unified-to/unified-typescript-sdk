/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ucCreateUcContact } from "../funcs/ucCreateUcContact.js";
import { ucGetUcContact } from "../funcs/ucGetUcContact.js";
import { ucListUcCalls } from "../funcs/ucListUcCalls.js";
import { ucListUcContacts } from "../funcs/ucListUcContacts.js";
import { ucPatchUcContact } from "../funcs/ucPatchUcContact.js";
import { ucRemoveUcContact } from "../funcs/ucRemoveUcContact.js";
import { ucUpdateUcContact } from "../funcs/ucUpdateUcContact.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Uc extends ClientSDK {
  /**
   * Create a contact
   */
  async createUcContact(
    request: operations.CreateUcContactRequest,
    options?: RequestOptions,
  ): Promise<shared.UcContact> {
    return unwrapAsync(ucCreateUcContact(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve a contact
   */
  async getUcContact(
    request: operations.GetUcContactRequest,
    options?: RequestOptions,
  ): Promise<shared.UcContact> {
    return unwrapAsync(ucGetUcContact(
      this,
      request,
      options,
    ));
  }

  /**
   * List all calls
   */
  async listUcCalls(
    request: operations.ListUcCallsRequest,
    options?: RequestOptions,
  ): Promise<Array<shared.UcCall>> {
    return unwrapAsync(ucListUcCalls(
      this,
      request,
      options,
    ));
  }

  /**
   * List all contacts
   */
  async listUcContacts(
    request: operations.ListUcContactsRequest,
    options?: RequestOptions,
  ): Promise<Array<shared.UcContact>> {
    return unwrapAsync(ucListUcContacts(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a contact
   */
  async patchUcContact(
    request: operations.PatchUcContactRequest,
    options?: RequestOptions,
  ): Promise<shared.UcContact> {
    return unwrapAsync(ucPatchUcContact(
      this,
      request,
      options,
    ));
  }

  /**
   * Remove a contact
   */
  async removeUcContact(
    request: operations.RemoveUcContactRequest,
    options?: RequestOptions,
  ): Promise<operations.RemoveUcContactResponse | undefined> {
    return unwrapAsync(ucRemoveUcContact(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a contact
   */
  async updateUcContact(
    request: operations.UpdateUcContactRequest,
    options?: RequestOptions,
  ): Promise<shared.UcContact> {
    return unwrapAsync(ucUpdateUcContact(
      this,
      request,
      options,
    ));
  }
}
