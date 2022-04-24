import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {RetroBoard} from "./models/retro-board";


@Injectable()
export class RetroBoardApiService {

  constructor(private http: HttpClient) {}

  getBoard(id: number) {
    return this.http.get<RetroBoard>('http://localhost:8080/api/v1/retro/board/' + id)
      .pipe(map((data: RetroBoard) => data));
  }

}
