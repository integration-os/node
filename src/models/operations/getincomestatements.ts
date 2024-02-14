/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

export type GetIncomestatementsRequest = {
    /**
     * The unique identifier of a Connected Account
     */
    connectionKey: string;
    limit?: string | undefined;
    nextCursor?: string | undefined;
    previousCursor?: string | undefined;
    pageSize?: string | undefined;
    createdAfter?: string | undefined;
    createdBefore?: string | undefined;
    updatedAfter?: string | undefined;
    updatedBefore?: string | undefined;
};

export type GetIncomestatementsPagination = {
    nextCursor?: string | undefined;
    previousCursor?: string | undefined;
    pageSize?: number | undefined;
    limit?: number | undefined;
};

export type GetIncomestatementsPassthrough = {};

export type GetIncomestatementsCache = {
    hit?: boolean | undefined;
    ttl?: number | undefined;
};

export type GetIncomestatementsMeta = {
    timestamp?: number | undefined;
    latency?: number | undefined;
    platformRateLimitRemaining?: number | undefined;
    rateLimitRemaining?: number | undefined;
    totalTransactions?: number | undefined;
    hash?: string | undefined;
    transactionKey?: string | undefined;
    txn?: string | undefined;
    commonModel?: string | undefined;
    connectionKey?: string | undefined;
    platform?: string | undefined;
    platformVersion?: string | undefined;
    connectionDefinitionKey?: string | undefined;
    action?: string | undefined;
    commonModelVersion?: string | undefined;
    key?: string | undefined;
    heartbeats?: Array<string> | undefined;
    cache?: GetIncomestatementsCache | undefined;
};

/**
 * Successful response
 */
export type GetIncomestatementsResponseBody = {
    status?: string | undefined;
    statusCode?: number | undefined;
    unified?: Array<components.IncomeStatements> | undefined;
    pagination?: GetIncomestatementsPagination | undefined;
    passthrough?: GetIncomestatementsPassthrough | undefined;
    meta?: GetIncomestatementsMeta | undefined;
};

export type GetIncomestatementsResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * Successful response
     */
    object?: GetIncomestatementsResponseBody | undefined;
};

/** @internal */
export namespace GetIncomestatementsRequest$ {
    export type Inbound = {
        "X-INTEGRATIONOS-CONNECTION-KEY": string;
        limit?: string | undefined;
        nextCursor?: string | undefined;
        previousCursor?: string | undefined;
        pageSize?: string | undefined;
        createdAfter?: string | undefined;
        createdBefore?: string | undefined;
        updatedAfter?: string | undefined;
        updatedBefore?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetIncomestatementsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            "X-INTEGRATIONOS-CONNECTION-KEY": z.string(),
            limit: z.string().optional(),
            nextCursor: z.string().optional(),
            previousCursor: z.string().optional(),
            pageSize: z.string().optional(),
            createdAfter: z.string().optional(),
            createdBefore: z.string().optional(),
            updatedAfter: z.string().optional(),
            updatedBefore: z.string().optional(),
        })
        .transform((v) => {
            return {
                connectionKey: v["X-INTEGRATIONOS-CONNECTION-KEY"],
                ...(v.limit === undefined ? null : { limit: v.limit }),
                ...(v.nextCursor === undefined ? null : { nextCursor: v.nextCursor }),
                ...(v.previousCursor === undefined ? null : { previousCursor: v.previousCursor }),
                ...(v.pageSize === undefined ? null : { pageSize: v.pageSize }),
                ...(v.createdAfter === undefined ? null : { createdAfter: v.createdAfter }),
                ...(v.createdBefore === undefined ? null : { createdBefore: v.createdBefore }),
                ...(v.updatedAfter === undefined ? null : { updatedAfter: v.updatedAfter }),
                ...(v.updatedBefore === undefined ? null : { updatedBefore: v.updatedBefore }),
            };
        });

    export type Outbound = {
        "X-INTEGRATIONOS-CONNECTION-KEY": string;
        limit?: string | undefined;
        nextCursor?: string | undefined;
        previousCursor?: string | undefined;
        pageSize?: string | undefined;
        createdAfter?: string | undefined;
        createdBefore?: string | undefined;
        updatedAfter?: string | undefined;
        updatedBefore?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetIncomestatementsRequest> = z
        .object({
            connectionKey: z.string(),
            limit: z.string().optional(),
            nextCursor: z.string().optional(),
            previousCursor: z.string().optional(),
            pageSize: z.string().optional(),
            createdAfter: z.string().optional(),
            createdBefore: z.string().optional(),
            updatedAfter: z.string().optional(),
            updatedBefore: z.string().optional(),
        })
        .transform((v) => {
            return {
                "X-INTEGRATIONOS-CONNECTION-KEY": v.connectionKey,
                ...(v.limit === undefined ? null : { limit: v.limit }),
                ...(v.nextCursor === undefined ? null : { nextCursor: v.nextCursor }),
                ...(v.previousCursor === undefined ? null : { previousCursor: v.previousCursor }),
                ...(v.pageSize === undefined ? null : { pageSize: v.pageSize }),
                ...(v.createdAfter === undefined ? null : { createdAfter: v.createdAfter }),
                ...(v.createdBefore === undefined ? null : { createdBefore: v.createdBefore }),
                ...(v.updatedAfter === undefined ? null : { updatedAfter: v.updatedAfter }),
                ...(v.updatedBefore === undefined ? null : { updatedBefore: v.updatedBefore }),
            };
        });
}

