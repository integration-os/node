/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Evidence, Evidence$ } from "./evidence";
import { Metadata, Metadata$ } from "./metadata";
import { z } from "zod";

export enum DisputesStatus {
    NeedsResponse = "needs-response",
    UnderReview = "under-review",
    ChargeRefunded = "charge-refunded",
    Won = "won",
    Lost = "lost",
    Closed = "closed",
}

export type Disputes = {
    id?: string | undefined;
    customerId?: string | undefined;
    amount?: number | undefined;
    currency?: string | undefined;
    reason?: string | undefined;
    status?: DisputesStatus | undefined;
    evidence?: Evidence | undefined;
    created?: Date | undefined;
    updated?: Date | undefined;
    chargeRefundable?: boolean | undefined;
    metadata?: Metadata | undefined;
    charge?: string | undefined;
    transactionId?: string | undefined;
    notes?: string | undefined;
    active?: boolean | undefined;
    deleted?: boolean | undefined;
    version?: string | undefined;
    modifyToken?: string | undefined;
};

/** @internal */
export const DisputesStatus$ = z.nativeEnum(DisputesStatus);

/** @internal */
export namespace Disputes$ {
    export type Inbound = {
        id?: string | undefined;
        customerId?: string | undefined;
        amount?: number | undefined;
        currency?: string | undefined;
        reason?: string | undefined;
        status?: DisputesStatus | undefined;
        evidence?: Evidence$.Inbound | undefined;
        created?: string | undefined;
        updated?: string | undefined;
        chargeRefundable?: boolean | undefined;
        metadata?: Metadata$.Inbound | undefined;
        charge?: string | undefined;
        transactionId?: string | undefined;
        notes?: string | undefined;
        active?: boolean | undefined;
        deleted?: boolean | undefined;
        version?: string | undefined;
        modifyToken?: string | undefined;
    };

    export const inboundSchema: z.ZodType<Disputes, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string().optional(),
            customerId: z.string().optional(),
            amount: z.number().optional(),
            currency: z.string().optional(),
            reason: z.string().optional(),
            status: DisputesStatus$.optional(),
            evidence: Evidence$?.inboundSchema.optional(),
            created: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            updated: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            chargeRefundable: z.boolean().optional(),
            metadata: Metadata$?.inboundSchema.optional(),
            charge: z.string().optional(),
            transactionId: z.string().optional(),
            notes: z.string().optional(),
            active: z.boolean().optional(),
            deleted: z.boolean().optional(),
            version: z.string().optional(),
            modifyToken: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.customerId === undefined ? null : { customerId: v.customerId }),
                ...(v.amount === undefined ? null : { amount: v.amount }),
                ...(v.currency === undefined ? null : { currency: v.currency }),
                ...(v.reason === undefined ? null : { reason: v.reason }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.evidence === undefined ? null : { evidence: v.evidence }),
                ...(v.created === undefined ? null : { created: v.created }),
                ...(v.updated === undefined ? null : { updated: v.updated }),
                ...(v.chargeRefundable === undefined
                    ? null
                    : { chargeRefundable: v.chargeRefundable }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.charge === undefined ? null : { charge: v.charge }),
                ...(v.transactionId === undefined ? null : { transactionId: v.transactionId }),
                ...(v.notes === undefined ? null : { notes: v.notes }),
                ...(v.active === undefined ? null : { active: v.active }),
                ...(v.deleted === undefined ? null : { deleted: v.deleted }),
                ...(v.version === undefined ? null : { version: v.version }),
                ...(v.modifyToken === undefined ? null : { modifyToken: v.modifyToken }),
            };
        });

    export type Outbound = {
        id?: string | undefined;
        customerId?: string | undefined;
        amount?: number | undefined;
        currency?: string | undefined;
        reason?: string | undefined;
        status?: DisputesStatus | undefined;
        evidence?: Evidence$.Outbound | undefined;
        created?: string | undefined;
        updated?: string | undefined;
        chargeRefundable?: boolean | undefined;
        metadata?: Metadata$.Outbound | undefined;
        charge?: string | undefined;
        transactionId?: string | undefined;
        notes?: string | undefined;
        active?: boolean | undefined;
        deleted?: boolean | undefined;
        version?: string | undefined;
        modifyToken?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Disputes> = z
        .object({
            id: z.string().optional(),
            customerId: z.string().optional(),
            amount: z.number().optional(),
            currency: z.string().optional(),
            reason: z.string().optional(),
            status: DisputesStatus$.optional(),
            evidence: Evidence$?.outboundSchema.optional(),
            created: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            updated: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            chargeRefundable: z.boolean().optional(),
            metadata: Metadata$?.outboundSchema.optional(),
            charge: z.string().optional(),
            transactionId: z.string().optional(),
            notes: z.string().optional(),
            active: z.boolean().optional(),
            deleted: z.boolean().optional(),
            version: z.string().optional(),
            modifyToken: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.customerId === undefined ? null : { customerId: v.customerId }),
                ...(v.amount === undefined ? null : { amount: v.amount }),
                ...(v.currency === undefined ? null : { currency: v.currency }),
                ...(v.reason === undefined ? null : { reason: v.reason }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.evidence === undefined ? null : { evidence: v.evidence }),
                ...(v.created === undefined ? null : { created: v.created }),
                ...(v.updated === undefined ? null : { updated: v.updated }),
                ...(v.chargeRefundable === undefined
                    ? null
                    : { chargeRefundable: v.chargeRefundable }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.charge === undefined ? null : { charge: v.charge }),
                ...(v.transactionId === undefined ? null : { transactionId: v.transactionId }),
                ...(v.notes === undefined ? null : { notes: v.notes }),
                ...(v.active === undefined ? null : { active: v.active }),
                ...(v.deleted === undefined ? null : { deleted: v.deleted }),
                ...(v.version === undefined ? null : { version: v.version }),
                ...(v.modifyToken === undefined ? null : { modifyToken: v.modifyToken }),
            };
        });
}