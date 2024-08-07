/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { invoiceCreateAccountingInvoice } from "../funcs/invoiceCreateAccountingInvoice.js";
import { invoiceGetAccountingInvoice } from "../funcs/invoiceGetAccountingInvoice.js";
import { invoiceListAccountingInvoices } from "../funcs/invoiceListAccountingInvoices.js";
import { invoicePatchAccountingInvoice } from "../funcs/invoicePatchAccountingInvoice.js";
import { invoiceRemoveAccountingInvoice } from "../funcs/invoiceRemoveAccountingInvoice.js";
import { invoiceUpdateAccountingInvoice } from "../funcs/invoiceUpdateAccountingInvoice.js";
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
        options?: RequestOptions
    ): Promise<shared.AccountingInvoice> {
        return unwrapAsync(invoiceCreateAccountingInvoice(this, request, options));
    }

    /**
     * Retrieve an invoice
     */
    async getAccountingInvoice(
        request: operations.GetAccountingInvoiceRequest,
        options?: RequestOptions
    ): Promise<shared.AccountingInvoice> {
        return unwrapAsync(invoiceGetAccountingInvoice(this, request, options));
    }

    /**
     * List all invoices
     */
    async listAccountingInvoices(
        request: operations.ListAccountingInvoicesRequest,
        options?: RequestOptions
    ): Promise<Array<shared.AccountingInvoice>> {
        return unwrapAsync(invoiceListAccountingInvoices(this, request, options));
    }

    /**
     * Update an invoice
     */
    async patchAccountingInvoice(
        request: operations.PatchAccountingInvoiceRequest,
        options?: RequestOptions
    ): Promise<shared.AccountingInvoice> {
        return unwrapAsync(invoicePatchAccountingInvoice(this, request, options));
    }

    /**
     * Remove an invoice
     */
    async removeAccountingInvoice(
        request: operations.RemoveAccountingInvoiceRequest,
        options?: RequestOptions
    ): Promise<void> {
        return unwrapAsync(invoiceRemoveAccountingInvoice(this, request, options));
    }

    /**
     * Update an invoice
     */
    async updateAccountingInvoice(
        request: operations.UpdateAccountingInvoiceRequest,
        options?: RequestOptions
    ): Promise<shared.AccountingInvoice> {
        return unwrapAsync(invoiceUpdateAccountingInvoice(this, request, options));
    }
}
