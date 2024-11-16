/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  PropertyScimUserMeta,
  PropertyScimUserMeta$inboundSchema,
  PropertyScimUserMeta$Outbound,
  PropertyScimUserMeta$outboundSchema,
} from "./propertyscimusermeta.js";
import {
  PropertyScimUserName,
  PropertyScimUserName$inboundSchema,
  PropertyScimUserName$Outbound,
  PropertyScimUserName$outboundSchema,
} from "./propertyscimusername.js";
import {
  PropertyScimUserSchemas,
  PropertyScimUserSchemas$inboundSchema,
  PropertyScimUserSchemas$outboundSchema,
} from "./propertyscimuserschemas.js";
import {
  PropertyScimUserUrnIetfParamsScimSchemasExtensionEnterprise20User,
  PropertyScimUserUrnIetfParamsScimSchemasExtensionEnterprise20User$inboundSchema,
  PropertyScimUserUrnIetfParamsScimSchemasExtensionEnterprise20User$Outbound,
  PropertyScimUserUrnIetfParamsScimSchemasExtensionEnterprise20User$outboundSchema,
} from "./propertyscimuserurnietfparamsscimschemasextensionenterprise20user.js";
import {
  PropertyScimUserUrnIetfParamsScimSchemasExtensionLatticeAttributes10User,
  PropertyScimUserUrnIetfParamsScimSchemasExtensionLatticeAttributes10User$inboundSchema,
  PropertyScimUserUrnIetfParamsScimSchemasExtensionLatticeAttributes10User$Outbound,
  PropertyScimUserUrnIetfParamsScimSchemasExtensionLatticeAttributes10User$outboundSchema,
} from "./propertyscimuserurnietfparamsscimschemasextensionlatticeattributes10user.js";
import {
  PropertyScimUserUrnIetfParamsScimSchemasExtensionPeakon20User,
  PropertyScimUserUrnIetfParamsScimSchemasExtensionPeakon20User$inboundSchema,
  PropertyScimUserUrnIetfParamsScimSchemasExtensionPeakon20User$Outbound,
  PropertyScimUserUrnIetfParamsScimSchemasExtensionPeakon20User$outboundSchema,
} from "./propertyscimuserurnietfparamsscimschemasextensionpeakon20user.js";
import {
  ScimAddress,
  ScimAddress$inboundSchema,
  ScimAddress$Outbound,
  ScimAddress$outboundSchema,
} from "./scimaddress.js";
import {
  ScimEmail,
  ScimEmail$inboundSchema,
  ScimEmail$Outbound,
  ScimEmail$outboundSchema,
} from "./scimemail.js";
import {
  ScimEntitlement,
  ScimEntitlement$inboundSchema,
  ScimEntitlement$Outbound,
  ScimEntitlement$outboundSchema,
} from "./scimentitlement.js";
import {
  ScimIms,
  ScimIms$inboundSchema,
  ScimIms$Outbound,
  ScimIms$outboundSchema,
} from "./scimims.js";
import {
  ScimPhoneNumber,
  ScimPhoneNumber$inboundSchema,
  ScimPhoneNumber$Outbound,
  ScimPhoneNumber$outboundSchema,
} from "./scimphonenumber.js";
import {
  ScimPhoto,
  ScimPhoto$inboundSchema,
  ScimPhoto$Outbound,
  ScimPhoto$outboundSchema,
} from "./scimphoto.js";
import {
  ScimRole,
  ScimRole$inboundSchema,
  ScimRole$Outbound,
  ScimRole$outboundSchema,
} from "./scimrole.js";
import {
  ScimUserGroups,
  ScimUserGroups$inboundSchema,
  ScimUserGroups$Outbound,
  ScimUserGroups$outboundSchema,
} from "./scimusergroups.js";

