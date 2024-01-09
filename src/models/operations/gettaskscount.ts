/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type GetTasksCountRequest = {
    /**
     * IntegrationOS API key
     */
    xIntegrationosSecret: string;
    /**
     * The unique identifier of a Connected Account
     */
    xIntegrationosConnectionKey: string;
};

export enum GetTasksCountStatusCode {
    TwoHundred = 200,
    FourHundred = 400,
    FiveHundred = 500,
}

export type GetTasksCountUnified = {
    count?: number | undefined;
};

export type GetTasksCountPassthrough = {};

export type GetTasksCountCache = {
    hit?: boolean | undefined;
    ttl?: number | undefined;
    key?: string | undefined;
};

export type GetTasksCountMeta = {
    timestamp?: number | undefined;
    latency?: number | undefined;
    platformRateLimitRemaining?: number | undefined;
    rateLimitRemaining?: number | undefined;
    cache?: GetTasksCountCache | undefined;
    transactionKey?: string | undefined;
    txn?: string | undefined;
    platform?: string | undefined;
    platformVersion?: string | undefined;
    connectionDefinitionKey?: string | undefined;
    action?: string | undefined;
    commonModel?: string | undefined;
    commonModelVersion?: string | undefined;
    connectionKey?: string | undefined;
    hash?: string | undefined;
    heartbeats?: Array<string> | undefined;
    totalTransactions?: number | undefined;
};

/**
 * Successful response
 */
export type GetTasksCountResponseBody = {
    status?: string | undefined;
    statusCode?: GetTasksCountStatusCode | undefined;
    unified?: GetTasksCountUnified | undefined;
    passthrough?: GetTasksCountPassthrough | undefined;
    meta?: GetTasksCountMeta | undefined;
};

export type GetTasksCountResponse = {
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
    object?: GetTasksCountResponseBody | undefined;
};

/** @internal */
export namespace GetTasksCountRequest$ {
    export type Inbound = {
        "X-INTEGRATIONOS-SECRET": string;
        "X-INTEGRATIONOS-CONNECTION-KEY": string;
    };

    export const inboundSchema: z.ZodType<GetTasksCountRequest, z.ZodTypeDef, Inbound> = z
        .object({
            "X-INTEGRATIONOS-SECRET": z.string(),
            "X-INTEGRATIONOS-CONNECTION-KEY": z.string(),
        })
        .transform((v) => {
            return {
                xIntegrationosSecret: v["X-INTEGRATIONOS-SECRET"],
                xIntegrationosConnectionKey: v["X-INTEGRATIONOS-CONNECTION-KEY"],
            };
        });

    export type Outbound = {
        "X-INTEGRATIONOS-SECRET": string;
        "X-INTEGRATIONOS-CONNECTION-KEY": string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTasksCountRequest> = z
        .object({
            xIntegrationosSecret: z.string(),
            xIntegrationosConnectionKey: z.string(),
        })
        .transform((v) => {
            return {
                "X-INTEGRATIONOS-SECRET": v.xIntegrationosSecret,
                "X-INTEGRATIONOS-CONNECTION-KEY": v.xIntegrationosConnectionKey,
            };
        });
}

/** @internal */
export const GetTasksCountStatusCode$ = z.nativeEnum(GetTasksCountStatusCode);

/** @internal */
export namespace GetTasksCountUnified$ {
    export type Inbound = {
        count?: number | undefined;
    };

    export const inboundSchema: z.ZodType<GetTasksCountUnified, z.ZodTypeDef, Inbound> = z
        .object({
            count: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.count === undefined ? null : { count: v.count }),
            };
        });

    export type Outbound = {
        count?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTasksCountUnified> = z
        .object({
            count: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.count === undefined ? null : { count: v.count }),
            };
        });
}

/** @internal */
export namespace GetTasksCountPassthrough$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<GetTasksCountPassthrough, z.ZodTypeDef, Inbound> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTasksCountPassthrough> =
        z.object({});
}

