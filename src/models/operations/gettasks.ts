/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

export type GetTasksRequest = {
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

export type GetTasksPagination = {
    nextCursor?: string | undefined;
    previousCursor?: string | undefined;
    pageSize?: number | undefined;
    limit?: number | undefined;
};

export type GetTasksPassthrough = {};

export type GetTasksCache = {
    hit?: boolean | undefined;
    ttl?: number | undefined;
};

export type GetTasksMeta = {
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
    cache?: GetTasksCache | undefined;
};

/**
 * Successful response
 */
export type GetTasksResponseBody = {
    status?: string | undefined;
    statusCode?: number | undefined;
    unified?: Array<components.Tasks> | undefined;
    pagination?: GetTasksPagination | undefined;
    passthrough?: GetTasksPassthrough | undefined;
    meta?: GetTasksMeta | undefined;
};

export type GetTasksResponse = {
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
    object?: GetTasksResponseBody | undefined;
};

/** @internal */
export namespace GetTasksRequest$ {
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

    export const inboundSchema: z.ZodType<GetTasksRequest, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTasksRequest> = z
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
export namespace GetTasksPagination$ {
    export type Inbound = {
        nextCursor?: string | undefined;
        previousCursor?: string | undefined;
        pageSize?: number | undefined;
        limit?: number | undefined;
    };

    export const inboundSchema: z.ZodType<GetTasksPagination, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTasksPagination> = z
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
}

/** @internal */
export namespace GetTasksPassthrough$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<GetTasksPassthrough, z.ZodTypeDef, Inbound> = z.object(
        {}
    );

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTasksPassthrough> = z.object(
        {}
    );
}

/** @internal */
export namespace GetTasksCache$ {
    export type Inbound = {
        hit?: boolean | undefined;
        ttl?: number | undefined;
    };

    export const inboundSchema: z.ZodType<GetTasksCache, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTasksCache> = z
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
export namespace GetTasksMeta$ {
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
        cache?: GetTasksCache$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetTasksMeta, z.ZodTypeDef, Inbound> = z
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
            cache: z.lazy(() => GetTasksCache$?.inboundSchema).optional(),
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
        cache?: GetTasksCache$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTasksMeta> = z
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
            cache: z.lazy(() => GetTasksCache$?.outboundSchema).optional(),
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
export namespace GetTasksResponseBody$ {
    export type Inbound = {
        status?: string | undefined;
        statusCode?: number | undefined;
        unified?: Array<components.Tasks$.Inbound> | undefined;
        pagination?: GetTasksPagination$.Inbound | undefined;
        passthrough?: GetTasksPassthrough$.Inbound | undefined;
        meta?: GetTasksMeta$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetTasksResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            status: z.string().optional(),
            statusCode: z.number().int().optional(),
            unified: z.array(components.Tasks$?.inboundSchema).optional(),
            pagination: z.lazy(() => GetTasksPagination$?.inboundSchema).optional(),
            passthrough: z.lazy(() => GetTasksPassthrough$?.inboundSchema).optional(),
            meta: z.lazy(() => GetTasksMeta$?.inboundSchema).optional(),
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
        unified?: Array<components.Tasks$.Outbound> | undefined;
        pagination?: GetTasksPagination$.Outbound | undefined;
        passthrough?: GetTasksPassthrough$.Outbound | undefined;
        meta?: GetTasksMeta$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTasksResponseBody> = z
        .object({
            status: z.string().optional(),
            statusCode: z.number().int().optional(),
            unified: z.array(components.Tasks$?.outboundSchema).optional(),
            pagination: z.lazy(() => GetTasksPagination$?.outboundSchema).optional(),
            passthrough: z.lazy(() => GetTasksPassthrough$?.outboundSchema).optional(),
            meta: z.lazy(() => GetTasksMeta$?.outboundSchema).optional(),
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
export namespace GetTasksResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: GetTasksResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetTasksResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => GetTasksResponseBody$?.inboundSchema).optional(),
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
        object?: GetTasksResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTasksResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => GetTasksResponseBody$?.outboundSchema).optional(),
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
