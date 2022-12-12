import React, { useState } from "react";
import styles from "./fibonacci.module.css";
import { Input } from "../ui/input/input";
import { Button } from "../ui/button/button";
import { Circle } from "../ui/circle/circle";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
export const FibonacciPage: React.FC = () => {
  const [inputValue, setInputValue] = useState({ value: "" });
  const [arrFibonacci, setArrFibonacci] = useState<number[]>([]);
  const [loading, setloading] = useState<boolean>(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, value: e.target.value });
  };

  let numberInput = Number(inputValue.value);

  const onClick = () => {
    setloading(true);
    arrFibonacci.splice(0, arrFibonacci.length);
    let length = Number(inputValue.value) + 1;
    let arrCopy = Array.from(arrFibonacci);
    if (arrFibonacci.length == 0) {
      ARRATATION(arrCopy, length, 0);
    }
  };
  function ARRATATION(arr: number[], length: number, index: number) {
    let arrCopy = Array.from(arr);
    if (index < length) {
      arrCopy.splice(index, 0, getFibonacci(index + 1));
      setArrFibonacci(arrCopy);
      setTimeout(function () {
        ARRATATION(arrCopy, length, index + 1);
      }, 500);
    } else {
      setloading(false);
    }
  }
  const getFibonacci = (n: number, memo: Record<number, number> = {}): number => {
    if (n in memo) {
      return memo[n];
    }
    if (n <= 2) {
      return 1;
    }
    memo[n] = getFibonacci(n - 1, memo) + getFibonacci(n - 2, memo);
    return memo[n];
  };

  return (
    <SolutionLayout title="Последовательность Фибоначчи">
      <div className={styles.container}>
        <div className={styles.imput}>
          <Input
            onChange={onChange}
            type="fibonacci"
            max={19}
            maxLength={2}
            isLimitText={true}
          />
          <Button
            onClick={onClick}
            text="Рассчитать"
            isLoader={loading}
            disabled={
              inputValue.value.length == 0 ||
              !(1 <= numberInput && 19 >= numberInput) ||
              loading
            }
          />
        </div>
        <div className={styles.algo__box}>
          {arrFibonacci.slice(0, 10).map((item: number, index: number) => (
            <Circle key={index} letter={String(item)} tail={String(index)} />
          ))}
        </div>
        <div className={styles.algo__box}>
          {arrFibonacci.slice(10, 20).map((item: number, index: number) => (
            <Circle key={index} letter={String(item)} tail={String(10 + index)} />
          ))}
        </div>
      </div>
    </SolutionLayout>
  );
};
