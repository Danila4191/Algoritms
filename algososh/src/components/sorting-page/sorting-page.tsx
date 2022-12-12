import React, { useState } from "react";
import styles from "./sorting.module.css";
import { RadioInput } from "../ui/radio-input/radio-input";
import { Button } from "../ui/button/button";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { Direction } from "../../types/types";
import { ElementStates, arrSortingnumbers } from "../../types/types";
import { arrKeys } from "../../utils/constants";
import { Column } from "../ui/column/column";
import { createArrRandom } from "../../utils/functions";
export const SortingPage: React.FC = () => {
  const [arrRandom, setArrRandom] = useState<arrSortingnumbers[]>([]);
  const [sortVariable, setSortVariable] = useState("");
  const [loading, setloading] = useState<boolean>(false);

  const sort = (sortVariable: string, activeInput: string) => {
    setloading(true);
    let arrCopy: arrSortingnumbers[] = Array.from(arrRandom);
    if (activeInput == "выбор") {
      if (sortVariable == "descending") {
        sortChoice(arrCopy, 0, 0, 100, 0, sortVariable, 0, 0);
      } else if (sortVariable == "ascending") {
        sortChoice(arrCopy, 0, 0, 0, 0, sortVariable, 0, 0);
      }
    } else if (activeInput == "Пузырек") {
      sortBubble(arrCopy, 0, 1, sortVariable, arrCopy.length);
    }
  };

  //////////////////////////////////////////////////////////////////
  const sortBubble = (
    arr: arrSortingnumbers[],
    index: number,
    index2: number,
    sortVariable: string,
    length: number
  ) => {
    let arrCopy: arrSortingnumbers[] = Array.from(arr);
    let A = index;
    let B = index2;
    let AValue = arrCopy[A].value;
    let Bvalue = arrCopy[B].value;
    let arrCopy2: arrSortingnumbers[] = Array.from(arr);

    if (B < length - 1) {
      //все числа  кроме последних двух
      arrCopy[A].state = ElementStates.Changing;
      arrCopy[B].state = ElementStates.Changing;

      if (A == 0) {
        // первый элемент массива
        if (sortVariable == "descending") {
          if (AValue > Bvalue) {
            arrCopy.splice(B, 1, arrCopy[A]);
            arrCopy.splice(A, 1, arrCopy2[B]);
          }
        } else if (sortVariable == "ascending") {
          if (AValue < Bvalue) {
            arrCopy.splice(B, 1, arrCopy[A]);
            arrCopy.splice(A, 1, arrCopy2[B]);
          }
        }
        setArrRandom(arrCopy);
        setTimeout(function () {
          sortBubble(arrCopy, A + 1, B + 1, sortVariable, length);
        }, 10);
      }

      if (A !== 0) {
        // второй элемент массива
        setTimeout(function () {
          arrCopy[A - 1].state = ElementStates.Default;
          arrCopy[A].state = ElementStates.Changing;
          arrCopy[B].state = ElementStates.Changing;

          if (sortVariable == "descending") {
            if (AValue > Bvalue) {
              arrCopy.splice(B, 1, arrCopy[A]);
              arrCopy.splice(A, 1, arrCopy2[B]);
              setArrRandom(arrCopy);
              sortBubble(arrCopy, A + 1, B + 1, sortVariable, length);
            } else {
              setArrRandom(arrCopy);
              sortBubble(arrCopy, A + 1, B + 1, sortVariable, length);
            }
          } else if (sortVariable == "ascending") {
            if (AValue < Bvalue) {
              arrCopy.splice(B, 1, arrCopy[A]);
              arrCopy.splice(A, 1, arrCopy2[B]);
              setArrRandom(arrCopy);
              sortBubble(arrCopy, A + 1, B + 1, sortVariable, length);
            } else {
              setArrRandom(arrCopy);
              sortBubble(arrCopy, A + 1, B + 1, sortVariable, length);
            }
          }
        }, 500);
      }
    } else {
 
      // последние числа каждого цикла

      if (sortVariable == "descending") {
        if (AValue > Bvalue) {
          if (arrCopy[A - 1]) {
            arrCopy[A - 1].state = ElementStates.Default;
          }

          arrCopy[A].state = ElementStates.Changing;
          arrCopy[B].state = ElementStates.Changing;
          arrCopy.splice(B, 1, arrCopy[A]);
          arrCopy.splice(A, 1, arrCopy2[B]);
          if (!arrCopy[A - 1]) {
            arrCopy[A].state = ElementStates.Modified;
            arrCopy[B].state = ElementStates.Modified;
          }
          setTimeout(function () {
            setArrRandom(arrCopy);
          }, 500);
          setTimeout(function () {
            arrCopy[A].state = ElementStates.Default;
            arrCopy[B].state = ElementStates.Modified;
            if (length !== 0) {
              sortBubble(arrCopy, 0, 1, sortVariable, length - 1);
            }
            if (!arrCopy[A - 1]) {
              setloading(false);
            }
          }, 1000);
        } else {
          if (arrCopy[A - 1]) {
            arrCopy[A - 1].state = ElementStates.Default;
          }

          arrCopy[A].state = ElementStates.Changing;
          arrCopy[B].state = ElementStates.Changing;
          if (!arrCopy[A - 1]) {
            arrCopy[A].state = ElementStates.Modified;
            arrCopy[B].state = ElementStates.Modified;
          }
          setTimeout(function () {
            setArrRandom(arrCopy);
          }, 500);
          setTimeout(function () {
            arrCopy[A].state = ElementStates.Default;
            arrCopy[B].state = ElementStates.Modified;
            if (length !== 0) {
              sortBubble(arrCopy, 0, 1, sortVariable, length - 1);
            }
            if (!arrCopy[A - 1]) {
              setloading(false);
            }
          }, 1000);
        }
      } else if (sortVariable == "ascending") {
        if (AValue < Bvalue) {
          if (arrCopy[A - 1]) {
            arrCopy[A - 1].state = ElementStates.Default;
          }
          arrCopy[A].state = ElementStates.Changing;
          arrCopy[B].state = ElementStates.Changing;
          arrCopy.splice(B, 1, arrCopy[A]);
          arrCopy.splice(A, 1, arrCopy2[B]);
          if (!arrCopy[A - 1]) {
            arrCopy[A].state = ElementStates.Modified;
            arrCopy[B].state = ElementStates.Modified;
          }
          setTimeout(function () {
            setArrRandom(arrCopy);
          }, 500);
          setTimeout(function () {
            arrCopy[A].state = ElementStates.Default;
            arrCopy[B].state = ElementStates.Modified;
            if (length !== 0) {
              sortBubble(arrCopy, 0, 1, sortVariable, length - 1);
            }
            if (!arrCopy[A - 1]) {
              setloading(false);
            }
          }, 1000);
        } else {
          if (arrCopy[A - 1]) {
            arrCopy[A - 1].state = ElementStates.Default;
          }

          arrCopy[A].state = ElementStates.Changing;
          arrCopy[B].state = ElementStates.Changing;
          if (!arrCopy[A - 1]) {
            arrCopy[A].state = ElementStates.Modified;
            arrCopy[B].state = ElementStates.Modified;
          }

          setTimeout(function () {
            setArrRandom(arrCopy);
          }, 500);
          setTimeout(function () {
            arrCopy[A].state = ElementStates.Default;
            arrCopy[B].state = ElementStates.Modified;
            if (length !== 0) {
              sortBubble(arrCopy, 0, 1, sortVariable, length - 1);
            }

            if (!arrCopy[A - 1]) {
              setloading(false);
            }
          }, 1000);
        }
      }
    }
  };
  /////////////////////////////////////////////////////////////////////////////////////////////////
  function sortChoice(
    arr: arrSortingnumbers[],
    index: number,
    index2: number,
    min: number,
    minIndexNumber: number,
    sortVariable: string,
    max: number,
    maxIndexNumber: number
  ) {
    let arrCopy: arrSortingnumbers[] = Array.from(arr);
    let A = index;
    let B = index2;
    let C = minIndexNumber;
    let D = maxIndexNumber;
    let minIndex = Math.min(arrCopy[A].value, arrCopy[B].value);
    let maxindex = Math.max(arrCopy[A].value, arrCopy[B].value);

    if (B < arr.length - 1) {
      //все числа  кроме последних двух
      arrCopy[A].state = ElementStates.Changing;
      arrCopy[B + 1].state = ElementStates.Changing;
      setArrRandom(arrCopy);
      if (B !== 0) {
        arrCopy[B].state = ElementStates.Default;
      }

      setTimeout(function () {
        arrCopy[B + 1].state = ElementStates.Default;
        if (sortVariable == "descending") {
          if (min > minIndex) {
            sortChoice(arrCopy, A, B + 1, minIndex, B, sortVariable, 0, 0);
          } else {
            sortChoice(arrCopy, A, B + 1, min, C, sortVariable, 0, 0);
          }
        } else if (sortVariable == "ascending") {
          if (max < maxindex) {
            // новое число больше
            sortChoice(
              arrCopy,
              A,
              B + 1,
              minIndex,
              B,
              sortVariable,
              maxindex,
              B
            );
          } else {
            //старое больше
            sortChoice(arrCopy, A, B + 1, min, C, sortVariable, max, D);
          }
        }
      }, 500);
    } else if ((arrCopy.length - A) / 2 === 1) {
      //последние два

      if (sortVariable == "descending") {
        if (
          arrCopy[arrCopy.length - 1].value < arrCopy[arrCopy.length - 2].value
        ) {
          let arrCopy2: arrSortingnumbers[] = Array.from(arr);
          arrCopy.splice(arrCopy.length - 1, 1, arrCopy[arrCopy.length - 2]);
          arrCopy.splice(arrCopy.length - 2, 1, arrCopy2[arrCopy2.length - 1]);
          arrCopy[arrCopy.length - 2].state = ElementStates.Modified;
          arrCopy[arrCopy.length - 1].state = ElementStates.Modified;
          setloading(false);
          setArrRandom(arrCopy);
        } else {
          arrCopy[arrCopy.length - 2].state = ElementStates.Modified;
          arrCopy[arrCopy.length - 1].state = ElementStates.Modified;
          setloading(false);
          setArrRandom(arrCopy);
        }
      } else if (sortVariable == "ascending") {
        if (
          arrCopy[arrCopy.length - 1].value > arrCopy[arrCopy.length - 2].value
        ) {
          let arrCopy2: arrSortingnumbers[] = Array.from(arr);
          arrCopy.splice(arrCopy.length - 1, 1, arrCopy[arrCopy.length - 2]);
          arrCopy.splice(arrCopy.length - 2, 1, arrCopy2[arrCopy2.length - 1]);
          arrCopy[arrCopy.length - 2].state = ElementStates.Modified;
          arrCopy[arrCopy.length - 1].state = ElementStates.Modified;
          setArrRandom(arrCopy);
          setloading(false);
        } else {
          arrCopy[arrCopy.length - 2].state = ElementStates.Modified;
          arrCopy[arrCopy.length - 1].state = ElementStates.Modified;
          setloading(false);
          setArrRandom(arrCopy);
        }
      }
    } else if ((arrCopy.length - A) / 2 === 0.5) {
      // последнее
      if (
        arrCopy[arrCopy.length - 1].value < arrCopy[arrCopy.length - 2].value
      ) {
        arrCopy[arrCopy.length - 1].state = ElementStates.Modified;
        setArrRandom(arrCopy);
      }
    } else if (sortVariable == "descending") {
      if (min > minIndex) {
        min = minIndex;
        C = B;
        let arrCopy2: arrSortingnumbers[] = Array.from(arr);
        arrCopy.splice(C, 1);
        arrCopy.splice(A, 0, arrCopy2[C]);
        arrCopy[A].state = ElementStates.Modified;
        arrCopy[A + 1].state = ElementStates.Changing;
        arrCopy[A + 2].state = ElementStates.Changing;
        setArrRandom(arrCopy);

        sortChoice(arrCopy, A + 1, A + 1, 100, C, sortVariable, 0, 0);
      } else {
        let arrCopy2: arrSortingnumbers[] = Array.from(arr);
        arrCopy.splice(C, 1);
        arrCopy.splice(A, 0, arrCopy2[C]);
        arrCopy[A].state = ElementStates.Modified;
        arrCopy[A + 1].state = ElementStates.Changing;
        arrCopy[A + 2].state = ElementStates.Changing;
        arrCopy[A].state = ElementStates.Modified;
        setArrRandom(arrCopy);

        sortChoice(arrCopy, A + 1, A + 1, 100, C, sortVariable, 0, 0);
      }
    } else if (sortVariable == "ascending") {
      if (max < maxindex) {
        max = maxindex;
        C = B;
        let arrCopy2: arrSortingnumbers[] = Array.from(arr);
        arrCopy.splice(C, 1);
        arrCopy.splice(A, 0, arrCopy2[C]);
        arrCopy[A].state = ElementStates.Modified;
        arrCopy[A + 1].state = ElementStates.Changing;
        arrCopy[A + 2].state = ElementStates.Changing;
        setArrRandom(arrCopy);

        sortChoice(arrCopy, A + 1, A + 1, 0, C, sortVariable, 0, 0);
      } else {
        let arrCopy2: arrSortingnumbers[] = Array.from(arr);
        arrCopy.splice(C, 1);
        arrCopy.splice(A, 0, arrCopy2[C]);
        arrCopy[A].state = ElementStates.Modified;
        arrCopy[A + 1].state = ElementStates.Changing;
        arrCopy[A + 2].state = ElementStates.Changing;
        arrCopy[A].state = ElementStates.Modified;
        setArrRandom(arrCopy);

        sortChoice(arrCopy, A + 1, A + 1, 0, C, sortVariable, 0, 0);
      }
    }
  }

  return (
    <SolutionLayout title="Сортировка массива">
      <div className={styles.container}>
        <div className={styles.input}>
          <div className={styles.radio__input}>
            <RadioInput
              disabled={loading}
              label="Выбор"
              checked={sortVariable === "выбор"}
              onChange={() => setSortVariable("выбор")}
            />
            <RadioInput
              disabled={loading}
              label="Пузырек"
              checked={sortVariable === "Пузырек"}
              onChange={() => setSortVariable("Пузырек")}
            />
          </div>

          <Button
            sorting={Direction.Ascending}
            onClick={() => sort("descending", sortVariable)}
            linkedList="small"
            text="По возрастанию"
            isLoader={loading}
            disabled={loading || arrRandom.length == 0 || sortVariable === ""}
          />

          <Button
            sorting={Direction.Descending}
            onClick={() => sort("ascending", sortVariable)}
            linkedList="small"
            text="По убыванию"
            isLoader={loading}
            disabled={loading || arrRandom.length == 0 || sortVariable === ""}
          />
          <div className={styles.button}>
            <Button
              onClick={() =>
                createArrRandom(0, 100, 3, 17, setArrRandom, arrKeys)
              }
              linkedList="small"
              text="Новый массив"
              isLoader={loading}
              disabled={loading}
            />
          </div>
        </div>
        <div className={styles.algo__box}>
          {arrRandom.map((srting: arrSortingnumbers, index: number) => (
            <Column key={index} state={srting.state} index={srting.value} />
          ))}
        </div>
      </div>
    </SolutionLayout>
  );
};
