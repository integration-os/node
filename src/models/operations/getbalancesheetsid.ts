/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

export type GetBalanceSheetsIdRequest = {
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
     * The id of the model
     */
    id: string;
    /**
     * A string of all query parameters to forward in the request to the 3rd-party platform
     */
    passthroughForward?: string | undefined;
};

export type GetBalanceSheetsIdPassthrough = {};

export type GetBalanceSheetsIdCache = {
    hit?: boolean | undefined;
    ttl?: number | undefined;
};

export type GetBalanceSheetsIdMeta = {
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
    cache?: GetBalanceSheetsIdCache | undefined;
};

/**
 * Successful response
 */
export type GetBalanceSheetsIdResponseBody = {
    status?: string | undefined;
    statusCode?: number | undefined;
    unified?: components.BalanceSheets | undefined;
    passthrough?: GetBalanceSheetsIdPassthrough | undefined;
    meta?: GetBalanceSheetsIdMeta | undefined;
};

export type GetBalanceSheetsIdResponse = {
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
    object?: GetBalanceSheetsIdResponseBody | undefined;
};

/** @internal */
export namespace GetBalanceSheetsIdRequest$ {
    export type Inbound = {
        "X-INTEGRATIONOS-CONNECTION-KEY": string;
        "X-INTEGRATIONOS-ENABLE-PASSTHROUGH"?: string | undefined;
        "X-INTEGRATIONOS-PASSTHROUGH-FORWARD"?: string | undefined;
        id: string;
        passthroughForward?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetBalanceSheetsIdRequest, z.ZodTypeDef, Inbound> = z
        .object({
            "X-INTEGRATIONOS-CONNECTION-KEY": z.string(),
            "X-INTEGRATIONOS-ENABLE-PASSTHROUGH": z.string().optional(),
            "X-INTEGRATIONOS-PASSTHROUGH-FORWARD": z.string().optional(),
            id: z.string(),
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
                id: v.id,
                ...(v.passthroughForward === undefined
                    ? null
                    : { passthroughForward: v.passthroughForward }),
            };
        });

    export type Outbound = {
        "X-INTEGRATIONOS-CONNECTION-KEY": string;
        "X-INTEGRATIONOS-ENABLE-PASSTHROUGH"?: string | undefined;
        "X-INTEGRATIONOS-PASSTHROUGH-FORWARD"?: string | undefined;
        id: string;
        passthroughForward?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetBalanceSheetsIdRequest> = z
        .object({
            connectionKey: z.string(),
            xIntegrationosEnablePassthrough: z.string().optional(),
            xIntegrationosPassthroughForward: z.string().optional(),
            id: z.string(),
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
                id: v.id,
                ...(v.passthroughForward === undefined
                    ? null
                    : { passthroughForward: v.passthroughForward }),
            };
        });
}

/** @internal */
export namespace GetBalanceSheetsIdPassthrough$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<GetBalanceSheetsIdPassthrough, z.ZodTypeDef, Inbound> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetBalanceSheetsIdPassthrough> =
        z.object({});
}

/** @internal */
export namespace GetBalanceSheetsIdCache$ {
    export type Inbound = {
        hit?: boolean | undefined;
        ttl?: number | undefined;
    };

    export const inboundSchema: z.ZodType<GetBalanceSheetsIdCache, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetBalanceSheetsIdCache> = z
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
export namespace GetBalanceSheetsIdMeta$ {
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
        cache?: GetBalanceSheetsIdCache$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetBalanceSheetsIdMeta, z.ZodTypeDef, Inbound> = z
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
            cache: z.lazy(() => GetBalanceSheetsIdCache$?.inboundSchema).optional(),
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
        cache?: GetBalanceSheetsIdCache$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetBalanceSheetsIdMeta> = z
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
            cache: z.lazy(() => GetBalanceSheetsIdCache$?.outboundSchema).optional(),
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
export namespace GetBalanceSheetsIdResponseBody$ {
    export type Inbound = {
        status?: string | undefined;
        statusCode?: number | undefined;
        unified?: components.BalanceSheets$.Inbound | undefined;
        passthrough?: GetBalanceSheetsIdPassthrough$.Inbound | undefined;
        meta?: GetBalanceSheetsIdMeta$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetBalanceSheetsIdResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            status: z.string().optional(),
            statusCode: z.number().int().optional(),
            unified: components.BalanceSheets$?.inboundSchema.optional(),
            passthrough: z.lazy(() => GetBalanceSheetsIdPassthrough$?.inboundSchema).optional(),
            meta: z.lazy(() => GetBalanceSheetsIdMeta$?.inboundSchema).optional(),
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
        unified?: components.BalanceSheets$.Outbound | undefined;
        passthrough?: GetBalanceSheetsIdPassthrough$.Outbound | undefined;
        meta?: GetBalanceSheetsIdMeta$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetBalanceSheetsIdResponseBody> =
        z
            .object({
                status: z.string().optional(),
                statusCode: z.number().int().optional(),
                unified: components.BalanceSheets$?.outboundSchema.optional(),
                passthrough: z.lazy(() => GetBalanceSheetsIdPassthrough$?.outboundSchema).optional(),
                meta: z.lazy(() => GetBalanceSheetsIdMeta$?.outboundSchema).optional(),
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
export namespace GetBalanceSheetsIdResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: GetBalanceSheetsIdResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetBalanceSheetsIdResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => GetBalanceSheetsIdResponseBody$?.inboundSchema).optional(),
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
        object?: GetBalanceSheetsIdResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetBalanceSheetsIdResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => GetBalanceSheetsIdResponseBody$?.outboundSchema).optional(),
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
