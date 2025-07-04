/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import {
  catchUnrecognizedEnum,
  OpenEnum,
  Unrecognized,
} from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const ScimPhotoType = {
  Photo: "photo",
  Thumbnail: "thumbnail",
} as const;
export type ScimPhotoType = OpenEnum<typeof ScimPhotoType>;

export type ScimPhoto = {
  display?: string | undefined;
  primary?: boolean | undefined;
  type?: ScimPhotoType | undefined;
  value?: string | undefined;
};

/** @internal */
export const ScimPhotoType$inboundSchema: z.ZodType<
  ScimPhotoType,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(ScimPhotoType),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const ScimPhotoType$outboundSchema: z.ZodType<
  ScimPhotoType,
  z.ZodTypeDef,
  ScimPhotoType
> = z.union([
  z.nativeEnum(ScimPhotoType),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ScimPhotoType$ {
  /** @deprecated use `ScimPhotoType$inboundSchema` instead. */
  export const inboundSchema = ScimPhotoType$inboundSchema;
  /** @deprecated use `ScimPhotoType$outboundSchema` instead. */
  export const outboundSchema = ScimPhotoType$outboundSchema;
}

/** @internal */
export const ScimPhoto$inboundSchema: z.ZodType<
  ScimPhoto,
  z.ZodTypeDef,
  unknown
> = z.object({
  display: z.string().optional(),
  primary: z.boolean().optional(),
  type: ScimPhotoType$inboundSchema.optional(),
  value: z.string().optional(),
});

/** @internal */
export type ScimPhoto$Outbound = {
  display?: string | undefined;
  primary?: boolean | undefined;
  type?: string | undefined;
  value?: string | undefined;
};

/** @internal */
export const ScimPhoto$outboundSchema: z.ZodType<
  ScimPhoto$Outbound,
  z.ZodTypeDef,
  ScimPhoto
> = z.object({
  display: z.string().optional(),
  primary: z.boolean().optional(),
  type: ScimPhotoType$outboundSchema.optional(),
  value: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ScimPhoto$ {
  /** @deprecated use `ScimPhoto$inboundSchema` instead. */
  export const inboundSchema = ScimPhoto$inboundSchema;
  /** @deprecated use `ScimPhoto$outboundSchema` instead. */
  export const outboundSchema = ScimPhoto$outboundSchema;
  /** @deprecated use `ScimPhoto$Outbound` instead. */
  export type Outbound = ScimPhoto$Outbound;
}

export function scimPhotoToJSON(scimPhoto: ScimPhoto): string {
  return JSON.stringify(ScimPhoto$outboundSchema.parse(scimPhoto));
}

export function scimPhotoFromJSON(
  jsonString: string,
): SafeParseResult<ScimPhoto, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ScimPhoto$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ScimPhoto' from JSON`,
  );
}
