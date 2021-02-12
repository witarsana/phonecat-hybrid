import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { UpgradeModule } from "@angular/upgrade/static";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpModule, UpgradeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
