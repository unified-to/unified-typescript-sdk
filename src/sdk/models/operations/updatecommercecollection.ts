/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class UpdateCommerceCollectionSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({
        data: "security, scheme=true;type=apiKey;subtype=header;name=authorization",
    })
    jwt: string;
}

export class UpdateCommerceCollectionRequest extends SpeakeasyBase {
    /**
     * A collection of items/products/services
     */
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    commerceCollection?: shared.CommerceCollection;

    /**
     * ID of the connection
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connection_id" })
    connectionId: string;

    /**
     * ID of the Collection
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;
}

export class UpdateCommerceCollectionResponse extends SpeakeasyBase {
    /**
     * Successful
     */
    @SpeakeasyMetadata()
    commerceCollection?: shared.CommerceCollection;

    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;
}
