# PostNotesRequestBody


## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `id`                                                                                             | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `title`                                                                                          | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `content`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `createdAt`                                                                                      | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `updatedAt`                                                                                      | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `lastAccessed`                                                                                   | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `reminder`                                                                                       | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `color`                                                                                          | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `priority`                                                                                       | [operations.PostNotesPriority](../../models/operations/postnotespriority.md)                     | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `author`                                                                                         | [operations.PostNotesAuthor](../../models/operations/postnotesauthor.md)                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `tags`                                                                                           | *string*[]                                                                                       | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `attachments`                                                                                    | [operations.PostNotesAttachments](../../models/operations/postnotesattachments.md)[]             | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `sharedWith`                                                                                     | [operations.PostNotesSharedWith](../../models/operations/postnotessharedwith.md)[]               | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `visibility`                                                                                     | [operations.PostNotesVisibility](../../models/operations/postnotesvisibility.md)                 | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `status`                                                                                         | [operations.PostNotesNotesRequestStatus](../../models/operations/postnotesnotesrequeststatus.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `metadata`                                                                                       | *string*[]                                                                                       | :heavy_check_mark:                                                                               | N/A                                                                                              |