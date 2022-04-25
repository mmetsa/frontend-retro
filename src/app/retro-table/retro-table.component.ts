import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {RetroTableApiService} from "./retro-table-api.service";
import {RetroTableItem} from "./models/retro-table-item";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-retro-table',
  templateUrl: './retro-table.component.html',
  styleUrls: ['./retro-table.component.css', '../app.component.css']
})
export class RetroTableComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<RetroTableItem>;
  dataSource!: MatTableDataSource<RetroTableItem>;
  dataArray: RetroTableItem[] = [];
  sub = new Subscription();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'teamName', 'retroDate', 'view'];

  constructor(private apiService: RetroTableApiService, private router: Router) {}

  ngOnInit(): void {
    this.sub.add(this.apiService.getTableData().subscribe(data => {
      console.log(data);
      this.dataArray = data;
      this.dataSource = new MatTableDataSource<RetroTableItem>(this.dataArray);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }));
  }

  showBoard(id: number) {
    this.router.navigate(['/retro', id])
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
