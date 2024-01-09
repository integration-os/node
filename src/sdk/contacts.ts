/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as errors from "../models/errors";
import * as operations from "../models/operations";

export class Contacts extends ClientSDK {
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
   * Get contacts
   *
   * @remarks
   * Get a single contacts record
   */
  async get(
    connectionKey: string,
    { id }: { id: string },
    options?: RequestOptions
  ): Promise<operations.GetContactsIdResponse> {
    const input$: operations.GetContactsIdRequest = {
      id: id,
      xIntegrationosSecret: this.options$.client as string,
      xIntegrationosConnectionKey: connectionKey,
    };
    const headers$ = new Headers();
    headers$.set("user-agent", SDK_METADATA.userAgent);
    headers$.set("Accept", "application/json");

    const payload$ =
      operations.GetContactsIdRequest$.outboundSchema.parse(input$);
    const body$ = null;

    const pathParams$ = {
      id: enc$.encodeSimple("id", payload$.id, {
        explode: false,
        charEncoding: "percent",
      }),
    };

    const path$ = this.templateURLComponent("/contacts/{id}")(pathParams$);

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
      const result = operations.GetContactsIdResponse$.inboundSchema.parse({
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
   * Delete contacts
   *
   * @remarks
   * Delete a single contacts record
   */
  async delete(
    connectionKey: string,
    { id }: { id: string },
    options?: RequestOptions
  ): Promise<operations.DeleteContactsIdResponse> {
    const input$: operations.DeleteContactsIdRequest = {
      id: id,
      xIntegrationosSecret: this.options$.client as string,
      xIntegrationosConnectionKey: connectionKey,
    };
    const headers$ = new Headers();
    headers$.set("user-agent", SDK_METADATA.userAgent);
    headers$.set("Accept", "application/json");

    const payload$ =
      operations.DeleteContactsIdRequest$.outboundSchema.parse(input$);
    const body$ = null;

    const pathParams$ = {
      id: enc$.encodeSimple("id", payload$.id, {
        explode: false,
        charEncoding: "percent",
      }),
    };

    const path$ = this.templateURLComponent("/contacts/{id}")(pathParams$);

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
      const result = operations.DeleteContactsIdResponse$.inboundSchema.parse({
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
   * Update contacts
   *
   * @remarks
   * Update a single contacts record
   */
  async update(
    connectionKey: string,
    { id }: { id: string },
    requestBody?: operations.PatchContactsIdRequestBody | undefined,
    options?: RequestOptions
  ): Promise<operations.PatchContactsIdResponse> {
    const input$: operations.PatchContactsIdRequest = {
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
      operations.PatchContactsIdRequest$.outboundSchema.parse(input$);

    const body$ = enc$.encodeJSON("body", payload$.RequestBody, {
      explode: true,
    });

    const pathParams$ = {
      id: enc$.encodeSimple("id", payload$.id, {
        explode: false,
        charEncoding: "percent",
      }),
    };

    const path$ = this.templateURLComponent("/contacts/{id}")(pathParams$);

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
      const result = operations.PatchContactsIdResponse$.inboundSchema.parse({
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
   * List contacts
   *
   * @remarks
   * Get all contacts records
   */
  async list(
    connectionKey: string,
    options?: RequestOptions
  ): Promise<operations.GetContactsResponse> {
    const input$: operations.GetContactsRequest = {
      xIntegrationosSecret: this.options$.client as string,
      xIntegrationosConnectionKey: connectionKey,
    };
    const headers$ = new Headers();
    headers$.set("user-agent", SDK_METADATA.userAgent);
    headers$.set("Accept", "application/json");

    const payload$ =
      operations.GetContactsRequest$.outboundSchema.parse(input$);
    const body$ = null;

    const path$ = this.templateURLComponent("/contacts")();

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
      const result = operations.GetContactsResponse$.inboundSchema.parse({
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
   * Create contacts
   *
   * @remarks
   * Create a single contacts record
   */
  async create(
    connectionKey: string,
    requestBody: operations.PostContactsRequestBody,
    options?: RequestOptions
  ): Promise<operations.PostContactsResponse> {
    const input$: operations.PostContactsRequest = {
      xIntegrationosSecret: this.options$.client as string,
      xIntegrationosConnectionKey: connectionKey,
      requestBody: requestBody,
    };
    const headers$ = new Headers();
    headers$.set("user-agent", SDK_METADATA.userAgent);
    headers$.set("Content-Type", "application/json");
    headers$.set("Accept", "application/json");

    const payload$ =
      operations.PostContactsRequest$.outboundSchema.parse(input$);

    const body$ = enc$.encodeJSON("body", payload$.RequestBody, {
      explode: true,
    });

    const path$ = this.templateURLComponent("/contacts")();

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
      const result = operations.PostContactsResponse$.inboundSchema.parse({
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
   * Get contacts count
   *
   * @remarks
   * Get the count of contacts records
   */
  async count(
    connectionKey: string,
    options?: RequestOptions
  ): Promise<operations.GetContactsCountResponse> {
    const input$: operations.GetContactsCountRequest = {
      xIntegrationosSecret: this.options$.client as string,
      xIntegrationosConnectionKey: connectionKey,
    };
    const headers$ = new Headers();
    headers$.set("user-agent", SDK_METADATA.userAgent);
    headers$.set("Accept", "application/json");

    const payload$ =
      operations.GetContactsCountRequest$.outboundSchema.parse(input$);
    const body$ = null;

    const path$ = this.templateURLComponent("/contacts/count")();

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
      const result = operations.GetContactsCountResponse$.inboundSchema.parse({
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
