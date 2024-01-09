/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as errors from "../models/errors";
import * as operations from "../models/operations";

export class Pets extends ClientSDK {
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
     * List all pets
     */
    async listPets(
        limit?: number | undefined,
        options?: RequestOptions
    ): Promise<operations.ListPetsResponse> {
        const input$: operations.ListPetsRequest = {
            limit: limit,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.ListPetsRequest$.outboundSchema.parse(input$);
        const body$ = null;

        const path$ = this.templateURLComponent("/pets")();

        const query$ = [
            enc$.encodeForm("limit", payload$.limit, { explode: true, charEncoding: "percent" }),
        ]
            .filter(Boolean)
            .join("&");

        const response = await this.fetch$(
            { method: "GET", path: path$, headers: headers$, query: query$, body: body$ },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.ListPetsResponse$.inboundSchema.parse({
                ...responseFields$,
                Headers: this.unpackHeaders(response.headers),
                Pets: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, "default", "application/json")) {
            const responseBody = await response.json();
            const result = operations.ListPetsResponse$.inboundSchema.parse({
                ...responseFields$,
                Error: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Create a pet
     */
    async createPets(options?: RequestOptions): Promise<operations.CreatePetsResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const path$ = this.templateURLComponent("/pets")();

        const response = await this.fetch$(
            { method: "POST", path: path$, headers: headers$ },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchStatusCode(response, 201)) {
            // fallthrough
        } else if (this.matchResponse(response, "default", "application/json")) {
            const responseBody = await response.json();
            const result = operations.CreatePetsResponse$.inboundSchema.parse({
                ...responseFields$,
                Error: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }

        return operations.CreatePetsResponse$.inboundSchema.parse(responseFields$);
    }

    /**
     * Info for a specific pet
     */
    async showPetById(
        petId: string,
        options?: RequestOptions
    ): Promise<operations.ShowPetByIdResponse> {
        const input$: operations.ShowPetByIdRequest = {
            petId: petId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.ShowPetByIdRequest$.outboundSchema.parse(input$);
        const body$ = null;

        const pathParams$ = {
            petId: enc$.encodeSimple("petId", payload$.petId, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent("/pets/{petId}")(pathParams$);

        const response = await this.fetch$(
            { method: "GET", path: path$, headers: headers$, body: body$ },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.ShowPetByIdResponse$.inboundSchema.parse({
                ...responseFields$,
                Pet: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, "default", "application/json")) {
            const responseBody = await response.json();
            const result = operations.ShowPetByIdResponse$.inboundSchema.parse({
                ...responseFields$,
                Error: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }
}
