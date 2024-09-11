import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";

@NgModule({
    declarations: [FooterComponent, HeaderComponent],
    imports: [CommonModule, FormsModule, RouterModule],
    exports: [FooterComponent, HeaderComponent],
})
export class LayoutModule {}
