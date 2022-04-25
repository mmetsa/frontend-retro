import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RetroTableItem} from "./models/retro-table-item";


@Injectable()
export class RetroTableApiService {

  constructor(private http: HttpClient) {}

  public getTableData(): Observable<RetroTableItem[]> {
    return this.http.get<RetroTableItem[]>('http://localhost:8080/api/v1/retro/boards');
  }

}
