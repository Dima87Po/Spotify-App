import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

enum AppRoutes {
  home = "home",
  search = "search",
  artist = "artist",
  album = "album",
  library = "library",
  login = "login",
}

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: AppRoutes.home,
    loadChildren: () =>
      import("./pages/home/home.module").then((m) => m.HomeModule),
  },
  {
    path: AppRoutes.search,
    loadChildren: () =>
      import("./pages/search/search.module").then((m) => m.SearchModule),
  },
  {
    path: AppRoutes.search + "/:term",
    loadChildren: () =>
      import("./pages/search/search.module").then((m) => m.SearchModule),
  },
  {
    path: AppRoutes.artist + "/:id",
    loadChildren: () =>
      import("./pages/artist/artist.module").then((m) => m.ArtistModule),
  },
  {
    path: AppRoutes.album + "/:id",
    loadChildren: () =>
      import("./pages/album/album.module").then((m) => m.AlbumModule),
  },
  {
    path: AppRoutes.library,
    loadChildren: () =>
      import("./pages/library/library.module").then((m) => m.LibraryModule),
  },
  {
    path: AppRoutes.login,
    loadChildren: () =>
      import("./pages/login-page/login.module").then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
