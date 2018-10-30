import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from 'src/app/search/search.component';
import { AppComponent } from './app.component';
import { HomeComponent } from 'src/app/home/home.component';
import { PlayComponent } from './play/play.component';

const appRoutes:Routes = [
    {path:'', component:HomeComponent, pathMatch:'full'},
    {path:'search', component:SearchComponent},
    {path:'play', component:PlayComponent},  
    {path:'**', redirectTo:''}
];
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule {
    
}