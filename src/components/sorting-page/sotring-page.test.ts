import { ElementStates } from "../../types/types";
import { sortBubble } from "../../utils/boobleSort";
import { arrSortingnumbers } from "../../types/types";

let testOneElementArr: arrSortingnumbers[] = [
  { value: 4, state: ElementStates.Default },
];
let resultTestOneElementArr: arrSortingnumbers[] = [
  { value: 4, state: ElementStates.Modified },
];

let testElementsArrDescending1: arrSortingnumbers[] = [
  { value: 6, state: ElementStates.Default },
  { value: 2, state: ElementStates.Default },
  { value: 4, state: ElementStates.Default },
  { value: 40, state: ElementStates.Default },
  { value: 80, state: ElementStates.Default },
];
let testElementsArrAscending1: arrSortingnumbers[] = [
  { value: 4, state: ElementStates.Default },
  { value: 20, state: ElementStates.Default },
  { value: 6, state: ElementStates.Default },
  { value: 90, state: ElementStates.Default },
  { value: 99, state: ElementStates.Default },
];
let testElementsArrDescending2: arrSortingnumbers[] = [
  { value: 6, state: ElementStates.Default },
  { value: 2, state: ElementStates.Default },
  { value: 4, state: ElementStates.Default },
  { value: 40, state: ElementStates.Default },
  { value: 80, state: ElementStates.Default },
  { value: 80, state: ElementStates.Default },
];
let testElementsArrAscending2: arrSortingnumbers[] = [
  { value: 4, state: ElementStates.Default },
  { value: 5, state: ElementStates.Default },
  { value: 20, state: ElementStates.Default },
  { value: 6, state: ElementStates.Default },
  { value: 90, state: ElementStates.Default },
  { value: 99, state: ElementStates.Default },
];
//////////
let resultTestElementsArrDescending1: arrSortingnumbers[] = [
  { value: 2, state: ElementStates.Modified },
  { value: 4, state: ElementStates.Modified },
  { value: 6, state: ElementStates.Modified },
  { value: 40, state: ElementStates.Modified },
  { value: 80, state: ElementStates.Modified },
];
let resultTestElementsArrAscending1: arrSortingnumbers[] = [
  { value: 99, state: ElementStates.Modified },
  { value: 90, state: ElementStates.Modified },
  { value: 20, state: ElementStates.Modified },
  { value: 6, state: ElementStates.Modified },
  { value: 4, state: ElementStates.Modified },
];
let resultTestElementsArrDescending2: arrSortingnumbers[] = [
  { value: 2, state: ElementStates.Modified },
  { value: 4, state: ElementStates.Modified },
  { value: 6, state: ElementStates.Modified },
  { value: 40, state: ElementStates.Modified },
  { value: 80, state: ElementStates.Modified },
  { value: 80, state: ElementStates.Modified },
];
let resultTestElementsArrAscending2: arrSortingnumbers[] = [
  { value: 99, state: ElementStates.Modified },
  { value: 90, state: ElementStates.Modified },
  { value: 20, state: ElementStates.Modified },
  { value: 6, state: ElementStates.Modified },
  { value: 5, state: ElementStates.Modified },
  { value: 4, state: ElementStates.Modified },
];

describe("тесты сортировки массива методом пузырьков", () => {
  it("пустой массив descending", async () => {
    const reverse = await sortBubble([], "descending", [].length);
    expect(reverse).toEqual([]);
  });
  it("пустой массив ascending", async () => {
    const reverse = await sortBubble([], "ascending", [].length);
    expect(reverse).toEqual([]);
  });
  it("массив из одного элемента ascending", async () => {
    const reverse = await sortBubble(
      testOneElementArr,
      "ascending",
      testOneElementArr.length
    );
    expect(reverse).toEqual(resultTestOneElementArr);
  });
  it("массив из одного элемента descending", async () => {
    const reverse = await sortBubble(
      testOneElementArr,
      "descending",
      testOneElementArr.length
    );
    expect(reverse).toEqual(resultTestOneElementArr);
  });
  it("массив из нескольких элементов descending1", async () => {
    const reverse = await sortBubble(
      testElementsArrDescending1,
      "descending",
      testElementsArrDescending1.length
    );
    expect(reverse).toEqual(resultTestElementsArrDescending1);
  });
  it("массив из нескольких элементов ascending1", async () => {
    const reverse = await sortBubble(
      testElementsArrAscending1,
      "ascending",
      testElementsArrAscending1.length
    );
    expect(reverse).toEqual(resultTestElementsArrAscending1);
  });
  it("массив из нескольких элементов descending2", async () => {
    const reverse = await sortBubble(
      testElementsArrDescending2,
      "descending",
      testElementsArrDescending2.length
    );
    expect(reverse).toEqual(resultTestElementsArrDescending2);
  });
  it("массив из нескольких элементов ascending2", async () => {
    const reverse = await sortBubble(
      testElementsArrAscending2,
      "ascending",
      testElementsArrAscending2.length
    );
    expect(reverse).toEqual(resultTestElementsArrAscending2);
  });
});
