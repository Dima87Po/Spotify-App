import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { AlbumService } from "../services/album.service";
import { APIAlbum } from "../models/album-model";
import { switchMap } from "rxjs";

@Component({
  selector: "app-album",
  templateUrl: "./album.component.html",
  styleUrls: ["./album.component.scss"],
})
export class AlbumComponent implements OnInit {
  public albumId: string = "";
  public album: APIAlbum | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private albumService: AlbumService,
    private location: Location
  ) {}

  ngOnInit(){
    this.activatedRoute.params.pipe(
      switchMap(res => this.albumService.getAlbum(res["id"]))
      ).subscribe((album: APIAlbum) => (this.album = album))
}

  public goBack(): void {
    this.location.back();
  }
}
