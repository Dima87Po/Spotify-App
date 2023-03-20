import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home-component/home.component';
import { NewReleaseItemComponent } from './new-release-item/new-release-item.component';

import { PipesModule } from 'src/app/pipes/pipes.module';
import { NewReleasesService } from './new-releases-service';


@NgModule({
  declarations: [
    HomeComponent,
    NewReleaseItemComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PipesModule,
    HttpClientModule,
  ],
  providers: [
    NewReleasesService
  ]
})
export class HomeModule { }
