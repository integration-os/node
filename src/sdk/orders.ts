/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as errors from "../models/errors";
import * as operations from "../models/operations";

export class Orders extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    /**
     * List Orders
     *
     * @remarks
     * Get all Orders records
     */
    async list(
        input: operations.GetOrdersRequest,
        options?: RequestOptions
    ): Promise<operations.GetOrdersResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetOrdersRequest$?.outboundSchema.parse(input);
        const body$ = null;

        const path$ = this.templateURLComponent("/orders")();

        const query$ = [
            enc$.encodeForm("createdAfter", payload$.createdAfter, {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeForm("createdBefore", payload$.createdBefore, {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeForm("cursor", payload$.cursor, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("limit", payload$.limit, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("passthroughForward", payload$.passthroughForward, {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeForm("updatedAfter", payload$.updatedAfter, {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeForm("updatedBefore", payload$.updatedBefore, {
                explode: true,
                charEncoding: "percent",
            }),
        ]
            .filter(Boolean)
            .join("&");

        headers$.set(
            "X-INTEGRATIONOS-CONNECTION-KEY",
            enc$.encodeSimple(
                "X-INTEGRATIONOS-CONNECTION-KEY",
                payload$["X-INTEGRATIONOS-CONNECTION-KEY"],
                { explode: false, charEncoding: "none" }
            )
        );
        headers$.set(
            "X-INTEGRATIONOS-ENABLE-PASSTHROUGH",
            enc$.encodeSimple(
                "X-INTEGRATIONOS-ENABLE-PASSTHROUGH",
                payload$["X-INTEGRATIONOS-ENABLE-PASSTHROUGH"],
                { explode: false, charEncoding: "none" }
            )
        );
        headers$.set(
            "X-INTEGRATIONOS-PASSTHROUGH-FORWARD",
            enc$.encodeSimple(
                "X-INTEGRATIONOS-PASSTHROUGH-FORWARD",
                payload$["X-INTEGRATIONOS-PASSTHROUGH-FORWARD"],
                { explode: false, charEncoding: "none" }
            )
        );

        let security$;
        if (typeof this.options$.secret === "function") {
            security$ = { secret: await this.options$.secret() };
        } else if (this.options$.secret) {
            security$ = { secret: this.options$.secret };
        } else {
            security$ = {};
        }
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const context = { operationID: "get_/orders" };
        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request = await this.createRequest$(
            {
                context,
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.GetOrdersResponse$?.inboundSchema.parse({
                ...responseFields$,
                object: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Create Orders
     *
     * @remarks
     * Create a single Orders record
     */
    async create(
        input: operations.PostOrdersRequest,
        options?: RequestOptions
    ): Promise<operations.PostOrdersResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = operations.PostOrdersRequest$?.outboundSchema.parse(input);

        const body$ = enc$.encodeJSON("body", payload$.Orders, { explode: true });

        const path$ = this.templateURLComponent("/orders")();

        const query$ = [
            enc$.encodeForm("passthroughForward", payload$.passthroughForward, {
                explode: true,
                charEncoding: "percent",
            }),
        ]
            .filter(Boolean)
            .join("&");

        headers$.set(
            "X-INTEGRATIONOS-CONNECTION-KEY",
            enc$.encodeSimple(
                "X-INTEGRATIONOS-CONNECTION-KEY",
                payload$["X-INTEGRATIONOS-CONNECTION-KEY"],
                { explode: false, charEncoding: "none" }
            )
        );
        headers$.set(
            "X-INTEGRATIONOS-ENABLE-PASSTHROUGH",
            enc$.encodeSimple(
                "X-INTEGRATIONOS-ENABLE-PASSTHROUGH",
                payload$["X-INTEGRATIONOS-ENABLE-PASSTHROUGH"],
                { explode: false, charEncoding: "none" }
            )
        );
        headers$.set(
            "X-INTEGRATIONOS-PASSTHROUGH-FORWARD",
            enc$.encodeSimple(
                "X-INTEGRATIONOS-PASSTHROUGH-FORWARD",
                payload$["X-INTEGRATIONOS-PASSTHROUGH-FORWARD"],
                { explode: false, charEncoding: "none" }
            )
        );

        let security$;
        if (typeof this.options$.secret === "function") {
            security$ = { secret: await this.options$.secret() };
        } else if (this.options$.secret) {
            security$ = { secret: this.options$.secret };
        } else {
            security$ = {};
        }
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const context = { operationID: "post_/orders" };
        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request = await this.createRequest$(
            {
                context,
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.PostOrdersResponse$?.inboundSchema.parse({
                ...responseFields$,
                object: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Get Orders count
     *
     * @remarks
     * Get the count of Orders records
     */
    async count(
        input: operations.GetOrdersCountRequest,
        options?: RequestOptions
    ): Promise<operations.GetOrdersCountResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetOrdersCountRequest$?.outboundSchema.parse(input);
        const body$ = null;

        const path$ = this.templateURLComponent("/orders/count")();

        const query$ = [
            enc$.encodeForm("passthroughForward", payload$.passthroughForward, {
                explode: true,
                charEncoding: "percent",
            }),
        ]
            .filter(Boolean)
            .join("&");

        headers$.set(
            "X-INTEGRATIONOS-CONNECTION-KEY",
            enc$.encodeSimple(
                "X-INTEGRATIONOS-CONNECTION-KEY",
                payload$["X-INTEGRATIONOS-CONNECTION-KEY"],
                { explode: false, charEncoding: "none" }
            )
        );
        headers$.set(
            "X-INTEGRATIONOS-ENABLE-PASSTHROUGH",
            enc$.encodeSimple(
                "X-INTEGRATIONOS-ENABLE-PASSTHROUGH",
                payload$["X-INTEGRATIONOS-ENABLE-PASSTHROUGH"],
                { explode: false, charEncoding: "none" }
            )
        );
        headers$.set(
            "X-INTEGRATIONOS-PASSTHROUGH-FORWARD",
            enc$.encodeSimple(
                "X-INTEGRATIONOS-PASSTHROUGH-FORWARD",
                payload$["X-INTEGRATIONOS-PASSTHROUGH-FORWARD"],
                { explode: false, charEncoding: "none" }
            )
        );

        let security$;
        if (typeof this.options$.secret === "function") {
            security$ = { secret: await this.options$.secret() };
        } else if (this.options$.secret) {
            security$ = { secret: this.options$.secret };
        } else {
            security$ = {};
        }
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const context = { operationID: "get_/orders/count" };
        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request = await this.createRequest$(
            {
                context,
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.GetOrdersCountResponse$?.inboundSchema.parse({
                ...responseFields$,
                object: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Get Orders
     *
     * @remarks
     * Get a single Orders record
     */
    async get(
        input: operations.GetOrdersIdRequest,
        options?: RequestOptions
    ): Promise<operations.GetOrdersIdResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetOrdersIdRequest$?.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/orders/{id}")(pathParams$);

        const query$ = [
            enc$.encodeForm("passthroughForward", payload$.passthroughForward, {
                explode: true,
                charEncoding: "percent",
            }),
        ]
            .filter(Boolean)
            .join("&");

        headers$.set(
            "X-INTEGRATIONOS-CONNECTION-KEY",
            enc$.encodeSimple(
                "X-INTEGRATIONOS-CONNECTION-KEY",
                payload$["X-INTEGRATIONOS-CONNECTION-KEY"],
                { explode: false, charEncoding: "none" }
            )
        );
        headers$.set(
            "X-INTEGRATIONOS-ENABLE-PASSTHROUGH",
            enc$.encodeSimple(
                "X-INTEGRATIONOS-ENABLE-PASSTHROUGH",
                payload$["X-INTEGRATIONOS-ENABLE-PASSTHROUGH"],
                { explode: false, charEncoding: "none" }
            )
        );
        headers$.set(
            "X-INTEGRATIONOS-PASSTHROUGH-FORWARD",
            enc$.encodeSimple(
                "X-INTEGRATIONOS-PASSTHROUGH-FORWARD",
                payload$["X-INTEGRATIONOS-PASSTHROUGH-FORWARD"],
                { explode: false, charEncoding: "none" }
            )
        );

        let security$;
        if (typeof this.options$.secret === "function") {
            security$ = { secret: await this.options$.secret() };
        } else if (this.options$.secret) {
            security$ = { secret: this.options$.secret };
        } else {
            security$ = {};
        }
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const context = { operationID: "get_/orders/{id}" };
        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request = await this.createRequest$(
            {
                context,
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.GetOrdersIdResponse$?.inboundSchema.parse({
                ...responseFields$,
                object: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Delete Orders
     *
     * @remarks
     * Delete a single Orders record
     */
    async delete(
        input: operations.DeleteOrdersIdRequest,
        options?: RequestOptions
    ): Promise<operations.DeleteOrdersIdResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.DeleteOrdersIdRequest$?.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/orders/{id}")(pathParams$);

        const query$ = [
            enc$.encodeForm("modifyToken", payload$.modifyToken, {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeForm("passthroughForward", payload$.passthroughForward, {
                explode: true,
                charEncoding: "percent",
            }),
        ]
            .filter(Boolean)
            .join("&");

        headers$.set(
            "X-INTEGRATIONOS-CONNECTION-KEY",
            enc$.encodeSimple(
                "X-INTEGRATIONOS-CONNECTION-KEY",
                payload$["X-INTEGRATIONOS-CONNECTION-KEY"],
                { explode: false, charEncoding: "none" }
            )
        );
        headers$.set(
            "X-INTEGRATIONOS-ENABLE-PASSTHROUGH",
            enc$.encodeSimple(
                "X-INTEGRATIONOS-ENABLE-PASSTHROUGH",
                payload$["X-INTEGRATIONOS-ENABLE-PASSTHROUGH"],
                { explode: false, charEncoding: "none" }
            )
        );
        headers$.set(
            "X-INTEGRATIONOS-PASSTHROUGH-FORWARD",
            enc$.encodeSimple(
                "X-INTEGRATIONOS-PASSTHROUGH-FORWARD",
                payload$["X-INTEGRATIONOS-PASSTHROUGH-FORWARD"],
                { explode: false, charEncoding: "none" }
            )
        );

        let security$;
        if (typeof this.options$.secret === "function") {
            security$ = { secret: await this.options$.secret() };
        } else if (this.options$.secret) {
            security$ = { secret: this.options$.secret };
        } else {
            security$ = {};
        }
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const context = { operationID: "delete_/orders/{id}" };
        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request = await this.createRequest$(
            {
                context,
                security: securitySettings$,
                method: "DELETE",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.DeleteOrdersIdResponse$?.inboundSchema.parse({
                ...responseFields$,
                object: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Update Orders
     *
     * @remarks
     * Update a single Orders record
     */
    async update(
        input: operations.PatchOrdersIdRequest,
        options?: RequestOptions
    ): Promise<operations.PatchOrdersIdResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = operations.PatchOrdersIdRequest$?.outboundSchema.parse(input);

        const body$ = enc$.encodeJSON("body", payload$.Orders, { explode: true });

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/orders/{id}")(pathParams$);

        const query$ = [
            enc$.encodeForm("modifyToken", payload$.modifyToken, {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeForm("passthroughForward", payload$.passthroughForward, {
                explode: true,
                charEncoding: "percent",
            }),
        ]
            .filter(Boolean)
            .join("&");

        headers$.set(
            "X-INTEGRATIONOS-CONNECTION-KEY",
            enc$.encodeSimple(
                "X-INTEGRATIONOS-CONNECTION-KEY",
                payload$["X-INTEGRATIONOS-CONNECTION-KEY"],
                { explode: false, charEncoding: "none" }
            )
        );
        headers$.set(
            "X-INTEGRATIONOS-ENABLE-PASSTHROUGH",
            enc$.encodeSimple(
                "X-INTEGRATIONOS-ENABLE-PASSTHROUGH",
                payload$["X-INTEGRATIONOS-ENABLE-PASSTHROUGH"],
                { explode: false, charEncoding: "none" }
            )
        );
        headers$.set(
            "X-INTEGRATIONOS-PASSTHROUGH-FORWARD",
            enc$.encodeSimple(
                "X-INTEGRATIONOS-PASSTHROUGH-FORWARD",
                payload$["X-INTEGRATIONOS-PASSTHROUGH-FORWARD"],
                { explode: false, charEncoding: "none" }
            )
        );

        let security$;
        if (typeof this.options$.secret === "function") {
            security$ = { secret: await this.options$.secret() };
        } else if (this.options$.secret) {
            security$ = { secret: this.options$.secret };
        } else {
            security$ = {};
        }
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const context = { operationID: "patch_/orders/{id}" };
        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request = await this.createRequest$(
            {
                context,
                security: securitySettings$,
                method: "PATCH",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.PatchOrdersIdResponse$?.inboundSchema.parse({
                ...responseFields$,
                object: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }
}
