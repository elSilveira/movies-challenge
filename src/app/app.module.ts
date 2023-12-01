import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { PagesModule } from 'src/pages/pages.module';
import { MovieService } from 'src/services/movie.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    PagesModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
