/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

export type GetTransactionsRequest = {
    /**
     * The unique identifier of a Connected Account
     */
    connectionKey: string;
    /**
     * Set to true to receive the exact API response from the connection platform in the passthrough object
     */
    xIntegrationosEnablePassthrough?: string | undefined;
    /**
     * A string of all headers to forward in the request to the 3rd-party platform
     */
    xIntegrationosPassthroughForward?: string | undefined;
    limit?: string | undefined;
    cursor?: string | undefined;
    createdAfter?: string | undefined;
    createdBefore?: string | undefined;
    updatedAfter?: string | undefined;
    updatedBefore?: string | undefined;
    /**
     * A string of all query parameters to forward in the request to the 3rd-party platform
     */
    passthroughForward?: string | undefined;
};

export type GetTransactionsPagination = {
    nextCursor?: string | undefined;
    previousCursor?: string | undefined;
    limit?: number | undefined;
};

export type GetTransactionsPassthrough = {};

export type GetTransactionsCache = {
    hit?: boolean | undefined;
    ttl?: number | undefined;
};

export type GetTransactionsMeta = {
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
    cache?: GetTransactionsCache | undefined;
};

/**
 * Successful response
 */
export type GetTransactionsResponseBody = {
    status?: string | undefined;
    statusCode?: number | undefined;
    unified?: Array<components.Transactions> | undefined;
    pagination?: GetTransactionsPagination | undefined;
    passthrough?: GetTransactionsPassthrough | undefined;
    meta?: GetTransactionsMeta | undefined;
};

export type GetTransactionsResponse = {
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
    object?: GetTransactionsResponseBody | undefined;
};

/** @internal */
export namespace GetTransactionsRequest$ {
    export type Inbound = {
        "X-INTEGRATIONOS-CONNECTION-KEY": string;
        "X-INTEGRATIONOS-ENABLE-PASSTHROUGH"?: string | undefined;
        "X-INTEGRATIONOS-PASSTHROUGH-FORWARD"?: string | undefined;
        limit?: string | undefined;
        cursor?: string | undefined;
        createdAfter?: string | undefined;
        createdBefore?: string | undefined;
        updatedAfter?: string | undefined;
        updatedBefore?: string | undefined;
        passthroughForward?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetTransactionsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            "X-INTEGRATIONOS-CONNECTION-KEY": z.string(),
            "X-INTEGRATIONOS-ENABLE-PASSTHROUGH": z.string().optional(),
            "X-INTEGRATIONOS-PASSTHROUGH-FORWARD": z.string().optional(),
            limit: z.string().optional(),
            cursor: z.string().optional(),
            createdAfter: z.string().optional(),
            createdBefore: z.string().optional(),
            updatedAfter: z.string().optional(),
            updatedBefore: z.string().optional(),
            passthroughForward: z.string().optional(),
        })
        .transform((v) => {
            return {
                connectionKey: v["X-INTEGRATIONOS-CONNECTION-KEY"],
                ...(v["X-INTEGRATIONOS-ENABLE-PASSTHROUGH"] === undefined
                    ? null
                    : { xIntegrationosEnablePassthrough: v["X-INTEGRATIONOS-ENABLE-PASSTHROUGH"] }),
                ...(v["X-INTEGRATIONOS-PASSTHROUGH-FORWARD"] === undefined
                    ? null
                    : {
                        xIntegrationosPassthroughForward:
                            v["X-INTEGRATIONOS-PASSTHROUGH-FORWARD"],
                    }),
                ...(v.limit === undefined ? null : { limit: v.limit }),
                ...(v.cursor === undefined ? null : { cursor: v.cursor }),
                ...(v.createdAfter === undefined ? null : { createdAfter: v.createdAfter }),
                ...(v.createdBefore === undefined ? null : { createdBefore: v.createdBefore }),
                ...(v.updatedAfter === undefined ? null : { updatedAfter: v.updatedAfter }),
                ...(v.updatedBefore === undefined ? null : { updatedBefore: v.updatedBefore }),
                ...(v.passthroughForward === undefined
                    ? null
                    : { passthroughForward: v.passthroughForward }),
            };
        });

    export type Outbound = {
        "X-INTEGRATIONOS-CONNECTION-KEY": string;
        "X-INTEGRATIONOS-ENABLE-PASSTHROUGH"?: string | undefined;
        "X-INTEGRATIONOS-PASSTHROUGH-FORWARD"?: string | undefined;
        limit?: string | undefined;
        cursor?: string | undefined;
        createdAfter?: string | undefined;
        createdBefore?: string | undefined;
        updatedAfter?: string | undefined;
        updatedBefore?: string | undefined;
        passthroughForward?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTransactionsRequest> = z
        .object({
            connectionKey: z.string(),
            xIntegrationosEnablePassthrough: z.string().optional(),
            xIntegrationosPassthroughForward: z.string().optional(),
            limit: z.string().optional(),
            cursor: z.string().optional(),
            createdAfter: z.string().optional(),
            createdBefore: z.string().optional(),
            updatedAfter: z.string().optional(),
            updatedBefore: z.string().optional(),
            passthroughForward: z.string().optional(),
        })
        .transform((v) => {
            return {
                "X-INTEGRATIONOS-CONNECTION-KEY": v.connectionKey,
                ...(v.xIntegrationosEnablePassthrough === undefined
                    ? null
                    : { "X-INTEGRATIONOS-ENABLE-PASSTHROUGH": v.xIntegrationosEnablePassthrough }),
                ...(v.xIntegrationosPassthroughForward === undefined
                    ? null
                    : {
                        "X-INTEGRATIONOS-PASSTHROUGH-FORWARD": v.xIntegrationosPassthroughForward,
                    }),
                ...(v.limit === undefined ? null : { limit: v.limit }),
                ...(v.cursor === undefined ? null : { cursor: v.cursor }),
                ...(v.createdAfter === undefined ? null : { createdAfter: v.createdAfter }),
                ...(v.createdBefore === undefined ? null : { createdBefore: v.createdBefore }),
                ...(v.updatedAfter === undefined ? null : { updatedAfter: v.updatedAfter }),
                ...(v.updatedBefore === undefined ? null : { updatedBefore: v.updatedBefore }),
                ...(v.passthroughForward === undefined
                    ? null
                    : { passthroughForward: v.passthroughForward }),
            };
        });
}

