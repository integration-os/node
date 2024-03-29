/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Addresses, Addresses$ } from "./addresses";
import { CustomAttributes, CustomAttributes$ } from "./customattributes";
import { z } from "zod";

export type Vendors = {
    id?: string | undefined;
    companyName?: string | undefined;
    contactName?: string | undefined;
    contactEmail?: string | undefined;
    contactPhone?: string | undefined;
    address?: Addresses | undefined;
    customFields?: Array<CustomAttributes> | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    active?: boolean | undefined;
    deleted?: boolean | undefined;
    modifyToken?: string | undefined;
};

/** @internal */
export namespace Vendors$ {
    export type Inbound = {
        id?: string | undefined;
        companyName?: string | undefined;
        contactName?: string | undefined;
        contactEmail?: string | undefined;
        contactPhone?: string | undefined;
        address?: Addresses$.Inbound | undefined;
        customFields?: Array<CustomAttributes$.Inbound> | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        active?: boolean | undefined;
        deleted?: boolean | undefined;
        modifyToken?: string | undefined;
    };

    export const inboundSchema: z.ZodType<Vendors, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string().optional(),
            companyName: z.string().optional(),
            contactName: z.string().optional(),
            contactEmail: z.string().optional(),
            contactPhone: z.string().optional(),
            address: Addresses$?.inboundSchema.optional(),
            customFields: z.array(CustomAttributes$?.inboundSchema).optional(),
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
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.companyName === undefined ? null : { companyName: v.companyName }),
                ...(v.contactName === undefined ? null : { contactName: v.contactName }),
                ...(v.contactEmail === undefined ? null : { contactEmail: v.contactEmail }),
                ...(v.contactPhone === undefined ? null : { contactPhone: v.contactPhone }),
                ...(v.address === undefined ? null : { address: v.address }),
                ...(v.customFields === undefined ? null : { customFields: v.customFields }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.active === undefined ? null : { active: v.active }),
                ...(v.deleted === undefined ? null : { deleted: v.deleted }),
                ...(v.modifyToken === undefined ? null : { modifyToken: v.modifyToken }),
            };
        });

    export type Outbound = {
        id?: string | undefined;
        companyName?: string | undefined;
        contactName?: string | undefined;
        contactEmail?: string | undefined;
        contactPhone?: string | undefined;
        address?: Addresses$.Outbound | undefined;
        customFields?: Array<CustomAttributes$.Outbound> | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        active?: boolean | undefined;
        deleted?: boolean | undefined;
        modifyToken?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Vendors> = z
        .object({
            id: z.string().optional(),
            companyName: z.string().optional(),
            contactName: z.string().optional(),
            contactEmail: z.string().optional(),
            contactPhone: z.string().optional(),
            address: Addresses$?.outboundSchema.optional(),
            customFields: z.array(CustomAttributes$?.outboundSchema).optional(),
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
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.companyName === undefined ? null : { companyName: v.companyName }),
                ...(v.contactName === undefined ? null : { contactName: v.contactName }),
                ...(v.contactEmail === undefined ? null : { contactEmail: v.contactEmail }),
                ...(v.contactPhone === undefined ? null : { contactPhone: v.contactPhone }),
                ...(v.address === undefined ? null : { address: v.address }),
                ...(v.customFields === undefined ? null : { customFields: v.customFields }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.active === undefined ? null : { active: v.active }),
                ...(v.deleted === undefined ? null : { deleted: v.deleted }),
                ...(v.modifyToken === undefined ? null : { modifyToken: v.modifyToken }),
            };
        });
}
