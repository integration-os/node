/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

export type DeleteAccountsIdRequest = {
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

export type DeleteAccountsIdPassthrough = {};

export type DeleteAccountsIdCache = {
    hit?: boolean | undefined;
    ttl?: number | undefined;
};

export type DeleteAccountsIdMeta = {
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
    cache?: DeleteAccountsIdCache | undefined;
};

/**
 * Successful response
 */
export type DeleteAccountsIdResponseBody = {
    status?: string | undefined;
    statusCode?: number | undefined;
    unified?: components.Accounts | undefined;
    passthrough?: DeleteAccountsIdPassthrough | undefined;
    meta?: DeleteAccountsIdMeta | undefined;
};

export type DeleteAccountsIdResponse = {
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
    object?: DeleteAccountsIdResponseBody | undefined;
};

/** @internal */
export namespace DeleteAccountsIdRequest$ {
    export type Inbound = {
        "X-INTEGRATIONOS-CONNECTION-KEY": string;
        "X-INTEGRATIONOS-ENABLE-PASSTHROUGH"?: string | undefined;
        "X-INTEGRATIONOS-PASSTHROUGH-FORWARD"?: string | undefined;
        id: string;
        passthroughForward?: string | undefined;
        modifyToken?: string | undefined;
    };

    export const inboundSchema: z.ZodType<DeleteAccountsIdRequest, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteAccountsIdRequest> = z
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
export namespace DeleteAccountsIdPassthrough$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<DeleteAccountsIdPassthrough, z.ZodTypeDef, Inbound> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteAccountsIdPassthrough> =
        z.object({});
}

/** @internal */
export namespace DeleteAccountsIdCache$ {
    export type Inbound = {
        hit?: boolean | undefined;
        ttl?: number | undefined;
    };

    export const inboundSchema: z.ZodType<DeleteAccountsIdCache, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteAccountsIdCache> = z
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
export namespace DeleteAccountsIdMeta$ {
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
        cache?: DeleteAccountsIdCache$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<DeleteAccountsIdMeta, z.ZodTypeDef, Inbound> = z
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
            cache: z.lazy(() => DeleteAccountsIdCache$?.inboundSchema).optional(),
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
        cache?: DeleteAccountsIdCache$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteAccountsIdMeta> = z
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
            cache: z.lazy(() => DeleteAccountsIdCache$?.outboundSchema).optional(),
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
export namespace DeleteAccountsIdResponseBody$ {
    export type Inbound = {
        status?: string | undefined;
        statusCode?: number | undefined;
        unified?: components.Accounts$.Inbound | undefined;
        passthrough?: DeleteAccountsIdPassthrough$.Inbound | undefined;
        meta?: DeleteAccountsIdMeta$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<DeleteAccountsIdResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            status: z.string().optional(),
            statusCode: z.number().int().optional(),
            unified: components.Accounts$?.inboundSchema.optional(),
            passthrough: z.lazy(() => DeleteAccountsIdPassthrough$?.inboundSchema).optional(),
            meta: z.lazy(() => DeleteAccountsIdMeta$?.inboundSchema).optional(),
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
        unified?: components.Accounts$.Outbound | undefined;
        passthrough?: DeleteAccountsIdPassthrough$.Outbound | undefined;
        meta?: DeleteAccountsIdMeta$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteAccountsIdResponseBody> = z
        .object({
            status: z.string().optional(),
            statusCode: z.number().int().optional(),
            unified: components.Accounts$?.outboundSchema.optional(),
            passthrough: z.lazy(() => DeleteAccountsIdPassthrough$?.outboundSchema).optional(),
            meta: z.lazy(() => DeleteAccountsIdMeta$?.outboundSchema).optional(),
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
export namespace DeleteAccountsIdResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: DeleteAccountsIdResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<DeleteAccountsIdResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => DeleteAccountsIdResponseBody$?.inboundSchema).optional(),
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
        object?: DeleteAccountsIdResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteAccountsIdResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => DeleteAccountsIdResponseBody$?.outboundSchema).optional(),
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