/** @internal */
export namespace GetTransactionsPagination$ {
    export type Inbound = {
        nextCursor?: string | undefined;
        previousCursor?: string | undefined;
        limit?: number | undefined;
    };

    export const inboundSchema: z.ZodType<GetTransactionsPagination, z.ZodTypeDef, Inbound> = z
        .object({
            nextCursor: z.string().optional(),
            previousCursor: z.string().optional(),
            limit: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.nextCursor === undefined ? null : { nextCursor: v.nextCursor }),
                ...(v.previousCursor === undefined ? null : { previousCursor: v.previousCursor }),
                ...(v.limit === undefined ? null : { limit: v.limit }),
            };
        });

    export type Outbound = {
        nextCursor?: string | undefined;
        previousCursor?: string | undefined;
        limit?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTransactionsPagination> = z
        .object({
            nextCursor: z.string().optional(),
            previousCursor: z.string().optional(),
            limit: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.nextCursor === undefined ? null : { nextCursor: v.nextCursor }),
                ...(v.previousCursor === undefined ? null : { previousCursor: v.previousCursor }),
                ...(v.limit === undefined ? null : { limit: v.limit }),
            };
        });
}

/** @internal */
export namespace GetTransactionsPassthrough$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<GetTransactionsPassthrough, z.ZodTypeDef, Inbound> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTransactionsPassthrough> =
        z.object({});
}

/** @internal */
export namespace GetTransactionsCache$ {
    export type Inbound = {
        hit?: boolean | undefined;
        ttl?: number | undefined;
    };

    export const inboundSchema: z.ZodType<GetTransactionsCache, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTransactionsCache> = z
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
export namespace GetTransactionsMeta$ {
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
        cache?: GetTransactionsCache$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetTransactionsMeta, z.ZodTypeDef, Inbound> = z
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
            cache: z.lazy(() => GetTransactionsCache$?.inboundSchema).optional(),
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
        cache?: GetTransactionsCache$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTransactionsMeta> = z
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
            cache: z.lazy(() => GetTransactionsCache$?.outboundSchema).optional(),
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
export namespace GetTransactionsResponseBody$ {
    export type Inbound = {
        status?: string | undefined;
        statusCode?: number | undefined;
        unified?: Array<components.Transactions$.Inbound> | undefined;
        pagination?: GetTransactionsPagination$.Inbound | undefined;
        passthrough?: GetTransactionsPassthrough$.Inbound | undefined;
        meta?: GetTransactionsMeta$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetTransactionsResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            status: z.string().optional(),
            statusCode: z.number().int().optional(),
            unified: z.array(components.Transactions$?.inboundSchema).optional(),
            pagination: z.lazy(() => GetTransactionsPagination$?.inboundSchema).optional(),
            passthrough: z.lazy(() => GetTransactionsPassthrough$?.inboundSchema).optional(),
            meta: z.lazy(() => GetTransactionsMeta$?.inboundSchema).optional(),
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
        unified?: Array<components.Transactions$.Outbound> | undefined;
        pagination?: GetTransactionsPagination$.Outbound | undefined;
        passthrough?: GetTransactionsPassthrough$.Outbound | undefined;
        meta?: GetTransactionsMeta$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTransactionsResponseBody> = z
        .object({
            status: z.string().optional(),
            statusCode: z.number().int().optional(),
            unified: z.array(components.Transactions$?.outboundSchema).optional(),
            pagination: z.lazy(() => GetTransactionsPagination$?.outboundSchema).optional(),
            passthrough: z.lazy(() => GetTransactionsPassthrough$?.outboundSchema).optional(),
            meta: z.lazy(() => GetTransactionsMeta$?.outboundSchema).optional(),
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
export namespace GetTransactionsResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: GetTransactionsResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetTransactionsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => GetTransactionsResponseBody$?.inboundSchema).optional(),
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
        object?: GetTransactionsResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTransactionsResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => GetTransactionsResponseBody$?.outboundSchema).optional(),
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
