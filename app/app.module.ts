import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainComponent } from './main/main.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { MultitabDemoComponent } from './multitab-demo/multitab-demo.component';
import { MultiformDemoComponent } from './multiform-demo/multiform-demo.component';
import { TestDirective } from './test.directive';
import { IfDemoComponent } from './if-demo/if-demo.component';
import { MyCustomDirectiveDirective } from './my-custom-directive.directive';
import { MyStructuralDirectiveDirective } from './my-structural-directive.directive';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeCountComponent } from './employee-count/employee-count.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { MyTitlePipe } from './my-title.pipe';
import { UserListComponent } from './user-list/user-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainComponent,
    ProductListComponent,
    ProductAddComponent,
    ErrorPageComponent,
    ProductEditComponent,
    MultitabDemoComponent,
    MultiformDemoComponent,
    TestDirective,
    IfDemoComponent,
    MyCustomDirectiveDirective,
    MyStructuralDirectiveDirective,
    EmployeeListComponent,
    EmployeeCountComponent,
    ParentComponent,
    ChildComponent,
    MyTitlePipe,
    UserListComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
