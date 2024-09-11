import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProfileRoutingModule } from "./profile-routing.module";
import { RecipesModule } from "../recipes/recipes.module";

@NgModule({
    imports: [CommonModule, ProfileRoutingModule, RecipesModule],
})
export class ProfileModule {}
