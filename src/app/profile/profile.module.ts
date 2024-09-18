import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProfileRoutingModule } from "./profile-routing.module";
import { RecipesModule } from "../recipes/recipes.module";
import { SharedModule } from "../shared/shared.module";
import { DialogDeleteProfileComponent } from "./components/profile/dialog-delete-profile/dialog-delete-profile.component";
import { DialogNewRecipeComponent } from './components/profile/dialog-new-recipe/dialog-new-recipe.component';
import { DialogEditRecipeComponent } from './components/profile/dialog-edit-recipe/dialog-edit-recipe.component';
import { DialogDeleteRecipeComponent } from './components/profile/dialog-delete-recipe/dialog-delete-recipe.component';

@NgModule({
    imports: [CommonModule, ProfileRoutingModule, RecipesModule, SharedModule],
    declarations: [DialogDeleteProfileComponent, DialogNewRecipeComponent, DialogEditRecipeComponent, DialogDeleteRecipeComponent],
})
export class ProfileModule {}
