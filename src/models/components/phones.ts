/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export enum PhonesType {
    Personal = "personal",
    Business = "business",
    Other = "other",
}

export type Phones = {
    phone?: string | undefined;
    country?: string | undefined;
    countryCode?: string | undefined;
    type?: PhonesType | undefined;
    modifyToken?: string | undefined;
};

/** @internal */
export const PhonesType$ = z.nativeEnum(PhonesType);

/** @internal */
export namespace Phones$ {
    export type Inbound = {
        phone?: string | undefined;
        country?: string | undefined;
        countryCode?: string | undefined;
        type?: PhonesType | undefined;
        modifyToken?: string | undefined;
    };

    export const inboundSchema: z.ZodType<Phones, z.ZodTypeDef, Inbound> = z
        .object({
            phone: z.string().optional(),
            country: z.string().optional(),
            countryCode: z.string().optional(),
            type: PhonesType$.optional(),
            modifyToken: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.phone === undefined ? null : { phone: v.phone }),
                ...(v.country === undefined ? null : { country: v.country }),
                ...(v.countryCode === undefined ? null : { countryCode: v.countryCode }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.modifyToken === undefined ? null : { modifyToken: v.modifyToken }),
            };
        });

    export type Outbound = {
        phone?: string | undefined;
        country?: string | undefined;
        countryCode?: string | undefined;
        type?: PhonesType | undefined;
        modifyToken?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Phones> = z
        .object({
            phone: z.string().optional(),
            country: z.string().optional(),
            countryCode: z.string().optional(),
            type: PhonesType$.optional(),
            modifyToken: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.phone === undefined ? null : { phone: v.phone }),
                ...(v.country === undefined ? null : { country: v.country }),
                ...(v.countryCode === undefined ? null : { countryCode: v.countryCode }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.modifyToken === undefined ? null : { modifyToken: v.modifyToken }),
            };
        });
}