import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';



// Routing is used to create the navigation among the components
// We will consider components as pages 
// Page Navigation, To create the single page application
// Route: It maps a url to a component /dashboard maps to a component dashboard
// package require: @angular/router, it will be automatically imported when we create the application using ng new
// Steps: Import the router in package.json Step2: place this in index.html <base href="/">, it represents the current working
// server url
// Then create hyperlink for each route <a routerLink="/path"></a>
// In order to add angular route url you need to add routerLink instead of href to the anchor tag
// Example: <a class="nav-link" routerLink="about">About</a>

const routes: Routes = [
  // we have a route interface that has many properties
  {
    // need to specify the two properties, path and component
    // In component property we need to specify the actual class Name 
    path:'dashboard', component: DashboardComponent 
  },
  {
     // need to specify the two properties, path and component
    // In component property we need to specify the actual class Name 
     path:'about', component: AboutComponent 
  },
  {
    // If there is no route, default route like 4200, then we need to load a component
    // If url is empty then automatically redirect to the dashboard component
    // in path match we have two options full or prefix, default is prefix, prefix will be usefull only in case of child routes
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  }
];

// Routes - alias name: It is an array of route object which will have path and component related to them 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  // this class exports RouterModule which is imported from the @angular/router

}

// After all these we need to add router-outlet tag in app.component.html