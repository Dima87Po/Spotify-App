import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HttpClientModule } from "@angular/common/http";
import { PipesModule } from "src/app/pipes/pipes.module";
import { ArtistRoutingModule } from "./artist-routing.module";
import { ArtistComponent } from "./artist-component/artist.component";
import { ArtistAlbumsComponent } from "./artist-albums/artist-albums.component";
import { ArtistService } from "./services/artist.service";

@NgModule({
  declarations: [ArtistComponent, ArtistAlbumsComponent],
  imports: [CommonModule, ArtistRoutingModule, PipesModule, HttpClientModule],
  providers: [ArtistService],
})
export class ArtistModule {}
