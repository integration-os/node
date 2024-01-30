/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type DeleteCandidatesIdRequest = {
    /**
     * The id of the model
     */
    id: string;
    /**
     * The unique identifier of a Connected Account
     */
    xIntegrationosConnectionKey: string;
};

export enum DeleteCandidatesIdStatusCode {
    TwoHundred = 200,
    FourHundred = 400,
    FiveHundred = 500,
}

export type DeleteCandidatesIdUnified = {};

export type DeleteCandidatesIdPassthrough = {};

export type DeleteCandidatesIdCache = {
    hit?: boolean | undefined;
    ttl?: number | undefined;
    key?: string | undefined;
};

export type DeleteCandidatesIdMeta = {
    timestamp?: number | undefined;
    latency?: number | undefined;
    platformRateLimitRemaining?: number | undefined;
    rateLimitRemaining?: number | undefined;
    cache?: DeleteCandidatesIdCache | undefined;
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
export type DeleteCandidatesIdResponseBody = {
    status?: string | undefined;
    statusCode?: DeleteCandidatesIdStatusCode | undefined;
    unified?: DeleteCandidatesIdUnified | undefined;
    passthrough?: DeleteCandidatesIdPassthrough | undefined;
    meta?: DeleteCandidatesIdMeta | undefined;
};

export type DeleteCandidatesIdResponse = {
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
    object?: DeleteCandidatesIdResponseBody | undefined;
};

/** @internal */
export namespace DeleteCandidatesIdRequest$ {
    export type Inbound = {
        id: string;
        "X-INTEGRATIONOS-CONNECTION-KEY": string;
    };

    export const inboundSchema: z.ZodType<DeleteCandidatesIdRequest, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string(),
            "X-INTEGRATIONOS-CONNECTION-KEY": z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
                xIntegrationosConnectionKey: v["X-INTEGRATIONOS-CONNECTION-KEY"],
            };
        });

    export type Outbound = {
        id: string;
        "X-INTEGRATIONOS-CONNECTION-KEY": string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteCandidatesIdRequest> = z
        .object({
            id: z.string(),
            xIntegrationosConnectionKey: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
                "X-INTEGRATIONOS-CONNECTION-KEY": v.xIntegrationosConnectionKey,
            };
        });
}

/** @internal */
export const DeleteCandidatesIdStatusCode$ = z.nativeEnum(DeleteCandidatesIdStatusCode);

/** @internal */
export namespace DeleteCandidatesIdUnified$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<DeleteCandidatesIdUnified, z.ZodTypeDef, Inbound> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteCandidatesIdUnified> =
        z.object({});
}

/** @internal */
export namespace DeleteCandidatesIdPassthrough$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<DeleteCandidatesIdPassthrough, z.ZodTypeDef, Inbound> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteCandidatesIdPassthrough> =
        z.object({});
}

/** @internal */
export namespace DeleteCandidatesIdCache$ {
    export type Inbound = {
        hit?: boolean | undefined;
        ttl?: number | undefined;
        key?: string | undefined;
    };

    export const inboundSchema: z.ZodType<DeleteCandidatesIdCache, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteCandidatesIdCache> = z
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
export namespace DeleteCandidatesIdMeta$ {
    export type Inbound = {
        timestamp?: number | undefined;
        latency?: number | undefined;
        platformRateLimitRemaining?: number | undefined;
        rateLimitRemaining?: number | undefined;
        cache?: DeleteCandidatesIdCache$.Inbound | undefined;
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

    export const inboundSchema: z.ZodType<DeleteCandidatesIdMeta, z.ZodTypeDef, Inbound> = z
        .object({
            timestamp: z.number().int().optional(),
            latency: z.number().int().optional(),
            platformRateLimitRemaining: z.number().int().optional(),
            rateLimitRemaining: z.number().int().optional(),
            cache: z.lazy(() => DeleteCandidatesIdCache$.inboundSchema).optional(),
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
        cache?: DeleteCandidatesIdCache$.Outbound | undefined;
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteCandidatesIdMeta> = z
        .object({
            timestamp: z.number().int().optional(),
            latency: z.number().int().optional(),
            platformRateLimitRemaining: z.number().int().optional(),
            rateLimitRemaining: z.number().int().optional(),
            cache: z.lazy(() => DeleteCandidatesIdCache$.outboundSchema).optional(),
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
export namespace DeleteCandidatesIdResponseBody$ {
    export type Inbound = {
        status?: string | undefined;
        statusCode?: DeleteCandidatesIdStatusCode | undefined;
        unified?: DeleteCandidatesIdUnified$.Inbound | undefined;
        passthrough?: DeleteCandidatesIdPassthrough$.Inbound | undefined;
        meta?: DeleteCandidatesIdMeta$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<DeleteCandidatesIdResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            status: z.string().optional(),
            statusCode: DeleteCandidatesIdStatusCode$.optional(),
            unified: z.lazy(() => DeleteCandidatesIdUnified$.inboundSchema).optional(),
            passthrough: z.lazy(() => DeleteCandidatesIdPassthrough$.inboundSchema).optional(),
            meta: z.lazy(() => DeleteCandidatesIdMeta$.inboundSchema).optional(),
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
        statusCode?: DeleteCandidatesIdStatusCode | undefined;
        unified?: DeleteCandidatesIdUnified$.Outbound | undefined;
        passthrough?: DeleteCandidatesIdPassthrough$.Outbound | undefined;
        meta?: DeleteCandidatesIdMeta$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteCandidatesIdResponseBody> =
        z
            .object({
                status: z.string().optional(),
                statusCode: DeleteCandidatesIdStatusCode$.optional(),
                unified: z.lazy(() => DeleteCandidatesIdUnified$.outboundSchema).optional(),
                passthrough: z.lazy(() => DeleteCandidatesIdPassthrough$.outboundSchema).optional(),
                meta: z.lazy(() => DeleteCandidatesIdMeta$.outboundSchema).optional(),
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
export namespace DeleteCandidatesIdResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: DeleteCandidatesIdResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<DeleteCandidatesIdResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => DeleteCandidatesIdResponseBody$.inboundSchema).optional(),
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
        object?: DeleteCandidatesIdResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteCandidatesIdResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => DeleteCandidatesIdResponseBody$.outboundSchema).optional(),
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