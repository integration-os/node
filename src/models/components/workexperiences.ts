/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type WorkExperiences = {
    company?: string | undefined;
    position?: string | undefined;
    startDate?: Date | undefined;
    endDate?: Date | undefined;
    description?: string | undefined;
    modifyToken?: string | undefined;
};

/** @internal */
export namespace WorkExperiences$ {
    export type Inbound = {
        company?: string | undefined;
        position?: string | undefined;
        startDate?: string | undefined;
        endDate?: string | undefined;
        description?: string | undefined;
        modifyToken?: string | undefined;
    };

    export const inboundSchema: z.ZodType<WorkExperiences, z.ZodTypeDef, Inbound> = z
        .object({
            company: z.string().optional(),
            position: z.string().optional(),
            startDate: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            endDate: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            description: z.string().optional(),
            modifyToken: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.company === undefined ? null : { company: v.company }),
                ...(v.position === undefined ? null : { position: v.position }),
                ...(v.startDate === undefined ? null : { startDate: v.startDate }),
                ...(v.endDate === undefined ? null : { endDate: v.endDate }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.modifyToken === undefined ? null : { modifyToken: v.modifyToken }),
            };
        });

    export type Outbound = {
        company?: string | undefined;
        position?: string | undefined;
        startDate?: string | undefined;
        endDate?: string | undefined;
        description?: string | undefined;
        modifyToken?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, WorkExperiences> = z
        .object({
            company: z.string().optional(),
            position: z.string().optional(),
            startDate: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            endDate: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            description: z.string().optional(),
            modifyToken: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.company === undefined ? null : { company: v.company }),
                ...(v.position === undefined ? null : { position: v.position }),
                ...(v.startDate === undefined ? null : { startDate: v.startDate }),
                ...(v.endDate === undefined ? null : { endDate: v.endDate }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.modifyToken === undefined ? null : { modifyToken: v.modifyToken }),
            };
        });
}