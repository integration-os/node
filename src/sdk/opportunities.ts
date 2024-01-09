/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as errors from "../models/errors";
import * as operations from "../models/operations";

export class Opportunities extends ClientSDK {
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
   * Get opportunities
   *
   * @remarks
   * Get a single opportunities record
   */
  async get(
    connectionKey: string,
    { id }: { id: string },
    options?: RequestOptions
  ): Promise<operations.GetOpportunitiesIdResponse> {
    const input$: operations.GetOpportunitiesIdRequest = {
      id: id,
      xIntegrationosSecret: this.options$.client as string,
      xIntegrationosConnectionKey: connectionKey,
    };
    const headers$ = new Headers();
    headers$.set("user-agent", SDK_METADATA.userAgent);
    headers$.set("Accept", "application/json");

    const payload$ =
      operations.GetOpportunitiesIdRequest$.outboundSchema.parse(input$);
    const body$ = null;

    const pathParams$ = {
      id: enc$.encodeSimple("id", payload$.id, {
        explode: false,
        charEncoding: "percent",
      }),
    };

    const path$ = this.templateURLComponent("/opportunities/{id}")(pathParams$);

    headers$.set(
      "X-INTEGRATIONOS-CONNECTION-KEY",
      enc$.encodeSimple(
        "X-INTEGRATIONOS-CONNECTION-KEY",
        payload$["X-INTEGRATIONOS-CONNECTION-KEY"],
        { explode: false, charEncoding: "none" }
      )
    );
    headers$.set(
      "X-INTEGRATIONOS-SECRET",
      enc$.encodeSimple(
        "X-INTEGRATIONOS-SECRET",
        payload$["X-INTEGRATIONOS-SECRET"],
        {
          explode: false,
          charEncoding: "none",
        }
      )
    );

    const response = await this.fetch$(
      { method: "get", path: path$, headers: headers$, body: body$ },
      options
    );

    const responseFields$ = {
      ContentType:
        response.headers.get("content-type") ?? "application/octet-stream",
      StatusCode: response.status,
      RawResponse: response,
    };

    if (this.matchResponse(response, 200, "application/json")) {
      const responseBody = await response.json();
      const result = operations.GetOpportunitiesIdResponse$.inboundSchema.parse(
        {
          ...responseFields$,
          object: responseBody,
        }
      );
      return result;
    } else {
      const responseBody = await response.text();
      throw new errors.SDKError(
        "Unexpected API response",
        response,
        responseBody
      );
    }
  }

  /**
   * Delete opportunities
   *
   * @remarks
   * Delete a single opportunities record
   */
  async delete(
    connectionKey: string,
    { id }: { id: string },
    options?: RequestOptions
  ): Promise<operations.DeleteOpportunitiesIdResponse> {
    const input$: operations.DeleteOpportunitiesIdRequest = {
      id: id,
      xIntegrationosSecret: this.options$.client as string,
      xIntegrationosConnectionKey: connectionKey,
    };
    const headers$ = new Headers();
    headers$.set("user-agent", SDK_METADATA.userAgent);
    headers$.set("Accept", "application/json");

    const payload$ =
      operations.DeleteOpportunitiesIdRequest$.outboundSchema.parse(input$);
    const body$ = null;

    const pathParams$ = {
      id: enc$.encodeSimple("id", payload$.id, {
        explode: false,
        charEncoding: "percent",
      }),
    };

    const path$ = this.templateURLComponent("/opportunities/{id}")(pathParams$);

    headers$.set(
      "X-INTEGRATIONOS-CONNECTION-KEY",
      enc$.encodeSimple(
        "X-INTEGRATIONOS-CONNECTION-KEY",
        payload$["X-INTEGRATIONOS-CONNECTION-KEY"],
        { explode: false, charEncoding: "none" }
      )
    );
    headers$.set(
      "X-INTEGRATIONOS-SECRET",
      enc$.encodeSimple(
        "X-INTEGRATIONOS-SECRET",
        payload$["X-INTEGRATIONOS-SECRET"],
        {
          explode: false,
          charEncoding: "none",
        }
      )
    );

    const response = await this.fetch$(
      { method: "delete", path: path$, headers: headers$, body: body$ },
      options
    );

    const responseFields$ = {
      ContentType:
        response.headers.get("content-type") ?? "application/octet-stream",
      StatusCode: response.status,
      RawResponse: response,
    };

    if (this.matchResponse(response, 200, "application/json")) {
      const responseBody = await response.json();
      const result =
        operations.DeleteOpportunitiesIdResponse$.inboundSchema.parse({
          ...responseFields$,
          object: responseBody,
        });
      return result;
    } else {
      const responseBody = await response.text();
      throw new errors.SDKError(
        "Unexpected API response",
        response,
        responseBody
      );
    }
  }

