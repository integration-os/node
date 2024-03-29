/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export enum TransactionStatus {
    Initiated = "initiated",
    Pending = "pending",
    InProgress = "in-progress",
    Succeeded = "succeeded",
    Failed = "failed",
    Cancelled = "cancelled",
    Error = "error",
}

/** @internal */
export const TransactionStatus$ = z.nativeEnum(TransactionStatus);
