import { Component } from '@angular/core';
import { OAuthService, AuthConfig, JwksValidationHandler } from 'angular-oauth2-oidc';

import { MyAuthConfig } from './auth.config';


import { googleAuthConfig } from './auth.google.config';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(
    private oauthService: OAuthService) {

    this.oauthService.configure(MyAuthConfig);

    this.oauthService.events.subscribe(e => {
      console.debug('oauth/oidc event', e);
    });

    // Load Discovery Document and then try to login the user
    this.oauthService.loadDiscoveryDocument().then((doc) => {
      console.log('doc', doc)
      this.oauthService.tryLogin();
    });

    this
      .oauthService
      .events
      .filter(e => e.type == 'token_expires')
      .subscribe(e => {
        console.debug('received token_expires event', e);
        this.oauthService.silentRefresh();
      });
  }

}



