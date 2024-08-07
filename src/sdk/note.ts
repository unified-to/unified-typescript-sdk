/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { noteCreateTicketingNote } from "../funcs/noteCreateTicketingNote.js";
import { noteGetTicketingNote } from "../funcs/noteGetTicketingNote.js";
import { noteListTicketingNotes } from "../funcs/noteListTicketingNotes.js";
import { notePatchTicketingNote } from "../funcs/notePatchTicketingNote.js";
import { noteRemoveTicketingNote } from "../funcs/noteRemoveTicketingNote.js";
import { noteUpdateTicketingNote } from "../funcs/noteUpdateTicketingNote.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Note extends ClientSDK {
    /**
     * Create a note
     */
    async createTicketingNote(
        request: operations.CreateTicketingNoteRequest,
        options?: RequestOptions
    ): Promise<shared.TicketingNote> {
        return unwrapAsync(noteCreateTicketingNote(this, request, options));
    }

    /**
     * Retrieve a note
     */
    async getTicketingNote(
        request: operations.GetTicketingNoteRequest,
        options?: RequestOptions
    ): Promise<shared.TicketingNote> {
        return unwrapAsync(noteGetTicketingNote(this, request, options));
    }

    /**
     * List all notes
     */
    async listTicketingNotes(
        request: operations.ListTicketingNotesRequest,
        options?: RequestOptions
    ): Promise<Array<shared.TicketingNote>> {
        return unwrapAsync(noteListTicketingNotes(this, request, options));
    }

    /**
     * Update a note
     */
    async patchTicketingNote(
        request: operations.PatchTicketingNoteRequest,
        options?: RequestOptions
    ): Promise<shared.TicketingNote> {
        return unwrapAsync(notePatchTicketingNote(this, request, options));
    }

    /**
     * Remove a note
     */
    async removeTicketingNote(
        request: operations.RemoveTicketingNoteRequest,
        options?: RequestOptions
    ): Promise<void> {
        return unwrapAsync(noteRemoveTicketingNote(this, request, options));
    }

    /**
     * Update a note
     */
    async updateTicketingNote(
        request: operations.UpdateTicketingNoteRequest,
        options?: RequestOptions
    ): Promise<shared.TicketingNote> {
        return unwrapAsync(noteUpdateTicketingNote(this, request, options));
    }
}
