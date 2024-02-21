/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

export type DeleteMessagesIdRequest = {
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
    /**
     * The modified token of the model
     */
    modifyToken?: string | undefined;
};

export type DeleteMessagesIdPassthrough = {};

export type DeleteMessagesIdCache = {
    hit?: boolean | undefined;
    ttl?: number | undefined;
};

export type DeleteMessagesIdMeta = {
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
    cache?: DeleteMessagesIdCache | undefined;
};

/**
 * Successful response
 */
export type DeleteMessagesIdResponseBody = {
    status?: string | undefined;
    statusCode?: number | undefined;
    unified?: components.Messages | undefined;
    passthrough?: DeleteMessagesIdPassthrough | undefined;
    meta?: DeleteMessagesIdMeta | undefined;
};

export type DeleteMessagesIdResponse = {
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
    object?: DeleteMessagesIdResponseBody | undefined;
};

/** @internal */
export namespace DeleteMessagesIdRequest$ {
    export type Inbound = {
        "X-INTEGRATIONOS-CONNECTION-KEY": string;
        "X-INTEGRATIONOS-ENABLE-PASSTHROUGH"?: string | undefined;
        "X-INTEGRATIONOS-PASSTHROUGH-FORWARD"?: string | undefined;
        id: string;
        passthroughForward?: string | undefined;
        modifyToken?: string | undefined;
    };

    export const inboundSchema: z.ZodType<DeleteMessagesIdRequest, z.ZodTypeDef, Inbound> = z
        .object({
            "X-INTEGRATIONOS-CONNECTION-KEY": z.string(),
            "X-INTEGRATIONOS-ENABLE-PASSTHROUGH": z.string().optional(),
            "X-INTEGRATIONOS-PASSTHROUGH-FORWARD": z.string().optional(),
            id: z.string(),
            passthroughForward: z.string().optional(),
            modifyToken: z.string().optional(),
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
                ...(v.modifyToken === undefined ? null : { modifyToken: v.modifyToken }),
            };
        });

    export type Outbound = {
        "X-INTEGRATIONOS-CONNECTION-KEY": string;
        "X-INTEGRATIONOS-ENABLE-PASSTHROUGH"?: string | undefined;
        "X-INTEGRATIONOS-PASSTHROUGH-FORWARD"?: string | undefined;
        id: string;
        passthroughForward?: string | undefined;
        modifyToken?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteMessagesIdRequest> = z
        .object({
            connectionKey: z.string(),
            xIntegrationosEnablePassthrough: z.string().optional(),
            xIntegrationosPassthroughForward: z.string().optional(),
            id: z.string(),
            passthroughForward: z.string().optional(),
            modifyToken: z.string().optional(),
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
                ...(v.modifyToken === undefined ? null : { modifyToken: v.modifyToken }),
            };
        });
}

/** @internal */
export namespace DeleteMessagesIdPassthrough$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<DeleteMessagesIdPassthrough, z.ZodTypeDef, Inbound> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteMessagesIdPassthrough> =
        z.object({});
}

/** @internal */
export namespace DeleteMessagesIdCache$ {
    export type Inbound = {
        hit?: boolean | undefined;
        ttl?: number | undefined;
    };

    export const inboundSchema: z.ZodType<DeleteMessagesIdCache, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteMessagesIdCache> = z
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
export namespace DeleteMessagesIdMeta$ {
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
        cache?: DeleteMessagesIdCache$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<DeleteMessagesIdMeta, z.ZodTypeDef, Inbound> = z
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
            cache: z.lazy(() => DeleteMessagesIdCache$?.inboundSchema).optional(),
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
        cache?: DeleteMessagesIdCache$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteMessagesIdMeta> = z
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
            cache: z.lazy(() => DeleteMessagesIdCache$?.outboundSchema).optional(),
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
export namespace DeleteMessagesIdResponseBody$ {
    export type Inbound = {
        status?: string | undefined;
        statusCode?: number | undefined;
        unified?: components.Messages$.Inbound | undefined;
        passthrough?: DeleteMessagesIdPassthrough$.Inbound | undefined;
        meta?: DeleteMessagesIdMeta$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<DeleteMessagesIdResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            status: z.string().optional(),
            statusCode: z.number().int().optional(),
            unified: components.Messages$?.inboundSchema.optional(),
            passthrough: z.lazy(() => DeleteMessagesIdPassthrough$?.inboundSchema).optional(),
            meta: z.lazy(() => DeleteMessagesIdMeta$?.inboundSchema).optional(),
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
        unified?: components.Messages$.Outbound | undefined;
        passthrough?: DeleteMessagesIdPassthrough$.Outbound | undefined;
        meta?: DeleteMessagesIdMeta$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteMessagesIdResponseBody> = z
        .object({
            status: z.string().optional(),
            statusCode: z.number().int().optional(),
            unified: components.Messages$?.outboundSchema.optional(),
            passthrough: z.lazy(() => DeleteMessagesIdPassthrough$?.outboundSchema).optional(),
            meta: z.lazy(() => DeleteMessagesIdMeta$?.outboundSchema).optional(),
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
export namespace DeleteMessagesIdResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: DeleteMessagesIdResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<DeleteMessagesIdResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => DeleteMessagesIdResponseBody$?.inboundSchema).optional(),
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
        object?: DeleteMessagesIdResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteMessagesIdResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => DeleteMessagesIdResponseBody$?.outboundSchema).optional(),
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
