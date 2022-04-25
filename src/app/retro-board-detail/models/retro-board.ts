import {BoardColumn} from "./board-column";

export interface RetroBoard {
  id: number;
  name: string;
  teamName: string;
  expirationDate: Date;
  active: boolean;
  retroDate: Date;
  columns: BoardColumn[];

}
