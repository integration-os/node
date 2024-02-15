/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

export type GetOrdersRequest = {
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

export type GetOrdersPagination = {
    nextCursor?: string | undefined;
    previousCursor?: string | undefined;
    pageSize?: number | undefined;
    limit?: number | undefined;
};

export type GetOrdersPassthrough = {};

export type GetOrdersCache = {
    hit?: boolean | undefined;
    ttl?: number | undefined;
};

export type GetOrdersMeta = {
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
    cache?: GetOrdersCache | undefined;
};

/**
 * Successful response
 */
export type GetOrdersResponseBody = {
    status?: string | undefined;
    statusCode?: number | undefined;
    unified?: Array<components.Orders> | undefined;
    pagination?: GetOrdersPagination | undefined;
    passthrough?: GetOrdersPassthrough | undefined;
    meta?: GetOrdersMeta | undefined;
};

export type GetOrdersResponse = {
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
    object?: GetOrdersResponseBody | undefined;
};

/** @internal */
export namespace GetOrdersRequest$ {
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

    export const inboundSchema: z.ZodType<GetOrdersRequest, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetOrdersRequest> = z
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
export namespace GetOrdersPagination$ {
    export type Inbound = {
        nextCursor?: string | undefined;
        previousCursor?: string | undefined;
        pageSize?: number | undefined;
        limit?: number | undefined;
    };

    export const inboundSchema: z.ZodType<GetOrdersPagination, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetOrdersPagination> = z
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
export namespace GetOrdersPassthrough$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<GetOrdersPassthrough, z.ZodTypeDef, Inbound> = z.object(
        {}
    );

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetOrdersPassthrough> = z.object(
        {}
    );
}

/** @internal */
export namespace GetOrdersCache$ {
    export type Inbound = {
        hit?: boolean | undefined;
        ttl?: number | undefined;
    };

    export const inboundSchema: z.ZodType<GetOrdersCache, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetOrdersCache> = z
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
export namespace GetOrdersMeta$ {
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
        cache?: GetOrdersCache$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetOrdersMeta, z.ZodTypeDef, Inbound> = z
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
            cache: z.lazy(() => GetOrdersCache$?.inboundSchema).optional(),
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
        cache?: GetOrdersCache$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetOrdersMeta> = z
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
            cache: z.lazy(() => GetOrdersCache$?.outboundSchema).optional(),
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
export namespace GetOrdersResponseBody$ {
    export type Inbound = {
        status?: string | undefined;
        statusCode?: number | undefined;
        unified?: Array<components.Orders$.Inbound> | undefined;
        pagination?: GetOrdersPagination$.Inbound | undefined;
        passthrough?: GetOrdersPassthrough$.Inbound | undefined;
        meta?: GetOrdersMeta$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetOrdersResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            status: z.string().optional(),
            statusCode: z.number().int().optional(),
            unified: z.array(components.Orders$?.inboundSchema).optional(),
            pagination: z.lazy(() => GetOrdersPagination$?.inboundSchema).optional(),
            passthrough: z.lazy(() => GetOrdersPassthrough$?.inboundSchema).optional(),
            meta: z.lazy(() => GetOrdersMeta$?.inboundSchema).optional(),
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
        unified?: Array<components.Orders$.Outbound> | undefined;
        pagination?: GetOrdersPagination$.Outbound | undefined;
        passthrough?: GetOrdersPassthrough$.Outbound | undefined;
        meta?: GetOrdersMeta$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetOrdersResponseBody> = z
        .object({
            status: z.string().optional(),
            statusCode: z.number().int().optional(),
            unified: z.array(components.Orders$?.outboundSchema).optional(),
            pagination: z.lazy(() => GetOrdersPagination$?.outboundSchema).optional(),
            passthrough: z.lazy(() => GetOrdersPassthrough$?.outboundSchema).optional(),
            meta: z.lazy(() => GetOrdersMeta$?.outboundSchema).optional(),
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
export namespace GetOrdersResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: GetOrdersResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetOrdersResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => GetOrdersResponseBody$?.inboundSchema).optional(),
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
        object?: GetOrdersResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetOrdersResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => GetOrdersResponseBody$?.outboundSchema).optional(),
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
