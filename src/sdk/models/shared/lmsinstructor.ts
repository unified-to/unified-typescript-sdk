/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import {
  LmsEmail,
  LmsEmail$inboundSchema,
  LmsEmail$Outbound,
  LmsEmail$outboundSchema,
} from "./lmsemail.js";
import {
  LmsTelephone,
  LmsTelephone$inboundSchema,
  LmsTelephone$Outbound,
  LmsTelephone$outboundSchema,
} from "./lmstelephone.js";

export type LmsInstructor = {
  createdAt?: Date | undefined;
  emails?: Array<LmsEmail> | undefined;
  id?: string | undefined;
  imageUrl?: string | undefined;
  name?: string | undefined;
  raw?: { [k: string]: any } | undefined;
  telephones?: Array<LmsTelephone> | undefined;
  title?: string | undefined;
  updatedAt?: Date | undefined;
};

/** @internal */
export const LmsInstructor$inboundSchema: z.ZodType<
  LmsInstructor,
  z.ZodTypeDef,
  unknown
> = z.object({
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  emails: z.array(LmsEmail$inboundSchema).optional(),
  id: z.string().optional(),
  image_url: z.string().optional(),
  name: z.string().optional(),
  raw: z.record(z.any()).optional(),
  telephones: z.array(LmsTelephone$inboundSchema).optional(),
  title: z.string().optional(),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "image_url": "imageUrl",
    "updated_at": "updatedAt",
  });
});

/** @internal */
export type LmsInstructor$Outbound = {
  created_at?: string | undefined;
  emails?: Array<LmsEmail$Outbound> | undefined;
  id?: string | undefined;
  image_url?: string | undefined;
  name?: string | undefined;
  raw?: { [k: string]: any } | undefined;
  telephones?: Array<LmsTelephone$Outbound> | undefined;
  title?: string | undefined;
  updated_at?: string | undefined;
};

/** @internal */
export const LmsInstructor$outboundSchema: z.ZodType<
  LmsInstructor$Outbound,
  z.ZodTypeDef,
  LmsInstructor
> = z.object({
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  emails: z.array(LmsEmail$outboundSchema).optional(),
  id: z.string().optional(),
  imageUrl: z.string().optional(),
  name: z.string().optional(),
  raw: z.record(z.any()).optional(),
  telephones: z.array(LmsTelephone$outboundSchema).optional(),
  title: z.string().optional(),
  updatedAt: z.date().transform(v => v.toISOString()).optional(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    imageUrl: "image_url",
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LmsInstructor$ {
  /** @deprecated use `LmsInstructor$inboundSchema` instead. */
  export const inboundSchema = LmsInstructor$inboundSchema;
  /** @deprecated use `LmsInstructor$outboundSchema` instead. */
  export const outboundSchema = LmsInstructor$outboundSchema;
  /** @deprecated use `LmsInstructor$Outbound` instead. */
  export type Outbound = LmsInstructor$Outbound;
}