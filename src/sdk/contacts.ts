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

export class Contacts extends ClientSDK {
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
     * List Contacts
     *
     * @remarks
     * Get all Contacts records
     */
    async list(
        input: operations.GetContactsRequest,
        options?: RequestOptions
    ): Promise<operations.GetContactsResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetContactsRequest$?.outboundSchema.parse(input);
        const body$ = null;

        const path$ = this.templateURLComponent("/contacts")();

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

        const context = { operationID: "get_/contacts" };
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
            const result = operations.GetContactsResponse$?.inboundSchema.parse({
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
     * Create Contacts
     *
     * @remarks
     * Create a single Contacts record
     */
    async create(
        input: operations.PostContactsRequest,
        options?: RequestOptions
    ): Promise<operations.PostContactsResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = operations.PostContactsRequest$?.outboundSchema.parse(input);

        const body$ = enc$.encodeJSON("body", payload$.Contacts, { explode: true });

        const path$ = this.templateURLComponent("/contacts")();

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

        const context = { operationID: "post_/contacts" };
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
            const result = operations.PostContactsResponse$?.inboundSchema.parse({
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
     * Get Contacts count
     *
     * @remarks
     * Get the count of Contacts records
     */
    async count(
        input: operations.GetContactsCountRequest,
        options?: RequestOptions
    ): Promise<operations.GetContactsCountResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetContactsCountRequest$?.outboundSchema.parse(input);
        const body$ = null;

        const path$ = this.templateURLComponent("/contacts/count")();

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

        const context = { operationID: "get_/contacts/count" };
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
            const result = operations.GetContactsCountResponse$?.inboundSchema.parse({
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
     * Get Contacts
     *
     * @remarks
     * Get a single Contacts record
     */
    async get(
        input: operations.GetContactsIdRequest,
        options?: RequestOptions
    ): Promise<operations.GetContactsIdResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetContactsIdRequest$?.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/contacts/{id}")(pathParams$);

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

        const context = { operationID: "get_/contacts/{id}" };
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
            const result = operations.GetContactsIdResponse$?.inboundSchema.parse({
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
     * Delete Contacts
     *
     * @remarks
     * Delete a single Contacts record
     */
    async delete(
        input: operations.DeleteContactsIdRequest,
        options?: RequestOptions
    ): Promise<operations.DeleteContactsIdResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.DeleteContactsIdRequest$?.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/contacts/{id}")(pathParams$);

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

        const context = { operationID: "delete_/contacts/{id}" };
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
            const result = operations.DeleteContactsIdResponse$?.inboundSchema.parse({
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
     * Update Contacts
     *
     * @remarks
     * Update a single Contacts record
     */
    async update(
        input: operations.PatchContactsIdRequest,
        options?: RequestOptions
    ): Promise<operations.PatchContactsIdResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = operations.PatchContactsIdRequest$?.outboundSchema.parse(input);

        const body$ = enc$.encodeJSON("body", payload$.Contacts, { explode: true });

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/contacts/{id}")(pathParams$);

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

        const context = { operationID: "patch_/contacts/{id}" };
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
            const result = operations.PatchContactsIdResponse$?.inboundSchema.parse({
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
