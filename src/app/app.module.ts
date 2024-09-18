import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { LayoutModule } from "./layout/layout.module";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "./shared/shared.module";
import { ProfileComponent } from "./profile/components/profile/profile.component";
import { RecipesModule } from "./recipes/recipes.module";
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
    declarations: [AppComponent, ProfileComponent, NotFoundComponent],
    imports: [BrowserModule, AppRoutingModule, LayoutModule, HttpClientModule, SharedModule, RecipesModule],
    providers: [provideAnimationsAsync()],
    bootstrap: [AppComponent],
})
export class AppModule {}
