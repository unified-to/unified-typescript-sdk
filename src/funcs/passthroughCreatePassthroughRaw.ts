/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { UnifiedToCore } from "../core.js";
import { encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { compactMap } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
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

export enum CreatePassthroughRawAcceptEnum {
  applicationJson = "application/json",
  textCsv = "text/csv",
  textPlain = "text/plain",
  applicationXml = "application/xml",
  wildcardRootWildcard = "*/*",
}

/**
 * Passthrough POST
 */
export async function passthroughCreatePassthroughRaw(
  client: UnifiedToCore,
  request: operations.CreatePassthroughRawRequest,
  options?: RequestOptions & {
    acceptHeaderOverride?: CreatePassthroughRawAcceptEnum;
  },
): Promise<
  Result<
    operations.CreatePassthroughRawResponse | undefined,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const parsed = safeParse(
    request,
    (value) =>
      operations.CreatePassthroughRawRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = payload.RequestBody;

  const pathParams = {
    connection_id: encodeSimple("connection_id", payload.connection_id, {
      explode: false,
      charEncoding: "percent",
    }),
    path: encodeSimple("path", payload.path, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc("/passthrough/{connection_id}/{path}")(pathParams);

  const headers = new Headers(compactMap({
    "Content-Type": "text/plain",
    Accept: options?.acceptHeaderOverride
      || "application/json;q=1, text/csv;q=0.8, text/plain;q=0.6, application/xml;q=0.4, */*;q=0",
  }));

  const securityInput = await extractSecurity(client._options.security);
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    operationID: "createPassthrough_raw",
    oAuth2Scopes: [],

    resolvedSecurity: requestSecurity,

    securitySource: client._options.security,
    retryConfig: options?.retries
      || client._options.retryConfig
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  };

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "POST",
    baseURL: options?.serverURL,
    path: path,
    headers: headers,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["4XX", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result] = await M.match<
    operations.CreatePassthroughRawResponse | undefined,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.nil(
      [204, 205, 304],
      operations.CreatePassthroughRawResponse$inboundSchema.optional(),
      { hdrs: true },
    ),
    M.fail(["4XX", "5XX"]),
    M.json(
      "default",
      operations.CreatePassthroughRawResponse$inboundSchema.optional(),
      { hdrs: true, key: "Result" },
    ),
    M.text(
      "default",
      operations.CreatePassthroughRawResponse$inboundSchema.optional(),
      { ctype: "application/xml", hdrs: true, key: "Result" },
    ),
    M.text(
      "default",
      operations.CreatePassthroughRawResponse$inboundSchema.optional(),
      { ctype: "text/csv", hdrs: true, key: "Result" },
    ),
    M.text(
      "default",
      operations.CreatePassthroughRawResponse$inboundSchema.optional(),
      { hdrs: true, key: "Result" },
    ),
    M.stream(
      "default",
      operations.CreatePassthroughRawResponse$inboundSchema.optional(),
      { ctype: "*/*", hdrs: true, key: "Result" },
    ),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return result;
  }

  return result;
}