/** @internal */
export namespace GetTasksCountCache$ {
    export type Inbound = {
        hit?: boolean | undefined;
        ttl?: number | undefined;
        key?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetTasksCountCache, z.ZodTypeDef, Inbound> = z
        .object({
            hit: z.boolean().optional(),
            ttl: z.number().int().optional(),
            key: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.hit === undefined ? null : { hit: v.hit }),
                ...(v.ttl === undefined ? null : { ttl: v.ttl }),
                ...(v.key === undefined ? null : { key: v.key }),
            };
        });

    export type Outbound = {
        hit?: boolean | undefined;
        ttl?: number | undefined;
        key?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTasksCountCache> = z
        .object({
            hit: z.boolean().optional(),
            ttl: z.number().int().optional(),
            key: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.hit === undefined ? null : { hit: v.hit }),
                ...(v.ttl === undefined ? null : { ttl: v.ttl }),
                ...(v.key === undefined ? null : { key: v.key }),
            };
        });
}

/** @internal */
export namespace GetTasksCountMeta$ {
    export type Inbound = {
        timestamp?: number | undefined;
        latency?: number | undefined;
        platformRateLimitRemaining?: number | undefined;
        rateLimitRemaining?: number | undefined;
        cache?: GetTasksCountCache$.Inbound | undefined;
        transactionKey?: string | undefined;
        txn?: string | undefined;
        platform?: string | undefined;
        platformVersion?: string | undefined;
        connectionDefinitionKey?: string | undefined;
        action?: string | undefined;
        commonModel?: string | undefined;
        commonModelVersion?: string | undefined;
        connectionKey?: string | undefined;
        hash?: string | undefined;
        heartbeats?: Array<string> | undefined;
        totalTransactions?: number | undefined;
    };

    export const inboundSchema: z.ZodType<GetTasksCountMeta, z.ZodTypeDef, Inbound> = z
        .object({
            timestamp: z.number().int().optional(),
            latency: z.number().int().optional(),
            platformRateLimitRemaining: z.number().int().optional(),
            rateLimitRemaining: z.number().int().optional(),
            cache: z.lazy(() => GetTasksCountCache$.inboundSchema).optional(),
            transactionKey: z.string().optional(),
            txn: z.string().optional(),
            platform: z.string().optional(),
            platformVersion: z.string().optional(),
            connectionDefinitionKey: z.string().optional(),
            action: z.string().optional(),
            commonModel: z.string().optional(),
            commonModelVersion: z.string().optional(),
            connectionKey: z.string().optional(),
            hash: z.string().optional(),
            heartbeats: z.array(z.string()).optional(),
            totalTransactions: z.number().int().optional(),
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
                ...(v.cache === undefined ? null : { cache: v.cache }),
                ...(v.transactionKey === undefined ? null : { transactionKey: v.transactionKey }),
                ...(v.txn === undefined ? null : { txn: v.txn }),
                ...(v.platform === undefined ? null : { platform: v.platform }),
                ...(v.platformVersion === undefined
                    ? null
                    : { platformVersion: v.platformVersion }),
                ...(v.connectionDefinitionKey === undefined
                    ? null
                    : { connectionDefinitionKey: v.connectionDefinitionKey }),
                ...(v.action === undefined ? null : { action: v.action }),
                ...(v.commonModel === undefined ? null : { commonModel: v.commonModel }),
                ...(v.commonModelVersion === undefined
                    ? null
                    : { commonModelVersion: v.commonModelVersion }),
                ...(v.connectionKey === undefined ? null : { connectionKey: v.connectionKey }),
                ...(v.hash === undefined ? null : { hash: v.hash }),
                ...(v.heartbeats === undefined ? null : { heartbeats: v.heartbeats }),
                ...(v.totalTransactions === undefined
                    ? null
                    : { totalTransactions: v.totalTransactions }),
            };
        });

    export type Outbound = {
        timestamp?: number | undefined;
        latency?: number | undefined;
        platformRateLimitRemaining?: number | undefined;
        rateLimitRemaining?: number | undefined;
        cache?: GetTasksCountCache$.Outbound | undefined;
        transactionKey?: string | undefined;
        txn?: string | undefined;
        platform?: string | undefined;
        platformVersion?: string | undefined;
        connectionDefinitionKey?: string | undefined;
        action?: string | undefined;
        commonModel?: string | undefined;
        commonModelVersion?: string | undefined;
        connectionKey?: string | undefined;
        hash?: string | undefined;
        heartbeats?: Array<string> | undefined;
        totalTransactions?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTasksCountMeta> = z
        .object({
            timestamp: z.number().int().optional(),
            latency: z.number().int().optional(),
            platformRateLimitRemaining: z.number().int().optional(),
            rateLimitRemaining: z.number().int().optional(),
            cache: z.lazy(() => GetTasksCountCache$.outboundSchema).optional(),
            transactionKey: z.string().optional(),
            txn: z.string().optional(),
            platform: z.string().optional(),
            platformVersion: z.string().optional(),
            connectionDefinitionKey: z.string().optional(),
            action: z.string().optional(),
            commonModel: z.string().optional(),
            commonModelVersion: z.string().optional(),
            connectionKey: z.string().optional(),
            hash: z.string().optional(),
            heartbeats: z.array(z.string()).optional(),
            totalTransactions: z.number().int().optional(),
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
                ...(v.cache === undefined ? null : { cache: v.cache }),
                ...(v.transactionKey === undefined ? null : { transactionKey: v.transactionKey }),
                ...(v.txn === undefined ? null : { txn: v.txn }),
                ...(v.platform === undefined ? null : { platform: v.platform }),
                ...(v.platformVersion === undefined
                    ? null
                    : { platformVersion: v.platformVersion }),
                ...(v.connectionDefinitionKey === undefined
                    ? null
                    : { connectionDefinitionKey: v.connectionDefinitionKey }),
                ...(v.action === undefined ? null : { action: v.action }),
                ...(v.commonModel === undefined ? null : { commonModel: v.commonModel }),
                ...(v.commonModelVersion === undefined
                    ? null
                    : { commonModelVersion: v.commonModelVersion }),
                ...(v.connectionKey === undefined ? null : { connectionKey: v.connectionKey }),
                ...(v.hash === undefined ? null : { hash: v.hash }),
                ...(v.heartbeats === undefined ? null : { heartbeats: v.heartbeats }),
                ...(v.totalTransactions === undefined
                    ? null
                    : { totalTransactions: v.totalTransactions }),
            };
        });
}

