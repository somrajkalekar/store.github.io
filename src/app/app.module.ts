import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [       //declare all the components, directives and pipes
    AppComponent,
    ProductListComponent,
    HeaderComponent
  ],
  exports :[            //components, directives, pipes, & modules to other module

  ],

  imports: [          //components, directives, pipes & modules from other module
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],    //provide services, interceptors
  bootstrap: [AppComponent] //will contains component(s) which will be entry point for angular
})
export class AppModule { }
