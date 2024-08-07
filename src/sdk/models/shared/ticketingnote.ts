/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type TicketingNote = {
    createdAt?: Date | undefined;
    customerId?: string | undefined;
    description?: string | undefined;
    id?: string | undefined;
    raw?: { [k: string]: any } | undefined;
    ticketId?: string | undefined;
    updatedAt?: string | undefined;
    userId?: string | undefined;
};

/** @internal */
export const TicketingNote$inboundSchema: z.ZodType<TicketingNote, z.ZodTypeDef, unknown> = z
    .object({
        created_at: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v))
            .optional(),
        customer_id: z.string().optional(),
        description: z.string().optional(),
        id: z.string().optional(),
        raw: z.record(z.any()).optional(),
        ticket_id: z.string().optional(),
        updated_at: z.string().optional(),
        user_id: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            created_at: "createdAt",
            customer_id: "customerId",
            ticket_id: "ticketId",
            updated_at: "updatedAt",
            user_id: "userId",
        });
    });

/** @internal */
export type TicketingNote$Outbound = {
    created_at?: string | undefined;
    customer_id?: string | undefined;
    description?: string | undefined;
    id?: string | undefined;
    raw?: { [k: string]: any } | undefined;
    ticket_id?: string | undefined;
    updated_at?: string | undefined;
    user_id?: string | undefined;
};

/** @internal */
export const TicketingNote$outboundSchema: z.ZodType<
    TicketingNote$Outbound,
    z.ZodTypeDef,
    TicketingNote
> = z
    .object({
        createdAt: z
            .date()
            .transform((v) => v.toISOString())
            .optional(),
        customerId: z.string().optional(),
        description: z.string().optional(),
        id: z.string().optional(),
        raw: z.record(z.any()).optional(),
        ticketId: z.string().optional(),
        updatedAt: z.string().optional(),
        userId: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            createdAt: "created_at",
            customerId: "customer_id",
            ticketId: "ticket_id",
            updatedAt: "updated_at",
            userId: "user_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TicketingNote$ {
    /** @deprecated use `TicketingNote$inboundSchema` instead. */
    export const inboundSchema = TicketingNote$inboundSchema;
    /** @deprecated use `TicketingNote$outboundSchema` instead. */
    export const outboundSchema = TicketingNote$outboundSchema;
    /** @deprecated use `TicketingNote$Outbound` instead. */
    export type Outbound = TicketingNote$Outbound;
}
