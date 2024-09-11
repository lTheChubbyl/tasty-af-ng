import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RecipesRoutingModule } from "./recipes-routing.module";
import { SharedModule } from "../shared/shared.module";

import { RecipesComponent } from "./components/recipes/recipes.component";
import { RecipePreviewComponent } from "./components/recipes/recipe-preview/recipe-preview.component";
import { SidebarSectionComponent } from "./components/recipes/sidebar-section/sidebar-section.component";
import { RecipeSingleComponent } from "./components/recipe-single/recipe-single.component";
import { CommentSectionComponent } from "./components/recipe-single/comment-section/comment-section.component";

@NgModule({
    declarations: [
        RecipesComponent,
        RecipePreviewComponent,
        SidebarSectionComponent,
        RecipeSingleComponent,
        CommentSectionComponent,
    ],
    imports: [CommonModule, RecipesRoutingModule, SharedModule],
    exports: [RecipePreviewComponent],
})
export class RecipesModule {}
