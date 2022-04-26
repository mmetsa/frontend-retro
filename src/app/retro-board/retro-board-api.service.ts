import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {RetroBoard} from "../retro-board-detail/models/retro-board";
import {CreateBoard} from "./models/create-board";
import { environment } from "../../environments/environment";


@Injectable()
export class RetroBoardApiService {

  constructor(private http: HttpClient) {}

  getBoard(id: number) {
    return this.http.get<RetroBoard>(environment.apiUrl + 'api/v1/retro/board/' + id)
      .pipe(map((data: RetroBoard) => data));
  }

  createBoard(board: CreateBoard) {
    return this.http.post<number>(environment.apiUrl + 'api/v1/retro/create', board)
      .pipe(map((data: number) => data));
  }
}
