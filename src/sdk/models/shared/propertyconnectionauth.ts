/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PropertyConnectionAuthMeta = {};

/**
 * An authentication object that represents a specific authorized user's connection to an integration.
 */
export type PropertyConnectionAuth = {
  accessToken?: string | undefined;
  apiUrl?: string | undefined;
  appId?: string | undefined;
  authorizeUrl?: string | undefined;
  clientId?: string | undefined;
  clientSecret?: string | undefined;
  consumerKey?: string | undefined;
  consumerSecret?: string | undefined;
  devApiKey?: string | undefined;
  emails?: Array<string> | undefined;
  expiresIn?: number | undefined;
  expiryDate?: Date | undefined;
  key?: string | undefined;
  meta?: PropertyConnectionAuthMeta | undefined;
  name?: string | undefined;
  /**
   * When integration.auth_type = "other", this field contains the authentication credentials in the same order as token_names
   */
  otherAuthInfo?: Array<string> | undefined;
  pem?: string | undefined;
  refreshToken?: string | undefined;
  refreshTokenExpiresDate?: Date | undefined;
  refreshTokenExpiresIn?: number | undefined;
  state?: string | undefined;
  token?: string | undefined;
  tokenUrl?: string | undefined;
  userId?: string | undefined;
};

/** @internal */
export const PropertyConnectionAuthMeta$inboundSchema: z.ZodType<
  PropertyConnectionAuthMeta,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type PropertyConnectionAuthMeta$Outbound = {};

/** @internal */
export const PropertyConnectionAuthMeta$outboundSchema: z.ZodType<
  PropertyConnectionAuthMeta$Outbound,
  z.ZodTypeDef,
  PropertyConnectionAuthMeta
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PropertyConnectionAuthMeta$ {
  /** @deprecated use `PropertyConnectionAuthMeta$inboundSchema` instead. */
  export const inboundSchema = PropertyConnectionAuthMeta$inboundSchema;
  /** @deprecated use `PropertyConnectionAuthMeta$outboundSchema` instead. */
  export const outboundSchema = PropertyConnectionAuthMeta$outboundSchema;
  /** @deprecated use `PropertyConnectionAuthMeta$Outbound` instead. */
  export type Outbound = PropertyConnectionAuthMeta$Outbound;
}

export function propertyConnectionAuthMetaToJSON(
  propertyConnectionAuthMeta: PropertyConnectionAuthMeta,
): string {
  return JSON.stringify(
    PropertyConnectionAuthMeta$outboundSchema.parse(propertyConnectionAuthMeta),
  );
}

export function propertyConnectionAuthMetaFromJSON(
  jsonString: string,
): SafeParseResult<PropertyConnectionAuthMeta, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PropertyConnectionAuthMeta$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PropertyConnectionAuthMeta' from JSON`,
  );
}

/** @internal */
export const PropertyConnectionAuth$inboundSchema: z.ZodType<
  PropertyConnectionAuth,
  z.ZodTypeDef,
  unknown
> = z.object({
  access_token: z.string().optional(),
  api_url: z.string().optional(),
  app_id: z.string().optional(),
  authorize_url: z.string().optional(),
  client_id: z.string().optional(),
  client_secret: z.string().optional(),
  consumer_key: z.string().optional(),
  consumer_secret: z.string().optional(),
  dev_api_key: z.string().optional(),
  emails: z.array(z.string()).optional(),
  expires_in: z.number().optional(),
  expiry_date: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  key: z.string().optional(),
  meta: z.lazy(() => PropertyConnectionAuthMeta$inboundSchema).optional(),
  name: z.string().optional(),
  other_auth_info: z.array(z.string()).optional(),
  pem: z.string().optional(),
  refresh_token: z.string().optional(),
  refresh_token_expires_date: z.string().datetime({ offset: true }).transform(
    v => new Date(v)
  ).optional(),
  refresh_token_expires_in: z.number().optional(),
  state: z.string().optional(),
  token: z.string().optional(),
  token_url: z.string().optional(),
  user_id: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "access_token": "accessToken",
    "api_url": "apiUrl",
    "app_id": "appId",
    "authorize_url": "authorizeUrl",
    "client_id": "clientId",
    "client_secret": "clientSecret",
    "consumer_key": "consumerKey",
    "consumer_secret": "consumerSecret",
    "dev_api_key": "devApiKey",
    "expires_in": "expiresIn",
    "expiry_date": "expiryDate",
    "other_auth_info": "otherAuthInfo",
    "refresh_token": "refreshToken",
    "refresh_token_expires_date": "refreshTokenExpiresDate",
    "refresh_token_expires_in": "refreshTokenExpiresIn",
    "token_url": "tokenUrl",
    "user_id": "userId",
  });
});

