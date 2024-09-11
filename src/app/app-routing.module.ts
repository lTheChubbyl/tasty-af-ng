import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: "",
        children: [
            {
                path: "",
                pathMatch: "full",
                redirectTo: "home",
            },
            {
                path: "home",
                loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
            },
            {
                path: "recipes",
                loadChildren: () => import("./recipes/recipes.module").then((m) => m.RecipesModule),
            },
            {
                path: "about",
                loadChildren: () => import("./about/about.module").then((m) => m.AboutModule),
            },
            {
                path: "contact",
                loadChildren: () => import("./contact/contact.module").then((m) => m.ContactModule),
            },
            {
                path: "auth",
                loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
            },
            {
                path: "profile",
                loadChildren: () => import("./profile/profile.module").then((m) => m.ProfileModule),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