export type ScimUser = {
  active?: boolean | undefined;
  addresses?: Array<ScimAddress> | undefined;
  displayName?: string | undefined;
  emails?: Array<ScimEmail> | undefined;
  entitlements?: Array<ScimEntitlement> | undefined;
  externalId?: string | undefined;
  groups?: Array<ScimUserGroups> | undefined;
  id?: string | undefined;
  ims?: Array<ScimIms> | undefined;
  locale?: string | undefined;
  meta?: PropertyScimUserMeta | undefined;
  name?: PropertyScimUserName | undefined;
  nickName?: string | undefined;
  password?: string | undefined;
  phoneNumbers?: Array<ScimPhoneNumber> | undefined;
  photos?: Array<ScimPhoto> | undefined;
  preferredLanguage?: string | undefined;
  profileUrl?: string | undefined;
  /**
   * Student, Faculty, ...
   */
  roles?: Array<ScimRole> | undefined;
  schemas?: Array<PropertyScimUserSchemas> | undefined;
  timezone?: string | undefined;
  title?: string | undefined;
  /**
   * an organization.
   */
  urnIetfParamsScimSchemasExtensionEnterprise20User?:
    | PropertyScimUserUrnIetfParamsScimSchemasExtensionEnterprise20User
    | undefined;
  urnIetfParamsScimSchemasExtensionLatticeAttributes10User?:
    | PropertyScimUserUrnIetfParamsScimSchemasExtensionLatticeAttributes10User
    | undefined;
  urnIetfParamsScimSchemasExtensionPeakon20User?:
    | PropertyScimUserUrnIetfParamsScimSchemasExtensionPeakon20User
    | undefined;
  userName?: string | undefined;
  userType?: string | undefined;
  x509Certificates?: Array<ScimRole> | undefined;
};

/** @internal */
export const ScimUser$inboundSchema: z.ZodType<
  ScimUser,
  z.ZodTypeDef,
  unknown
> = z.object({
  active: z.boolean().optional(),
  addresses: z.array(ScimAddress$inboundSchema).optional(),
  displayName: z.string().optional(),
  emails: z.array(ScimEmail$inboundSchema).optional(),
  entitlements: z.array(ScimEntitlement$inboundSchema).optional(),
  externalId: z.string().optional(),
  groups: z.array(ScimUserGroups$inboundSchema).optional(),
  id: z.string().optional(),
  ims: z.array(ScimIms$inboundSchema).optional(),
  locale: z.string().optional(),
  meta: PropertyScimUserMeta$inboundSchema.optional(),
  name: PropertyScimUserName$inboundSchema.optional(),
  nickName: z.string().optional(),
  password: z.string().optional(),
  phoneNumbers: z.array(ScimPhoneNumber$inboundSchema).optional(),
  photos: z.array(ScimPhoto$inboundSchema).optional(),
  preferredLanguage: z.string().optional(),
  profileUrl: z.string().optional(),
  roles: z.array(ScimRole$inboundSchema).optional(),
  schemas: z.array(PropertyScimUserSchemas$inboundSchema).optional(),
  timezone: z.string().optional(),
  title: z.string().optional(),
  "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User":
    PropertyScimUserUrnIetfParamsScimSchemasExtensionEnterprise20User$inboundSchema
      .optional(),
  "urn:ietf:params:scim:schemas:extension:lattice:attributes:1.0:User":
    PropertyScimUserUrnIetfParamsScimSchemasExtensionLatticeAttributes10User$inboundSchema
      .optional(),
  "urn:ietf:params:scim:schemas:extension:peakon:2.0:User":
    PropertyScimUserUrnIetfParamsScimSchemasExtensionPeakon20User$inboundSchema
      .optional(),
  userName: z.string().optional(),
  userType: z.string().optional(),
  x509Certificates: z.array(ScimRole$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User":
      "urnIetfParamsScimSchemasExtensionEnterprise20User",
    "urn:ietf:params:scim:schemas:extension:lattice:attributes:1.0:User":
      "urnIetfParamsScimSchemasExtensionLatticeAttributes10User",
    "urn:ietf:params:scim:schemas:extension:peakon:2.0:User":
      "urnIetfParamsScimSchemasExtensionPeakon20User",
  });
});

