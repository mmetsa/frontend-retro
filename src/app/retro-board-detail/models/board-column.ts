import {BoardItem} from "./board-item";

export interface BoardColumn {
  id: number;
  name: string;
  items: BoardItem[];
}
