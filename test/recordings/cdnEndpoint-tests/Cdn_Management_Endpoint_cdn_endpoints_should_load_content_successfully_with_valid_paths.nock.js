// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'b4871d65-b439-4433-8702-08fa2cc15808';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1459819005\",\"not_before\":\"1459815105\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODE1MTA1LCJuYmYiOjE0NTk4MTUxMDUsImV4cCI6MTQ1OTgxOTAwNSwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.QqPddc_cwlwuCPjkAQGJZXncafQ-vLiHO4Zhny2_A2yDPhVhFUuhZet8oOjY8FTiM2jo3fqo6YX-D--l4rKsCLugFR--QU7K_ygY1N492hW86_aj1PMU8j3KCGpOaun_g1RE6ZkvAJwfBmcVFHPiGzipz2B47IJtV9dxxUcArGjJkMQyf-pjbe3v9xzz6Qu4BKwpcfBaPxZ1bKm76vb48RgEKR_wNECb3Zjh7bGLk1QS4uddZUCCkJKDJGLHbnui5P07bKMGvvbw3M0JURWGqtQvY83I0Y1CgDr8vmnM9RzYAnngNsQACDjT7m9S740sm3wQY2OrVmR2zTue9LazTg\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '87856412-00b6-41c8-8224-c63038016976',
  'client-request-id': 'ab9af8fd-64d1-44d4-b464-321cccf83b60',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_129',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Tue, 05 Apr 2016 00:16:45 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1459819005\",\"not_before\":\"1459815105\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODE1MTA1LCJuYmYiOjE0NTk4MTUxMDUsImV4cCI6MTQ1OTgxOTAwNSwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.QqPddc_cwlwuCPjkAQGJZXncafQ-vLiHO4Zhny2_A2yDPhVhFUuhZet8oOjY8FTiM2jo3fqo6YX-D--l4rKsCLugFR--QU7K_ygY1N492hW86_aj1PMU8j3KCGpOaun_g1RE6ZkvAJwfBmcVFHPiGzipz2B47IJtV9dxxUcArGjJkMQyf-pjbe3v9xzz6Qu4BKwpcfBaPxZ1bKm76vb48RgEKR_wNECb3Zjh7bGLk1QS4uddZUCCkJKDJGLHbnui5P07bKMGvvbw3M0JURWGqtQvY83I0Y1CgDr8vmnM9RzYAnngNsQACDjT7m9S740sm3wQY2OrVmR2zTue9LazTg\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '87856412-00b6-41c8-8224-c63038016976',
  'client-request-id': 'ab9af8fd-64d1-44d4-b464-321cccf83b60',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_129',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Tue, 05 Apr 2016 00:16:45 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup4424/providers/Microsoft.Cdn/profiles/cdnTestProfile7413/endpoints/cdnTestEndpoint807/load?api-version=2015-06-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup4424/providers/Microsoft.Cdn/operationresults/75279c93-3076-4cc4-a7c7-89c70b39ffa5/profileresults/cdnTestProfile7413/endpointresults/cdnTestEndpoint807?api-version=2015-06-01',
  'retry-after': '10',
  'x-ms-request-id': 'f61dd3be-76a2-4376-9a8b-059e8e5b3936',
  'x-ms-client-request-id': '1c072c42-597d-483e-860d-effb12a83a54',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup4424/providers/Microsoft.Cdn/operationresults/75279c93-3076-4cc4-a7c7-89c70b39ffa5?api-version=2015-06-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '1856e9d1-f2eb-4a03-b73a-743fab0f0287',
  'x-ms-routing-request-id': 'WESTUS:20160405T001646Z:1856e9d1-f2eb-4a03-b73a-743fab0f0287',
  date: 'Tue, 05 Apr 2016 00:16:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup4424/providers/Microsoft.Cdn/profiles/cdnTestProfile7413/endpoints/cdnTestEndpoint807/load?api-version=2015-06-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup4424/providers/Microsoft.Cdn/operationresults/75279c93-3076-4cc4-a7c7-89c70b39ffa5/profileresults/cdnTestProfile7413/endpointresults/cdnTestEndpoint807?api-version=2015-06-01',
  'retry-after': '10',
  'x-ms-request-id': 'f61dd3be-76a2-4376-9a8b-059e8e5b3936',
  'x-ms-client-request-id': '1c072c42-597d-483e-860d-effb12a83a54',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup4424/providers/Microsoft.Cdn/operationresults/75279c93-3076-4cc4-a7c7-89c70b39ffa5?api-version=2015-06-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '1856e9d1-f2eb-4a03-b73a-743fab0f0287',
  'x-ms-routing-request-id': 'WESTUS:20160405T001646Z:1856e9d1-f2eb-4a03-b73a-743fab0f0287',
  date: 'Tue, 05 Apr 2016 00:16:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1459819037\",\"not_before\":\"1459815137\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODE1MTM3LCJuYmYiOjE0NTk4MTUxMzcsImV4cCI6MTQ1OTgxOTAzNywiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.cJVcVJ7l-F4hmB_YPqLowzcIGGd9lbBqymfACvMyTnA3hwsyfDm-hSk2dAsp-yF0_jZx4NbqhsaMt6b35lp3rsvHyyUUwAjKEkpejReDo8mzGA3_dGrSCIiTNZvQ56R2Ow-50gTg5bkOF-PRaWbXpUfek43jtkSp9oxwL9frduT1-Pq__wOxhr8Bj0F9MOL_m83roEYzk-jQeyMrKGLPoavsnxs5RMf-BB6Ph74YuOnvtydX0YiUTT_GoemAtFizdgdjU71ELaWsfHMaX_TsPj8zD_a4e47nWgdHYXdlAKu8LcQPRr0gNszXc962OCRYyerNiGSwC6nafi2yExBD3g\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '67980a90-380d-4a71-a9a7-8beefe2a9e45',
  'client-request-id': '808a196c-ced3-4d5a-9232-5d0681ab76da',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_461',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Tue, 05 Apr 2016 00:17:16 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1459819037\",\"not_before\":\"1459815137\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODE1MTM3LCJuYmYiOjE0NTk4MTUxMzcsImV4cCI6MTQ1OTgxOTAzNywiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.cJVcVJ7l-F4hmB_YPqLowzcIGGd9lbBqymfACvMyTnA3hwsyfDm-hSk2dAsp-yF0_jZx4NbqhsaMt6b35lp3rsvHyyUUwAjKEkpejReDo8mzGA3_dGrSCIiTNZvQ56R2Ow-50gTg5bkOF-PRaWbXpUfek43jtkSp9oxwL9frduT1-Pq__wOxhr8Bj0F9MOL_m83roEYzk-jQeyMrKGLPoavsnxs5RMf-BB6Ph74YuOnvtydX0YiUTT_GoemAtFizdgdjU71ELaWsfHMaX_TsPj8zD_a4e47nWgdHYXdlAKu8LcQPRr0gNszXc962OCRYyerNiGSwC6nafi2yExBD3g\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '67980a90-380d-4a71-a9a7-8beefe2a9e45',
  'client-request-id': '808a196c-ced3-4d5a-9232-5d0681ab76da',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_461',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Tue, 05 Apr 2016 00:17:16 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup4424/providers/Microsoft.Cdn/operationresults/75279c93-3076-4cc4-a7c7-89c70b39ffa5?api-version=2015-06-01')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '12718f75-ab9f-47c5-99fa-f585ed8cb12d',
  'x-ms-client-request-id': '54c7220b-0f01-4c4c-a915-cefc8f78f4f7',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '36b4d82a-1dca-4379-9ac5-2daa01ddb61f',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160405T001718Z:36b4d82a-1dca-4379-9ac5-2daa01ddb61f',
  date: 'Tue, 05 Apr 2016 00:17:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup4424/providers/Microsoft.Cdn/operationresults/75279c93-3076-4cc4-a7c7-89c70b39ffa5?api-version=2015-06-01')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '12718f75-ab9f-47c5-99fa-f585ed8cb12d',
  'x-ms-client-request-id': '54c7220b-0f01-4c4c-a915-cefc8f78f4f7',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '36b4d82a-1dca-4379-9ac5-2daa01ddb61f',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160405T001718Z:36b4d82a-1dca-4379-9ac5-2daa01ddb61f',
  date: 'Tue, 05 Apr 2016 00:17:17 GMT',
  connection: 'close' });
 return result; }]];