/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as errors from "../models/errors";
import * as operations from "../models/operations";

export class Bills extends ClientSDK {
    private readonly options$: SDKOptions;

    constructor(options: SDKOptions = {}) {
        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
        });

        this.options$ = options;
        void this.options$;
    }
    /**
     * Get bills
     *
     * @remarks
     * Get a single bills record
     */
    async get(
        input: operations.GetBillsIdRequest,
        options?: RequestOptions
    ): Promise<operations.GetBillsIdResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetBillsIdRequest$?.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };

        const path$ = this.templateURLComponent("/bills/{id}")(pathParams$);

        headers$.set(
            "X-INTEGRATIONOS-CONNECTION-KEY",
            enc$.encodeSimple(
                "X-INTEGRATIONOS-CONNECTION-KEY",
                payload$["X-INTEGRATIONOS-CONNECTION-KEY"],
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

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                body: body$,
            },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.GetBillsIdResponse$?.inboundSchema.parse({
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
     * Delete bills
     *
     * @remarks
     * Delete a single bills record
     */
    async delete(
        input: operations.DeleteBillsIdRequest,
        options?: RequestOptions
    ): Promise<operations.DeleteBillsIdResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.DeleteBillsIdRequest$?.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };

        const path$ = this.templateURLComponent("/bills/{id}")(pathParams$);

        const query$ = [
            enc$.encodeForm("modifyToken", payload$.modifyToken, {
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

        let security$;
        if (typeof this.options$.secret === "function") {
            security$ = { secret: await this.options$.secret() };
        } else if (this.options$.secret) {
            security$ = { secret: this.options$.secret };
        } else {
            security$ = {};
        }
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "DELETE",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.DeleteBillsIdResponse$?.inboundSchema.parse({
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
     * Update bills
     *
     * @remarks
     * Update a single bills record
     */
    async update(
        input: operations.PatchBillsIdRequest,
        options?: RequestOptions
    ): Promise<operations.PatchBillsIdResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = operations.PatchBillsIdRequest$?.outboundSchema.parse(input);

        const body$ = enc$.encodeJSON("body", payload$.Bills, { explode: true });

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };

        const path$ = this.templateURLComponent("/bills/{id}")(pathParams$);

        const query$ = [
            enc$.encodeForm("modifyToken", payload$.modifyToken, {
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

        let security$;
        if (typeof this.options$.secret === "function") {
            security$ = { secret: await this.options$.secret() };
        } else if (this.options$.secret) {
            security$ = { secret: this.options$.secret };
        } else {
            security$ = {};
        }
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "PATCH",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.PatchBillsIdResponse$?.inboundSchema.parse({
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
     * List bills
     *
     * @remarks
     * Get all bills records
     */
    async list(
        input: operations.GetBillsRequest,
        options?: RequestOptions
    ): Promise<operations.GetBillsResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetBillsRequest$?.outboundSchema.parse(input);
        const body$ = null;

        const path$ = this.templateURLComponent("/bills")();

        const query$ = [
            enc$.encodeForm("createdAfter", payload$.createdAfter, {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeForm("createdBefore", payload$.createdBefore, {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeForm("limit", payload$.limit, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("nextCursor", payload$.nextCursor, {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeForm("pageSize", payload$.pageSize, {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeForm("previousCursor", payload$.previousCursor, {
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

        let security$;
        if (typeof this.options$.secret === "function") {
            security$ = { secret: await this.options$.secret() };
        } else if (this.options$.secret) {
            security$ = { secret: this.options$.secret };
        } else {
            security$ = {};
        }
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.GetBillsResponse$?.inboundSchema.parse({
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
     * Create bills
     *
     * @remarks
     * Create a single bills record
     */
    async create(
        input: operations.PostBillsRequest,
        options?: RequestOptions
    ): Promise<operations.PostBillsResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = operations.PostBillsRequest$?.outboundSchema.parse(input);

        const body$ = enc$.encodeJSON("body", payload$.Bills, { explode: true });

        const path$ = this.templateURLComponent("/bills")();

        headers$.set(
            "X-INTEGRATIONOS-CONNECTION-KEY",
            enc$.encodeSimple(
                "X-INTEGRATIONOS-CONNECTION-KEY",
                payload$["X-INTEGRATIONOS-CONNECTION-KEY"],
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

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                body: body$,
            },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.PostBillsResponse$?.inboundSchema.parse({
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
     * Get bills count
     *
     * @remarks
     * Get the count of bills records
     */
    async count(
        input: operations.GetBillsCountRequest,
        options?: RequestOptions
    ): Promise<operations.GetBillsCountResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetBillsCountRequest$?.outboundSchema.parse(input);
        const body$ = null;

        const path$ = this.templateURLComponent("/bills/count")();

        headers$.set(
            "X-INTEGRATIONOS-CONNECTION-KEY",
            enc$.encodeSimple(
                "X-INTEGRATIONOS-CONNECTION-KEY",
                payload$["X-INTEGRATIONOS-CONNECTION-KEY"],
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

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                body: body$,
            },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.GetBillsCountResponse$?.inboundSchema.parse({
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