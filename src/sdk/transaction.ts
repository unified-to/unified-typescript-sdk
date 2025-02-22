/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { transactionCreateAccountingTransaction } from "../funcs/transactionCreateAccountingTransaction.js";
import { transactionGetAccountingTransaction } from "../funcs/transactionGetAccountingTransaction.js";
import { transactionListAccountingTransactions } from "../funcs/transactionListAccountingTransactions.js";
import { transactionPatchAccountingTransaction } from "../funcs/transactionPatchAccountingTransaction.js";
import { transactionRemoveAccountingTransaction } from "../funcs/transactionRemoveAccountingTransaction.js";
import { transactionUpdateAccountingTransaction } from "../funcs/transactionUpdateAccountingTransaction.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Transaction extends ClientSDK {
  /**
   * Create a transaction
   */
  async createAccountingTransaction(
    request: operations.CreateAccountingTransactionRequest,
    options?: RequestOptions,
  ): Promise<shared.AccountingTransaction> {
    return unwrapAsync(transactionCreateAccountingTransaction(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve a transaction
   */
  async getAccountingTransaction(
    request: operations.GetAccountingTransactionRequest,
    options?: RequestOptions,
  ): Promise<shared.AccountingTransaction> {
    return unwrapAsync(transactionGetAccountingTransaction(
      this,
      request,
      options,
    ));
  }

  /**
   * List all transactions
   */
  async listAccountingTransactions(
    request: operations.ListAccountingTransactionsRequest,
    options?: RequestOptions,
  ): Promise<Array<shared.AccountingTransaction>> {
    return unwrapAsync(transactionListAccountingTransactions(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a transaction
   */
  async patchAccountingTransaction(
    request: operations.PatchAccountingTransactionRequest,
    options?: RequestOptions,
  ): Promise<shared.AccountingTransaction> {
    return unwrapAsync(transactionPatchAccountingTransaction(
      this,
      request,
      options,
    ));
  }

  /**
   * Remove a transaction
   */
  async removeAccountingTransaction(
    request: operations.RemoveAccountingTransactionRequest,
    options?: RequestOptions,
  ): Promise<operations.RemoveAccountingTransactionResponse | undefined> {
    return unwrapAsync(transactionRemoveAccountingTransaction(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a transaction
   */
  async updateAccountingTransaction(
    request: operations.UpdateAccountingTransactionRequest,
    options?: RequestOptions,
  ): Promise<shared.AccountingTransaction> {
    return unwrapAsync(transactionUpdateAccountingTransaction(
      this,
      request,
      options,
    ));
  }
}
