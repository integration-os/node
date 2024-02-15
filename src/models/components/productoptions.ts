/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type ProductOptions = {
    id?: string | undefined;
    productId?: number | undefined;
    name?: string | undefined;
    values?: Array<string> | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    modifyToken?: string | undefined;
};

/** @internal */
export namespace ProductOptions$ {
    export type Inbound = {
        id?: string | undefined;
        productId?: number | undefined;
        name?: string | undefined;
        values?: Array<string> | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        modifyToken?: string | undefined;
    };

    export const inboundSchema: z.ZodType<ProductOptions, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string().optional(),
            productId: z.number().optional(),
            name: z.string().optional(),
            values: z.array(z.string()).optional(),
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
            modifyToken: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.productId === undefined ? null : { productId: v.productId }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.values === undefined ? null : { values: v.values }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.modifyToken === undefined ? null : { modifyToken: v.modifyToken }),
            };
        });

    export type Outbound = {
        id?: string | undefined;
        productId?: number | undefined;
        name?: string | undefined;
        values?: Array<string> | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        modifyToken?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ProductOptions> = z
        .object({
            id: z.string().optional(),
            productId: z.number().optional(),
            name: z.string().optional(),
            values: z.array(z.string()).optional(),
            createdAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            updatedAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            modifyToken: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.productId === undefined ? null : { productId: v.productId }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.values === undefined ? null : { values: v.values }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.modifyToken === undefined ? null : { modifyToken: v.modifyToken }),
            };
        });
}
