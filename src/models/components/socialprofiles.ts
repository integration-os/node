/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Metadata, Metadata$ } from "./metadata";
import { SocialPlatform, SocialPlatform$ } from "./socialplatform";
import { z } from "zod";

export type SocialProfiles = {
    type?: SocialPlatform | undefined;
    username?: string | undefined;
    displayName?: string | undefined;
    url?: string | undefined;
    avatarUrl?: string | undefined;
    email?: string | undefined;
    additionalInfo?: Metadata | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    active?: boolean | undefined;
    deleted?: boolean | undefined;
};

/** @internal */
export namespace SocialProfiles$ {
    export type Inbound = {
        type?: SocialPlatform | undefined;
        username?: string | undefined;
        displayName?: string | undefined;
        url?: string | undefined;
        avatarUrl?: string | undefined;
        email?: string | undefined;
        additionalInfo?: Metadata$.Inbound | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        active?: boolean | undefined;
        deleted?: boolean | undefined;
    };

    export const inboundSchema: z.ZodType<SocialProfiles, z.ZodTypeDef, Inbound> = z
        .object({
            type: SocialPlatform$.optional(),
            username: z.string().optional(),
            displayName: z.string().optional(),
            url: z.string().optional(),
            avatarUrl: z.string().optional(),
            email: z.string().optional(),
            additionalInfo: Metadata$?.inboundSchema.optional(),
            createdAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            updatedAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            active: z.boolean().optional(),
            deleted: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.username === undefined ? null : { username: v.username }),
                ...(v.displayName === undefined ? null : { displayName: v.displayName }),
                ...(v.url === undefined ? null : { url: v.url }),
                ...(v.avatarUrl === undefined ? null : { avatarUrl: v.avatarUrl }),
                ...(v.email === undefined ? null : { email: v.email }),
                ...(v.additionalInfo === undefined ? null : { additionalInfo: v.additionalInfo }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.active === undefined ? null : { active: v.active }),
                ...(v.deleted === undefined ? null : { deleted: v.deleted }),
            };
        });

    export type Outbound = {
        type?: SocialPlatform | undefined;
        username?: string | undefined;
        displayName?: string | undefined;
        url?: string | undefined;
        avatarUrl?: string | undefined;
        email?: string | undefined;
        additionalInfo?: Metadata$.Outbound | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        active?: boolean | undefined;
        deleted?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SocialProfiles> = z
        .object({
            type: SocialPlatform$.optional(),
            username: z.string().optional(),
            displayName: z.string().optional(),
            url: z.string().optional(),
            avatarUrl: z.string().optional(),
            email: z.string().optional(),
            additionalInfo: Metadata$?.outboundSchema.optional(),
            createdAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            updatedAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            active: z.boolean().optional(),
            deleted: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.username === undefined ? null : { username: v.username }),
                ...(v.displayName === undefined ? null : { displayName: v.displayName }),
                ...(v.url === undefined ? null : { url: v.url }),
                ...(v.avatarUrl === undefined ? null : { avatarUrl: v.avatarUrl }),
                ...(v.email === undefined ? null : { email: v.email }),
                ...(v.additionalInfo === undefined ? null : { additionalInfo: v.additionalInfo }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.active === undefined ? null : { active: v.active }),
                ...(v.deleted === undefined ? null : { deleted: v.deleted }),
            };
        });
}
