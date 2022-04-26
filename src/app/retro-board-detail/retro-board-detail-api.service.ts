import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import {ColumnItem} from "../retro-board/models/column-item";
import { environment } from "../../environments/environment";

@Injectable()
export class RetroBoardDetailApiService {

  constructor(private http: HttpClient) {}

  addColumnItem(columnItem: ColumnItem): Observable<any> {
    return this.http.post(environment.apiUrl + 'api/v1/retro/addItem', columnItem);
  }

  removeColumnItem(id: number): Observable<any> {
    return this.http.post(environment.apiUrl + 'api/v1/retro/removeItem/' + id, null);
  }

  addUpVote(itemId: number) {
    return this.http.put(environment.apiUrl + 'api/v1/retro/item/' + itemId + '/upvote', null);
  }

  addDownVote(itemId: number) {
    return this.http.put(environment.apiUrl + 'api/v1/retro/item/' + itemId + '/downvote', null);
  }

}
