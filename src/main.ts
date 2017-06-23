import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

// declare var Keycloak: any;
//
// const keycloak = Keycloak('/assets/keycloak.json');
// window['_keycloak'] = keycloak;
//
// window['_keycloak'].init(
//   {onLoad: 'login-required'}
// )
//   .success(function (authenticated) {
//
//     if (!authenticated) {
//       window.location.reload();
//     }
//
//     // refresh login
//     setInterval(function () {
//
//       keycloak.updateToken(70).success(function (refreshed) {
//         if (refreshed) {
//           console.log('Token refreshed');
//         } else {
//           console.log('Token not refreshed, valid for '
//             + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
//         }
//       }).error(function () {
//         console.error('Failed to refresh token');
//       });
//
//     }, 60000);
//
//     console.log("Loading...");
//
//     platformBrowserDynamic().bootstrapModule(AppModule);
//
//   });
