import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Form } from "./form-component/form.component";

@NgModule({
  declarations: [
    AppComponent,
    Form
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
        { path: 'login', component: Form }
  ])],
  bootstrap: [AppComponent]

})
export class AppModule { }
