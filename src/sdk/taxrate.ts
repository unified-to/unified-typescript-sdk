/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { taxrateCreateAccountingTaxrate } from "../funcs/taxrateCreateAccountingTaxrate.js";
import { taxrateGetAccountingTaxrate } from "../funcs/taxrateGetAccountingTaxrate.js";
import { taxrateListAccountingTaxrates } from "../funcs/taxrateListAccountingTaxrates.js";
import { taxratePatchAccountingTaxrate } from "../funcs/taxratePatchAccountingTaxrate.js";
import { taxrateRemoveAccountingTaxrate } from "../funcs/taxrateRemoveAccountingTaxrate.js";
import { taxrateUpdateAccountingTaxrate } from "../funcs/taxrateUpdateAccountingTaxrate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Taxrate extends ClientSDK {
    /**
     * Create a taxrate
     */
    async createAccountingTaxrate(
        request: operations.CreateAccountingTaxrateRequest,
        options?: RequestOptions
    ): Promise<shared.AccountingTaxrate> {
        return unwrapAsync(taxrateCreateAccountingTaxrate(this, request, options));
    }

    /**
     * Retrieve a taxrate
     */
    async getAccountingTaxrate(
        request: operations.GetAccountingTaxrateRequest,
        options?: RequestOptions
    ): Promise<shared.AccountingTaxrate> {
        return unwrapAsync(taxrateGetAccountingTaxrate(this, request, options));
    }

    /**
     * List all taxrates
     */
    async listAccountingTaxrates(
        request: operations.ListAccountingTaxratesRequest,
        options?: RequestOptions
    ): Promise<Array<shared.AccountingTaxrate>> {
        return unwrapAsync(taxrateListAccountingTaxrates(this, request, options));
    }

    /**
     * Update a taxrate
     */
    async patchAccountingTaxrate(
        request: operations.PatchAccountingTaxrateRequest,
        options?: RequestOptions
    ): Promise<shared.AccountingTaxrate> {
        return unwrapAsync(taxratePatchAccountingTaxrate(this, request, options));
    }

    /**
     * Remove a taxrate
     */
    async removeAccountingTaxrate(
        request: operations.RemoveAccountingTaxrateRequest,
        options?: RequestOptions
    ): Promise<string> {
        return unwrapAsync(taxrateRemoveAccountingTaxrate(this, request, options));
    }

    /**
     * Update a taxrate
     */
    async updateAccountingTaxrate(
        request: operations.UpdateAccountingTaxrateRequest,
        options?: RequestOptions
    ): Promise<shared.AccountingTaxrate> {
        return unwrapAsync(taxrateUpdateAccountingTaxrate(this, request, options));
    }
}
