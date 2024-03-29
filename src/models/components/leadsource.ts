/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type LeadSource = {
    sourceId?: string | undefined;
    sourceName?: string | undefined;
    details?: string | undefined;
};

/** @internal */
export namespace LeadSource$ {
    export type Inbound = {
        sourceId?: string | undefined;
        sourceName?: string | undefined;
        details?: string | undefined;
    };

    export const inboundSchema: z.ZodType<LeadSource, z.ZodTypeDef, Inbound> = z
        .object({
            sourceId: z.string().optional(),
            sourceName: z.string().optional(),
            details: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.sourceId === undefined ? null : { sourceId: v.sourceId }),
                ...(v.sourceName === undefined ? null : { sourceName: v.sourceName }),
                ...(v.details === undefined ? null : { details: v.details }),
            };
        });

    export type Outbound = {
        sourceId?: string | undefined;
        sourceName?: string | undefined;
        details?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LeadSource> = z
        .object({
            sourceId: z.string().optional(),
            sourceName: z.string().optional(),
            details: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.sourceId === undefined ? null : { sourceId: v.sourceId }),
                ...(v.sourceName === undefined ? null : { sourceName: v.sourceName }),
                ...(v.details === undefined ? null : { details: v.details }),
            };
        });
}
