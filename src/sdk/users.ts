/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as errors from "../models/errors";
import * as operations from "../models/operations";

export class Users extends ClientSDK {
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
   * Get users
   *
   * @remarks
   * Get a single users record
   */
  async get(
    connectionKey: string,
    { id }: { id: string },
    options?: RequestOptions
  ): Promise<operations.GetUsersIdResponse> {
    const input$: operations.GetUsersIdRequest = {
      id: id,
      xIntegrationosSecret: this.options$.client as string,
      xIntegrationosConnectionKey: connectionKey,
    };
    const headers$ = new Headers();
    headers$.set("user-agent", SDK_METADATA.userAgent);
    headers$.set("Accept", "application/json");

    const payload$ = operations.GetUsersIdRequest$.outboundSchema.parse(input$);
    const body$ = null;

    const pathParams$ = {
      id: enc$.encodeSimple("id", payload$.id, {
        explode: false,
        charEncoding: "percent",
      }),
    };

    const path$ = this.templateURLComponent("/users/{id}")(pathParams$);

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
      const result = operations.GetUsersIdResponse$.inboundSchema.parse({
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
   * Delete users
   *
   * @remarks
   * Delete a single users record
   */
  async delete(
    connectionKey: string,
    { id }: { id: string },
    options?: RequestOptions
  ): Promise<operations.DeleteUsersIdResponse> {
    const input$: operations.DeleteUsersIdRequest = {
      id: id,
      xIntegrationosSecret: this.options$.client as string,
      xIntegrationosConnectionKey: connectionKey,
    };
    const headers$ = new Headers();
    headers$.set("user-agent", SDK_METADATA.userAgent);
    headers$.set("Accept", "application/json");

    const payload$ =
      operations.DeleteUsersIdRequest$.outboundSchema.parse(input$);
    const body$ = null;

    const pathParams$ = {
      id: enc$.encodeSimple("id", payload$.id, {
        explode: false,
        charEncoding: "percent",
      }),
    };

    const path$ = this.templateURLComponent("/users/{id}")(pathParams$);

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
      const result = operations.DeleteUsersIdResponse$.inboundSchema.parse({
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
   * Update users
   *
   * @remarks
   * Update a single users record
   */
  async update(
    connectionKey: string,
    { id }: { id: string },
    requestBody?: operations.PatchUsersIdRequestBody | undefined,
    options?: RequestOptions
  ): Promise<operations.PatchUsersIdResponse> {
    const input$: operations.PatchUsersIdRequest = {
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
      operations.PatchUsersIdRequest$.outboundSchema.parse(input$);

    const body$ = enc$.encodeJSON("body", payload$.RequestBody, {
      explode: true,
    });

    const pathParams$ = {
      id: enc$.encodeSimple("id", payload$.id, {
        explode: false,
        charEncoding: "percent",
      }),
    };

    const path$ = this.templateURLComponent("/users/{id}")(pathParams$);

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
      const result = operations.PatchUsersIdResponse$.inboundSchema.parse({
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
   * List users
   *
   * @remarks
   * Get all users records
   */
  async list(
    connectionKey: string,
    options?: RequestOptions
  ): Promise<operations.GetUsersResponse> {
    const input$: operations.GetUsersRequest = {
      xIntegrationosSecret: this.options$.client as string,
      xIntegrationosConnectionKey: connectionKey,
    };
    const headers$ = new Headers();
    headers$.set("user-agent", SDK_METADATA.userAgent);
    headers$.set("Accept", "application/json");

    const payload$ = operations.GetUsersRequest$.outboundSchema.parse(input$);
    const body$ = null;

    const path$ = this.templateURLComponent("/users")();

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
      const result = operations.GetUsersResponse$.inboundSchema.parse({
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
   * Create users
   *
   * @remarks
   * Create a single users record
   */
  async create(
    connectionKey: string,
    requestBody: operations.PostUsersRequestBody,
    options?: RequestOptions
  ): Promise<operations.PostUsersResponse> {
    const input$: operations.PostUsersRequest = {
      xIntegrationosSecret: this.options$.client as string,
      xIntegrationosConnectionKey: connectionKey,
      requestBody: requestBody,
    };
    const headers$ = new Headers();
    headers$.set("user-agent", SDK_METADATA.userAgent);
    headers$.set("Content-Type", "application/json");
    headers$.set("Accept", "application/json");

    const payload$ = operations.PostUsersRequest$.outboundSchema.parse(input$);

    const body$ = enc$.encodeJSON("body", payload$.RequestBody, {
      explode: true,
    });

    const path$ = this.templateURLComponent("/users")();

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
      const result = operations.PostUsersResponse$.inboundSchema.parse({
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
   * Get users count
   *
   * @remarks
   * Get the count of users records
   */
  async count(
    connectionKey: string,
    options?: RequestOptions
  ): Promise<operations.GetUsersCountResponse> {
    const input$: operations.GetUsersCountRequest = {
      xIntegrationosSecret: this.options$.client as string,
      xIntegrationosConnectionKey: connectionKey,
    };
    const headers$ = new Headers();
    headers$.set("user-agent", SDK_METADATA.userAgent);
    headers$.set("Accept", "application/json");

    const payload$ =
      operations.GetUsersCountRequest$.outboundSchema.parse(input$);
    const body$ = null;

    const path$ = this.templateURLComponent("/users/count")();

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
      const result = operations.GetUsersCountResponse$.inboundSchema.parse({
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