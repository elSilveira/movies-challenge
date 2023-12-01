import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/components/components.module';
import { SafePipe } from 'src/pipes/safe.pipe';
import { WatchlistService } from 'src/services/watchlist.service';
import { Helper } from 'src/shared/helper';
import { MainComponent } from './main/main.component';
import { TheaterComponent } from './theater/theater.component';

@NgModule({
  declarations: [
    MainComponent,
    TheaterComponent,
    SafePipe
  ],
  exports: [
    MainComponent,
    TheaterComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    Helper,
    WatchlistService
  ]
})
export class PagesModule { }
