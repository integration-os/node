/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

export type PostExpensesRequest = {
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
    /**
     * A string of all query parameters to forward in the request to the 3rd-party platform
     */
    passthroughForward?: string | undefined;
    expenses: components.Expenses;
};

export type PostExpensesPassthrough = {};

export type PostExpensesCache = {
    hit?: boolean | undefined;
    ttl?: number | undefined;
};

export type PostExpensesMeta = {
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
    cache?: PostExpensesCache | undefined;
};

/**
 * Successful response
 */
export type PostExpensesResponseBody = {
    status?: string | undefined;
    statusCode?: number | undefined;
    unified?: components.Expenses | undefined;
    passthrough?: PostExpensesPassthrough | undefined;
    meta?: PostExpensesMeta | undefined;
};

export type PostExpensesResponse = {
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
    object?: PostExpensesResponseBody | undefined;
};

/** @internal */
export namespace PostExpensesRequest$ {
    export type Inbound = {
        "X-INTEGRATIONOS-CONNECTION-KEY": string;
        "X-INTEGRATIONOS-ENABLE-PASSTHROUGH"?: string | undefined;
        "X-INTEGRATIONOS-PASSTHROUGH-FORWARD"?: string | undefined;
        passthroughForward?: string | undefined;
        Expenses: components.Expenses$.Inbound;
    };

    export const inboundSchema: z.ZodType<PostExpensesRequest, z.ZodTypeDef, Inbound> = z
        .object({
            "X-INTEGRATIONOS-CONNECTION-KEY": z.string(),
            "X-INTEGRATIONOS-ENABLE-PASSTHROUGH": z.string().optional(),
            "X-INTEGRATIONOS-PASSTHROUGH-FORWARD": z.string().optional(),
            passthroughForward: z.string().optional(),
            Expenses: components.Expenses$?.inboundSchema,
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
                ...(v.passthroughForward === undefined
                    ? null
                    : { passthroughForward: v.passthroughForward }),
                expenses: v.Expenses,
            };
        });

    export type Outbound = {
        "X-INTEGRATIONOS-CONNECTION-KEY": string;
        "X-INTEGRATIONOS-ENABLE-PASSTHROUGH"?: string | undefined;
        "X-INTEGRATIONOS-PASSTHROUGH-FORWARD"?: string | undefined;
        passthroughForward?: string | undefined;
        Expenses: components.Expenses$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PostExpensesRequest> = z
        .object({
            connectionKey: z.string(),
            xIntegrationosEnablePassthrough: z.string().optional(),
            xIntegrationosPassthroughForward: z.string().optional(),
            passthroughForward: z.string().optional(),
            expenses: components.Expenses$?.outboundSchema,
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
                ...(v.passthroughForward === undefined
                    ? null
                    : { passthroughForward: v.passthroughForward }),
                Expenses: v.expenses,
            };
        });
}

/** @internal */
export namespace PostExpensesPassthrough$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<PostExpensesPassthrough, z.ZodTypeDef, Inbound> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PostExpensesPassthrough> =
        z.object({});
}

/** @internal */
export namespace PostExpensesCache$ {
    export type Inbound = {
        hit?: boolean | undefined;
        ttl?: number | undefined;
    };

    export const inboundSchema: z.ZodType<PostExpensesCache, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PostExpensesCache> = z
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
export namespace PostExpensesMeta$ {
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
        cache?: PostExpensesCache$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<PostExpensesMeta, z.ZodTypeDef, Inbound> = z
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
            cache: z.lazy(() => PostExpensesCache$?.inboundSchema).optional(),
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
        cache?: PostExpensesCache$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PostExpensesMeta> = z
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
            cache: z.lazy(() => PostExpensesCache$?.outboundSchema).optional(),
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
export namespace PostExpensesResponseBody$ {
    export type Inbound = {
        status?: string | undefined;
        statusCode?: number | undefined;
        unified?: components.Expenses$.Inbound | undefined;
        passthrough?: PostExpensesPassthrough$.Inbound | undefined;
        meta?: PostExpensesMeta$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<PostExpensesResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            status: z.string().optional(),
            statusCode: z.number().int().optional(),
            unified: components.Expenses$?.inboundSchema.optional(),
            passthrough: z.lazy(() => PostExpensesPassthrough$?.inboundSchema).optional(),
            meta: z.lazy(() => PostExpensesMeta$?.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.statusCode === undefined ? null : { statusCode: v.statusCode }),
                ...(v.unified === undefined ? null : { unified: v.unified }),
                ...(v.passthrough === undefined ? null : { passthrough: v.passthrough }),
                ...(v.meta === undefined ? null : { meta: v.meta }),
            };
        });

    export type Outbound = {
        status?: string | undefined;
        statusCode?: number | undefined;
        unified?: components.Expenses$.Outbound | undefined;
        passthrough?: PostExpensesPassthrough$.Outbound | undefined;
        meta?: PostExpensesMeta$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PostExpensesResponseBody> = z
        .object({
            status: z.string().optional(),
            statusCode: z.number().int().optional(),
            unified: components.Expenses$?.outboundSchema.optional(),
            passthrough: z.lazy(() => PostExpensesPassthrough$?.outboundSchema).optional(),
            meta: z.lazy(() => PostExpensesMeta$?.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.statusCode === undefined ? null : { statusCode: v.statusCode }),
                ...(v.unified === undefined ? null : { unified: v.unified }),
                ...(v.passthrough === undefined ? null : { passthrough: v.passthrough }),
                ...(v.meta === undefined ? null : { meta: v.meta }),
            };
        });
}

/** @internal */
export namespace PostExpensesResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: PostExpensesResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<PostExpensesResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => PostExpensesResponseBody$?.inboundSchema).optional(),
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
        object?: PostExpensesResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PostExpensesResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => PostExpensesResponseBody$?.outboundSchema).optional(),
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
