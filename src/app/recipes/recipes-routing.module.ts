import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./components/recipes/recipes.component";
import { RecipeSingleComponent } from "./components/recipe-single/recipe-single.component";

const routes: Routes = [
    {
        path: "",
        component: RecipesComponent,
    },
    {
        path: ":id",
        component: RecipeSingleComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RecipesRoutingModule {}
