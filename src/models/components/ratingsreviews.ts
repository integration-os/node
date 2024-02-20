/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Metadata, Metadata$ } from "./metadata";
import { ReviewApprovalStatus, ReviewApprovalStatus$ } from "./reviewapprovalstatus";
import { z } from "zod";

export type RatingsReviews = {
    id?: string | undefined;
    storeID?: string | undefined;
    rating?: number | undefined;
    review?: string | undefined;
    reviewerName?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    verifiedPurchase?: boolean | undefined;
    locale?: string | undefined;
    status?: ReviewApprovalStatus | undefined;
    metadata?: Metadata | undefined;
    active?: boolean | undefined;
    deleted?: boolean | undefined;
};

/** @internal */
export namespace RatingsReviews$ {
    export type Inbound = {
        id?: string | undefined;
        storeID?: string | undefined;
        rating?: number | undefined;
        review?: string | undefined;
        reviewerName?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        verifiedPurchase?: boolean | undefined;
        locale?: string | undefined;
        status?: ReviewApprovalStatus | undefined;
        metadata?: Metadata$.Inbound | undefined;
        active?: boolean | undefined;
        deleted?: boolean | undefined;
    };

    export const inboundSchema: z.ZodType<RatingsReviews, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string().optional(),
            storeID: z.string().optional(),
            rating: z.number().optional(),
            review: z.string().optional(),
            reviewerName: z.string().optional(),
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
            verifiedPurchase: z.boolean().optional(),
            locale: z.string().optional(),
            status: ReviewApprovalStatus$.optional(),
            metadata: Metadata$?.inboundSchema.optional(),
            active: z.boolean().optional(),
            deleted: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.storeID === undefined ? null : { storeID: v.storeID }),
                ...(v.rating === undefined ? null : { rating: v.rating }),
                ...(v.review === undefined ? null : { review: v.review }),
                ...(v.reviewerName === undefined ? null : { reviewerName: v.reviewerName }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.verifiedPurchase === undefined
                    ? null
                    : { verifiedPurchase: v.verifiedPurchase }),
                ...(v.locale === undefined ? null : { locale: v.locale }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.active === undefined ? null : { active: v.active }),
                ...(v.deleted === undefined ? null : { deleted: v.deleted }),
            };
        });

    export type Outbound = {
        id?: string | undefined;
        storeID?: string | undefined;
        rating?: number | undefined;
        review?: string | undefined;
        reviewerName?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        verifiedPurchase?: boolean | undefined;
        locale?: string | undefined;
        status?: ReviewApprovalStatus | undefined;
        metadata?: Metadata$.Outbound | undefined;
        active?: boolean | undefined;
        deleted?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RatingsReviews> = z
        .object({
            id: z.string().optional(),
            storeID: z.string().optional(),
            rating: z.number().optional(),
            review: z.string().optional(),
            reviewerName: z.string().optional(),
            createdAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            updatedAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            verifiedPurchase: z.boolean().optional(),
            locale: z.string().optional(),
            status: ReviewApprovalStatus$.optional(),
            metadata: Metadata$?.outboundSchema.optional(),
            active: z.boolean().optional(),
            deleted: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.storeID === undefined ? null : { storeID: v.storeID }),
                ...(v.rating === undefined ? null : { rating: v.rating }),
                ...(v.review === undefined ? null : { review: v.review }),
                ...(v.reviewerName === undefined ? null : { reviewerName: v.reviewerName }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.verifiedPurchase === undefined
                    ? null
                    : { verifiedPurchase: v.verifiedPurchase }),
                ...(v.locale === undefined ? null : { locale: v.locale }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.active === undefined ? null : { active: v.active }),
                ...(v.deleted === undefined ? null : { deleted: v.deleted }),
            };
        });
}
