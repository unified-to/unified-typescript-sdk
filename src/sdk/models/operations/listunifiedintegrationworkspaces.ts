/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export enum ListUnifiedIntegrationWorkspacesCategories {
    Passthrough = "passthrough",
    Hris = "hris",
    Ats = "ats",
    Auth = "auth",
    Crm = "crm",
    Enrich = "enrich",
    Martech = "martech",
    Ticketing = "ticketing",
    Uc = "uc",
    Accounting = "accounting",
}

export class ListUnifiedIntegrationWorkspacesRequest extends SpeakeasyBase {
    /**
     * Filter the results for only the workspace's active integrations
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=active" })
    active?: boolean;

    /**
     * Filter the results on these categories
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=categories" })
    categories?: ListUnifiedIntegrationWorkspacesCategories[];

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=env" })
    env?: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
    limit?: number;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
    offset?: number;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=summary" })
    summary?: boolean;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updated_gte" })
    updatedGte?: string;

    /**
     * The ID of the workspace
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" })
    workspaceId: string;
}

export class ListUnifiedIntegrationWorkspacesResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Successful
     */
    @SpeakeasyMetadata({ elemType: shared.Integration })
    integrations?: shared.Integration[];

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
