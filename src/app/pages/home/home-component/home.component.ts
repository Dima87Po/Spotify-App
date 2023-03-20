import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  FormattedNewReleases,
  NewReleasesItem,
} from 'src/app/pages/home/models/new-releases-model';
import { NewReleasesService } from '../new-releases-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public isSearchFieldVisible: boolean = true;

  title = 'New Releases';
  public newReleases: NewReleasesItem[] = [];

  constructor(private newReleasesService: NewReleasesService) {}

  ngOnInit(): void {
    this.getNewReleases();
  }

  public getNewReleases() {
    this.newReleasesService.getNewReleases().subscribe({
      next: (data: NewReleasesItem[]) => {
        this.newReleases = data;
        console.log('Data:', data);
      },
      error: (err) => {
        console.log('Error:', err);
        console.error(err.message);
      },
      complete: () => {
        console.log('Complete!');
      },
    });
  }

  public scrollTo(elementId: string): void {
    document.getElementById(elementId).scrollIntoView();
  }
}
