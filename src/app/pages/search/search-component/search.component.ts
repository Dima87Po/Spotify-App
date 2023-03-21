import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { SearchService } from "../search.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  @Input() public showModal: boolean = false;

  public artistsList: any[] = [];
  public tracksList: any[] = [];
  public moreArtists: boolean = false;
  public moreTracks: boolean = false;
  public activeLanguage: string = "en";

  constructor(private searchService: SearchService, private router: Router) {}

  ngOnInit(): void {}

  public search(term: string): void {
    this.searchService.getTracksAndArtists(term).subscribe({
      next: (data: any) => {
        this.artistsList = data.artists.items;
        this.tracksList = data.tracks.items;

        console.log("Data:", data);

        if (this.artistsList.length === 0 && this.tracksList.length === 0) {
          this.showModal = true;
        }
      },
      error: (err) => {
        console.log("Error:", err);
        console.error(err.message);
      },
    });
  }

  public seeMoreArtists(): void {
    this.moreArtists = !this.moreArtists;
  }

  public seeMoreTracks(): void {
    this.moreTracks = !this.moreTracks;
  }

  public scrollTo(elementId: string): void {
    document.getElementById(elementId).scrollIntoView();
  }
}
