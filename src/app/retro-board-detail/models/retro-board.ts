import {BoardColumn} from "./board-column";

export interface RetroBoard {
  id: number;
  name: string;
  teamName: string;
  expirationDate: Date;
  isActive: boolean;
  retroDate: Date;
  columns: BoardColumn[];

}
