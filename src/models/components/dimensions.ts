/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type Dimensions = {
    height?: number | undefined;
    length?: number | undefined;
    width?: number | undefined;
    modifyToken?: string | undefined;
};

/** @internal */
export namespace Dimensions$ {
    export type Inbound = {
        height?: number | undefined;
        length?: number | undefined;
        width?: number | undefined;
        modifyToken?: string | undefined;
    };

    export const inboundSchema: z.ZodType<Dimensions, z.ZodTypeDef, Inbound> = z
        .object({
            height: z.number().optional(),
            length: z.number().optional(),
            width: z.number().optional(),
            modifyToken: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.height === undefined ? null : { height: v.height }),
                ...(v.length === undefined ? null : { length: v.length }),
                ...(v.width === undefined ? null : { width: v.width }),
                ...(v.modifyToken === undefined ? null : { modifyToken: v.modifyToken }),
            };
        });

    export type Outbound = {
        height?: number | undefined;
        length?: number | undefined;
        width?: number | undefined;
        modifyToken?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Dimensions> = z
        .object({
            height: z.number().optional(),
            length: z.number().optional(),
            width: z.number().optional(),
            modifyToken: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.height === undefined ? null : { height: v.height }),
                ...(v.length === undefined ? null : { length: v.length }),
                ...(v.width === undefined ? null : { width: v.width }),
                ...(v.modifyToken === undefined ? null : { modifyToken: v.modifyToken }),
            };
        });
}