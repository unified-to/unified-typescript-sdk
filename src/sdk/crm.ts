/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { crmCreateCrmCompany } from "../funcs/crmCreateCrmCompany.js";
import { crmCreateCrmContact } from "../funcs/crmCreateCrmContact.js";
import { crmCreateCrmDeal } from "../funcs/crmCreateCrmDeal.js";
import { crmCreateCrmEvent } from "../funcs/crmCreateCrmEvent.js";
import { crmCreateCrmLead } from "../funcs/crmCreateCrmLead.js";
import { crmCreateCrmPipeline } from "../funcs/crmCreateCrmPipeline.js";
import { crmGetCrmCompany } from "../funcs/crmGetCrmCompany.js";
import { crmGetCrmContact } from "../funcs/crmGetCrmContact.js";
import { crmGetCrmDeal } from "../funcs/crmGetCrmDeal.js";
import { crmGetCrmEvent } from "../funcs/crmGetCrmEvent.js";
import { crmGetCrmLead } from "../funcs/crmGetCrmLead.js";
import { crmGetCrmPipeline } from "../funcs/crmGetCrmPipeline.js";
import { crmListCrmCompanies } from "../funcs/crmListCrmCompanies.js";
import { crmListCrmContacts } from "../funcs/crmListCrmContacts.js";
import { crmListCrmDeals } from "../funcs/crmListCrmDeals.js";
import { crmListCrmEvents } from "../funcs/crmListCrmEvents.js";
import { crmListCrmLeads } from "../funcs/crmListCrmLeads.js";
import { crmListCrmPipelines } from "../funcs/crmListCrmPipelines.js";
import { crmPatchCrmCompany } from "../funcs/crmPatchCrmCompany.js";
import { crmPatchCrmContact } from "../funcs/crmPatchCrmContact.js";
import { crmPatchCrmDeal } from "../funcs/crmPatchCrmDeal.js";
import { crmPatchCrmEvent } from "../funcs/crmPatchCrmEvent.js";
import { crmPatchCrmLead } from "../funcs/crmPatchCrmLead.js";
import { crmPatchCrmPipeline } from "../funcs/crmPatchCrmPipeline.js";
import { crmRemoveCrmCompany } from "../funcs/crmRemoveCrmCompany.js";
import { crmRemoveCrmContact } from "../funcs/crmRemoveCrmContact.js";
import { crmRemoveCrmDeal } from "../funcs/crmRemoveCrmDeal.js";
import { crmRemoveCrmEvent } from "../funcs/crmRemoveCrmEvent.js";
import { crmRemoveCrmLead } from "../funcs/crmRemoveCrmLead.js";
import { crmRemoveCrmPipeline } from "../funcs/crmRemoveCrmPipeline.js";
import { crmUpdateCrmCompany } from "../funcs/crmUpdateCrmCompany.js";
import { crmUpdateCrmContact } from "../funcs/crmUpdateCrmContact.js";
import { crmUpdateCrmDeal } from "../funcs/crmUpdateCrmDeal.js";
import { crmUpdateCrmEvent } from "../funcs/crmUpdateCrmEvent.js";
import { crmUpdateCrmLead } from "../funcs/crmUpdateCrmLead.js";
import { crmUpdateCrmPipeline } from "../funcs/crmUpdateCrmPipeline.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Crm extends ClientSDK {
    /**
     * Create a company
     */
    async createCrmCompany(
        request: operations.CreateCrmCompanyRequest,
        options?: RequestOptions
    ): Promise<shared.CrmCompany> {
        return unwrapAsync(crmCreateCrmCompany(this, request, options));
    }

    /**
     * Create a contact
     */
    async createCrmContact(
        request: operations.CreateCrmContactRequest,
        options?: RequestOptions
    ): Promise<shared.CrmContact> {
        return unwrapAsync(crmCreateCrmContact(this, request, options));
    }

    /**
     * Create a deal
     */
    async createCrmDeal(
        request: operations.CreateCrmDealRequest,
        options?: RequestOptions
    ): Promise<shared.CrmDeal> {
        return unwrapAsync(crmCreateCrmDeal(this, request, options));
    }

    /**
     * Create an event
     */
    async createCrmEvent(
        request: operations.CreateCrmEventRequest,
        options?: RequestOptions
    ): Promise<shared.CrmEvent> {
        return unwrapAsync(crmCreateCrmEvent(this, request, options));
    }

    /**
     * Create a lead
     */
    async createCrmLead(
        request: operations.CreateCrmLeadRequest,
        options?: RequestOptions
    ): Promise<shared.CrmLead> {
        return unwrapAsync(crmCreateCrmLead(this, request, options));
    }

    /**
     * Create a pipeline
     */
    async createCrmPipeline(
        request: operations.CreateCrmPipelineRequest,
        options?: RequestOptions
    ): Promise<shared.CrmPipeline> {
        return unwrapAsync(crmCreateCrmPipeline(this, request, options));
    }

    /**
     * Retrieve a company
     */
    async getCrmCompany(
        request: operations.GetCrmCompanyRequest,
        options?: RequestOptions
    ): Promise<shared.CrmCompany> {
        return unwrapAsync(crmGetCrmCompany(this, request, options));
    }

    /**
     * Retrieve a contact
     */
    async getCrmContact(
        request: operations.GetCrmContactRequest,
        options?: RequestOptions
    ): Promise<shared.CrmContact> {
        return unwrapAsync(crmGetCrmContact(this, request, options));
    }

    /**
     * Retrieve a deal
     */
    async getCrmDeal(
        request: operations.GetCrmDealRequest,
        options?: RequestOptions
    ): Promise<shared.CrmDeal> {
        return unwrapAsync(crmGetCrmDeal(this, request, options));
    }

    /**
     * Retrieve an event
     */
    async getCrmEvent(
        request: operations.GetCrmEventRequest,
        options?: RequestOptions
    ): Promise<shared.CrmEvent> {
        return unwrapAsync(crmGetCrmEvent(this, request, options));
    }

    /**
     * Retrieve a lead
     */
    async getCrmLead(
        request: operations.GetCrmLeadRequest,
        options?: RequestOptions
    ): Promise<shared.CrmLead> {
        return unwrapAsync(crmGetCrmLead(this, request, options));
    }

    /**
     * Retrieve a pipeline
     */
    async getCrmPipeline(
        request: operations.GetCrmPipelineRequest,
        options?: RequestOptions
    ): Promise<shared.CrmPipeline> {
        return unwrapAsync(crmGetCrmPipeline(this, request, options));
    }

    /**
     * List all companies
     */
    async listCrmCompanies(
        request: operations.ListCrmCompaniesRequest,
        options?: RequestOptions
    ): Promise<Array<shared.CrmCompany>> {
        return unwrapAsync(crmListCrmCompanies(this, request, options));
    }

    /**
     * List all contacts
     */
    async listCrmContacts(
        request: operations.ListCrmContactsRequest,
        options?: RequestOptions
    ): Promise<Array<shared.CrmContact>> {
        return unwrapAsync(crmListCrmContacts(this, request, options));
    }

    /**
     * List all deals
     */
    async listCrmDeals(
        request: operations.ListCrmDealsRequest,
        options?: RequestOptions
    ): Promise<Array<shared.CrmDeal>> {
        return unwrapAsync(crmListCrmDeals(this, request, options));
    }

    /**
     * List all events
     */
    async listCrmEvents(
        request: operations.ListCrmEventsRequest,
        options?: RequestOptions
    ): Promise<Array<shared.CrmEvent>> {
        return unwrapAsync(crmListCrmEvents(this, request, options));
    }

    /**
     * List all leads
     */
    async listCrmLeads(
        request: operations.ListCrmLeadsRequest,
        options?: RequestOptions
    ): Promise<Array<shared.CrmLead>> {
        return unwrapAsync(crmListCrmLeads(this, request, options));
    }

    /**
     * List all pipelines
     */
    async listCrmPipelines(
        request: operations.ListCrmPipelinesRequest,
        options?: RequestOptions
    ): Promise<Array<shared.CrmPipeline>> {
        return unwrapAsync(crmListCrmPipelines(this, request, options));
    }

    /**
     * Update a company
     */
    async patchCrmCompany(
        request: operations.PatchCrmCompanyRequest,
        options?: RequestOptions
    ): Promise<shared.CrmCompany> {
        return unwrapAsync(crmPatchCrmCompany(this, request, options));
    }

    /**
     * Update a contact
     */
    async patchCrmContact(
        request: operations.PatchCrmContactRequest,
        options?: RequestOptions
    ): Promise<shared.CrmContact> {
        return unwrapAsync(crmPatchCrmContact(this, request, options));
    }

    /**
     * Update a deal
     */
    async patchCrmDeal(
        request: operations.PatchCrmDealRequest,
        options?: RequestOptions
    ): Promise<shared.CrmDeal> {
        return unwrapAsync(crmPatchCrmDeal(this, request, options));
    }

    /**
     * Update an event
     */
    async patchCrmEvent(
        request: operations.PatchCrmEventRequest,
        options?: RequestOptions
    ): Promise<shared.CrmEvent> {
        return unwrapAsync(crmPatchCrmEvent(this, request, options));
    }

    /**
     * Update a lead
     */
    async patchCrmLead(
        request: operations.PatchCrmLeadRequest,
        options?: RequestOptions
    ): Promise<shared.CrmLead> {
        return unwrapAsync(crmPatchCrmLead(this, request, options));
    }

    /**
     * Update a pipeline
     */
    async patchCrmPipeline(
        request: operations.PatchCrmPipelineRequest,
        options?: RequestOptions
    ): Promise<shared.CrmPipeline> {
        return unwrapAsync(crmPatchCrmPipeline(this, request, options));
    }

    /**
     * Remove a company
     */
    async removeCrmCompany(
        request: operations.RemoveCrmCompanyRequest,
        options?: RequestOptions
    ): Promise<string> {
        return unwrapAsync(crmRemoveCrmCompany(this, request, options));
    }

    /**
     * Remove a contact
     */
    async removeCrmContact(
        request: operations.RemoveCrmContactRequest,
        options?: RequestOptions
    ): Promise<string> {
        return unwrapAsync(crmRemoveCrmContact(this, request, options));
    }

    /**
     * Remove a deal
     */
    async removeCrmDeal(
        request: operations.RemoveCrmDealRequest,
        options?: RequestOptions
    ): Promise<string> {
        return unwrapAsync(crmRemoveCrmDeal(this, request, options));
    }

    /**
     * Remove an event
     */
    async removeCrmEvent(
        request: operations.RemoveCrmEventRequest,
        options?: RequestOptions
    ): Promise<string> {
        return unwrapAsync(crmRemoveCrmEvent(this, request, options));
    }

    /**
     * Remove a lead
     */
    async removeCrmLead(
        request: operations.RemoveCrmLeadRequest,
        options?: RequestOptions
    ): Promise<string> {
        return unwrapAsync(crmRemoveCrmLead(this, request, options));
    }

    /**
     * Remove a pipeline
     */
    async removeCrmPipeline(
        request: operations.RemoveCrmPipelineRequest,
        options?: RequestOptions
    ): Promise<string> {
        return unwrapAsync(crmRemoveCrmPipeline(this, request, options));
    }

    /**
     * Update a company
     */
    async updateCrmCompany(
        request: operations.UpdateCrmCompanyRequest,
        options?: RequestOptions
    ): Promise<shared.CrmCompany> {
        return unwrapAsync(crmUpdateCrmCompany(this, request, options));
    }

    /**
     * Update a contact
     */
    async updateCrmContact(
        request: operations.UpdateCrmContactRequest,
        options?: RequestOptions
    ): Promise<shared.CrmContact> {
        return unwrapAsync(crmUpdateCrmContact(this, request, options));
    }

    /**
     * Update a deal
     */
    async updateCrmDeal(
        request: operations.UpdateCrmDealRequest,
        options?: RequestOptions
    ): Promise<shared.CrmDeal> {
        return unwrapAsync(crmUpdateCrmDeal(this, request, options));
    }

    /**
     * Update an event
     */
    async updateCrmEvent(
        request: operations.UpdateCrmEventRequest,
        options?: RequestOptions
    ): Promise<shared.CrmEvent> {
        return unwrapAsync(crmUpdateCrmEvent(this, request, options));
    }

    /**
     * Update a lead
     */
    async updateCrmLead(
        request: operations.UpdateCrmLeadRequest,
        options?: RequestOptions
    ): Promise<shared.CrmLead> {
        return unwrapAsync(crmUpdateCrmLead(this, request, options));
    }

    /**
     * Update a pipeline
     */
    async updateCrmPipeline(
        request: operations.UpdateCrmPipelineRequest,
        options?: RequestOptions
    ): Promise<shared.CrmPipeline> {
        return unwrapAsync(crmUpdateCrmPipeline(this, request, options));
    }
}
