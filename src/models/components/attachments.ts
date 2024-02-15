/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Entity, Entity$ } from "./entity";
import { Metadata, Metadata$ } from "./metadata";
import { Permissions, Permissions$ } from "./permissions";
import { z } from "zod";

export type Attachments = {
    id?: string | undefined;
    fileName?: string | undefined;
    fileSize?: number | undefined;
    fileType?: string | undefined;
    url?: string | undefined;
    thumbnailUrl?: string | undefined;
    previewUrl?: string | undefined;
    content?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    metadata?: Metadata | undefined;
    associatedWith?: Entity | undefined;
    permissions?: Permissions | undefined;
    modifyToken?: string | undefined;
};

/** @internal */
export namespace Attachments$ {
    export type Inbound = {
        id?: string | undefined;
        fileName?: string | undefined;
        fileSize?: number | undefined;
        fileType?: string | undefined;
        url?: string | undefined;
        thumbnailUrl?: string | undefined;
        previewUrl?: string | undefined;
        content?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        metadata?: Metadata$.Inbound | undefined;
        associatedWith?: Entity$.Inbound | undefined;
        permissions?: Permissions$.Inbound | undefined;
        modifyToken?: string | undefined;
    };

    export const inboundSchema: z.ZodType<Attachments, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string().optional(),
            fileName: z.string().optional(),
            fileSize: z.number().optional(),
            fileType: z.string().optional(),
            url: z.string().optional(),
            thumbnailUrl: z.string().optional(),
            previewUrl: z.string().optional(),
            content: z.string().optional(),
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
            metadata: Metadata$?.inboundSchema.optional(),
            associatedWith: Entity$?.inboundSchema.optional(),
            permissions: Permissions$?.inboundSchema.optional(),
            modifyToken: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.fileName === undefined ? null : { fileName: v.fileName }),
                ...(v.fileSize === undefined ? null : { fileSize: v.fileSize }),
                ...(v.fileType === undefined ? null : { fileType: v.fileType }),
                ...(v.url === undefined ? null : { url: v.url }),
                ...(v.thumbnailUrl === undefined ? null : { thumbnailUrl: v.thumbnailUrl }),
                ...(v.previewUrl === undefined ? null : { previewUrl: v.previewUrl }),
                ...(v.content === undefined ? null : { content: v.content }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.associatedWith === undefined ? null : { associatedWith: v.associatedWith }),
                ...(v.permissions === undefined ? null : { permissions: v.permissions }),
                ...(v.modifyToken === undefined ? null : { modifyToken: v.modifyToken }),
            };
        });

    export type Outbound = {
        id?: string | undefined;
        fileName?: string | undefined;
        fileSize?: number | undefined;
        fileType?: string | undefined;
        url?: string | undefined;
        thumbnailUrl?: string | undefined;
        previewUrl?: string | undefined;
        content?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        metadata?: Metadata$.Outbound | undefined;
        associatedWith?: Entity$.Outbound | undefined;
        permissions?: Permissions$.Outbound | undefined;
        modifyToken?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Attachments> = z
        .object({
            id: z.string().optional(),
            fileName: z.string().optional(),
            fileSize: z.number().optional(),
            fileType: z.string().optional(),
            url: z.string().optional(),
            thumbnailUrl: z.string().optional(),
            previewUrl: z.string().optional(),
            content: z.string().optional(),
            createdAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            updatedAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            metadata: Metadata$?.outboundSchema.optional(),
            associatedWith: Entity$?.outboundSchema.optional(),
            permissions: Permissions$?.outboundSchema.optional(),
            modifyToken: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.fileName === undefined ? null : { fileName: v.fileName }),
                ...(v.fileSize === undefined ? null : { fileSize: v.fileSize }),
                ...(v.fileType === undefined ? null : { fileType: v.fileType }),
                ...(v.url === undefined ? null : { url: v.url }),
                ...(v.thumbnailUrl === undefined ? null : { thumbnailUrl: v.thumbnailUrl }),
                ...(v.previewUrl === undefined ? null : { previewUrl: v.previewUrl }),
                ...(v.content === undefined ? null : { content: v.content }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.associatedWith === undefined ? null : { associatedWith: v.associatedWith }),
                ...(v.permissions === undefined ? null : { permissions: v.permissions }),
                ...(v.modifyToken === undefined ? null : { modifyToken: v.modifyToken }),
            };
        });
}