/** @internal */
export namespace GetIncomestatementsPagination$ {
    export type Inbound = {
        nextCursor?: string | undefined;
        previousCursor?: string | undefined;
        pageSize?: number | undefined;
        limit?: number | undefined;
    };

    export const inboundSchema: z.ZodType<GetIncomestatementsPagination, z.ZodTypeDef, Inbound> = z
        .object({
            nextCursor: z.string().optional(),
            previousCursor: z.string().optional(),
            pageSize: z.number().int().optional(),
            limit: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.nextCursor === undefined ? null : { nextCursor: v.nextCursor }),
                ...(v.previousCursor === undefined ? null : { previousCursor: v.previousCursor }),
                ...(v.pageSize === undefined ? null : { pageSize: v.pageSize }),
                ...(v.limit === undefined ? null : { limit: v.limit }),
            };
        });

    export type Outbound = {
        nextCursor?: string | undefined;
        previousCursor?: string | undefined;
        pageSize?: number | undefined;
        limit?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetIncomestatementsPagination> =
        z
            .object({
                nextCursor: z.string().optional(),
                previousCursor: z.string().optional(),
                pageSize: z.number().int().optional(),
                limit: z.number().int().optional(),
            })
            .transform((v) => {
                return {
                    ...(v.nextCursor === undefined ? null : { nextCursor: v.nextCursor }),
                    ...(v.previousCursor === undefined
                        ? null
                        : { previousCursor: v.previousCursor }),
                    ...(v.pageSize === undefined ? null : { pageSize: v.pageSize }),
                    ...(v.limit === undefined ? null : { limit: v.limit }),
                };
            });
}

/** @internal */
export namespace GetIncomestatementsPassthrough$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<GetIncomestatementsPassthrough, z.ZodTypeDef, Inbound> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetIncomestatementsPassthrough> =
        z.object({});
}

/** @internal */
export namespace GetIncomestatementsCache$ {
    export type Inbound = {
        hit?: boolean | undefined;
        ttl?: number | undefined;
    };

    export const inboundSchema: z.ZodType<GetIncomestatementsCache, z.ZodTypeDef, Inbound> = z
        .object({
            hit: z.boolean().optional(),
            ttl: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.hit === undefined ? null : { hit: v.hit }),
                ...(v.ttl === undefined ? null : { ttl: v.ttl }),
            };
        });

    export type Outbound = {
        hit?: boolean | undefined;
        ttl?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetIncomestatementsCache> = z
        .object({
            hit: z.boolean().optional(),
            ttl: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.hit === undefined ? null : { hit: v.hit }),
                ...(v.ttl === undefined ? null : { ttl: v.ttl }),
            };
        });
}

