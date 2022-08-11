import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MainComponent } from "./pages/main/main.component";

const appRoutes: Routes = [
    {path: '', component: MainComponent},
    {path: '**', redirectTo:'/' }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> =RouterModule.forRoot(appRoutes);