// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'b4871d65-b439-4433-8702-08fa2cc15808';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup6554/providers/Microsoft.Cdn/profiles/cdnTestProfile63?api-version=2015-06-01', '*')
  .reply(202, "{\r\n  \"name\":\"cdnTestProfile63\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup6554/providers/Microsoft.Cdn/profiles/cdnTestProfile63\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\",\"tag3\":\"val3\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"sku\":{\r\n      \"name\":\"Standard\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '409',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup6554/providers/Microsoft.Cdn/operationresults/b73ca514-7c7d-43d1-9684-3b72771214e9/profileresults/cdnTestProfile63?api-version=2015-06-01',
  'retry-after': '10',
  'x-ms-request-id': '92acc1e4-7ec2-4b7c-a547-6a33c5089f94',
  'x-ms-client-request-id': '145d0bfd-b7fc-46e9-a718-201e4d11434f',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup6554/providers/Microsoft.Cdn/operationresults/b73ca514-7c7d-43d1-9684-3b72771214e9?api-version=2015-06-01',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '71aebe29-e367-4d4e-8335-1a5ffc0c22f5',
  'x-ms-routing-request-id': 'WESTUS:20160302T231733Z:71aebe29-e367-4d4e-8335-1a5ffc0c22f5',
  date: 'Wed, 02 Mar 2016 23:17:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup6554/providers/Microsoft.Cdn/profiles/cdnTestProfile63?api-version=2015-06-01', '*')
  .reply(202, "{\r\n  \"name\":\"cdnTestProfile63\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup6554/providers/Microsoft.Cdn/profiles/cdnTestProfile63\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\",\"tag3\":\"val3\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"sku\":{\r\n      \"name\":\"Standard\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '409',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup6554/providers/Microsoft.Cdn/operationresults/b73ca514-7c7d-43d1-9684-3b72771214e9/profileresults/cdnTestProfile63?api-version=2015-06-01',
  'retry-after': '10',
  'x-ms-request-id': '92acc1e4-7ec2-4b7c-a547-6a33c5089f94',
  'x-ms-client-request-id': '145d0bfd-b7fc-46e9-a718-201e4d11434f',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup6554/providers/Microsoft.Cdn/operationresults/b73ca514-7c7d-43d1-9684-3b72771214e9?api-version=2015-06-01',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '71aebe29-e367-4d4e-8335-1a5ffc0c22f5',
  'x-ms-routing-request-id': 'WESTUS:20160302T231733Z:71aebe29-e367-4d4e-8335-1a5ffc0c22f5',
  date: 'Wed, 02 Mar 2016 23:17:33 GMT',
  connection: 'close' });
 return result; }]];