import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Components
import { SearchComponent } from './search-component/search.component';
import { SearchArtistItemComponent } from './search-artist-item/search-artist-item.component';
import { SearchTrackItemComponent } from './search-track-item/search-track-item.component';
import { SearchRoutingModule } from './search-routing.module';
import { PipesModule } from '../../pipes/pipes.module';
import { SearchService } from './search.service';

@NgModule({
  declarations: [
    SearchComponent,
    SearchArtistItemComponent,
    SearchTrackItemComponent,
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    PipesModule,
    HttpClientModule,
  ],
  providers: [
    SearchService,
  ]
})
export class SearchModule { }
