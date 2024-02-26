# Issue
(*issue*)

### Available Operations

* [listUnifiedIssues](#listunifiedissues) - List support issues

## listUnifiedIssues

List support issues

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { ListUnifiedIssuesSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListUnifiedIssuesSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.issue.listUnifiedIssues({}, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.ListUnifiedIssuesRequest](../../sdk/models/operations/listunifiedissuesrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.ListUnifiedIssuesSecurity](../../sdk/models/operations/listunifiedissuessecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.ListUnifiedIssuesResponse](../../sdk/models/operations/listunifiedissuesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