/** @internal */
export namespace GetTasksCountResponseBody$ {
    export type Inbound = {
        status?: string | undefined;
        statusCode?: GetTasksCountStatusCode | undefined;
        unified?: GetTasksCountUnified$.Inbound | undefined;
        passthrough?: GetTasksCountPassthrough$.Inbound | undefined;
        meta?: GetTasksCountMeta$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetTasksCountResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            status: z.string().optional(),
            statusCode: GetTasksCountStatusCode$.optional(),
            unified: z.lazy(() => GetTasksCountUnified$.inboundSchema).optional(),
            passthrough: z.lazy(() => GetTasksCountPassthrough$.inboundSchema).optional(),
            meta: z.lazy(() => GetTasksCountMeta$.inboundSchema).optional(),
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
        statusCode?: GetTasksCountStatusCode | undefined;
        unified?: GetTasksCountUnified$.Outbound | undefined;
        passthrough?: GetTasksCountPassthrough$.Outbound | undefined;
        meta?: GetTasksCountMeta$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTasksCountResponseBody> = z
        .object({
            status: z.string().optional(),
            statusCode: GetTasksCountStatusCode$.optional(),
            unified: z.lazy(() => GetTasksCountUnified$.outboundSchema).optional(),
            passthrough: z.lazy(() => GetTasksCountPassthrough$.outboundSchema).optional(),
            meta: z.lazy(() => GetTasksCountMeta$.outboundSchema).optional(),
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
export namespace GetTasksCountResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: GetTasksCountResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetTasksCountResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => GetTasksCountResponseBody$.inboundSchema).optional(),
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
        object?: GetTasksCountResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTasksCountResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => GetTasksCountResponseBody$.outboundSchema).optional(),
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
