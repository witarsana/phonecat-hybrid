import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

// Import these globally to bring in their @types
import "angular";
import "angular-animate";
import "angular-resource";
import "angular-route";

// And import our AngularJS module
import "./app-ajs";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
