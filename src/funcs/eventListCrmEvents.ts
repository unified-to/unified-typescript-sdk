/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { UnifiedToCore } from "../core.js";
import {
    encodeFormQuery as encodeFormQuery$,
    encodeSimple as encodeSimple$,
} from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import {
    ConnectionError,
    InvalidRequestError,
    RequestAbortedError,
    RequestTimeoutError,
    UnexpectedClientError,
} from "../sdk/models/errors/httpclienterrors.js";
import { SDKError } from "../sdk/models/errors/sdkerror.js";
import { SDKValidationError } from "../sdk/models/errors/sdkvalidationerror.js";
import * as operations from "../sdk/models/operations/index.js";
import * as shared from "../sdk/models/shared/index.js";
import { Result } from "../sdk/types/fp.js";
import * as z from "zod";

/**
 * List all events
 */
export async function eventListCrmEvents(
    client$: UnifiedToCore,
    request: operations.ListCrmEventsRequest,
    options?: RequestOptions
): Promise<
    Result<
        Array<shared.CrmEvent>,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >
> {
    const input$ = request;

    const parsed$ = schemas$.safeParse(
        input$,
        (value$) => operations.ListCrmEventsRequest$outboundSchema.parse(value$),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return parsed$;
    }
    const payload$ = parsed$.value;
    const body$ = null;

    const pathParams$ = {
        connection_id: encodeSimple$("connection_id", payload$.connection_id, {
            explode: false,
            charEncoding: "percent",
        }),
    };

    const path$ = pathToFunc("/crm/{connection_id}/event")(pathParams$);

    const query$ = encodeFormQuery$({
        company_id: payload$.company_id,
        contact_id: payload$.contact_id,
        deal_id: payload$.deal_id,
        fields: payload$.fields,
        limit: payload$.limit,
        offset: payload$.offset,
        query: payload$.query,
        type: payload$.type,
        updated_gte: payload$.updated_gte,
        user_id: payload$.user_id,
    });

    const headers$ = new Headers({
        Accept: "application/json",
    });

    const security$ = await extractSecurity(client$.options$.security);
    const context = {
        operationID: "listCrmEvents",
        oAuth2Scopes: [],
        securitySource: client$.options$.security,
    };
    const securitySettings$ = resolveGlobalSecurity(security$);

    const requestRes = client$.createRequest$(
        context,
        {
            security: securitySettings$,
            method: "GET",
            path: path$,
            headers: headers$,
            query: query$,
            body: body$,
            timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
        },
        options
    );
    if (!requestRes.ok) {
        return requestRes;
    }
    const request$ = requestRes.value;

    const doResult = await client$.do$(request$, {
        context,
        errorCodes: ["4XX", "5XX"],
        retryConfig: options?.retries || client$.options$.retryConfig,
        retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
    });
    if (!doResult.ok) {
        return doResult;
    }
    const response = doResult.value;

    const [result$] = await m$.match<
        Array<shared.CrmEvent>,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.json(200, z.array(shared.CrmEvent$inboundSchema)),
        m$.fail(["4XX", "5XX"])
    )(response);
    if (!result$.ok) {
        return result$;
    }

    return result$;
}
