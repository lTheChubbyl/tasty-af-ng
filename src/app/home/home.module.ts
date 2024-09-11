import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./components/home/home.component";
import { CategoriesSectionComponent } from "./components/home/categories-section/categories-section.component";
import { CategoriesPartComponent } from "./components/home/categories-section/categories-part/categories-part.component";
import { HighlightedSectionComponent } from "./components/home/highlighted-section/highlighted-section.component";
import { HighlightedDescriptionComponent } from "./components/home/highlighted-section/highlighted-description/highlighted-description.component";
import { HighlightedImageComponent } from "./components/home/highlighted-section/highlighted-image/highlighted-image.component";
import { LatestSectionComponent } from "./components/home/latest-section/latest-section.component";
import { LatestPartComponent } from "./components/home/latest-section/latest-part/latest-part.component";
import { CounterComponent } from "./components/home/counter/counter.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        HomeComponent,
        CategoriesSectionComponent,
        CategoriesPartComponent,
        HighlightedSectionComponent,
        HighlightedDescriptionComponent,
        HighlightedImageComponent,
        LatestSectionComponent,
        LatestPartComponent,
        CounterComponent,
    ],
    imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
