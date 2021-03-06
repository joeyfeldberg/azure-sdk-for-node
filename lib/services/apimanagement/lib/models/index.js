/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/* jshint latedef:false */
/* jshint forin:false */
/* jshint noempty:false */

'use strict';

var msRestAzure = require('ms-rest-azure');

exports.BaseResource = msRestAzure.BaseResource;
exports.CloudError = msRestAzure.CloudError;
exports.ErrorFieldContract = require('./errorFieldContract');
exports.ErrorResponse = require('./errorResponse');
exports.Resource = require('./resource');
exports.PolicyContract = require('./policyContract');
exports.PolicyCollection = require('./policyCollection');
exports.PolicySnippetContract = require('./policySnippetContract');
exports.PolicySnippetsCollection = require('./policySnippetsCollection');
exports.RegionContract = require('./regionContract');
exports.ApiExportResult = require('./apiExportResult');
exports.ApiEntityBaseContract = require('./apiEntityBaseContract');
exports.ApiContractProperties = require('./apiContractProperties');
exports.ApiContract = require('./apiContract');
exports.ApiCreateOrUpdateParameter = require('./apiCreateOrUpdateParameter');
exports.ApiUpdateContract = require('./apiUpdateContract');
exports.OAuth2AuthenticationSettingsContract = require('./oAuth2AuthenticationSettingsContract');
exports.AuthenticationSettingsContract = require('./authenticationSettingsContract');
exports.SubscriptionKeyParameterNamesContract = require('./subscriptionKeyParameterNamesContract');
exports.OperationContract = require('./operationContract');
exports.ParameterContract = require('./parameterContract');
exports.RepresentationContract = require('./representationContract');
exports.RequestContract = require('./requestContract');
exports.ResponseContract = require('./responseContract');
exports.OperationEntityBaseContract = require('./operationEntityBaseContract');
exports.OperationUpdateContract = require('./operationUpdateContract');
exports.ProductEntityBaseParameters = require('./productEntityBaseParameters');
exports.ProductContract = require('./productContract');
exports.AuthorizationServerContract = require('./authorizationServerContract');
exports.AuthorizationServerUpdateContract = require('./authorizationServerUpdateContract');
exports.TokenBodyParameterContract = require('./tokenBodyParameterContract');
exports.AuthorizationServerContractBaseProperties = require('./authorizationServerContractBaseProperties');
exports.BackendAuthorizationHeaderCredentials = require('./backendAuthorizationHeaderCredentials');
exports.X509CertificateName = require('./x509CertificateName');
exports.BackendServiceFabricClusterProperties = require('./backendServiceFabricClusterProperties');
exports.BackendProperties = require('./backendProperties');
exports.BackendCredentialsContract = require('./backendCredentialsContract');
exports.BackendProxyContract = require('./backendProxyContract');
exports.BackendTlsProperties = require('./backendTlsProperties');
exports.BackendBaseParameters = require('./backendBaseParameters');
exports.BackendContract = require('./backendContract');
exports.BackendUpdateParameters = require('./backendUpdateParameters');
exports.CertificateContract = require('./certificateContract');
exports.CertificateCreateOrUpdateParameters = require('./certificateCreateOrUpdateParameters');
exports.CertificateInformation = require('./certificateInformation');
exports.CertificateConfiguration = require('./certificateConfiguration');
exports.HostnameConfiguration = require('./hostnameConfiguration');
exports.VirtualNetworkConfiguration = require('./virtualNetworkConfiguration');
exports.ApiManagementServiceSkuProperties = require('./apiManagementServiceSkuProperties');
exports.AdditionalLocation = require('./additionalLocation');
exports.ApiManagementServiceBackupRestoreParameters = require('./apiManagementServiceBackupRestoreParameters');
exports.ApiManagementServiceBaseProperties = require('./apiManagementServiceBaseProperties');
exports.ApimResource = require('./apimResource');
exports.ApiManagementServiceResource = require('./apiManagementServiceResource');
exports.ApiManagementServiceUpdateParameters = require('./apiManagementServiceUpdateParameters');
exports.ApiManagementServiceGetSsoTokenResult = require('./apiManagementServiceGetSsoTokenResult');
exports.ApiManagementServiceCheckNameAvailabilityParameters = require('./apiManagementServiceCheckNameAvailabilityParameters');
exports.ApiManagementServiceNameAvailabilityResult = require('./apiManagementServiceNameAvailabilityResult');
exports.ApiManagementServiceApplyNetworkConfigurationParameters = require('./apiManagementServiceApplyNetworkConfigurationParameters');
exports.OperationDisplay = require('./operationDisplay');
exports.Operation = require('./operation');
exports.EmailTemplateParametersContractProperties = require('./emailTemplateParametersContractProperties');
exports.EmailTemplateContract = require('./emailTemplateContract');
exports.EmailTemplateUpdateParameters = require('./emailTemplateUpdateParameters');
exports.GroupContract = require('./groupContract');
exports.GroupCreateParameters = require('./groupCreateParameters');
exports.GroupUpdateParameters = require('./groupUpdateParameters');
exports.UserIdentityContract = require('./userIdentityContract');
exports.UserEntityBaseParameters = require('./userEntityBaseParameters');
exports.UserContract = require('./userContract');
exports.IdentityProviderContract = require('./identityProviderContract');
exports.IdentityProviderList = require('./identityProviderList');
exports.IdentityProviderUpdateParameters = require('./identityProviderUpdateParameters');
exports.IdentityProviderBaseParameters = require('./identityProviderBaseParameters');
exports.LoggerContract = require('./loggerContract');
exports.LoggerUpdateContract = require('./loggerUpdateContract');
exports.ConnectivityStatusContract = require('./connectivityStatusContract');
exports.NetworkStatusContract = require('./networkStatusContract');
exports.OpenidConnectProviderContract = require('./openidConnectProviderContract');
exports.OpenidConnectProviderUpdateContract = require('./openidConnectProviderUpdateContract');
exports.PortalSigninSettings = require('./portalSigninSettings');
exports.TermsOfServiceProperties = require('./termsOfServiceProperties');
exports.PortalSignupSettings = require('./portalSignupSettings');
exports.SubscriptionsDelegationSettingsProperties = require('./subscriptionsDelegationSettingsProperties');
exports.RegistrationDelegationSettingsProperties = require('./registrationDelegationSettingsProperties');
exports.PortalDelegationSettings = require('./portalDelegationSettings');
exports.ProductUpdateParameters = require('./productUpdateParameters');
exports.SubscriptionContract = require('./subscriptionContract');
exports.PropertyContract = require('./propertyContract');
exports.PropertyUpdateParameters = require('./propertyUpdateParameters');
exports.PropertyEntityBaseParameters = require('./propertyEntityBaseParameters');
exports.QuotaCounterValueContractProperties = require('./quotaCounterValueContractProperties');
exports.QuotaCounterContract = require('./quotaCounterContract');
exports.QuotaCounterCollection = require('./quotaCounterCollection');
exports.QuotaCounterValueContract = require('./quotaCounterValueContract');
exports.ReportRecordContract = require('./reportRecordContract');
exports.RequestReportRecordContract = require('./requestReportRecordContract');
exports.SubscriptionCreateParameters = require('./subscriptionCreateParameters');
exports.SubscriptionUpdateParameters = require('./subscriptionUpdateParameters');
exports.AccessInformationContract = require('./accessInformationContract');
exports.AccessInformationUpdateParameters = require('./accessInformationUpdateParameters');
exports.DeployConfigurationParameters = require('./deployConfigurationParameters');
exports.OperationResultContract = require('./operationResultContract');
exports.SaveConfigurationParameter = require('./saveConfigurationParameter');
exports.TenantConfigurationSyncStateContract = require('./tenantConfigurationSyncStateContract');
exports.GenerateSsoUrlResult = require('./generateSsoUrlResult');
exports.UserCreateParameters = require('./userCreateParameters');
exports.UserIdentityCollection = require('./userIdentityCollection');
exports.UserTokenParameters = require('./userTokenParameters');
exports.UserTokenResult = require('./userTokenResult');
exports.UserUpdateParameters = require('./userUpdateParameters');
exports.RegionListResult = require('./regionListResult');
exports.ApiCollection = require('./apiCollection');
exports.OperationCollection = require('./operationCollection');
exports.ProductCollection = require('./productCollection');
exports.AuthorizationServerCollection = require('./authorizationServerCollection');
exports.BackendCollection = require('./backendCollection');
exports.CertificateCollection = require('./certificateCollection');
exports.OperationListResult = require('./operationListResult');
exports.ApiManagementServiceListResult = require('./apiManagementServiceListResult');
exports.EmailTemplateCollection = require('./emailTemplateCollection');
exports.GroupCollection = require('./groupCollection');
exports.UserCollection = require('./userCollection');
exports.LoggerCollection = require('./loggerCollection');
exports.OpenIdConnectProviderCollection = require('./openIdConnectProviderCollection');
exports.SubscriptionCollection = require('./subscriptionCollection');
exports.PropertyCollection = require('./propertyCollection');
exports.ReportCollection = require('./reportCollection');
exports.RequestReportCollection = require('./requestReportCollection');
