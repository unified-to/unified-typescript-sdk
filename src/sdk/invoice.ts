/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { accountingCreateAccountingInvoice } from "../funcs/accountingCreateAccountingInvoice.js";
import { accountingGetAccountingInvoice } from "../funcs/accountingGetAccountingInvoice.js";
import { accountingListAccountingInvoices } from "../funcs/accountingListAccountingInvoices.js";
import { accountingPatchAccountingInvoice } from "../funcs/accountingPatchAccountingInvoice.js";
import { accountingRemoveAccountingInvoice } from "../funcs/accountingRemoveAccountingInvoice.js";
import { accountingUpdateAccountingInvoice } from "../funcs/accountingUpdateAccountingInvoice.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Invoice extends ClientSDK {
  /**
   * Create an invoice
   */
  async createAccountingInvoice(
    request: operations.CreateAccountingInvoiceRequest,
    options?: RequestOptions,
  ): Promise<shared.AccountingInvoice> {
    return unwrapAsync(accountingCreateAccountingInvoice(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve an invoice
   */
  async getAccountingInvoice(
    request: operations.GetAccountingInvoiceRequest,
    options?: RequestOptions,
  ): Promise<shared.AccountingInvoice> {
    return unwrapAsync(accountingGetAccountingInvoice(
      this,
      request,
      options,
    ));
  }

  /**
   * List all invoices
   */
  async listAccountingInvoices(
    request: operations.ListAccountingInvoicesRequest,
    options?: RequestOptions,
  ): Promise<Array<shared.AccountingInvoice>> {
    return unwrapAsync(accountingListAccountingInvoices(
      this,
      request,
      options,
    ));
  }

  /**
   * Update an invoice
   */
  async patchAccountingInvoice(
    request: operations.PatchAccountingInvoiceRequest,
    options?: RequestOptions,
  ): Promise<shared.AccountingInvoice> {
    return unwrapAsync(accountingPatchAccountingInvoice(
      this,
      request,
      options,
    ));
  }

  /**
   * Remove an invoice
   */
  async removeAccountingInvoice(
    request: operations.RemoveAccountingInvoiceRequest,
    options?: RequestOptions,
  ): Promise<operations.RemoveAccountingInvoiceResponse | undefined> {
    return unwrapAsync(accountingRemoveAccountingInvoice(
      this,
      request,
      options,
    ));
  }

  /**
   * Update an invoice
   */
  async updateAccountingInvoice(
    request: operations.UpdateAccountingInvoiceRequest,
    options?: RequestOptions,
  ): Promise<shared.AccountingInvoice> {
    return unwrapAsync(accountingUpdateAccountingInvoice(
      this,
      request,
      options,
    ));
  }
}
