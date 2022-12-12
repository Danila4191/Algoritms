export enum ElementStates {
  Default = "default",
  Changing = "changing",
  Modified = "modified",
}
export enum Direction {
  Ascending = "ascending",
  Descending = "descending",
}
export interface arrString {
  value: string;
  state: ElementStates;
  head?: boolean,
  tail?: boolean,
  smalCircle?:smalCircle
}
export interface smalCircle {
  value: string;
  state: ElementStates;
  position: string
}
export interface arrSortingnumbers {
  value: number;
  state: ElementStates;
}

export interface IStack<T> {
  push: (item: arrString) => void;
  pop: () => void;
  clear: () => void;
  getSize: () => number;
}
export interface IQueue<T> {
  enqueue: (item: arrString) => void;
  dequeue: () => void;
}
export  interface ILinkedList<T> {
  append: (item: any) => void;
  prepend: (item:any) => void;
  addByIndex: (item: any, position: number) => void;
  deleteByIndex: (index: number) => void;
  find: (index: number) => void;
  getSize: () => number;
}