# GetUnifiedIntegrationResponse


## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `contentType`                                                   | *string*                                                        | :heavy_check_mark:                                              | HTTP response content type for this operation                   |
| `integration`                                                   | [shared.Integration](../../../sdk/models/shared/integration.md) | :heavy_minus_sign:                                              | Successful                                                      |
| `statusCode`                                                    | *number*                                                        | :heavy_check_mark:                                              | HTTP response status code for this operation                    |
| `rawResponse`                                                   | [AxiosResponse](https://axios-http.com/docs/res_schema)         | :heavy_minus_sign:                                              | Raw HTTP response; suitable for custom response parsing         |