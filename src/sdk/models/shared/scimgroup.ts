/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  PropertyScimGroupMeta,
  PropertyScimGroupMeta$inboundSchema,
  PropertyScimGroupMeta$Outbound,
  PropertyScimGroupMeta$outboundSchema,
} from "./propertyscimgroupmeta.js";
import {
  PropertyScimGroupSchemas,
  PropertyScimGroupSchemas$inboundSchema,
  PropertyScimGroupSchemas$outboundSchema,
} from "./propertyscimgroupschemas.js";
import {
  ScimGroupMember,
  ScimGroupMember$inboundSchema,
  ScimGroupMember$Outbound,
  ScimGroupMember$outboundSchema,
} from "./scimgroupmember.js";

export type ScimGroup = {
  displayName: string;
  externalId?: string | undefined;
  groupType?: string | undefined;
  id?: string | undefined;
  /**
   * An array of members
   */
  members?: Array<ScimGroupMember> | undefined;
  meta?: PropertyScimGroupMeta | undefined;
  /**
   * Array of schema URIs
   */
  schemas?: Array<PropertyScimGroupSchemas> | undefined;
};

/** @internal */
export const ScimGroup$inboundSchema: z.ZodType<
  ScimGroup,
  z.ZodTypeDef,
  unknown
> = z.object({
  displayName: z.string(),
  externalId: z.string().optional(),
  groupType: z.string().optional(),
  id: z.string().optional(),
  members: z.array(ScimGroupMember$inboundSchema).optional(),
  meta: PropertyScimGroupMeta$inboundSchema.optional(),
  schemas: z.array(PropertyScimGroupSchemas$inboundSchema).optional(),
});

/** @internal */
export type ScimGroup$Outbound = {
  displayName: string;
  externalId?: string | undefined;
  groupType?: string | undefined;
  id?: string | undefined;
  members?: Array<ScimGroupMember$Outbound> | undefined;
  meta?: PropertyScimGroupMeta$Outbound | undefined;
  schemas?: Array<string> | undefined;
};

/** @internal */
export const ScimGroup$outboundSchema: z.ZodType<
  ScimGroup$Outbound,
  z.ZodTypeDef,
  ScimGroup
> = z.object({
  displayName: z.string(),
  externalId: z.string().optional(),
  groupType: z.string().optional(),
  id: z.string().optional(),
  members: z.array(ScimGroupMember$outboundSchema).optional(),
  meta: PropertyScimGroupMeta$outboundSchema.optional(),
  schemas: z.array(PropertyScimGroupSchemas$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ScimGroup$ {
  /** @deprecated use `ScimGroup$inboundSchema` instead. */
  export const inboundSchema = ScimGroup$inboundSchema;
  /** @deprecated use `ScimGroup$outboundSchema` instead. */
  export const outboundSchema = ScimGroup$outboundSchema;
  /** @deprecated use `ScimGroup$Outbound` instead. */
  export type Outbound = ScimGroup$Outbound;
}

export function scimGroupToJSON(scimGroup: ScimGroup): string {
  return JSON.stringify(ScimGroup$outboundSchema.parse(scimGroup));
}

export function scimGroupFromJSON(
  jsonString: string,
): SafeParseResult<ScimGroup, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ScimGroup$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ScimGroup' from JSON`,
  );
}
