# Leads
(*leads*)

### Available Operations

* [get](#get) - Get leads
* [delete](#delete) - Delete leads
* [update](#update) - Update leads
* [list](#list) - List leads
* [create](#create) - Create leads
* [count](#count) - Get leads count

## get

Get a single leads record

### Example Usage

```typescript
import { IntegrationOS } from "@integrationos/node";

async function run() {
  const sdk = new IntegrationOS();

  const id = "string";
  const xIntegrationosSecret = "string";
  const xIntegrationosConnectionKey = "string";
  
  const res = await sdk.leads.get(id, xIntegrationosSecret, xIntegrationosConnectionKey);

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

**Promise<[operations.GetLeadsIdResponse](../../models/operations/getleadsidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## delete

Delete a single leads record

### Example Usage

```typescript
import { IntegrationOS } from "@integrationos/node";

async function run() {
  const sdk = new IntegrationOS();

  const id = "string";
  const xIntegrationosSecret = "string";
  const xIntegrationosConnectionKey = "string";
  
  const res = await sdk.leads.delete(id, xIntegrationosSecret, xIntegrationosConnectionKey);

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

**Promise<[operations.DeleteLeadsIdResponse](../../models/operations/deleteleadsidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## update

Update a single leads record

### Example Usage

```typescript
import { IntegrationOS } from "@integrationos/node";
import { EmailType, LeadStatus, PatchLeadsIdPreferredContactMethod, PhoneType } from "@integrationos/node/models/operations";

async function run() {
  const sdk = new IntegrationOS();

  const id = "string";
  const xIntegrationosSecret = "string";
  const xIntegrationosConnectionKey = "string";
  const requestBody = {
    opportunities: [
      {
        campaign: {},
        account: {},
        contacts: [
          {},
        ],
        owner: {},
        attachments: [
          {},
        ],
        notes: [
          "string",
        ],
        customFields: [
          {},
        ],
      },
    ],
    leadSource: {},
    addresses: [
      {
        geoLocation: {},
        customFields: [
          {},
        ],
      },
    ],
    socialProfiles: [
      {
        additionalInfo: {},
      },
    ],
    customFields: [
      {},
    ],
    notes: [
      {
        author: {},
        tags: [
          "string",
        ],
        attachments: [
          {},
        ],
        sharedWith: [
          {},
        ],
        metadata: [
          "string",
        ],
      },
    ],
  };
  
  const res = await sdk.leads.update(id, xIntegrationosSecret, xIntegrationosConnectionKey, requestBody);

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
| `requestBody`                                                                                                                                                                  | [operations.PatchLeadsIdRequestBody](../../models/operations/patchleadsidrequestbody.md)                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.PatchLeadsIdResponse](../../models/operations/patchleadsidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## list

Get all leads records

### Example Usage

```typescript
import { IntegrationOS } from "@integrationos/node";

async function run() {
  const sdk = new IntegrationOS();

  const xIntegrationosSecret = "string";
  const xIntegrationosConnectionKey = "string";
  
  const res = await sdk.leads.list(xIntegrationosSecret, xIntegrationosConnectionKey);

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

**Promise<[operations.GetLeadsResponse](../../models/operations/getleadsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## create

Create a single leads record

### Example Usage

```typescript
import { IntegrationOS } from "@integrationos/node";
import {
  PostLeadsEmailType,
  PostLeadsLeadStatus,
  PostLeadsPhoneType,
  PostLeadsPreferredContactMethod,
} from "@integrationos/node/models/operations";

async function run() {
  const sdk = new IntegrationOS();

  const xIntegrationosSecret = "string";
  const xIntegrationosConnectionKey = "string";
  const requestBody = {
    id: "<ID>",
    name: "string",
    firstName: "string",
    middleName: "string",
    lastName: "string",
    email: "Jena.Nienow28@yahoo.com",
    opportunities: [
      {
        campaign: {},
        account: {},
        contacts: [
          {},
        ],
        owner: {},
        attachments: [
          {},
        ],
        notes: [
          "string",
        ],
        customFields: [
          {},
        ],
      },
    ],
    emailType: PostLeadsEmailType.Work,
    phone: "297-598-0413 x07788",
    phoneType: PostLeadsPhoneType.Home,
    companyName: "string",
    jobTitle: "string",
    website: "string",
    leadSource: {},
    leadStatus: PostLeadsLeadStatus.Unqualified,
    industry: "string",
    numberOfEmployees: 8275.63,
    annualRevenue: 7524.38,
    addresses: [
      {
        geoLocation: {},
        customFields: [
          {},
        ],
      },
    ],
    createdAt: 4915.7,
    updatedAt: 9574.09,
    preferredContactMethod: PostLeadsPreferredContactMethod.Mail,
    socialProfiles: [
      {
        additionalInfo: {},
      },
    ],
    customFields: [
      {},
    ],
    notes: [
      {
        author: {},
        tags: [
          "string",
        ],
        attachments: [
          {},
        ],
        sharedWith: [
          {},
        ],
        metadata: [
          "string",
        ],
      },
    ],
  };
  
  const res = await sdk.leads.create(xIntegrationosSecret, xIntegrationosConnectionKey, requestBody);

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
| `requestBody`                                                                                                                                                                  | [operations.PostLeadsRequestBody](../../models/operations/postleadsrequestbody.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.PostLeadsResponse](../../models/operations/postleadsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## count

Get the count of leads records

### Example Usage

```typescript
import { IntegrationOS } from "@integrationos/node";

async function run() {
  const sdk = new IntegrationOS();

  const xIntegrationosSecret = "string";
  const xIntegrationosConnectionKey = "string";
  
  const res = await sdk.leads.count(xIntegrationosSecret, xIntegrationosConnectionKey);

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

**Promise<[operations.GetLeadsCountResponse](../../models/operations/getleadscountresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
