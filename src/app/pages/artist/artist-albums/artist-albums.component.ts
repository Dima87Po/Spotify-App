import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { AlbumItem } from "../models/artist-albums";

@Component({
  selector: "app-artist-albums",
  templateUrl: "./artist-albums.component.html",
  styleUrls: ["./artist-albums.component.scss"],
})
export class ArtistAlbumsComponent implements OnInit {
  @Input() album: AlbumItem;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  public seeAlbum(album: AlbumItem): void {
    this.router.navigate(["/album", album.id]);
  }
}
