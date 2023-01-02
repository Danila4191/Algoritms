
import { reversArr } from "../../utils/reversArr";
import { ElementStates } from "../../types/types";
 let testReversStringEven = [
    { value: "1", state: ElementStates.Default },
    { value: "2", state: ElementStates.Default },
    { value: "3", state: ElementStates.Default },
    { value: "4", state: ElementStates.Default },
    { value: "5", state: ElementStates.Default },
    { value: "6", state: ElementStates.Default },
    { value: "7", state: ElementStates.Default },
    { value: "8", state: ElementStates.Default },
    { value: "9", state: ElementStates.Default },
  ];
 let testResultReversStringEven = [
    { value: "9", state: ElementStates.Modified },
    { value: "8", state: ElementStates.Modified },
    { value: "7", state: ElementStates.Modified },
    { value: "6", state: ElementStates.Modified },
    { value: "5", state: ElementStates.Modified },
    { value: "4", state: ElementStates.Modified },
    { value: "3", state: ElementStates.Modified },
    { value: "2", state: ElementStates.Modified },
    { value: "1", state: ElementStates.Modified },
  ];
 let testReversStringUnEven = [
    { value: "1", state: ElementStates.Default },
    { value: "2", state: ElementStates.Default },
    { value: "3", state: ElementStates.Default },
    { value: "4", state: ElementStates.Default },
    { value: "5", state: ElementStates.Default },
    { value: "6", state: ElementStates.Default },

  ];
 let testResultReversStringUnEven = [
    { value: "6", state: ElementStates.Modified },
    { value: "5", state: ElementStates.Modified },
    { value: "4", state: ElementStates.Modified },
    { value: "3", state: ElementStates.Modified },
    { value: "2", state: ElementStates.Modified },
    { value: "1", state: ElementStates.Modified },
  ];
describe('тесты строки', () => {
it('нечетный массив', async () => {
    const reverse = await reversArr(testReversStringEven,0);
    expect(reverse).toEqual(testResultReversStringEven)
  })
  it('четный массив', async () => {
    const reverse = await reversArr(testReversStringUnEven,0);
    expect(reverse).toEqual(testResultReversStringUnEven)
  })
  it('1 элемент', async () => {
    const reverse = await reversArr([{ value: "1", state: ElementStates.Modified }],0);
    expect(reverse).toEqual([{ value: "1", state: ElementStates.Modified }])
  })
  it('пустой массив', async () => {
    const reverse = await reversArr([],0);
    expect(reverse).toEqual([])
  })
})