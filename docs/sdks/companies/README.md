# Companies
(*companies*)

### Available Operations

* [get](#get) - Get companies
* [delete](#delete) - Delete companies
* [update](#update) - Update companies
* [list](#list) - List companies
* [create](#create) - Create companies
* [count](#count) - Get companies count

## get

Get a single companies record

### Example Usage

```typescript
import { IntegrationOS } from "@integrationos/node";

async function run() {
  const sdk = new IntegrationOS();

  const id = "string";
  const xIntegrationosSecret = "string";
  const xIntegrationosConnectionKey = "string";
  
  const res = await sdk.companies.get(id, xIntegrationosSecret, xIntegrationosConnectionKey);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The id of the model                                                                                                                                                            |
| `xIntegrationosSecret`                                                                                                                                                         | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | IntegrationOS API key                                                                                                                                                          |
| `xIntegrationosConnectionKey`                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique identifier of a Connected Account                                                                                                                                   |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetCompaniesIdResponse](../../models/operations/getcompaniesidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## delete

Delete a single companies record

### Example Usage

```typescript
import { IntegrationOS } from "@integrationos/node";

async function run() {
  const sdk = new IntegrationOS();

  const id = "string";
  const xIntegrationosSecret = "string";
  const xIntegrationosConnectionKey = "string";
  
  const res = await sdk.companies.delete(id, xIntegrationosSecret, xIntegrationosConnectionKey);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The id of the model                                                                                                                                                            |
| `xIntegrationosSecret`                                                                                                                                                         | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | IntegrationOS API key                                                                                                                                                          |
| `xIntegrationosConnectionKey`                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique identifier of a Connected Account                                                                                                                                   |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.DeleteCompaniesIdResponse](../../models/operations/deletecompaniesidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## update

Update a single companies record

### Example Usage

```typescript
import { IntegrationOS } from "@integrationos/node";
import { PatchCompaniesIdType } from "@integrationos/node/models/operations";

async function run() {
  const sdk = new IntegrationOS();

  const id = "string";
  const xIntegrationosSecret = "string";
  const xIntegrationosConnectionKey = "string";
  const requestBody = {
    address: {
      geoLocation: {},
      customFields: [
        {},
      ],
    },
    tags: [
      "string",
    ],
    socialProfiles: [
      {
        additionalInfo: {},
      },
    ],
    additionalContacts: [
      {
        emails: [
          "string",
        ],
        phones: [
          "string",
        ],
        address: {},
        addresses: [
          {},
        ],
        notes: {},
        tags: [
          "string",
        ],
        websites: [
          "string",
        ],
        socialProfiles: [
          {},
        ],
        customFields: [
          {},
        ],
      },
    ],
  };
  
  const res = await sdk.companies.update(id, xIntegrationosSecret, xIntegrationosConnectionKey, requestBody);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The id of the model                                                                                                                                                            |
| `xIntegrationosSecret`                                                                                                                                                         | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | IntegrationOS API key                                                                                                                                                          |
| `xIntegrationosConnectionKey`                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique identifier of a Connected Account                                                                                                                                   |
| `requestBody`                                                                                                                                                                  | [operations.PatchCompaniesIdRequestBody](../../models/operations/patchcompaniesidrequestbody.md)                                                                               | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.PatchCompaniesIdResponse](../../models/operations/patchcompaniesidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## list

Get all companies records

### Example Usage

```typescript
import { IntegrationOS } from "@integrationos/node";

async function run() {
  const sdk = new IntegrationOS();

  const xIntegrationosSecret = "string";
  const xIntegrationosConnectionKey = "string";
  
  const res = await sdk.companies.list(xIntegrationosSecret, xIntegrationosConnectionKey);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `xIntegrationosSecret`                                                                                                                                                         | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | IntegrationOS API key                                                                                                                                                          |
| `xIntegrationosConnectionKey`                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique identifier of a Connected Account                                                                                                                                   |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetCompaniesResponse](../../models/operations/getcompaniesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## create

Create a single companies record

### Example Usage

```typescript
import { IntegrationOS } from "@integrationos/node";
import { PostCompaniesType } from "@integrationos/node/models/operations";

async function run() {
  const sdk = new IntegrationOS();

  const xIntegrationosSecret = "string";
  const xIntegrationosConnectionKey = "string";
  const requestBody = {
    id: 4865.89,
    name: "string",
    legalName: "string",
    type: "string",
    industry: "string",
    address: {
      geoLocation: {},
      customFields: [
        {},
      ],
    },
    phone: "784.417.0973 x980",
    email: "Cecelia71@yahoo.com",
    website: "string",
    foundedDate: 7926.2,
    numberOfEmployees: 8559.52,
    revenue: 8165.88,
    revenueCurrency: "string",
    tags: [
      "string",
    ],
    socialProfiles: [
      {
        additionalInfo: {},
      },
    ],
    logo: "string",
    description: "Optional maximized service-desk",
    stockSymbol: "string",
    parentCompanyId: "string",
    additionalContacts: [
      {
        emails: [
          "string",
        ],
        phones: [
          "string",
        ],
        address: {},
        addresses: [
          {},
        ],
        notes: {},
        tags: [
          "string",
        ],
        websites: [
          "string",
        ],
        socialProfiles: [
          {},
        ],
        customFields: [
          {},
        ],
      },
    ],
    incorporationCountry: "string",
    incorporationDate: 7524.38,
    taxId: "string",
    regulatoryStatus: "string",
    dunsNumber: "string",
  };
  
  const res = await sdk.companies.create(xIntegrationosSecret, xIntegrationosConnectionKey, requestBody);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `xIntegrationosSecret`                                                                                                                                                         | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | IntegrationOS API key                                                                                                                                                          |
| `xIntegrationosConnectionKey`                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique identifier of a Connected Account                                                                                                                                   |
| `requestBody`                                                                                                                                                                  | [operations.PostCompaniesRequestBody](../../models/operations/postcompaniesrequestbody.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.PostCompaniesResponse](../../models/operations/postcompaniesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## count

Get the count of companies records

### Example Usage

```typescript
import { IntegrationOS } from "@integrationos/node";

async function run() {
  const sdk = new IntegrationOS();

  const xIntegrationosSecret = "string";
  const xIntegrationosConnectionKey = "string";
  
  const res = await sdk.companies.count(xIntegrationosSecret, xIntegrationosConnectionKey);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `xIntegrationosSecret`                                                                                                                                                         | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | IntegrationOS API key                                                                                                                                                          |
| `xIntegrationosConnectionKey`                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique identifier of a Connected Account                                                                                                                                   |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetCompaniesCountResponse](../../models/operations/getcompaniescountresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
