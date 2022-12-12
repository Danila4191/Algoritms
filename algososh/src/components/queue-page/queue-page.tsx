import React, { useState } from "react";
import styles from "./queue-page.module.css";
import { Input } from "../ui/input/input";
import { Button } from "../ui/button/button";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { Circle } from "../ui/circle/circle";
import { ElementStates, IQueue, arrString } from "../../types/types";

export const QueuePage: React.FC = () => {
  let lenght: number = 7;
  const arrStart: arrString[] = [...Array(lenght)].map(() => ({
    value: "",
    state: ElementStates.Default,
    head: false,
    tail: false,
  }));
  const [inputValue, setInputValue] = useState<arrString>({
    value: "",
    state: ElementStates.Changing,
  });
  const [arr, setArr] = useState<arrString[]>(arrStart);
  const [headState, setheadState] = useState<number>(0);
  const [tailState, settailState] = useState<number>(0);
  const [lengthState, setlengthState] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  class Queue<T> implements IQueue<T> {
    private container: (arrString | null)[] = [];
    private head = headState;
    private tail = tailState;
    private readonly size: number = 0;
    private length: number = lengthState;

    constructor(size: number) {
      this.size = size;
      this.container = Array(size);
    }

    enqueue = (item: arrString) => {
      if (this.length >= this.size) throw new Error("Maximum length exceeded");
      setLoading(true);
      this.container[this.tail] = item;
      this.length++;
      this.tail++;
      settailState(this.tail);
      setlengthState(this.length);
      arr[this.getHead()].head = true;
      if (this.getTail() > 0) arr[this.getTail() - 1].tail = false;
      arr[this.getTail()].value = inputValue.value;
      arr[this.getTail()].tail = true;
      arr[this.getTail()].state = inputValue.state;
      let tailCopy = this.getTail();
      setTimeout(function () {
        arr[tailCopy].state = ElementStates.Default;
        setInputValue({
          value: "",
          state: ElementStates.Changing,
        });
        setLoading(false);
      }, 500);
    };

    dequeue = () => {
      setLoading(true);
      if (this.getHead() === this.getTail()) {
        this.clear();
      } else {
        if (this.isEmpty()) throw new Error("No elements in the queue");
        if (this.head === this.size) {
          this.head = 0;
        }
        this.container[this.head] = null;
        this.length--;
        this.head++;
        setheadState(this.head);
        setlengthState(this.length);
        arr[this.getHead() - 1].state = ElementStates.Changing;

        let headCopy = this.getHead();
        setTimeout(function () {
          arr[headCopy - 1].state = ElementStates.Default;

          if (headCopy > 0) {
            arr[headCopy - 1].head = false;
            arr[headCopy - 1].value = "";
          }
          arr[headCopy].head = true;
          setLoading(false);
        }, 500);
      }
    };

    getHead = () => {
      if (this.isEmpty()) throw new Error("No elements in the queue");
      return this.head;
    };

    getTail = () => {
      if (this.isEmpty()) throw new Error("No elements in the queue");
      return this.tail - 1;
    };

    isEmpty = () => this.length === 0;
    isFull = () => this.tail - 1 === 6;
    getLength = () => this.length;

    clear = () => {
      setArr(arrStart);
      setLoading(true);
      setTimeout(function () {
        setLoading(false);
      }, 500);
      setheadState(0);
      settailState(0);
      setlengthState(0);
      this.container = arrStart;
    };
  }

  const queue = new Queue<number>(lenght);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, value: e.target.value });
  };
console.log(queue.getLength())
  return (
    <SolutionLayout title="Очередь">
      <div className={styles.container}>
        <div className={styles.input}>
          <Input
            value={inputValue.value}
            onChange={onChange}
            maxLength={4}
            isLimitText={true}
          />

          <Button
            onClick={() => queue.enqueue(inputValue)}
            linkedList="small"
            text="Добавить"
            isLoader={loading}
            disabled={loading || (inputValue.value === "" && true)}
          />

          <Button
            onClick={() => queue.dequeue()}
            linkedList="small"
            text="Удалить"
            isLoader={loading}
            disabled={(loading || (queue.getLength() == 0)) ? true : false}
          />

          <div className={styles.button}>
            <Button
              onClick={() => {
                queue.clear();
              }}
              linkedList="small"
              text="Очистить"
              isLoader={loading}
              disabled={ (loading || (queue.getLength() == 0)) ? true : false}
            />
          </div>
        </div>
        <div className={styles.algo__box}>
          {arr !== undefined
            ? arr.map((srting: any, index: number) => (
                <Circle
                  key={index}
                  state={srting.state}
                  head={srting.head ? "head" : null}
                  index={index}
                  tail={srting.tail ? "tail" : null}
                  letter={srting.value}
                />
              ))
            : null}
        </div>
      </div>
    </SolutionLayout>
  );
};
