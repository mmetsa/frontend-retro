import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RetroBoardComponent } from './retro-board/retro-board.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { RetroBoardDetailComponent } from './retro-board-detail/retro-board-detail.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {RetroBoardApiService} from "./retro-board/retro-board-api.service";
import {MatDividerModule} from "@angular/material/divider";
import {RetroBoardDetailApiService} from "./retro-board-detail/retro-board-detail-api.service";
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import { RetroTableComponent } from './retro-table/retro-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {RetroTableApiService} from "./retro-table/retro-table-api.service";

const appRoutes: Routes = [
  { path: '', component: RetroBoardComponent},
  { path: 'retro/:id', component: RetroBoardDetailComponent},
  { path: 'list', component: RetroTableComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    RetroBoardComponent,
    RetroBoardDetailComponent,
    RetroTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MatDividerModule,
    MatChipsModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [RetroBoardApiService, RetroBoardDetailApiService, RetroTableApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
