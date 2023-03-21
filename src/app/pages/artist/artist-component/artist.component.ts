import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { switchMap } from "rxjs";
import { AlbumItem } from "../models/artist-albums";
import { APIArtist } from "../models/artist-model";
import { ArtistService } from "../services/artist.service";

@Component({
  selector: "app-artist",
  templateUrl: "./artist.component.html",
  styleUrls: ["./artist.component.scss"],
})
export class ArtistComponent implements OnInit {
  public artistId: string = "";
  public artist: APIArtist | null = null;
  public albums: AlbumItem[] = [];
  public moreAlbums: boolean = false;
  public moreTracks: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private artistService: ArtistService,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(res => this.artistService.getArtist(res["id"]))
    ).subscribe((artist: APIArtist) => (this.artist = artist)
    );

    this.activatedRoute.params.pipe(
      switchMap(res => this.artistService.getAlbums(res["id"]))
    ).subscribe((albums:AlbumItem[]) => (this.albums = albums))
  }

  public seeMoreAlbums(): void {
    this.moreAlbums = !this.moreAlbums;
  }

  public seeMoreTracks(): void {
    this.moreTracks = !this.moreTracks;
  }

  public scrollTo(elementId: string): void {
    document.getElementById(elementId).scrollIntoView();
  }
}
