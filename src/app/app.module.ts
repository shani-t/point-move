import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { ControlComponent } from './control/control.component';
import { ScreenComponent } from './screen/screen.component';

@NgModule({
  declarations: [AppComponent, ControlComponent, ScreenComponent],
  imports: [BrowserModule, HttpClientModule,BrowserAnimationsModule,
    SharedModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
