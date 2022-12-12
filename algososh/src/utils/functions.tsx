export enum ElementStates {
  Default = "default",
  Changing = "changing",
  Modified = "modified",
}
export const getArrStates2 = (arrKeys: string[], arr: any) => {

  return arr.map((val:  string) => ({
    [arrKeys[0]]: val,
    [arrKeys[1]]: ElementStates.Default,
  }));
};
export const getArrStates3 = (arrKeys: string[], arrArrs: number[]) => {

  return arrArrs.map((val: number) => ({
    [arrKeys[0]]: val,
    [arrKeys[1]]: ElementStates.Default,
    [arrKeys[2]]: null,
  }));
};
export const createArrRandom = (
  minValue: number,
  maxValue: number,
  head: number,
  tail: number,
  func: (item: any) => void,
  arrKeys: string[]
) => {
  let randomNumber = Math.floor(Math.random() * (head - tail) + tail);
  let arr: number[] = Array.from({ length: randomNumber }, () =>
    Math.floor(Math.random() * (maxValue - minValue) + minValue)
  );

  if (arrKeys.length == 2) {
    func(getArrStates2(arrKeys, arr));
  } else if (arrKeys.length == 3) {
    func(getArrStates3(arrKeys, arr));
  }
};