  /**
   * Update opportunities
   *
   * @remarks
   * Update a single opportunities record
   */
  async update(
    connectionKey: string,
    { id }: { id: string },
    requestBody?: operations.PatchOpportunitiesIdRequestBody | undefined,
    options?: RequestOptions
  ): Promise<operations.PatchOpportunitiesIdResponse> {
    const input$: operations.PatchOpportunitiesIdRequest = {
      id: id,
      xIntegrationosSecret: this.options$.client as string,
      xIntegrationosConnectionKey: connectionKey,
      requestBody: requestBody,
    };
    const headers$ = new Headers();
    headers$.set("user-agent", SDK_METADATA.userAgent);
    headers$.set("Content-Type", "application/json");
    headers$.set("Accept", "application/json");

    const payload$ =
      operations.PatchOpportunitiesIdRequest$.outboundSchema.parse(input$);

    const body$ = enc$.encodeJSON("body", payload$.RequestBody, {
      explode: true,
    });

    const pathParams$ = {
      id: enc$.encodeSimple("id", payload$.id, {
        explode: false,
        charEncoding: "percent",
      }),
    };

    const path$ = this.templateURLComponent("/opportunities/{id}")(pathParams$);

    headers$.set(
      "X-INTEGRATIONOS-CONNECTION-KEY",
      enc$.encodeSimple(
        "X-INTEGRATIONOS-CONNECTION-KEY",
        payload$["X-INTEGRATIONOS-CONNECTION-KEY"],
        { explode: false, charEncoding: "none" }
      )
    );
    headers$.set(
      "X-INTEGRATIONOS-SECRET",
      enc$.encodeSimple(
        "X-INTEGRATIONOS-SECRET",
        payload$["X-INTEGRATIONOS-SECRET"],
        {
          explode: false,
          charEncoding: "none",
        }
      )
    );

    const response = await this.fetch$(
      { method: "patch", path: path$, headers: headers$, body: body$ },
      options
    );

    const responseFields$ = {
      ContentType:
        response.headers.get("content-type") ?? "application/octet-stream",
      StatusCode: response.status,
      RawResponse: response,
    };

    if (this.matchResponse(response, 200, "application/json")) {
      const responseBody = await response.json();
      const result =
        operations.PatchOpportunitiesIdResponse$.inboundSchema.parse({
          ...responseFields$,
          object: responseBody,
        });
      return result;
    } else {
      const responseBody = await response.text();
      throw new errors.SDKError(
        "Unexpected API response",
        response,
        responseBody
      );
    }
  }

  /**
   * List opportunities
   *
   * @remarks
   * Get all opportunities records
   */
  async list(
    connectionKey: string,
    options?: RequestOptions
  ): Promise<operations.GetOpportunitiesResponse> {
    const input$: operations.GetOpportunitiesRequest = {
      xIntegrationosSecret: this.options$.client as string,
      xIntegrationosConnectionKey: connectionKey,
    };
    const headers$ = new Headers();
    headers$.set("user-agent", SDK_METADATA.userAgent);
    headers$.set("Accept", "application/json");

    const payload$ =
      operations.GetOpportunitiesRequest$.outboundSchema.parse(input$);
    const body$ = null;

    const path$ = this.templateURLComponent("/opportunities")();

    headers$.set(
      "X-INTEGRATIONOS-CONNECTION-KEY",
      enc$.encodeSimple(
        "X-INTEGRATIONOS-CONNECTION-KEY",
        payload$["X-INTEGRATIONOS-CONNECTION-KEY"],
        { explode: false, charEncoding: "none" }
      )
    );
    headers$.set(
      "X-INTEGRATIONOS-SECRET",
      enc$.encodeSimple(
        "X-INTEGRATIONOS-SECRET",
        payload$["X-INTEGRATIONOS-SECRET"],
        {
          explode: false,
          charEncoding: "none",
        }
      )
    );

    const response = await this.fetch$(
      { method: "get", path: path$, headers: headers$, body: body$ },
      options
    );

    const responseFields$ = {
      ContentType:
        response.headers.get("content-type") ?? "application/octet-stream",
      StatusCode: response.status,
      RawResponse: response,
    };

    if (this.matchResponse(response, 200, "application/json")) {
      const responseBody = await response.json();
      const result = operations.GetOpportunitiesResponse$.inboundSchema.parse({
        ...responseFields$,
        object: responseBody,
      });
      return result;
    } else {
      const responseBody = await response.text();
      throw new errors.SDKError(
        "Unexpected API response",
        response,
        responseBody
      );
    }
  }

