import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';
import { PlayerComponent } from './player/player.component';
import { SafeUrlPipe } from './safe-url.pipe';  // Import du pipe

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    PlayerComponent,
    SafeUrlPipe  // Déclaration du pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

