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

export class Vendors extends ClientSDK {
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
     * List Vendors
     *
     * @remarks
     * Get all Vendors records
     */
    async list(
        input: operations.GetVendorsRequest,
        options?: RequestOptions
    ): Promise<operations.GetVendorsResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetVendorsRequest$?.outboundSchema.parse(input);
        const body$ = null;

        const path$ = this.templateURLComponent("/vendors")();

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

        const context = { operationID: "get_/vendors" };
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
            const result = operations.GetVendorsResponse$?.inboundSchema.parse({
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
     * Create Vendors
     *
     * @remarks
     * Create a single Vendors record
     */
    async create(
        input: operations.PostVendorsRequest,
        options?: RequestOptions
    ): Promise<operations.PostVendorsResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = operations.PostVendorsRequest$?.outboundSchema.parse(input);

        const body$ = enc$.encodeJSON("body", payload$.Vendors, { explode: true });

        const path$ = this.templateURLComponent("/vendors")();

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

        const context = { operationID: "post_/vendors" };
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
            const result = operations.PostVendorsResponse$?.inboundSchema.parse({
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
     * Get Vendors count
     *
     * @remarks
     * Get the count of Vendors records
     */
    async count(
        input: operations.GetVendorsCountRequest,
        options?: RequestOptions
    ): Promise<operations.GetVendorsCountResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetVendorsCountRequest$?.outboundSchema.parse(input);
        const body$ = null;

        const path$ = this.templateURLComponent("/vendors/count")();

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

        const context = { operationID: "get_/vendors/count" };
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
            const result = operations.GetVendorsCountResponse$?.inboundSchema.parse({
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
     * Get Vendors
     *
     * @remarks
     * Get a single Vendors record
     */
    async get(
        input: operations.GetVendorsIdRequest,
        options?: RequestOptions
    ): Promise<operations.GetVendorsIdResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetVendorsIdRequest$?.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/vendors/{id}")(pathParams$);

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

        const context = { operationID: "get_/vendors/{id}" };
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
            const result = operations.GetVendorsIdResponse$?.inboundSchema.parse({
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
     * Delete Vendors
     *
     * @remarks
     * Delete a single Vendors record
     */
    async delete(
        input: operations.DeleteVendorsIdRequest,
        options?: RequestOptions
    ): Promise<operations.DeleteVendorsIdResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.DeleteVendorsIdRequest$?.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/vendors/{id}")(pathParams$);

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

        const context = { operationID: "delete_/vendors/{id}" };
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
            const result = operations.DeleteVendorsIdResponse$?.inboundSchema.parse({
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
     * Update Vendors
     *
     * @remarks
     * Update a single Vendors record
     */
    async update(
        input: operations.PatchVendorsIdRequest,
        options?: RequestOptions
    ): Promise<operations.PatchVendorsIdResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = operations.PatchVendorsIdRequest$?.outboundSchema.parse(input);

        const body$ = enc$.encodeJSON("body", payload$.Vendors, { explode: true });

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/vendors/{id}")(pathParams$);

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

        const context = { operationID: "patch_/vendors/{id}" };
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
            const result = operations.PatchVendorsIdResponse$?.inboundSchema.parse({
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