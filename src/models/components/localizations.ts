/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type Localizations = {
    locale?: string | undefined;
    title?: string | undefined;
    description?: string | undefined;
    metaTitle?: string | undefined;
    metaDescription?: string | undefined;
    modifyToken?: string | undefined;
};

/** @internal */
export namespace Localizations$ {
    export type Inbound = {
        locale?: string | undefined;
        title?: string | undefined;
        description?: string | undefined;
        metaTitle?: string | undefined;
        metaDescription?: string | undefined;
        modifyToken?: string | undefined;
    };

    export const inboundSchema: z.ZodType<Localizations, z.ZodTypeDef, Inbound> = z
        .object({
            locale: z.string().optional(),
            title: z.string().optional(),
            description: z.string().optional(),
            metaTitle: z.string().optional(),
            metaDescription: z.string().optional(),
            modifyToken: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.locale === undefined ? null : { locale: v.locale }),
                ...(v.title === undefined ? null : { title: v.title }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.metaTitle === undefined ? null : { metaTitle: v.metaTitle }),
                ...(v.metaDescription === undefined
                    ? null
                    : { metaDescription: v.metaDescription }),
                ...(v.modifyToken === undefined ? null : { modifyToken: v.modifyToken }),
            };
        });

    export type Outbound = {
        locale?: string | undefined;
        title?: string | undefined;
        description?: string | undefined;
        metaTitle?: string | undefined;
        metaDescription?: string | undefined;
        modifyToken?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Localizations> = z
        .object({
            locale: z.string().optional(),
            title: z.string().optional(),
            description: z.string().optional(),
            metaTitle: z.string().optional(),
            metaDescription: z.string().optional(),
            modifyToken: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.locale === undefined ? null : { locale: v.locale }),
                ...(v.title === undefined ? null : { title: v.title }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.metaTitle === undefined ? null : { metaTitle: v.metaTitle }),
                ...(v.metaDescription === undefined
                    ? null
                    : { metaDescription: v.metaDescription }),
                ...(v.modifyToken === undefined ? null : { modifyToken: v.modifyToken }),
            };
        });
}