/** @internal */
export type PropertyConnectionAuth$Outbound = {
  access_token?: string | undefined;
  api_url?: string | undefined;
  app_id?: string | undefined;
  authorize_url?: string | undefined;
  client_id?: string | undefined;
  client_secret?: string | undefined;
  consumer_key?: string | undefined;
  consumer_secret?: string | undefined;
  dev_api_key?: string | undefined;
  emails?: Array<string> | undefined;
  expires_in?: number | undefined;
  expiry_date?: string | undefined;
  key?: string | undefined;
  meta?: PropertyConnectionAuthMeta$Outbound | undefined;
  name?: string | undefined;
  other_auth_info?: Array<string> | undefined;
  pem?: string | undefined;
  refresh_token?: string | undefined;
  refresh_token_expires_date?: string | undefined;
  refresh_token_expires_in?: number | undefined;
  state?: string | undefined;
  token?: string | undefined;
  token_url?: string | undefined;
  user_id?: string | undefined;
};

/** @internal */
export const PropertyConnectionAuth$outboundSchema: z.ZodType<
  PropertyConnectionAuth$Outbound,
  z.ZodTypeDef,
  PropertyConnectionAuth
> = z.object({
  accessToken: z.string().optional(),
  apiUrl: z.string().optional(),
  appId: z.string().optional(),
  authorizeUrl: z.string().optional(),
  clientId: z.string().optional(),
  clientSecret: z.string().optional(),
  consumerKey: z.string().optional(),
  consumerSecret: z.string().optional(),
  devApiKey: z.string().optional(),
  emails: z.array(z.string()).optional(),
  expiresIn: z.number().optional(),
  expiryDate: z.date().transform(v => v.toISOString()).optional(),
  key: z.string().optional(),
  meta: z.lazy(() => PropertyConnectionAuthMeta$outboundSchema).optional(),
  name: z.string().optional(),
  otherAuthInfo: z.array(z.string()).optional(),
  pem: z.string().optional(),
  refreshToken: z.string().optional(),
  refreshTokenExpiresDate: z.date().transform(v => v.toISOString()).optional(),
  refreshTokenExpiresIn: z.number().optional(),
  state: z.string().optional(),
  token: z.string().optional(),
  tokenUrl: z.string().optional(),
  userId: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    accessToken: "access_token",
    apiUrl: "api_url",
    appId: "app_id",
    authorizeUrl: "authorize_url",
    clientId: "client_id",
    clientSecret: "client_secret",
    consumerKey: "consumer_key",
    consumerSecret: "consumer_secret",
    devApiKey: "dev_api_key",
    expiresIn: "expires_in",
    expiryDate: "expiry_date",
    otherAuthInfo: "other_auth_info",
    refreshToken: "refresh_token",
    refreshTokenExpiresDate: "refresh_token_expires_date",
    refreshTokenExpiresIn: "refresh_token_expires_in",
    tokenUrl: "token_url",
    userId: "user_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PropertyConnectionAuth$ {
  /** @deprecated use `PropertyConnectionAuth$inboundSchema` instead. */
  export const inboundSchema = PropertyConnectionAuth$inboundSchema;
  /** @deprecated use `PropertyConnectionAuth$outboundSchema` instead. */
  export const outboundSchema = PropertyConnectionAuth$outboundSchema;
  /** @deprecated use `PropertyConnectionAuth$Outbound` instead. */
  export type Outbound = PropertyConnectionAuth$Outbound;
}

export function propertyConnectionAuthToJSON(
  propertyConnectionAuth: PropertyConnectionAuth,
): string {
  return JSON.stringify(
    PropertyConnectionAuth$outboundSchema.parse(propertyConnectionAuth),
  );
}

export function propertyConnectionAuthFromJSON(
  jsonString: string,
): SafeParseResult<PropertyConnectionAuth, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PropertyConnectionAuth$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PropertyConnectionAuth' from JSON`,
  );
}
