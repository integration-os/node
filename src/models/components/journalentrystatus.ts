/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export enum JournalEntryStatus {
    Draft = "draft",
    Pending = "pending",
    Posted = "posted",
    Voided = "voided",
    Error = "error",
    Corrected = "corrected",
}

/** @internal */
export const JournalEntryStatus$ = z.nativeEnum(JournalEntryStatus);