import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppErrorHandler } from './common/error-handling/app-error-handler';
import { DataService } from './common/services/data.service';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: ErrorHandler, useClass: AppErrorHandler},
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
