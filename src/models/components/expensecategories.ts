/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type ExpenseCategories = {
    id?: string | undefined;
    name?: string | undefined;
    description?: string | undefined;
    modifyToken?: string | undefined;
};

/** @internal */
export namespace ExpenseCategories$ {
    export type Inbound = {
        id?: string | undefined;
        name?: string | undefined;
        description?: string | undefined;
        modifyToken?: string | undefined;
    };

    export const inboundSchema: z.ZodType<ExpenseCategories, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string().optional(),
            name: z.string().optional(),
            description: z.string().optional(),
            modifyToken: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.modifyToken === undefined ? null : { modifyToken: v.modifyToken }),
            };
        });

    export type Outbound = {
        id?: string | undefined;
        name?: string | undefined;
        description?: string | undefined;
        modifyToken?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ExpenseCategories> = z
        .object({
            id: z.string().optional(),
            name: z.string().optional(),
            description: z.string().optional(),
            modifyToken: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.modifyToken === undefined ? null : { modifyToken: v.modifyToken }),
            };
        });
}