# Opportunities
(*opportunities*)

### Available Operations

* [get](#get) - Get opportunities
* [delete](#delete) - Delete opportunities
* [update](#update) - Update opportunities
* [list](#list) - List opportunities
* [create](#create) - Create opportunities
* [count](#count) - Get opportunities count

## get

Get a single opportunities record

### Example Usage

```typescript
import { IntegrationOS } from "@integrationos/node";

async function run() {
  const sdk = new IntegrationOS();

  const id = "string";
  const xIntegrationosSecret = "string";
  const xIntegrationosConnectionKey = "string";
  
  const res = await sdk.opportunities.get(id, xIntegrationosSecret, xIntegrationosConnectionKey);

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

**Promise<[operations.GetOpportunitiesIdResponse](../../models/operations/getopportunitiesidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## delete

Delete a single opportunities record

### Example Usage

```typescript
import { IntegrationOS } from "@integrationos/node";

async function run() {
  const sdk = new IntegrationOS();

  const id = "string";
  const xIntegrationosSecret = "string";
  const xIntegrationosConnectionKey = "string";
  
  const res = await sdk.opportunities.delete(id, xIntegrationosSecret, xIntegrationosConnectionKey);

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

**Promise<[operations.DeleteOpportunitiesIdResponse](../../models/operations/deleteopportunitiesidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## update

Update a single opportunities record

### Example Usage

```typescript
import { IntegrationOS } from "@integrationos/node";
import {  } from "@integrationos/node/models";
import {
  AccessControlType,
  AccountType,
  EntityType,
  IdentifierType,
  PatchOpportunitiesIdCommunications,
  PatchOpportunitiesIdGender,
  PatchOpportunitiesIdMimeType,
  PatchOpportunitiesIdOpportunitiesMimeType,
  PatchOpportunitiesIdOpportunitiesRequestRequestBodyAccountType,
  PatchOpportunitiesIdOpportunitiesRequestRequestBodyOwnerPaymentMethodsType,
  PatchOpportunitiesIdOpportunitiesRequestRequestBodyOwnerSocialLinksAdditionalInfoType,
  PatchOpportunitiesIdOpportunitiesRequestRequestBodyOwnerSocialLinksType,
  PatchOpportunitiesIdOpportunitiesRequestRequestBodyType,
  PatchOpportunitiesIdOpportunitiesRequestStatus,
  PatchOpportunitiesIdOpportunitiesRequestType,
  PatchOpportunitiesIdOpportunitiesStatus,
  PatchOpportunitiesIdOpportunitiesType,
  PatchOpportunitiesIdStatus,
  PatchOpportunitiesIdType,
  Rating,
} from "@integrationos/node/models/operations";

async function run() {
  const sdk = new IntegrationOS();

  const id = "string";
  const xIntegrationosSecret = "string";
  const xIntegrationosConnectionKey = "string";
  const requestBody = {
    campaign: {
      channels: [
        "string",
      ],
      performanceMetrics: {},
      creativeAssets: {
        metadata: {},
        associatedWith: {
          attributes: [
            "string",
          ],
        },
        permissions: {
          canView: [
            "string",
          ],
          canEdit: [
            "string",
          ],
          canDelete: [
            "string",
          ],
          roles: [
            "string",
          ],
          assigneeDetails: {},
        },
      },
      tags: [
        "string",
      ],
    },
    account: {
      billingAddress: {
        geoLocation: {},
        customFields: [
          {},
        ],
      },
      shippingAddress: {
        geoLocation: {},
        customFields: [
          {},
        ],
      },
      customFields: [
        {},
      ],
      tags: [
        "string",
      ],
    },
    contacts: [
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
    owner: {
      profilePicture: {
        tags: [
          "string",
        ],
      },
      coverPhoto: {
        tags: [
          "string",
        ],
      },
      addresses: [
        {
          geoLocation: {},
          customFields: [
            {},
          ],
        },
      ],
      roles: [
        PatchOpportunitiesIdRoles.Moderator,
      ],
      preferences: {},
      socialLinks: {
        additionalInfo: {},
      },
      sso: [
        {
          scopes: [
            "string",
          ],
        },
      ],
      paymentMethods: {},
    },
    attachments: [
      {
        metadata: {},
        associatedWith: {},
        permissions: {},
      },
    ],
    notes: [
      "string",
    ],
    customFields: [
      {},
    ],
  };
  
  const res = await sdk.opportunities.update(id, xIntegrationosSecret, xIntegrationosConnectionKey, requestBody);

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
| `requestBody`                                                                                                                                                                  | [operations.PatchOpportunitiesIdRequestBody](../../models/operations/patchopportunitiesidrequestbody.md)                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.PatchOpportunitiesIdResponse](../../models/operations/patchopportunitiesidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## list

Get all opportunities records

### Example Usage

```typescript
import { IntegrationOS } from "@integrationos/node";

async function run() {
  const sdk = new IntegrationOS();

  const xIntegrationosSecret = "string";
  const xIntegrationosConnectionKey = "string";
  
  const res = await sdk.opportunities.list(xIntegrationosSecret, xIntegrationosConnectionKey);

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

**Promise<[operations.GetOpportunitiesResponse](../../models/operations/getopportunitiesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## create

Create a single opportunities record

### Example Usage

```typescript
import { IntegrationOS } from "@integrationos/node";
import {  } from "@integrationos/node/models";
import {
  PostOpportunitiesAccessControlType,
  PostOpportunitiesAccountType,
  PostOpportunitiesCommunications,
  PostOpportunitiesEntityType,
  PostOpportunitiesGender,
  PostOpportunitiesIdentifierType,
  PostOpportunitiesMimeType,
  PostOpportunitiesOpportunitiesMimeType,
  PostOpportunitiesOpportunitiesRequestRequestBodyAccountType,
  PostOpportunitiesOpportunitiesRequestRequestBodyOwnerPaymentMethodsType,
  PostOpportunitiesOpportunitiesRequestRequestBodyOwnerSocialLinksAdditionalInfoType,
  PostOpportunitiesOpportunitiesRequestRequestBodyOwnerSocialLinksType,
  PostOpportunitiesOpportunitiesRequestRequestBodyType,
  PostOpportunitiesOpportunitiesRequestStatus,
  PostOpportunitiesOpportunitiesRequestType,
  PostOpportunitiesOpportunitiesStatus,
  PostOpportunitiesOpportunitiesType,
  PostOpportunitiesRating,
  PostOpportunitiesStatus,
  PostOpportunitiesType,
} from "@integrationos/node/models/operations";

async function run() {
  const sdk = new IntegrationOS();

  const xIntegrationosSecret = "string";
  const xIntegrationosConnectionKey = "string";
  const requestBody = {
    id: "<ID>",
    title: "string",
    description: "Multi-tiered human-resource model",
    amount: 8592.13,
    currency: "Som",
    stage: "string",
    probability: 2884.08,
    closeDate: 1343.65,
    type: "string",
    nextStep: "string",
    leadSource: "string",
    isClosed: false,
    isWon: false,
    createdDate: 7865.46,
    lastModifiedDate: 690.25,
    lostReason: "string",
    campaign: {
      channels: [
        "string",
      ],
      performanceMetrics: {},
      creativeAssets: {
        metadata: {},
        associatedWith: {
          attributes: [
            "string",
          ],
        },
        permissions: {
          canView: [
            "string",
          ],
          canEdit: [
            "string",
          ],
          canDelete: [
            "string",
          ],
          roles: [
            "string",
          ],
          assigneeDetails: {},
        },
      },
      tags: [
        "string",
      ],
    },
    account: {
      billingAddress: {
        geoLocation: {},
        customFields: [
          {},
        ],
      },
      shippingAddress: {
        geoLocation: {},
        customFields: [
          {},
        ],
      },
      customFields: [
        {},
      ],
      tags: [
        "string",
      ],
    },
    contacts: [
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
    owner: {
      profilePicture: {
        tags: [
          "string",
        ],
      },
      coverPhoto: {
        tags: [
          "string",
        ],
      },
      addresses: [
        {
          geoLocation: {},
          customFields: [
            {},
          ],
        },
      ],
      roles: [
        PostOpportunitiesRoles.Moderator,
      ],
      preferences: {},
      socialLinks: {
        additionalInfo: {},
      },
      sso: [
        {
          scopes: [
            "string",
          ],
        },
      ],
      paymentMethods: {},
    },
    attachments: [
      {
        metadata: {},
        associatedWith: {},
        permissions: {},
      },
    ],
    notes: [
      "string",
    ],
    customFields: [
      {},
    ],
  };
  
  const res = await sdk.opportunities.create(xIntegrationosSecret, xIntegrationosConnectionKey, requestBody);

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
| `requestBody`                                                                                                                                                                  | [operations.PostOpportunitiesRequestBody](../../models/operations/postopportunitiesrequestbody.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.PostOpportunitiesResponse](../../models/operations/postopportunitiesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## count

Get the count of opportunities records

### Example Usage

```typescript
import { IntegrationOS } from "@integrationos/node";

async function run() {
  const sdk = new IntegrationOS();

  const xIntegrationosSecret = "string";
  const xIntegrationosConnectionKey = "string";
  
  const res = await sdk.opportunities.count(xIntegrationosSecret, xIntegrationosConnectionKey);

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

**Promise<[operations.GetOpportunitiesCountResponse](../../models/operations/getopportunitiescountresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