/** @internal */
export type ScimUser$Outbound = {
  active?: boolean | undefined;
  addresses?: Array<ScimAddress$Outbound> | undefined;
  displayName?: string | undefined;
  emails?: Array<ScimEmail$Outbound> | undefined;
  entitlements?: Array<ScimEntitlement$Outbound> | undefined;
  externalId?: string | undefined;
  groups?: Array<ScimUserGroups$Outbound> | undefined;
  id?: string | undefined;
  ims?: Array<ScimIms$Outbound> | undefined;
  locale?: string | undefined;
  meta?: PropertyScimUserMeta$Outbound | undefined;
  name?: PropertyScimUserName$Outbound | undefined;
  nickName?: string | undefined;
  password?: string | undefined;
  phoneNumbers?: Array<ScimPhoneNumber$Outbound> | undefined;
  photos?: Array<ScimPhoto$Outbound> | undefined;
  preferredLanguage?: string | undefined;
  profileUrl?: string | undefined;
  roles?: Array<ScimRole$Outbound> | undefined;
  schemas?: Array<string> | undefined;
  timezone?: string | undefined;
  title?: string | undefined;
  "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User"?:
    | PropertyScimUserUrnIetfParamsScimSchemasExtensionEnterprise20User$Outbound
    | undefined;
  "urn:ietf:params:scim:schemas:extension:lattice:attributes:1.0:User"?:
    | PropertyScimUserUrnIetfParamsScimSchemasExtensionLatticeAttributes10User$Outbound
    | undefined;
  "urn:ietf:params:scim:schemas:extension:peakon:2.0:User"?:
    | PropertyScimUserUrnIetfParamsScimSchemasExtensionPeakon20User$Outbound
    | undefined;
  userName?: string | undefined;
  userType?: string | undefined;
  x509Certificates?: Array<ScimRole$Outbound> | undefined;
};

/** @internal */
export const ScimUser$outboundSchema: z.ZodType<
  ScimUser$Outbound,
  z.ZodTypeDef,
  ScimUser
> = z.object({
  active: z.boolean().optional(),
  addresses: z.array(ScimAddress$outboundSchema).optional(),
  displayName: z.string().optional(),
  emails: z.array(ScimEmail$outboundSchema).optional(),
  entitlements: z.array(ScimEntitlement$outboundSchema).optional(),
  externalId: z.string().optional(),
  groups: z.array(ScimUserGroups$outboundSchema).optional(),
  id: z.string().optional(),
  ims: z.array(ScimIms$outboundSchema).optional(),
  locale: z.string().optional(),
  meta: PropertyScimUserMeta$outboundSchema.optional(),
  name: PropertyScimUserName$outboundSchema.optional(),
  nickName: z.string().optional(),
  password: z.string().optional(),
  phoneNumbers: z.array(ScimPhoneNumber$outboundSchema).optional(),
  photos: z.array(ScimPhoto$outboundSchema).optional(),
  preferredLanguage: z.string().optional(),
  profileUrl: z.string().optional(),
  roles: z.array(ScimRole$outboundSchema).optional(),
  schemas: z.array(PropertyScimUserSchemas$outboundSchema).optional(),
  timezone: z.string().optional(),
  title: z.string().optional(),
  urnIetfParamsScimSchemasExtensionEnterprise20User:
    PropertyScimUserUrnIetfParamsScimSchemasExtensionEnterprise20User$outboundSchema
      .optional(),
  urnIetfParamsScimSchemasExtensionLatticeAttributes10User:
    PropertyScimUserUrnIetfParamsScimSchemasExtensionLatticeAttributes10User$outboundSchema
      .optional(),
  urnIetfParamsScimSchemasExtensionPeakon20User:
    PropertyScimUserUrnIetfParamsScimSchemasExtensionPeakon20User$outboundSchema
      .optional(),
  userName: z.string().optional(),
  userType: z.string().optional(),
  x509Certificates: z.array(ScimRole$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    urnIetfParamsScimSchemasExtensionEnterprise20User:
      "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User",
    urnIetfParamsScimSchemasExtensionLatticeAttributes10User:
      "urn:ietf:params:scim:schemas:extension:lattice:attributes:1.0:User",
    urnIetfParamsScimSchemasExtensionPeakon20User:
      "urn:ietf:params:scim:schemas:extension:peakon:2.0:User",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ScimUser$ {
  /** @deprecated use `ScimUser$inboundSchema` instead. */
  export const inboundSchema = ScimUser$inboundSchema;
  /** @deprecated use `ScimUser$outboundSchema` instead. */
  export const outboundSchema = ScimUser$outboundSchema;
  /** @deprecated use `ScimUser$Outbound` instead. */
  export type Outbound = ScimUser$Outbound;
}

export function scimUserToJSON(scimUser: ScimUser): string {
  return JSON.stringify(ScimUser$outboundSchema.parse(scimUser));
}

export function scimUserFromJSON(
  jsonString: string,
): SafeParseResult<ScimUser, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ScimUser$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ScimUser' from JSON`,
  );
}
