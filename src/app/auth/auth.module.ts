import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthRoutingModule } from "./auth-routing.module";
import { AuthComponent } from "./components/auth/auth.component";
import { SharedModule } from "../shared/shared.module";
import { RegisterComponent } from "./components/register/register.component";

@NgModule({
    declarations: [AuthComponent, RegisterComponent],
    imports: [CommonModule, AuthRoutingModule, SharedModule],
})
export class AuthModule {}
