/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ImageMimeType, ImageMimeType$ } from "./imagemimetype";
import { z } from "zod";

export type Images = {
    id?: string | undefined;
    src?: string | undefined;
    altText?: string | undefined;
    width?: number | undefined;
    height?: number | undefined;
    thumbnailSrc?: string | undefined;
    caption?: string | undefined;
    title?: string | undefined;
    mimeType?: ImageMimeType | undefined;
    tags?: Array<string> | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    active?: boolean | undefined;
    deleted?: boolean | undefined;
};

/** @internal */
export namespace Images$ {
    export type Inbound = {
        id?: string | undefined;
        src?: string | undefined;
        altText?: string | undefined;
        width?: number | undefined;
        height?: number | undefined;
        thumbnailSrc?: string | undefined;
        caption?: string | undefined;
        title?: string | undefined;
        mimeType?: ImageMimeType | undefined;
        tags?: Array<string> | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        active?: boolean | undefined;
        deleted?: boolean | undefined;
    };

    export const inboundSchema: z.ZodType<Images, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string().optional(),
            src: z.string().optional(),
            altText: z.string().optional(),
            width: z.number().optional(),
            height: z.number().optional(),
            thumbnailSrc: z.string().optional(),
            caption: z.string().optional(),
            title: z.string().optional(),
            mimeType: ImageMimeType$.optional(),
            tags: z.array(z.string()).optional(),
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
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.src === undefined ? null : { src: v.src }),
                ...(v.altText === undefined ? null : { altText: v.altText }),
                ...(v.width === undefined ? null : { width: v.width }),
                ...(v.height === undefined ? null : { height: v.height }),
                ...(v.thumbnailSrc === undefined ? null : { thumbnailSrc: v.thumbnailSrc }),
                ...(v.caption === undefined ? null : { caption: v.caption }),
                ...(v.title === undefined ? null : { title: v.title }),
                ...(v.mimeType === undefined ? null : { mimeType: v.mimeType }),
                ...(v.tags === undefined ? null : { tags: v.tags }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.active === undefined ? null : { active: v.active }),
                ...(v.deleted === undefined ? null : { deleted: v.deleted }),
            };
        });

    export type Outbound = {
        id?: string | undefined;
        src?: string | undefined;
        altText?: string | undefined;
        width?: number | undefined;
        height?: number | undefined;
        thumbnailSrc?: string | undefined;
        caption?: string | undefined;
        title?: string | undefined;
        mimeType?: ImageMimeType | undefined;
        tags?: Array<string> | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        active?: boolean | undefined;
        deleted?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Images> = z
        .object({
            id: z.string().optional(),
            src: z.string().optional(),
            altText: z.string().optional(),
            width: z.number().optional(),
            height: z.number().optional(),
            thumbnailSrc: z.string().optional(),
            caption: z.string().optional(),
            title: z.string().optional(),
            mimeType: ImageMimeType$.optional(),
            tags: z.array(z.string()).optional(),
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
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.src === undefined ? null : { src: v.src }),
                ...(v.altText === undefined ? null : { altText: v.altText }),
                ...(v.width === undefined ? null : { width: v.width }),
                ...(v.height === undefined ? null : { height: v.height }),
                ...(v.thumbnailSrc === undefined ? null : { thumbnailSrc: v.thumbnailSrc }),
                ...(v.caption === undefined ? null : { caption: v.caption }),
                ...(v.title === undefined ? null : { title: v.title }),
                ...(v.mimeType === undefined ? null : { mimeType: v.mimeType }),
                ...(v.tags === undefined ? null : { tags: v.tags }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.active === undefined ? null : { active: v.active }),
                ...(v.deleted === undefined ? null : { deleted: v.deleted }),
            };
        });
}
