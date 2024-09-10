/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const AtsJobQuestionType = {
  Text: "TEXT",
  Number: "NUMBER",
  Date: "DATE",
  Boolean: "BOOLEAN",
  MultipleChoice: "MULTIPLE_CHOICE",
  File: "FILE",
  Textarea: "TEXTAREA",
  MultipleSelect: "MULTIPLE_SELECT",
  University: "UNIVERSITY",
  YesNo: "YES_NO",
  Currency: "CURRENCY",
  Url: "URL",
} as const;
export type AtsJobQuestionType = ClosedEnum<typeof AtsJobQuestionType>;

export type AtsJobQuestion = {
  description?: string | undefined;
  id?: string | undefined;
  options?: Array<string> | undefined;
  prompt?: string | undefined;
  question: string;
  required?: boolean | undefined;
  type: AtsJobQuestionType;
};

/** @internal */
export const AtsJobQuestionType$inboundSchema: z.ZodNativeEnum<
  typeof AtsJobQuestionType
> = z.nativeEnum(AtsJobQuestionType);

/** @internal */
export const AtsJobQuestionType$outboundSchema: z.ZodNativeEnum<
  typeof AtsJobQuestionType
> = AtsJobQuestionType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsJobQuestionType$ {
  /** @deprecated use `AtsJobQuestionType$inboundSchema` instead. */
  export const inboundSchema = AtsJobQuestionType$inboundSchema;
  /** @deprecated use `AtsJobQuestionType$outboundSchema` instead. */
  export const outboundSchema = AtsJobQuestionType$outboundSchema;
}

/** @internal */
export const AtsJobQuestion$inboundSchema: z.ZodType<
  AtsJobQuestion,
  z.ZodTypeDef,
  unknown
> = z.object({
  description: z.string().optional(),
  id: z.string().optional(),
  options: z.array(z.string()).optional(),
  prompt: z.string().optional(),
  question: z.string(),
  required: z.boolean().optional(),
  type: AtsJobQuestionType$inboundSchema,
});

/** @internal */
export type AtsJobQuestion$Outbound = {
  description?: string | undefined;
  id?: string | undefined;
  options?: Array<string> | undefined;
  prompt?: string | undefined;
  question: string;
  required?: boolean | undefined;
  type: string;
};

/** @internal */
export const AtsJobQuestion$outboundSchema: z.ZodType<
  AtsJobQuestion$Outbound,
  z.ZodTypeDef,
  AtsJobQuestion
> = z.object({
  description: z.string().optional(),
  id: z.string().optional(),
  options: z.array(z.string()).optional(),
  prompt: z.string().optional(),
  question: z.string(),
  required: z.boolean().optional(),
  type: AtsJobQuestionType$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsJobQuestion$ {
  /** @deprecated use `AtsJobQuestion$inboundSchema` instead. */
  export const inboundSchema = AtsJobQuestion$inboundSchema;
  /** @deprecated use `AtsJobQuestion$outboundSchema` instead. */
  export const outboundSchema = AtsJobQuestion$outboundSchema;
  /** @deprecated use `AtsJobQuestion$Outbound` instead. */
  export type Outbound = AtsJobQuestion$Outbound;
}