/** @internal */
export namespace GetIncomestatementsMeta$ {
    export type Inbound = {
        timestamp?: number | undefined;
        latency?: number | undefined;
        platformRateLimitRemaining?: number | undefined;
        rateLimitRemaining?: number | undefined;
        totalTransactions?: number | undefined;
        hash?: string | undefined;
        transactionKey?: string | undefined;
        txn?: string | undefined;
        commonModel?: string | undefined;
        connectionKey?: string | undefined;
        platform?: string | undefined;
        platformVersion?: string | undefined;
        connectionDefinitionKey?: string | undefined;
        action?: string | undefined;
        commonModelVersion?: string | undefined;
        key?: string | undefined;
        heartbeats?: Array<string> | undefined;
        cache?: GetIncomestatementsCache$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetIncomestatementsMeta, z.ZodTypeDef, Inbound> = z
        .object({
            timestamp: z.number().int().optional(),
            latency: z.number().int().optional(),
            platformRateLimitRemaining: z.number().int().optional(),
            rateLimitRemaining: z.number().int().optional(),
            totalTransactions: z.number().int().optional(),
            hash: z.string().optional(),
            transactionKey: z.string().optional(),
            txn: z.string().optional(),
            commonModel: z.string().optional(),
            connectionKey: z.string().optional(),
            platform: z.string().optional(),
            platformVersion: z.string().optional(),
            connectionDefinitionKey: z.string().optional(),
            action: z.string().optional(),
            commonModelVersion: z.string().optional(),
            key: z.string().optional(),
            heartbeats: z.array(z.string()).optional(),
            cache: z.lazy(() => GetIncomestatementsCache$?.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.timestamp === undefined ? null : { timestamp: v.timestamp }),
                ...(v.latency === undefined ? null : { latency: v.latency }),
                ...(v.platformRateLimitRemaining === undefined
                    ? null
                    : { platformRateLimitRemaining: v.platformRateLimitRemaining }),
                ...(v.rateLimitRemaining === undefined
                    ? null
                    : { rateLimitRemaining: v.rateLimitRemaining }),
                ...(v.totalTransactions === undefined
                    ? null
                    : { totalTransactions: v.totalTransactions }),
                ...(v.hash === undefined ? null : { hash: v.hash }),
                ...(v.transactionKey === undefined ? null : { transactionKey: v.transactionKey }),
                ...(v.txn === undefined ? null : { txn: v.txn }),
                ...(v.commonModel === undefined ? null : { commonModel: v.commonModel }),
                ...(v.connectionKey === undefined ? null : { connectionKey: v.connectionKey }),
                ...(v.platform === undefined ? null : { platform: v.platform }),
                ...(v.platformVersion === undefined
                    ? null
                    : { platformVersion: v.platformVersion }),
                ...(v.connectionDefinitionKey === undefined
                    ? null
                    : { connectionDefinitionKey: v.connectionDefinitionKey }),
                ...(v.action === undefined ? null : { action: v.action }),
                ...(v.commonModelVersion === undefined
                    ? null
                    : { commonModelVersion: v.commonModelVersion }),
                ...(v.key === undefined ? null : { key: v.key }),
                ...(v.heartbeats === undefined ? null : { heartbeats: v.heartbeats }),
                ...(v.cache === undefined ? null : { cache: v.cache }),
            };
        });

    export type Outbound = {
        timestamp?: number | undefined;
        latency?: number | undefined;
        platformRateLimitRemaining?: number | undefined;
        rateLimitRemaining?: number | undefined;
        totalTransactions?: number | undefined;
        hash?: string | undefined;
        transactionKey?: string | undefined;
        txn?: string | undefined;
        commonModel?: string | undefined;
        connectionKey?: string | undefined;
        platform?: string | undefined;
        platformVersion?: string | undefined;
        connectionDefinitionKey?: string | undefined;
        action?: string | undefined;
        commonModelVersion?: string | undefined;
        key?: string | undefined;
        heartbeats?: Array<string> | undefined;
        cache?: GetIncomestatementsCache$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetIncomestatementsMeta> = z
        .object({
            timestamp: z.number().int().optional(),
            latency: z.number().int().optional(),
            platformRateLimitRemaining: z.number().int().optional(),
            rateLimitRemaining: z.number().int().optional(),
            totalTransactions: z.number().int().optional(),
            hash: z.string().optional(),
            transactionKey: z.string().optional(),
            txn: z.string().optional(),
            commonModel: z.string().optional(),
            connectionKey: z.string().optional(),
            platform: z.string().optional(),
            platformVersion: z.string().optional(),
            connectionDefinitionKey: z.string().optional(),
            action: z.string().optional(),
            commonModelVersion: z.string().optional(),
            key: z.string().optional(),
            heartbeats: z.array(z.string()).optional(),
            cache: z.lazy(() => GetIncomestatementsCache$?.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.timestamp === undefined ? null : { timestamp: v.timestamp }),
                ...(v.latency === undefined ? null : { latency: v.latency }),
                ...(v.platformRateLimitRemaining === undefined
                    ? null
                    : { platformRateLimitRemaining: v.platformRateLimitRemaining }),
                ...(v.rateLimitRemaining === undefined
                    ? null
                    : { rateLimitRemaining: v.rateLimitRemaining }),
                ...(v.totalTransactions === undefined
                    ? null
                    : { totalTransactions: v.totalTransactions }),
                ...(v.hash === undefined ? null : { hash: v.hash }),
                ...(v.transactionKey === undefined ? null : { transactionKey: v.transactionKey }),
                ...(v.txn === undefined ? null : { txn: v.txn }),
                ...(v.commonModel === undefined ? null : { commonModel: v.commonModel }),
                ...(v.connectionKey === undefined ? null : { connectionKey: v.connectionKey }),
                ...(v.platform === undefined ? null : { platform: v.platform }),
                ...(v.platformVersion === undefined
                    ? null
                    : { platformVersion: v.platformVersion }),
                ...(v.connectionDefinitionKey === undefined
                    ? null
                    : { connectionDefinitionKey: v.connectionDefinitionKey }),
                ...(v.action === undefined ? null : { action: v.action }),
                ...(v.commonModelVersion === undefined
                    ? null
                    : { commonModelVersion: v.commonModelVersion }),
                ...(v.key === undefined ? null : { key: v.key }),
                ...(v.heartbeats === undefined ? null : { heartbeats: v.heartbeats }),
                ...(v.cache === undefined ? null : { cache: v.cache }),
            };
        });
}

