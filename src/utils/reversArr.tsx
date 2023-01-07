import { ElementStates, arrString } from "../types/types";
import { sleep } from "./functions";

export async function reversArr(
  arr: arrString[],
  indexStart: number,
  setState?: (item: arrString[]) => void,
  setLoadingState?: (item: boolean) => void
) {
  let arrCopy = Array.from(arr);
  let index = indexStart;

  while (index <= arr.length / 2 && arr.length > 1) {
    if (setState) {
      await sleep(1000);
    }

    if (
      (index < arr.length / 2 && arr.length % 2 == 0) ||
      (index < arr.length / 2 - 1 && arr.length % 2 !== 0)
    ) {
      arrCopy.splice(index, 1);
      arrCopy.splice(arrCopy.length - (1 + index), 1);
      arrCopy.splice(arrCopy.length - index, 0, arr[index]);
      arrCopy.splice(index, 0, arr[arr.length - (1 + index)]);
      if (index !== 0) {
        arrCopy[index - 1].state = ElementStates.Modified;
        arrCopy[arrCopy.length - index].state = ElementStates.Modified;
      }
      arrCopy[index].state = ElementStates.Changing;
      arrCopy[arrCopy.length - 1 - index].state = ElementStates.Changing;
      if (setState) {
        setState([...arrCopy]);
      }
    } else if (arr.length % 2 == 0) {
      arrCopy[arr.length / 2].state = ElementStates.Modified;
      arrCopy[arr.length / 2 - 1].state = ElementStates.Modified;
      if (setState && setLoadingState) {
        setState(arrCopy);
        setLoadingState(false);
      }
    } else if (arr.length % 2 !== 0 && arr.length !== 1) {
      arrCopy[index - 1].state = ElementStates.Modified;
      arrCopy[arrCopy.length - index].state = ElementStates.Modified;
      arrCopy[arr.length / 2 - 0.5].state = ElementStates.Modified;
      if (setState && setLoadingState) {
        setState(arrCopy);
        setLoadingState(false);
      }
    }
    index += 1;
  }
  if (arr.length == 0) {
    arrCopy = [];
  } else if (arr.length == 1) {
    arrCopy[index].state = ElementStates.Modified;
  }
  return arrCopy;
}
