/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export enum SupportQueryType {
    Question = "question",
    Incident = "incident",
    Problem = "problem",
    Task = "task",
    Bug = "bug",
    FeatureRequest = "feature-request",
    Feedback = "feedback",
}

/** @internal */
export const SupportQueryType$ = z.nativeEnum(SupportQueryType);
