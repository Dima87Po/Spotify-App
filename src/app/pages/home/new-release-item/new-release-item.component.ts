import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NewReleasesItem } from "src/app/pages/home/models/new-releases-model";
import { fas } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-new-release-item",
  templateUrl: "./new-release-item.component.html",
  styleUrls: ["./new-release-item.component.scss"],
})
export class NewReleaseItemComponent implements OnInit {
  playButton = fas;

  @Input() newRelease: NewReleasesItem;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  public navigate(newRelease: any): void {
    let newReleaseId: number = 0;

   if (newRelease.type === "album") { newReleaseId = newRelease.id } 

    console.log("new release type:", newRelease.type);
    console.log("New Release Id:", newReleaseId);

    this.router.navigate(["/album", newReleaseId]);
  }
}
