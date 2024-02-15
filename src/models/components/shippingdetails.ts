/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Addresses, Addresses$ } from "./addresses";
import { z } from "zod";

export type ShippingDetails = {
    method?: string | undefined;
    estimatedDelivery?: Date | undefined;
    provider?: string | undefined;
    trackingNumber?: string | undefined;
    address?: Addresses | undefined;
    price?: number | undefined;
    insurance?: boolean | undefined;
    signatureRequired?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    active?: boolean | undefined;
    deleted?: boolean | undefined;
    modifyToken?: string | undefined;
};

/** @internal */
export namespace ShippingDetails$ {
    export type Inbound = {
        method?: string | undefined;
        estimatedDelivery?: string | undefined;
        provider?: string | undefined;
        trackingNumber?: string | undefined;
        address?: Addresses$.Inbound | undefined;
        price?: number | undefined;
        insurance?: boolean | undefined;
        signatureRequired?: boolean | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        active?: boolean | undefined;
        deleted?: boolean | undefined;
        modifyToken?: string | undefined;
    };

    export const inboundSchema: z.ZodType<ShippingDetails, z.ZodTypeDef, Inbound> = z
        .object({
            method: z.string().optional(),
            estimatedDelivery: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            provider: z.string().optional(),
            trackingNumber: z.string().optional(),
            address: Addresses$?.inboundSchema.optional(),
            price: z.number().optional(),
            insurance: z.boolean().optional(),
            signatureRequired: z.boolean().optional(),
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
            modifyToken: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.method === undefined ? null : { method: v.method }),
                ...(v.estimatedDelivery === undefined
                    ? null
                    : { estimatedDelivery: v.estimatedDelivery }),
                ...(v.provider === undefined ? null : { provider: v.provider }),
                ...(v.trackingNumber === undefined ? null : { trackingNumber: v.trackingNumber }),
                ...(v.address === undefined ? null : { address: v.address }),
                ...(v.price === undefined ? null : { price: v.price }),
                ...(v.insurance === undefined ? null : { insurance: v.insurance }),
                ...(v.signatureRequired === undefined
                    ? null
                    : { signatureRequired: v.signatureRequired }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.active === undefined ? null : { active: v.active }),
                ...(v.deleted === undefined ? null : { deleted: v.deleted }),
                ...(v.modifyToken === undefined ? null : { modifyToken: v.modifyToken }),
            };
        });

    export type Outbound = {
        method?: string | undefined;
        estimatedDelivery?: string | undefined;
        provider?: string | undefined;
        trackingNumber?: string | undefined;
        address?: Addresses$.Outbound | undefined;
        price?: number | undefined;
        insurance?: boolean | undefined;
        signatureRequired?: boolean | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        active?: boolean | undefined;
        deleted?: boolean | undefined;
        modifyToken?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ShippingDetails> = z
        .object({
            method: z.string().optional(),
            estimatedDelivery: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            provider: z.string().optional(),
            trackingNumber: z.string().optional(),
            address: Addresses$?.outboundSchema.optional(),
            price: z.number().optional(),
            insurance: z.boolean().optional(),
            signatureRequired: z.boolean().optional(),
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
            modifyToken: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.method === undefined ? null : { method: v.method }),
                ...(v.estimatedDelivery === undefined
                    ? null
                    : { estimatedDelivery: v.estimatedDelivery }),
                ...(v.provider === undefined ? null : { provider: v.provider }),
                ...(v.trackingNumber === undefined ? null : { trackingNumber: v.trackingNumber }),
                ...(v.address === undefined ? null : { address: v.address }),
                ...(v.price === undefined ? null : { price: v.price }),
                ...(v.insurance === undefined ? null : { insurance: v.insurance }),
                ...(v.signatureRequired === undefined
                    ? null
                    : { signatureRequired: v.signatureRequired }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.active === undefined ? null : { active: v.active }),
                ...(v.deleted === undefined ? null : { deleted: v.deleted }),
                ...(v.modifyToken === undefined ? null : { modifyToken: v.modifyToken }),
            };
        });
}
