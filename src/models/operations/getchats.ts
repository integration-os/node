/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

export type GetChatsRequest = {
    /**
     * The unique identifier of a Connected Account
     */
    connectionKey: string;
    limit?: string | undefined;
    cursor?: string | undefined;
    createdAfter?: string | undefined;
    createdBefore?: string | undefined;
    updatedAfter?: string | undefined;
    updatedBefore?: string | undefined;
};

export type GetChatsPagination = {
    cursor?: string | undefined;
    limit?: number | undefined;
};

export type GetChatsPassthrough = {};

export type GetChatsCache = {
    hit?: boolean | undefined;
    ttl?: number | undefined;
};

export type GetChatsMeta = {
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
    cache?: GetChatsCache | undefined;
};

/**
 * Successful response
 */
export type GetChatsResponseBody = {
    status?: string | undefined;
    statusCode?: number | undefined;
    unified?: Array<components.Chats> | undefined;
    pagination?: GetChatsPagination | undefined;
    passthrough?: GetChatsPassthrough | undefined;
    meta?: GetChatsMeta | undefined;
};

export type GetChatsResponse = {
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
    object?: GetChatsResponseBody | undefined;
};

/** @internal */
export namespace GetChatsRequest$ {
    export type Inbound = {
        "X-INTEGRATIONOS-CONNECTION-KEY": string;
        limit?: string | undefined;
        cursor?: string | undefined;
        createdAfter?: string | undefined;
        createdBefore?: string | undefined;
        updatedAfter?: string | undefined;
        updatedBefore?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetChatsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            "X-INTEGRATIONOS-CONNECTION-KEY": z.string(),
            limit: z.string().optional(),
            cursor: z.string().optional(),
            createdAfter: z.string().optional(),
            createdBefore: z.string().optional(),
            updatedAfter: z.string().optional(),
            updatedBefore: z.string().optional(),
        })
        .transform((v) => {
            return {
                connectionKey: v["X-INTEGRATIONOS-CONNECTION-KEY"],
                ...(v.limit === undefined ? null : { limit: v.limit }),
                ...(v.cursor === undefined ? null : { cursor: v.cursor }),
                ...(v.createdAfter === undefined ? null : { createdAfter: v.createdAfter }),
                ...(v.createdBefore === undefined ? null : { createdBefore: v.createdBefore }),
                ...(v.updatedAfter === undefined ? null : { updatedAfter: v.updatedAfter }),
                ...(v.updatedBefore === undefined ? null : { updatedBefore: v.updatedBefore }),
            };
        });

    export type Outbound = {
        "X-INTEGRATIONOS-CONNECTION-KEY": string;
        limit?: string | undefined;
        cursor?: string | undefined;
        createdAfter?: string | undefined;
        createdBefore?: string | undefined;
        updatedAfter?: string | undefined;
        updatedBefore?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetChatsRequest> = z
        .object({
            connectionKey: z.string(),
            limit: z.string().optional(),
            cursor: z.string().optional(),
            createdAfter: z.string().optional(),
            createdBefore: z.string().optional(),
            updatedAfter: z.string().optional(),
            updatedBefore: z.string().optional(),
        })
        .transform((v) => {
            return {
                "X-INTEGRATIONOS-CONNECTION-KEY": v.connectionKey,
                ...(v.limit === undefined ? null : { limit: v.limit }),
                ...(v.cursor === undefined ? null : { cursor: v.cursor }),
                ...(v.createdAfter === undefined ? null : { createdAfter: v.createdAfter }),
                ...(v.createdBefore === undefined ? null : { createdBefore: v.createdBefore }),
                ...(v.updatedAfter === undefined ? null : { updatedAfter: v.updatedAfter }),
                ...(v.updatedBefore === undefined ? null : { updatedBefore: v.updatedBefore }),
            };
        });
}

/** @internal */
export namespace GetChatsPagination$ {
    export type Inbound = {
        cursor?: string | undefined;
        limit?: number | undefined;
    };

    export const inboundSchema: z.ZodType<GetChatsPagination, z.ZodTypeDef, Inbound> = z
        .object({
            cursor: z.string().optional(),
            limit: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.cursor === undefined ? null : { cursor: v.cursor }),
                ...(v.limit === undefined ? null : { limit: v.limit }),
            };
        });

    export type Outbound = {
        cursor?: string | undefined;
        limit?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetChatsPagination> = z
        .object({
            cursor: z.string().optional(),
            limit: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.cursor === undefined ? null : { cursor: v.cursor }),
                ...(v.limit === undefined ? null : { limit: v.limit }),
            };
        });
}

/** @internal */
export namespace GetChatsPassthrough$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<GetChatsPassthrough, z.ZodTypeDef, Inbound> = z.object(
        {}
    );

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetChatsPassthrough> = z.object(
        {}
    );
}

/** @internal */
export namespace GetChatsCache$ {
    export type Inbound = {
        hit?: boolean | undefined;
        ttl?: number | undefined;
    };

    export const inboundSchema: z.ZodType<GetChatsCache, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetChatsCache> = z
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
export namespace GetChatsMeta$ {
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
        cache?: GetChatsCache$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetChatsMeta, z.ZodTypeDef, Inbound> = z
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
            cache: z.lazy(() => GetChatsCache$?.inboundSchema).optional(),
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
        cache?: GetChatsCache$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetChatsMeta> = z
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
            cache: z.lazy(() => GetChatsCache$?.outboundSchema).optional(),
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
export namespace GetChatsResponseBody$ {
    export type Inbound = {
        status?: string | undefined;
        statusCode?: number | undefined;
        unified?: Array<components.Chats$.Inbound> | undefined;
        pagination?: GetChatsPagination$.Inbound | undefined;
        passthrough?: GetChatsPassthrough$.Inbound | undefined;
        meta?: GetChatsMeta$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetChatsResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            status: z.string().optional(),
            statusCode: z.number().int().optional(),
            unified: z.array(components.Chats$?.inboundSchema).optional(),
            pagination: z.lazy(() => GetChatsPagination$?.inboundSchema).optional(),
            passthrough: z.lazy(() => GetChatsPassthrough$?.inboundSchema).optional(),
            meta: z.lazy(() => GetChatsMeta$?.inboundSchema).optional(),
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
        unified?: Array<components.Chats$.Outbound> | undefined;
        pagination?: GetChatsPagination$.Outbound | undefined;
        passthrough?: GetChatsPassthrough$.Outbound | undefined;
        meta?: GetChatsMeta$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetChatsResponseBody> = z
        .object({
            status: z.string().optional(),
            statusCode: z.number().int().optional(),
            unified: z.array(components.Chats$?.outboundSchema).optional(),
            pagination: z.lazy(() => GetChatsPagination$?.outboundSchema).optional(),
            passthrough: z.lazy(() => GetChatsPassthrough$?.outboundSchema).optional(),
            meta: z.lazy(() => GetChatsMeta$?.outboundSchema).optional(),
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
export namespace GetChatsResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: GetChatsResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetChatsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => GetChatsResponseBody$?.inboundSchema).optional(),
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
        object?: GetChatsResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetChatsResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => GetChatsResponseBody$?.outboundSchema).optional(),
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
