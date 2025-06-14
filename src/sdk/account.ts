/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { accountingCreateAccountingAccount } from "../funcs/accountingCreateAccountingAccount.js";
import { accountingGetAccountingAccount } from "../funcs/accountingGetAccountingAccount.js";
import { accountingListAccountingAccounts } from "../funcs/accountingListAccountingAccounts.js";
import { accountingPatchAccountingAccount } from "../funcs/accountingPatchAccountingAccount.js";
import { accountingRemoveAccountingAccount } from "../funcs/accountingRemoveAccountingAccount.js";
import { accountingUpdateAccountingAccount } from "../funcs/accountingUpdateAccountingAccount.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Account extends ClientSDK {
  /**
   * Create an account
   */
  async createAccountingAccount(
    request: operations.CreateAccountingAccountRequest,
    options?: RequestOptions,
  ): Promise<shared.AccountingAccount> {
    return unwrapAsync(accountingCreateAccountingAccount(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve an account
   */
  async getAccountingAccount(
    request: operations.GetAccountingAccountRequest,
    options?: RequestOptions,
  ): Promise<shared.AccountingAccount> {
    return unwrapAsync(accountingGetAccountingAccount(
      this,
      request,
      options,
    ));
  }

  /**
   * List all accounts
   */
  async listAccountingAccounts(
    request: operations.ListAccountingAccountsRequest,
    options?: RequestOptions,
  ): Promise<Array<shared.AccountingAccount>> {
    return unwrapAsync(accountingListAccountingAccounts(
      this,
      request,
      options,
    ));
  }

  /**
   * Update an account
   */
  async patchAccountingAccount(
    request: operations.PatchAccountingAccountRequest,
    options?: RequestOptions,
  ): Promise<shared.AccountingAccount> {
    return unwrapAsync(accountingPatchAccountingAccount(
      this,
      request,
      options,
    ));
  }

  /**
   * Remove an account
   */
  async removeAccountingAccount(
    request: operations.RemoveAccountingAccountRequest,
    options?: RequestOptions,
  ): Promise<operations.RemoveAccountingAccountResponse | undefined> {
    return unwrapAsync(accountingRemoveAccountingAccount(
      this,
      request,
      options,
    ));
  }

  /**
   * Update an account
   */
  async updateAccountingAccount(
    request: operations.UpdateAccountingAccountRequest,
    options?: RequestOptions,
  ): Promise<shared.AccountingAccount> {
    return unwrapAsync(accountingUpdateAccountingAccount(
      this,
      request,
      options,
    ));
  }
}
