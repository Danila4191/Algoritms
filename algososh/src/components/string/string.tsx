import React, { useState } from "react";
import styles from "./string.module.css";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { Input } from "../ui/input/input";
import { Button } from "../ui/button/button";
import { Circle } from "../ui/circle/circle";
import { ElementStates, arrString } from "../../types/types";
import { arrKeys } from "../../utils/constants";
import { getArrStates2 } from "../../utils/functions";
export const StringComponent: React.FC = () => {
  const [inputValue, setInputValue] = useState({ value: "" });
  const [arrString, setArrString] = useState<arrString[]>([]);
  const [loading, setloading] = useState<boolean>(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, value: e.target.value });
  };

  const onClick = () => {
    setloading(true);
    const arrStringStates = getArrStates2(arrKeys, inputValue.value.split(""));
    if (arrStringStates.length == 1) {
      let arrCopy: arrString[] = Array.from(arrStringStates);
      arrCopy[0].state = ElementStates.Modified;
      setArrString(arrCopy);
    }
    setArrString(arrStringStates);
    setTimeout(function () {
      ARRATATION(arrStringStates, 0);
    }, 1000);

    function ARRATATION(arr: arrString[], index: number) {
      let arrCopy = Array.from(arr);
      if (
        (index < arr.length / 2 && arr.length % 2 == 0) ||
        (index < arr.length / 2 - 1 && arr.length % 2 !== 0)
      ) {
        arrCopy.splice(index, 1); //удалил первый элемент
        arrCopy.splice(arrCopy.length - (1 + index), 1); //удалил последний
        arrCopy.splice(arrCopy.length - index, 0, arr[index]); // добавил в конец
        arrCopy.splice(index, 0, arr[arr.length - (1 + index)]); // добавил к начало}
        if (index !== 0) {
          arrCopy[index - 1].state = ElementStates.Modified;
          arrCopy[arrCopy.length - index].state = ElementStates.Modified;
        }
        arrCopy[index].state = ElementStates.Changing;
        arrCopy[arrCopy.length - 1 - index].state = ElementStates.Changing;
        setArrString(arrCopy);
        setTimeout(function () {
          ARRATATION(arrCopy, index + 1);
        }, 1000);
      } else if (arr.length % 2 == 0) {
        arrCopy[arr.length / 2].state = ElementStates.Modified;
        arrCopy[arr.length / 2 - 1].state = ElementStates.Modified;
        setArrString(arrCopy);
        setloading(false);
      } else if (arr.length % 2 !== 0 && arr.length !== 1) {
        arrCopy[index - 1].state = ElementStates.Modified;
        arrCopy[arrCopy.length - index].state = ElementStates.Modified;
        arrCopy[arr.length / 2 - 0.5].state = ElementStates.Modified;
        setArrString(arrCopy);
        setloading(false);
      }
    }
  };

  return (
    <SolutionLayout title="Строка">
      <div className={styles.container}>
        <div className={styles.imput}>
          <Input onChange={onChange} maxLength={11} isLimitText={true} />
          <Button
            onClick={onClick}
            text="Развернуть"
            isLoader={loading}
            disabled={inputValue.value.length < 2 || loading}
          />
        </div>
        <div className={styles.algo__box}>
          {arrString.map((srting: arrString, index: number) => (
            <Circle key={index} state={srting.state} letter={srting.value} />
          ))}
        </div>
      </div>
    </SolutionLayout>
  );
};
