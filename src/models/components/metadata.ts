/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { DataType, DataType$ } from "./datatype";
import { z } from "zod";

export type Metadata = {
    id?: string | undefined;
    key?: string | undefined;
    value?: string | undefined;
    type?: DataType | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    entityId?: string | undefined;
    entityType?: string | undefined;
};

/** @internal */
export namespace Metadata$ {
    export type Inbound = {
        id?: string | undefined;
        key?: string | undefined;
        value?: string | undefined;
        type?: DataType | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        entityId?: string | undefined;
        entityType?: string | undefined;
    };

    export const inboundSchema: z.ZodType<Metadata, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string().optional(),
            key: z.string().optional(),
            value: z.string().optional(),
            type: DataType$.optional(),
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
            entityId: z.string().optional(),
            entityType: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.key === undefined ? null : { key: v.key }),
                ...(v.value === undefined ? null : { value: v.value }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.entityId === undefined ? null : { entityId: v.entityId }),
                ...(v.entityType === undefined ? null : { entityType: v.entityType }),
            };
        });

    export type Outbound = {
        id?: string | undefined;
        key?: string | undefined;
        value?: string | undefined;
        type?: DataType | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        entityId?: string | undefined;
        entityType?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Metadata> = z
        .object({
            id: z.string().optional(),
            key: z.string().optional(),
            value: z.string().optional(),
            type: DataType$.optional(),
            createdAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            updatedAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            entityId: z.string().optional(),
            entityType: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.key === undefined ? null : { key: v.key }),
                ...(v.value === undefined ? null : { value: v.value }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.entityId === undefined ? null : { entityId: v.entityId }),
                ...(v.entityType === undefined ? null : { entityType: v.entityType }),
            };
        });
}