/** @internal */
export namespace GetIncomestatementsResponseBody$ {
    export type Inbound = {
        status?: string | undefined;
        statusCode?: number | undefined;
        unified?: Array<components.IncomeStatements$.Inbound> | undefined;
        pagination?: GetIncomestatementsPagination$.Inbound | undefined;
        passthrough?: GetIncomestatementsPassthrough$.Inbound | undefined;
        meta?: GetIncomestatementsMeta$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetIncomestatementsResponseBody, z.ZodTypeDef, Inbound> =
        z
            .object({
                status: z.string().optional(),
                statusCode: z.number().int().optional(),
                unified: z.array(components.IncomeStatements$?.inboundSchema).optional(),
                pagination: z.lazy(() => GetIncomestatementsPagination$?.inboundSchema).optional(),
                passthrough: z.lazy(() => GetIncomestatementsPassthrough$?.inboundSchema).optional(),
                meta: z.lazy(() => GetIncomestatementsMeta$?.inboundSchema).optional(),
            })
            .transform((v) => {
                return {
                    ...(v.status === undefined ? null : { status: v.status }),
                    ...(v.statusCode === undefined ? null : { statusCode: v.statusCode }),
                    ...(v.unified === undefined ? null : { unified: v.unified }),
                    ...(v.pagination === undefined ? null : { pagination: v.pagination }),
                    ...(v.passthrough === undefined ? null : { passthrough: v.passthrough }),
                    ...(v.meta === undefined ? null : { meta: v.meta }),
                };
            });

    export type Outbound = {
        status?: string | undefined;
        statusCode?: number | undefined;
        unified?: Array<components.IncomeStatements$.Outbound> | undefined;
        pagination?: GetIncomestatementsPagination$.Outbound | undefined;
        passthrough?: GetIncomestatementsPassthrough$.Outbound | undefined;
        meta?: GetIncomestatementsMeta$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetIncomestatementsResponseBody
    > = z
        .object({
            status: z.string().optional(),
            statusCode: z.number().int().optional(),
            unified: z.array(components.IncomeStatements$?.outboundSchema).optional(),
            pagination: z.lazy(() => GetIncomestatementsPagination$?.outboundSchema).optional(),
            passthrough: z.lazy(() => GetIncomestatementsPassthrough$?.outboundSchema).optional(),
            meta: z.lazy(() => GetIncomestatementsMeta$?.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.statusCode === undefined ? null : { statusCode: v.statusCode }),
                ...(v.unified === undefined ? null : { unified: v.unified }),
                ...(v.pagination === undefined ? null : { pagination: v.pagination }),
                ...(v.passthrough === undefined ? null : { passthrough: v.passthrough }),
                ...(v.meta === undefined ? null : { meta: v.meta }),
            };
        });
}

/** @internal */
export namespace GetIncomestatementsResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: GetIncomestatementsResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetIncomestatementsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => GetIncomestatementsResponseBody$?.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        object?: GetIncomestatementsResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetIncomestatementsResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => GetIncomestatementsResponseBody$?.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}