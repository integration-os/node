/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as errors from "../models/errors";
import * as operations from "../models/operations";

export class Leads extends ClientSDK {
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
     * Get leads
     *
     * @remarks
     * Get a single leads record
     */
    async get(
        id: string,
        xIntegrationosConnectionKey: string,
        options?: RequestOptions
    ): Promise<operations.GetLeadsIdResponse> {
        const input$: operations.GetLeadsIdRequest = {
            id: id,
            xIntegrationosConnectionKey: xIntegrationosConnectionKey,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetLeadsIdRequest$.outboundSchema.parse(input$);
        const body$ = null;

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };

        const path$ = this.templateURLComponent("/leads/{id}")(pathParams$);

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
            const result = operations.GetLeadsIdResponse$.inboundSchema.parse({
                ...responseFields$,
                object: responseBody,
            });
            return {
                contentType: result.contentType,
                statusCode: result.statusCode as any,
                rawResponse: result.rawResponse,
                ...result.object
            };
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Delete leads
     *
     * @remarks
     * Delete a single leads record
     */
    async delete(
        id: string,
        xIntegrationosConnectionKey: string,
        options?: RequestOptions
    ): Promise<operations.DeleteLeadsIdResponse> {
        const input$: operations.DeleteLeadsIdRequest = {
            id: id,
            xIntegrationosConnectionKey: xIntegrationosConnectionKey,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.DeleteLeadsIdRequest$.outboundSchema.parse(input$);
        const body$ = null;

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };

        const path$ = this.templateURLComponent("/leads/{id}")(pathParams$);

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
            const result = operations.DeleteLeadsIdResponse$.inboundSchema.parse({
                ...responseFields$,
                object: responseBody,
            });
            return {
                contentType: result.contentType,
                statusCode: result.statusCode as any,
                rawResponse: result.rawResponse,
                ...result.object
            };
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Update leads
     *
     * @remarks
     * Update a single leads record
     */
    async update(
        id: string,
        xIntegrationosConnectionKey: string,
        requestBody?: operations.PatchLeadsIdRequestBody | undefined,
        options?: RequestOptions
    ): Promise<operations.PatchLeadsIdResponse> {
        const input$: operations.PatchLeadsIdRequest = {
            id: id,
            xIntegrationosConnectionKey: xIntegrationosConnectionKey,
            requestBody: requestBody,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = operations.PatchLeadsIdRequest$.outboundSchema.parse(input$);

        const body$ = enc$.encodeJSON("body", payload$.RequestBody, { explode: true });

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };

        const path$ = this.templateURLComponent("/leads/{id}")(pathParams$);

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
            const result = operations.PatchLeadsIdResponse$.inboundSchema.parse({
                ...responseFields$,
                object: responseBody,
            });
            return {
                contentType: result.contentType,
                statusCode: result.statusCode as any,
                rawResponse: result.rawResponse,
                ...result.object
            };
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * List leads
     *
     * @remarks
     * Get all leads records
     */
    async list(
        xIntegrationosConnectionKey: string,
        options?: RequestOptions
    ): Promise<operations.GetLeadsResponse> {
        const input$: operations.GetLeadsRequest = {
            xIntegrationosConnectionKey: xIntegrationosConnectionKey,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetLeadsRequest$.outboundSchema.parse(input$);
        const body$ = null;

        const path$ = this.templateURLComponent("/leads")();

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
            const result = operations.GetLeadsResponse$.inboundSchema.parse({
                ...responseFields$,
                object: responseBody,
            });
            return {
                contentType: result.contentType,
                statusCode: result.statusCode as any,
                rawResponse: result.rawResponse,
                ...result.object
            };
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Create leads
     *
     * @remarks
     * Create a single leads record
     */
    async create(
        xIntegrationosConnectionKey: string,
        requestBody: operations.PostLeadsRequestBody,
        options?: RequestOptions
    ): Promise<operations.PostLeadsResponse> {
        const input$: operations.PostLeadsRequest = {
            xIntegrationosConnectionKey: xIntegrationosConnectionKey,
            requestBody: requestBody,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = operations.PostLeadsRequest$.outboundSchema.parse(input$);

        const body$ = enc$.encodeJSON("body", payload$.RequestBody, { explode: true });

        const path$ = this.templateURLComponent("/leads")();

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
            const result = operations.PostLeadsResponse$.inboundSchema.parse({
                ...responseFields$,
                object: responseBody,
            });
            return {
                contentType: result.contentType,
                statusCode: result.statusCode as any,
                rawResponse: result.rawResponse,
                ...result.object
            };
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Get leads count
     *
     * @remarks
     * Get the count of leads records
     */
    async count(
        xIntegrationosConnectionKey: string,
        options?: RequestOptions
    ): Promise<operations.GetLeadsCountResponse> {
        const input$: operations.GetLeadsCountRequest = {
            xIntegrationosConnectionKey: xIntegrationosConnectionKey,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetLeadsCountRequest$.outboundSchema.parse(input$);
        const body$ = null;

        const path$ = this.templateURLComponent("/leads/count")();

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
            const result = operations.GetLeadsCountResponse$.inboundSchema.parse({
                ...responseFields$,
                object: responseBody,
            });
            return {
                contentType: result.contentType,
                statusCode: result.statusCode as any,
                rawResponse: result.rawResponse,
                ...result.object
            };
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }
}
