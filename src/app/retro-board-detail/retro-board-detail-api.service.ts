import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {ColumnItem} from "../retro-board/models/column-item";


@Injectable()
export class RetroBoardDetailApiService {

  constructor(private http: HttpClient) {}

  addColumnItem(columnItem: ColumnItem): Observable<any> {
    return this.http.post('http://localhost:8080/api/v1/retro/addItem', columnItem);
  }

  removeColumnItem(id: number): Observable<any> {
    return this.http.post('http://localhost:8080/api/v1/retro/removeItem/' + id, null);
  }

  addUpVote(itemId: number) {
    return this.http.put('http://localhost:8080/api/v1/retro/item/' + itemId + '/upvote', null);
  }

  addDownVote(itemId: number) {
    return this.http.put('http://localhost:8080/api/v1/retro/item/' + itemId + '/downvote', null);
  }

}
