/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { UnifiedToCore } from "../core.js";
import { encodeSimple as encodeSimple$ } from "../lib/encodings.js";
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
import { Result } from "../sdk/types/fp.js";

export enum UpdatePassthroughRawAcceptEnum {
  applicationJson = "application/json",
  textPlain = "text/plain",
  wildcardWildcard = "*/*",
}

/**
 * Passthrough PUT
 */
export async function passthroughUpdatePassthroughRaw(
  client$: UnifiedToCore,
  request: operations.UpdatePassthroughRawRequest,
  options?: RequestOptions & {
    acceptHeaderOverride?: UpdatePassthroughRawAcceptEnum;
  },
): Promise<
  Result<
    operations.UpdatePassthroughRawResponse | undefined,
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
    (value$) =>
      operations.UpdatePassthroughRawRequest$outboundSchema.parse(value$),
    "Input validation failed",
  );
  if (!parsed$.ok) {
    return parsed$;
  }
  const payload$ = parsed$.value;
  const body$ = payload$.RequestBody;

  const pathParams$ = {
    connection_id: encodeSimple$("connection_id", payload$.connection_id, {
      explode: false,
      charEncoding: "percent",
    }),
    path: encodeSimple$("path", payload$.path, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path$ = pathToFunc("/passthrough/{connection_id}/{path}")(pathParams$);

  const headers$ = new Headers({
    "Content-Type": "text/plain",
    Accept: options?.acceptHeaderOverride
      || "application/json;q=1, text/plain;q=0.7, */*;q=0",
  });

  const security$ = await extractSecurity(client$.options$.security);
  const context = {
    operationID: "updatePassthrough_raw",
    oAuth2Scopes: [],
    securitySource: client$.options$.security,
  };
  const securitySettings$ = resolveGlobalSecurity(security$);

  const requestRes = client$.createRequest$(context, {
    security: securitySettings$,
    method: "PUT",
    path: path$,
    headers: headers$,
    body: body$,
    timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const request$ = requestRes.value;

  const doResult = await client$.do$(request$, {
    context,
    errorCodes: ["4XX", "5XX"],
    retryConfig: options?.retries
      || client$.options$.retryConfig,
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const responseFields$ = {
    HttpMeta: { Response: response, Request: request$ },
  };

  const [result$] = await m$.match<
    operations.UpdatePassthroughRawResponse | undefined,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    m$.nil(
      [204, 205, 304],
      operations.UpdatePassthroughRawResponse$inboundSchema.optional(),
      { hdrs: true },
    ),
    m$.bytes(
      "2XX",
      operations.UpdatePassthroughRawResponse$inboundSchema.optional(),
      { ctype: "*/*", key: "Result" },
    ),
    m$.json(
      "2XX",
      operations.UpdatePassthroughRawResponse$inboundSchema.optional(),
      { key: "Result" },
    ),
    m$.text(
      "2XX",
      operations.UpdatePassthroughRawResponse$inboundSchema.optional(),
      { key: "Result" },
    ),
    m$.fail(["4XX", "5XX"]),
  )(response, { extraFields: responseFields$ });
  if (!result$.ok) {
    return result$;
  }

  return result$;
}
