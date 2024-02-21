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

export class Tickets extends ClientSDK {
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
     * List Tickets
     *
     * @remarks
     * Get all Tickets records
     */
    async list(
        input: operations.GetTicketsRequest,
        options?: RequestOptions
    ): Promise<operations.GetTicketsResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetTicketsRequest$?.outboundSchema.parse(input);
        const body$ = null;

        const path$ = this.templateURLComponent("/tickets")();

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

        const context = { operationID: "get_/tickets" };
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
            const result = operations.GetTicketsResponse$?.inboundSchema.parse({
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
     * Create Tickets
     *
     * @remarks
     * Create a single Tickets record
     */
    async create(
        input: operations.PostTicketsRequest,
        options?: RequestOptions
    ): Promise<operations.PostTicketsResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = operations.PostTicketsRequest$?.outboundSchema.parse(input);

        const body$ = enc$.encodeJSON("body", payload$.Tickets, { explode: true });

        const path$ = this.templateURLComponent("/tickets")();

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

        const context = { operationID: "post_/tickets" };
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
            const result = operations.PostTicketsResponse$?.inboundSchema.parse({
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
     * Get Tickets count
     *
     * @remarks
     * Get the count of Tickets records
     */
    async count(
        input: operations.GetTicketsCountRequest,
        options?: RequestOptions
    ): Promise<operations.GetTicketsCountResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetTicketsCountRequest$?.outboundSchema.parse(input);
        const body$ = null;

        const path$ = this.templateURLComponent("/tickets/count")();

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

        const context = { operationID: "get_/tickets/count" };
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
            const result = operations.GetTicketsCountResponse$?.inboundSchema.parse({
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
     * Get Tickets
     *
     * @remarks
     * Get a single Tickets record
     */
    async get(
        input: operations.GetTicketsIdRequest,
        options?: RequestOptions
    ): Promise<operations.GetTicketsIdResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetTicketsIdRequest$?.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/tickets/{id}")(pathParams$);

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

        const context = { operationID: "get_/tickets/{id}" };
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
            const result = operations.GetTicketsIdResponse$?.inboundSchema.parse({
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
     * Delete Tickets
     *
     * @remarks
     * Delete a single Tickets record
     */
    async delete(
        input: operations.DeleteTicketsIdRequest,
        options?: RequestOptions
    ): Promise<operations.DeleteTicketsIdResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.DeleteTicketsIdRequest$?.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/tickets/{id}")(pathParams$);

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

        const context = { operationID: "delete_/tickets/{id}" };
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
            const result = operations.DeleteTicketsIdResponse$?.inboundSchema.parse({
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
     * Update Tickets
     *
     * @remarks
     * Update a single Tickets record
     */
    async update(
        input: operations.PatchTicketsIdRequest,
        options?: RequestOptions
    ): Promise<operations.PatchTicketsIdResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = operations.PatchTicketsIdRequest$?.outboundSchema.parse(input);

        const body$ = enc$.encodeJSON("body", payload$.Tickets, { explode: true });

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/tickets/{id}")(pathParams$);

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

        const context = { operationID: "patch_/tickets/{id}" };
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
            const result = operations.PatchTicketsIdResponse$?.inboundSchema.parse({
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
