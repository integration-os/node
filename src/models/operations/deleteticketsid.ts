/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type DeleteTicketsIdRequest = {
    /**
     * The id of the model
     */
    id: string;
    /**
     * The unique identifier of a Connected Account
     */
    xIntegrationosConnectionKey: string;
};

export enum DeleteTicketsIdStatusCode {
    TwoHundred = 200,
    FourHundred = 400,
    FiveHundred = 500,
}

export type DeleteTicketsIdUnified = {};

export type DeleteTicketsIdPassthrough = {};

export type DeleteTicketsIdCache = {
    hit?: boolean | undefined;
    ttl?: number | undefined;
    key?: string | undefined;
};

export type DeleteTicketsIdMeta = {
    timestamp?: number | undefined;
    latency?: number | undefined;
    platformRateLimitRemaining?: number | undefined;
    rateLimitRemaining?: number | undefined;
    cache?: DeleteTicketsIdCache | undefined;
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
export type DeleteTicketsIdResponseBody = {
    status?: string | undefined;
    statusCode?: DeleteTicketsIdStatusCode | undefined;
    unified?: DeleteTicketsIdUnified | undefined;
    passthrough?: DeleteTicketsIdPassthrough | undefined;
    meta?: DeleteTicketsIdMeta | undefined;
};

export type DeleteTicketsIdResponse = {
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
    object?: DeleteTicketsIdResponseBody | undefined;
};

/** @internal */
export namespace DeleteTicketsIdRequest$ {
    export type Inbound = {
        id: string;
        "X-INTEGRATIONOS-CONNECTION-KEY": string;
    };

    export const inboundSchema: z.ZodType<DeleteTicketsIdRequest, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteTicketsIdRequest> = z
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
export const DeleteTicketsIdStatusCode$ = z.nativeEnum(DeleteTicketsIdStatusCode);

/** @internal */
export namespace DeleteTicketsIdUnified$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<DeleteTicketsIdUnified, z.ZodTypeDef, Inbound> = z.object(
        {}
    );

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteTicketsIdUnified> =
        z.object({});
}

/** @internal */
export namespace DeleteTicketsIdPassthrough$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<DeleteTicketsIdPassthrough, z.ZodTypeDef, Inbound> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteTicketsIdPassthrough> =
        z.object({});
}

/** @internal */
export namespace DeleteTicketsIdCache$ {
    export type Inbound = {
        hit?: boolean | undefined;
        ttl?: number | undefined;
        key?: string | undefined;
    };

    export const inboundSchema: z.ZodType<DeleteTicketsIdCache, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteTicketsIdCache> = z
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
export namespace DeleteTicketsIdMeta$ {
    export type Inbound = {
        timestamp?: number | undefined;
        latency?: number | undefined;
        platformRateLimitRemaining?: number | undefined;
        rateLimitRemaining?: number | undefined;
        cache?: DeleteTicketsIdCache$.Inbound | undefined;
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

    export const inboundSchema: z.ZodType<DeleteTicketsIdMeta, z.ZodTypeDef, Inbound> = z
        .object({
            timestamp: z.number().int().optional(),
            latency: z.number().int().optional(),
            platformRateLimitRemaining: z.number().int().optional(),
            rateLimitRemaining: z.number().int().optional(),
            cache: z.lazy(() => DeleteTicketsIdCache$.inboundSchema).optional(),
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
        cache?: DeleteTicketsIdCache$.Outbound | undefined;
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteTicketsIdMeta> = z
        .object({
            timestamp: z.number().int().optional(),
            latency: z.number().int().optional(),
            platformRateLimitRemaining: z.number().int().optional(),
            rateLimitRemaining: z.number().int().optional(),
            cache: z.lazy(() => DeleteTicketsIdCache$.outboundSchema).optional(),
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
export namespace DeleteTicketsIdResponseBody$ {
    export type Inbound = {
        status?: string | undefined;
        statusCode?: DeleteTicketsIdStatusCode | undefined;
        unified?: DeleteTicketsIdUnified$.Inbound | undefined;
        passthrough?: DeleteTicketsIdPassthrough$.Inbound | undefined;
        meta?: DeleteTicketsIdMeta$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<DeleteTicketsIdResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            status: z.string().optional(),
            statusCode: DeleteTicketsIdStatusCode$.optional(),
            unified: z.lazy(() => DeleteTicketsIdUnified$.inboundSchema).optional(),
            passthrough: z.lazy(() => DeleteTicketsIdPassthrough$.inboundSchema).optional(),
            meta: z.lazy(() => DeleteTicketsIdMeta$.inboundSchema).optional(),
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
        statusCode?: DeleteTicketsIdStatusCode | undefined;
        unified?: DeleteTicketsIdUnified$.Outbound | undefined;
        passthrough?: DeleteTicketsIdPassthrough$.Outbound | undefined;
        meta?: DeleteTicketsIdMeta$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteTicketsIdResponseBody> = z
        .object({
            status: z.string().optional(),
            statusCode: DeleteTicketsIdStatusCode$.optional(),
            unified: z.lazy(() => DeleteTicketsIdUnified$.outboundSchema).optional(),
            passthrough: z.lazy(() => DeleteTicketsIdPassthrough$.outboundSchema).optional(),
            meta: z.lazy(() => DeleteTicketsIdMeta$.outboundSchema).optional(),
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
export namespace DeleteTicketsIdResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: DeleteTicketsIdResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<DeleteTicketsIdResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => DeleteTicketsIdResponseBody$.inboundSchema).optional(),
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
        object?: DeleteTicketsIdResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteTicketsIdResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => DeleteTicketsIdResponseBody$.outboundSchema).optional(),
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
