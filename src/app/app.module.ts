import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ImgViewerComponent } from './img-viewer/img-viewer.component';


@NgModule({
  declarations: [
    AppComponent,
    ImgViewerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, ImgViewerComponent]
})
export class AppModule { }
