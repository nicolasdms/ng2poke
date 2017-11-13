import { AuthConfig } from 'angular-oauth2-oidc';

import { JwksValidationHandler } from 'angular-oauth2-oidc';

export const MyAuthConfig: AuthConfig = {

  clientId: 'dwre2',
  scope: "openid read write phone_number apitest",
  responseType: "id_token token",


  issuer: 'https://wsidentification',
  silentRefreshRedirectUri: window.location.origin + "/silent-refresh.html",

  redirectUri: window.location.origin + '/index.html',

  showDebugInformation: true,
  sessionChecksEnabled: true,

}