  /**
   * Create opportunities
   *
   * @remarks
   * Create a single opportunities record
   */
  async create(
    connectionKey: string,
    requestBody: operations.PostOpportunitiesRequestBody,
    options?: RequestOptions
  ): Promise<operations.PostOpportunitiesResponse> {
    const input$: operations.PostOpportunitiesRequest = {
      xIntegrationosSecret: this.options$.client as string,
      xIntegrationosConnectionKey: connectionKey,
      requestBody: requestBody,
    };
    const headers$ = new Headers();
    headers$.set("user-agent", SDK_METADATA.userAgent);
    headers$.set("Content-Type", "application/json");
    headers$.set("Accept", "application/json");

    const payload$ =
      operations.PostOpportunitiesRequest$.outboundSchema.parse(input$);

    const body$ = enc$.encodeJSON("body", payload$.RequestBody, {
      explode: true,
    });

    const path$ = this.templateURLComponent("/opportunities")();

    headers$.set(
      "X-INTEGRATIONOS-CONNECTION-KEY",
      enc$.encodeSimple(
        "X-INTEGRATIONOS-CONNECTION-KEY",
        payload$["X-INTEGRATIONOS-CONNECTION-KEY"],
        { explode: false, charEncoding: "none" }
      )
    );
    headers$.set(
      "X-INTEGRATIONOS-SECRET",
      enc$.encodeSimple(
        "X-INTEGRATIONOS-SECRET",
        payload$["X-INTEGRATIONOS-SECRET"],
        {
          explode: false,
          charEncoding: "none",
        }
      )
    );

    const response = await this.fetch$(
      { method: "post", path: path$, headers: headers$, body: body$ },
      options
    );

    const responseFields$ = {
      ContentType:
        response.headers.get("content-type") ?? "application/octet-stream",
      StatusCode: response.status,
      RawResponse: response,
    };

    if (this.matchResponse(response, 200, "application/json")) {
      const responseBody = await response.json();
      const result = operations.PostOpportunitiesResponse$.inboundSchema.parse({
        ...responseFields$,
        object: responseBody,
      });
      return result;
    } else {
      const responseBody = await response.text();
      throw new errors.SDKError(
        "Unexpected API response",
        response,
        responseBody
      );
    }
  }

  /**
   * Get opportunities count
   *
   * @remarks
   * Get the count of opportunities records
   */
  async count(
    connectionKey: string,
    options?: RequestOptions
  ): Promise<operations.GetOpportunitiesCountResponse> {
    const input$: operations.GetOpportunitiesCountRequest = {
      xIntegrationosSecret: this.options$.client as string,
      xIntegrationosConnectionKey: connectionKey,
    };
    const headers$ = new Headers();
    headers$.set("user-agent", SDK_METADATA.userAgent);
    headers$.set("Accept", "application/json");

    const payload$ =
      operations.GetOpportunitiesCountRequest$.outboundSchema.parse(input$);
    const body$ = null;

    const path$ = this.templateURLComponent("/opportunities/count")();

    headers$.set(
      "X-INTEGRATIONOS-CONNECTION-KEY",
      enc$.encodeSimple(
        "X-INTEGRATIONOS-CONNECTION-KEY",
        payload$["X-INTEGRATIONOS-CONNECTION-KEY"],
        { explode: false, charEncoding: "none" }
      )
    );
    headers$.set(
      "X-INTEGRATIONOS-SECRET",
      enc$.encodeSimple(
        "X-INTEGRATIONOS-SECRET",
        payload$["X-INTEGRATIONOS-SECRET"],
        {
          explode: false,
          charEncoding: "none",
        }
      )
    );

    const response = await this.fetch$(
      { method: "get", path: path$, headers: headers$, body: body$ },
      options
    );

    const responseFields$ = {
      ContentType:
        response.headers.get("content-type") ?? "application/octet-stream",
      StatusCode: response.status,
      RawResponse: response,
    };

    if (this.matchResponse(response, 200, "application/json")) {
      const responseBody = await response.json();
      const result =
        operations.GetOpportunitiesCountResponse$.inboundSchema.parse({
          ...responseFields$,
          object: responseBody,
        });
      return result;
    } else {
      const responseBody = await response.text();
      throw new errors.SDKError(
        "Unexpected API response",
        response,
        responseBody
      );
    }
  }
}
