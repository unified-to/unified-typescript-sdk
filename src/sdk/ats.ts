/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { atsCreateAtsActivity } from "../funcs/atsCreateAtsActivity.js";
import { atsCreateAtsApplication } from "../funcs/atsCreateAtsApplication.js";
import { atsCreateAtsCandidate } from "../funcs/atsCreateAtsCandidate.js";
import { atsCreateAtsDocument } from "../funcs/atsCreateAtsDocument.js";
import { atsCreateAtsInterview } from "../funcs/atsCreateAtsInterview.js";
import { atsCreateAtsJob } from "../funcs/atsCreateAtsJob.js";
import { atsCreateAtsScorecard } from "../funcs/atsCreateAtsScorecard.js";
import { atsGetAtsActivity } from "../funcs/atsGetAtsActivity.js";
import { atsGetAtsApplication } from "../funcs/atsGetAtsApplication.js";
import { atsGetAtsCandidate } from "../funcs/atsGetAtsCandidate.js";
import { atsGetAtsCompany } from "../funcs/atsGetAtsCompany.js";
import { atsGetAtsDocument } from "../funcs/atsGetAtsDocument.js";
import { atsGetAtsInterview } from "../funcs/atsGetAtsInterview.js";
import { atsGetAtsJob } from "../funcs/atsGetAtsJob.js";
import { atsGetAtsScorecard } from "../funcs/atsGetAtsScorecard.js";
import { atsListAtsActivities } from "../funcs/atsListAtsActivities.js";
import { atsListAtsApplications } from "../funcs/atsListAtsApplications.js";
import { atsListAtsApplicationstatuses } from "../funcs/atsListAtsApplicationstatuses.js";
import { atsListAtsCandidates } from "../funcs/atsListAtsCandidates.js";
import { atsListAtsCompanies } from "../funcs/atsListAtsCompanies.js";
import { atsListAtsDocuments } from "../funcs/atsListAtsDocuments.js";
import { atsListAtsInterviews } from "../funcs/atsListAtsInterviews.js";
import { atsListAtsJobs } from "../funcs/atsListAtsJobs.js";
import { atsListAtsScorecards } from "../funcs/atsListAtsScorecards.js";
import { atsPatchAtsActivity } from "../funcs/atsPatchAtsActivity.js";
import { atsPatchAtsApplication } from "../funcs/atsPatchAtsApplication.js";
import { atsPatchAtsCandidate } from "../funcs/atsPatchAtsCandidate.js";
import { atsPatchAtsDocument } from "../funcs/atsPatchAtsDocument.js";
import { atsPatchAtsInterview } from "../funcs/atsPatchAtsInterview.js";
import { atsPatchAtsJob } from "../funcs/atsPatchAtsJob.js";
import { atsPatchAtsScorecard } from "../funcs/atsPatchAtsScorecard.js";
import { atsRemoveAtsActivity } from "../funcs/atsRemoveAtsActivity.js";
import { atsRemoveAtsApplication } from "../funcs/atsRemoveAtsApplication.js";
import { atsRemoveAtsCandidate } from "../funcs/atsRemoveAtsCandidate.js";
import { atsRemoveAtsDocument } from "../funcs/atsRemoveAtsDocument.js";
import { atsRemoveAtsInterview } from "../funcs/atsRemoveAtsInterview.js";
import { atsRemoveAtsJob } from "../funcs/atsRemoveAtsJob.js";
import { atsRemoveAtsScorecard } from "../funcs/atsRemoveAtsScorecard.js";
import { atsUpdateAtsActivity } from "../funcs/atsUpdateAtsActivity.js";
import { atsUpdateAtsApplication } from "../funcs/atsUpdateAtsApplication.js";
import { atsUpdateAtsCandidate } from "../funcs/atsUpdateAtsCandidate.js";
import { atsUpdateAtsDocument } from "../funcs/atsUpdateAtsDocument.js";
import { atsUpdateAtsInterview } from "../funcs/atsUpdateAtsInterview.js";
import { atsUpdateAtsJob } from "../funcs/atsUpdateAtsJob.js";
import { atsUpdateAtsScorecard } from "../funcs/atsUpdateAtsScorecard.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Ats extends ClientSDK {
    /**
     * Create an activity
     */
    async createAtsActivity(
        request: operations.CreateAtsActivityRequest,
        options?: RequestOptions
    ): Promise<shared.AtsActivity> {
        return unwrapAsync(atsCreateAtsActivity(this, request, options));
    }

    /**
     * Create an application
     */
    async createAtsApplication(
        request: operations.CreateAtsApplicationRequest,
        options?: RequestOptions
    ): Promise<shared.AtsApplication> {
        return unwrapAsync(atsCreateAtsApplication(this, request, options));
    }

    /**
     * Create a candidate
     */
    async createAtsCandidate(
        request: operations.CreateAtsCandidateRequest,
        options?: RequestOptions
    ): Promise<shared.AtsCandidate> {
        return unwrapAsync(atsCreateAtsCandidate(this, request, options));
    }

    /**
     * Create a document
     */
    async createAtsDocument(
        request: operations.CreateAtsDocumentRequest,
        options?: RequestOptions
    ): Promise<shared.AtsDocument> {
        return unwrapAsync(atsCreateAtsDocument(this, request, options));
    }

    /**
     * Create an interview
     */
    async createAtsInterview(
        request: operations.CreateAtsInterviewRequest,
        options?: RequestOptions
    ): Promise<shared.AtsInterview> {
        return unwrapAsync(atsCreateAtsInterview(this, request, options));
    }

    /**
     * Create a job
     */
    async createAtsJob(
        request: operations.CreateAtsJobRequest,
        options?: RequestOptions
    ): Promise<shared.AtsJob> {
        return unwrapAsync(atsCreateAtsJob(this, request, options));
    }

    /**
     * Create a scorecard
     */
    async createAtsScorecard(
        request: operations.CreateAtsScorecardRequest,
        options?: RequestOptions
    ): Promise<shared.AtsScorecard> {
        return unwrapAsync(atsCreateAtsScorecard(this, request, options));
    }

    /**
     * Retrieve an activity
     */
    async getAtsActivity(
        request: operations.GetAtsActivityRequest,
        options?: RequestOptions
    ): Promise<shared.AtsActivity> {
        return unwrapAsync(atsGetAtsActivity(this, request, options));
    }

    /**
     * Retrieve an application
     */
    async getAtsApplication(
        request: operations.GetAtsApplicationRequest,
        options?: RequestOptions
    ): Promise<shared.AtsApplication> {
        return unwrapAsync(atsGetAtsApplication(this, request, options));
    }

    /**
     * Retrieve a candidate
     */
    async getAtsCandidate(
        request: operations.GetAtsCandidateRequest,
        options?: RequestOptions
    ): Promise<shared.AtsCandidate> {
        return unwrapAsync(atsGetAtsCandidate(this, request, options));
    }

    /**
     * Retrieve a company
     */
    async getAtsCompany(
        request: operations.GetAtsCompanyRequest,
        options?: RequestOptions
    ): Promise<shared.AtsCompany> {
        return unwrapAsync(atsGetAtsCompany(this, request, options));
    }

    /**
     * Retrieve a document
     */
    async getAtsDocument(
        request: operations.GetAtsDocumentRequest,
        options?: RequestOptions
    ): Promise<shared.AtsDocument> {
        return unwrapAsync(atsGetAtsDocument(this, request, options));
    }

    /**
     * Retrieve an interview
     */
    async getAtsInterview(
        request: operations.GetAtsInterviewRequest,
        options?: RequestOptions
    ): Promise<shared.AtsInterview> {
        return unwrapAsync(atsGetAtsInterview(this, request, options));
    }

    /**
     * Retrieve a job
     */
    async getAtsJob(
        request: operations.GetAtsJobRequest,
        options?: RequestOptions
    ): Promise<shared.AtsJob> {
        return unwrapAsync(atsGetAtsJob(this, request, options));
    }

    /**
     * Retrieve a scorecard
     */
    async getAtsScorecard(
        request: operations.GetAtsScorecardRequest,
        options?: RequestOptions
    ): Promise<shared.AtsScorecard> {
        return unwrapAsync(atsGetAtsScorecard(this, request, options));
    }

    /**
     * List all activities
     */
    async listAtsActivities(
        request: operations.ListAtsActivitiesRequest,
        options?: RequestOptions
    ): Promise<Array<shared.AtsActivity>> {
        return unwrapAsync(atsListAtsActivities(this, request, options));
    }

    /**
     * List all applications
     */
    async listAtsApplications(
        request: operations.ListAtsApplicationsRequest,
        options?: RequestOptions
    ): Promise<Array<shared.AtsApplication>> {
        return unwrapAsync(atsListAtsApplications(this, request, options));
    }

    /**
     * List all applicationstatuses
     */
    async listAtsApplicationstatuses(
        request: operations.ListAtsApplicationstatusesRequest,
        options?: RequestOptions
    ): Promise<Array<shared.AtsStatus>> {
        return unwrapAsync(atsListAtsApplicationstatuses(this, request, options));
    }

    /**
     * List all candidates
     */
    async listAtsCandidates(
        request: operations.ListAtsCandidatesRequest,
        options?: RequestOptions
    ): Promise<Array<shared.AtsCandidate>> {
        return unwrapAsync(atsListAtsCandidates(this, request, options));
    }

    /**
     * List all companies
     */
    async listAtsCompanies(
        request: operations.ListAtsCompaniesRequest,
        options?: RequestOptions
    ): Promise<Array<shared.AtsCompany>> {
        return unwrapAsync(atsListAtsCompanies(this, request, options));
    }

    /**
     * List all documents
     */
    async listAtsDocuments(
        request: operations.ListAtsDocumentsRequest,
        options?: RequestOptions
    ): Promise<Array<shared.AtsDocument>> {
        return unwrapAsync(atsListAtsDocuments(this, request, options));
    }

    /**
     * List all interviews
     */
    async listAtsInterviews(
        request: operations.ListAtsInterviewsRequest,
        options?: RequestOptions
    ): Promise<Array<shared.AtsInterview>> {
        return unwrapAsync(atsListAtsInterviews(this, request, options));
    }

    /**
     * List all jobs
     */
    async listAtsJobs(
        request: operations.ListAtsJobsRequest,
        options?: RequestOptions
    ): Promise<Array<shared.AtsJob>> {
        return unwrapAsync(atsListAtsJobs(this, request, options));
    }

    /**
     * List all scorecards
     */
    async listAtsScorecards(
        request: operations.ListAtsScorecardsRequest,
        options?: RequestOptions
    ): Promise<Array<shared.AtsScorecard>> {
        return unwrapAsync(atsListAtsScorecards(this, request, options));
    }

    /**
     * Update an activity
     */
    async patchAtsActivity(
        request: operations.PatchAtsActivityRequest,
        options?: RequestOptions
    ): Promise<shared.AtsActivity> {
        return unwrapAsync(atsPatchAtsActivity(this, request, options));
    }

    /**
     * Update an application
     */
    async patchAtsApplication(
        request: operations.PatchAtsApplicationRequest,
        options?: RequestOptions
    ): Promise<shared.AtsApplication> {
        return unwrapAsync(atsPatchAtsApplication(this, request, options));
    }

    /**
     * Update a candidate
     */
    async patchAtsCandidate(
        request: operations.PatchAtsCandidateRequest,
        options?: RequestOptions
    ): Promise<shared.AtsCandidate> {
        return unwrapAsync(atsPatchAtsCandidate(this, request, options));
    }

    /**
     * Update a document
     */
    async patchAtsDocument(
        request: operations.PatchAtsDocumentRequest,
        options?: RequestOptions
    ): Promise<shared.AtsDocument> {
        return unwrapAsync(atsPatchAtsDocument(this, request, options));
    }

    /**
     * Update an interview
     */
    async patchAtsInterview(
        request: operations.PatchAtsInterviewRequest,
        options?: RequestOptions
    ): Promise<shared.AtsInterview> {
        return unwrapAsync(atsPatchAtsInterview(this, request, options));
    }

    /**
     * Update a job
     */
    async patchAtsJob(
        request: operations.PatchAtsJobRequest,
        options?: RequestOptions
    ): Promise<shared.AtsJob> {
        return unwrapAsync(atsPatchAtsJob(this, request, options));
    }

    /**
     * Update a scorecard
     */
    async patchAtsScorecard(
        request: operations.PatchAtsScorecardRequest,
        options?: RequestOptions
    ): Promise<shared.AtsScorecard> {
        return unwrapAsync(atsPatchAtsScorecard(this, request, options));
    }

    /**
     * Remove an activity
     */
    async removeAtsActivity(
        request: operations.RemoveAtsActivityRequest,
        options?: RequestOptions
    ): Promise<void> {
        return unwrapAsync(atsRemoveAtsActivity(this, request, options));
    }

    /**
     * Remove an application
     */
    async removeAtsApplication(
        request: operations.RemoveAtsApplicationRequest,
        options?: RequestOptions
    ): Promise<void> {
        return unwrapAsync(atsRemoveAtsApplication(this, request, options));
    }

    /**
     * Remove a candidate
     */
    async removeAtsCandidate(
        request: operations.RemoveAtsCandidateRequest,
        options?: RequestOptions
    ): Promise<void> {
        return unwrapAsync(atsRemoveAtsCandidate(this, request, options));
    }

    /**
     * Remove a document
     */
    async removeAtsDocument(
        request: operations.RemoveAtsDocumentRequest,
        options?: RequestOptions
    ): Promise<void> {
        return unwrapAsync(atsRemoveAtsDocument(this, request, options));
    }

    /**
     * Remove an interview
     */
    async removeAtsInterview(
        request: operations.RemoveAtsInterviewRequest,
        options?: RequestOptions
    ): Promise<void> {
        return unwrapAsync(atsRemoveAtsInterview(this, request, options));
    }

    /**
     * Remove a job
     */
    async removeAtsJob(
        request: operations.RemoveAtsJobRequest,
        options?: RequestOptions
    ): Promise<void> {
        return unwrapAsync(atsRemoveAtsJob(this, request, options));
    }

    /**
     * Remove a scorecard
     */
    async removeAtsScorecard(
        request: operations.RemoveAtsScorecardRequest,
        options?: RequestOptions
    ): Promise<void> {
        return unwrapAsync(atsRemoveAtsScorecard(this, request, options));
    }

    /**
     * Update an activity
     */
    async updateAtsActivity(
        request: operations.UpdateAtsActivityRequest,
        options?: RequestOptions
    ): Promise<shared.AtsActivity> {
        return unwrapAsync(atsUpdateAtsActivity(this, request, options));
    }

    /**
     * Update an application
     */
    async updateAtsApplication(
        request: operations.UpdateAtsApplicationRequest,
        options?: RequestOptions
    ): Promise<shared.AtsApplication> {
        return unwrapAsync(atsUpdateAtsApplication(this, request, options));
    }

    /**
     * Update a candidate
     */
    async updateAtsCandidate(
        request: operations.UpdateAtsCandidateRequest,
        options?: RequestOptions
    ): Promise<shared.AtsCandidate> {
        return unwrapAsync(atsUpdateAtsCandidate(this, request, options));
    }

    /**
     * Update a document
     */
    async updateAtsDocument(
        request: operations.UpdateAtsDocumentRequest,
        options?: RequestOptions
    ): Promise<shared.AtsDocument> {
        return unwrapAsync(atsUpdateAtsDocument(this, request, options));
    }

    /**
     * Update an interview
     */
    async updateAtsInterview(
        request: operations.UpdateAtsInterviewRequest,
        options?: RequestOptions
    ): Promise<shared.AtsInterview> {
        return unwrapAsync(atsUpdateAtsInterview(this, request, options));
    }

    /**
     * Update a job
     */
    async updateAtsJob(
        request: operations.UpdateAtsJobRequest,
        options?: RequestOptions
    ): Promise<shared.AtsJob> {
        return unwrapAsync(atsUpdateAtsJob(this, request, options));
    }

    /**
     * Update a scorecard
     */
    async updateAtsScorecard(
        request: operations.UpdateAtsScorecardRequest,
        options?: RequestOptions
    ): Promise<shared.AtsScorecard> {
        return unwrapAsync(atsUpdateAtsScorecard(this, request, options));
    }
}
