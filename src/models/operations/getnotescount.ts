/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type GetNotesCountRequest = {
    /**
     * IntegrationOS API key
     */
    xIntegrationosSecret: string;
    /**
     * The unique identifier of a Connected Account
     */
    xIntegrationosConnectionKey: string;
};

export enum GetNotesCountStatusCode {
    TwoHundred = 200,
    FourHundred = 400,
    FiveHundred = 500,
}

export type GetNotesCountUnified = {
    count?: number | undefined;
};

export type GetNotesCountPassthrough = {};

export type GetNotesCountCache = {
    hit?: boolean | undefined;
    ttl?: number | undefined;
    key?: string | undefined;
};

export type GetNotesCountMeta = {
    timestamp?: number | undefined;
    latency?: number | undefined;
    platformRateLimitRemaining?: number | undefined;
    rateLimitRemaining?: number | undefined;
    cache?: GetNotesCountCache | undefined;
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
export type GetNotesCountResponseBody = {
    status?: string | undefined;
    statusCode?: GetNotesCountStatusCode | undefined;
    unified?: GetNotesCountUnified | undefined;
    passthrough?: GetNotesCountPassthrough | undefined;
    meta?: GetNotesCountMeta | undefined;
};

export type GetNotesCountResponse = {
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
    object?: GetNotesCountResponseBody | undefined;
};

/** @internal */
export namespace GetNotesCountRequest$ {
    export type Inbound = {
        "X-INTEGRATIONOS-SECRET": string;
        "X-INTEGRATIONOS-CONNECTION-KEY": string;
    };

    export const inboundSchema: z.ZodType<GetNotesCountRequest, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetNotesCountRequest> = z
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
export const GetNotesCountStatusCode$ = z.nativeEnum(GetNotesCountStatusCode);

/** @internal */
export namespace GetNotesCountUnified$ {
    export type Inbound = {
        count?: number | undefined;
    };

    export const inboundSchema: z.ZodType<GetNotesCountUnified, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetNotesCountUnified> = z
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
export namespace GetNotesCountPassthrough$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<GetNotesCountPassthrough, z.ZodTypeDef, Inbound> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetNotesCountPassthrough> =
        z.object({});
}

/** @internal */
export namespace GetNotesCountCache$ {
    export type Inbound = {
        hit?: boolean | undefined;
        ttl?: number | undefined;
        key?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetNotesCountCache, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetNotesCountCache> = z
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
export namespace GetNotesCountMeta$ {
    export type Inbound = {
        timestamp?: number | undefined;
        latency?: number | undefined;
        platformRateLimitRemaining?: number | undefined;
        rateLimitRemaining?: number | undefined;
        cache?: GetNotesCountCache$.Inbound | undefined;
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

    export const inboundSchema: z.ZodType<GetNotesCountMeta, z.ZodTypeDef, Inbound> = z
        .object({
            timestamp: z.number().int().optional(),
            latency: z.number().int().optional(),
            platformRateLimitRemaining: z.number().int().optional(),
            rateLimitRemaining: z.number().int().optional(),
            cache: z.lazy(() => GetNotesCountCache$.inboundSchema).optional(),
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
        cache?: GetNotesCountCache$.Outbound | undefined;
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetNotesCountMeta> = z
        .object({
            timestamp: z.number().int().optional(),
            latency: z.number().int().optional(),
            platformRateLimitRemaining: z.number().int().optional(),
            rateLimitRemaining: z.number().int().optional(),
            cache: z.lazy(() => GetNotesCountCache$.outboundSchema).optional(),
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
export namespace GetNotesCountResponseBody$ {
    export type Inbound = {
        status?: string | undefined;
        statusCode?: GetNotesCountStatusCode | undefined;
        unified?: GetNotesCountUnified$.Inbound | undefined;
        passthrough?: GetNotesCountPassthrough$.Inbound | undefined;
        meta?: GetNotesCountMeta$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetNotesCountResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            status: z.string().optional(),
            statusCode: GetNotesCountStatusCode$.optional(),
            unified: z.lazy(() => GetNotesCountUnified$.inboundSchema).optional(),
            passthrough: z.lazy(() => GetNotesCountPassthrough$.inboundSchema).optional(),
            meta: z.lazy(() => GetNotesCountMeta$.inboundSchema).optional(),
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
        statusCode?: GetNotesCountStatusCode | undefined;
        unified?: GetNotesCountUnified$.Outbound | undefined;
        passthrough?: GetNotesCountPassthrough$.Outbound | undefined;
        meta?: GetNotesCountMeta$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetNotesCountResponseBody> = z
        .object({
            status: z.string().optional(),
            statusCode: GetNotesCountStatusCode$.optional(),
            unified: z.lazy(() => GetNotesCountUnified$.outboundSchema).optional(),
            passthrough: z.lazy(() => GetNotesCountPassthrough$.outboundSchema).optional(),
            meta: z.lazy(() => GetNotesCountMeta$.outboundSchema).optional(),
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
export namespace GetNotesCountResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: GetNotesCountResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetNotesCountResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => GetNotesCountResponseBody$.inboundSchema).optional(),
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
        object?: GetNotesCountResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetNotesCountResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => GetNotesCountResponseBody$.outboundSchema).optional(),
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