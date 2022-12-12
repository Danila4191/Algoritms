import React, { useState, useEffect } from "react";
import styles from "./list-page.module.css";
import { Input } from "../ui/input/input";
import { Button } from "../ui/button/button";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { Circle } from "../ui/circle/circle";
import { ElementStates, arrString, ILinkedList } from "../../types/types";
import { ArrowIcon } from "../../components/ui/icons/arrow-icon";
import { arrKeys } from "../../utils/constants";
import { createArrRandom } from "../../utils/functions";
export const ListPage: React.FC = () => {
  const [inputValueOne, setInputValueOne] = useState<any>({
    value: "",
    state: ElementStates.Changing,
  });
  const [inputValueTwo, setInputValueTwo] = useState<number>(0);
  const [arr, setArr] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);


  useEffect(() => {
    arrKeys.push("smalCircle");
    createArrRandom(0, 10000, 4, 6, setArr, arrKeys);
  }, []);


  const onChangeOne = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValueOne({ ...inputValueOne, value: e.target.value });
  };
  const onChangeTwo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValueTwo(+e.currentTarget.value);
  };

  class Node<T> {
    value: T;
    next: Node<T> | null;
    constructor(value: T, next?: Node<T> | null) {
      this.value = value;
      this.next = next === undefined ? null : next;
    }
  }
  class LinkedList<T> implements ILinkedList<T> {
    private head: Node<T> | null;
    private size: number;
    constructor(arr: T[]) {
      this.head = null;
      this.size = 0;
      arr.forEach((el) => this.addByIndex(el, 0));
    }

    append = (item: any) => {
      const node = new Node(item);
      let head;
      if (this.head === null) {
        this.head = node;
      } else {
        head = this.head;
        while (head.next) {
          head = head.next;
        }
        head.next = node;
      }
      this.size++;
    };

    prepend = (value: any) => {
      let node = new Node(value);
      if (!this.head) {
        this.head = node;
      }
      node.next = this.head;
      this.head = node;
      this.size++;
    };

    find = (index: number) => {
      if (index < 0 || index > this.size) console.log("Enter a valid index");
      let currentNode = this.head;
      let count = 0;
      while (currentNode) {
        if (count === index) {
          return currentNode.value;
        }
        count++;
        currentNode = currentNode.next;
      }
      return null;
    };

    deleteByIndex = (index: number) => {
      if (index < 0 || index > this.size) console.log("Enter a valid index");
      let head = this.head;
      if (head && index === 0) {
        this.head = head.next;
      } else {
        for (let i = 0; head != null && i < index - 1; i++) {
          head = head.next;
        }
        if (head == null || head.next == null) return null;
        const { next } = head.next;
        head.next = next;
      }
      this.size -= 1;
    };

    addByIndex = (item: any, index: number) => {
      if (index < 0 || index > this.getSize())
        console.log("Enter a valid index");
      else {
        const node = new Node(item);
        if (index === 0) {
          node.next = this.head;
          this.head = node;
        } else if (this.head) {
          let head = this.head;
          let headIndex = 0;
          while (headIndex + 1 < index && head.next) {
            head = head.next;
            headIndex++;
          }
          const temp = head.next;
          head.next = node;
          node.next = temp;
        }
        this.size++;
      }
    };

    getSize() {
      return this.size;
    }
  }
  const list = new LinkedList<string>(arr);
 

  const addHead = (inputValueOne: arrString) => {
    setLoading(true);
    list.addByIndex(inputValueOne, 0);
    if (arr.length > 0) {
      arr[0].smalCircle = {
        value: inputValueOne.value,
        state: inputValueOne.state,
        position: "circle_top",
      };
    }
    setArr([...arr]);
    setTimeout(function () {
      arr[0].smalCircle = null;
      arr.unshift({
        ...arr[0],
        value: inputValueOne.value,
        state: ElementStates.Modified,
      });
      setArr([...arr]);
    }, 500);
    setTimeout(function () {
      arr[0].state = ElementStates.Default;
      setArr([...arr]);
      setInputValueOne({
        value: "",
        state: ElementStates.Changing,
      });
      setLoading(false);
    }, 1000);
  };

  const addTail = (inputValueOne: arrString) => {
    setLoading(true);
    list.append(inputValueOne.value);
    const length = arr.length;
    arr[length - 1] = {
      ...arr[length - 1],
      smalCircle: {
        value: inputValueOne.value,
        state: inputValueOne.state,
        position: "circle_top", 
      },
    };
    setArr([...arr]);
    setTimeout(function () {
      arr[length - 1] = {
        ...arr[length - 1],
        smalCircle: null,
      };
      arr.push({
        value: inputValueOne.value,
        state: ElementStates.Modified,
        smalCircle: null,
      });
      setArr([...arr]);
    }, 500);
    setTimeout(function () {
      arr[length].state = ElementStates.Default;
      setArr([...arr]);
      setInputValueOne({
        value: "",
        state: ElementStates.Changing,
      });
      setLoading(false);
    }, 1000);
  };

  const deleteHead = () => {
    setLoading(true);
    const value = arr[0].value;
    arr[0] = {
      ...arr[0],
      value: "  ",
      smalCircle: {
        value: value,
        state: ElementStates.Changing,
        position: "circle_botton", 
      },
    };
    list.deleteByIndex(0);
    setArr([...arr]);
    setTimeout(function () {
      arr.shift();
      setArr([...arr]);

      setLoading(false);
    }, 500);
  };

  const deleteTail = () => {
    setLoading(true);
    const length = arr.length;
    const value = arr[length - 1].value;
    arr[length - 1] = {
      ...arr[length - 1],
      value: "  ",
      smalCircle: {
        value: value,
        state: ElementStates.Changing,
        position: "circle_botton", 
      },
    };
    list.deleteByIndex(list.getSize());
    setArr([...arr]);
    setTimeout(function () {
      arr.pop();
      setArr([...arr]);
      setLoading(false);
    }, 500);
  };

  const addWithIndex = (inputValueTwo: number, inputValueOne: arrString) => {
    setLoading(true);
    list.addByIndex(inputValueOne, inputValueTwo);
    let timer = 500 * inputValueTwo;
    for (let i = 0; i <= inputValueTwo; i++) {
      setTimeout(function () {
        arr[i] = {
          ...arr[i],
          state: ElementStates.Default,
          smalCircle: {
            value: inputValueOne.value,
            state: inputValueOne.state,
            position: "circle_top", 
          },
        };
        setArr([...arr]);
        if (i > 0)
          arr[i - 1] = {
            ...arr[i - 1],
            state: ElementStates.Changing,
            smalCircle: null,
          };
        setArr([...arr]);
      }, 500 * i);
    }

    setTimeout(function () {
      arr[inputValueTwo] = {
        ...arr[inputValueTwo],
        state: ElementStates.Default,
        smalCircle: null,
      };

      arr.splice(inputValueTwo, 0, {
        value: inputValueOne.value,
        state: ElementStates.Modified,
        smalCircle: null,
      });

      setArr([...arr]);

      arr[inputValueTwo].state = ElementStates.Default;
      arr.forEach((item: arrString) => {
        item.state = ElementStates.Default;
      });
    }, timer + 500);

    setTimeout(function () {
      setArr([...arr]);
      setInputValueOne({
        value: "",
        state: ElementStates.Changing,
      });
      setInputValueTwo(0);
      setLoading(false);
    }, timer + 1000);
  };

  const deleteWithIndex = (inputValueTwo: number) => {
    setLoading(true);
    list.deleteByIndex(inputValueTwo);
    let timer = 500 * inputValueTwo;
    for (let i = 0; i <= inputValueTwo; i++) {
      setTimeout(function () {
        arr[i] = {
          ...arr[i],
          state: ElementStates.Changing,
        };

        setArr([...arr]);
      }, 500 * i);
    }
    setTimeout(function () {
      arr[inputValueTwo] = {
        ...arr[inputValueTwo],
        value: "",
        state: ElementStates.Default,
        smalCircle: {
          value: arr[inputValueTwo].value,
          state: ElementStates.Changing,
          position: "circle_botton", 
        },
      };
      setArr([...arr]);
    }, timer + 500);

    setTimeout(function () {
      arr.splice(inputValueTwo, 1);
      setArr([...arr]);
      arr.forEach((item: arrString) => (item.state = ElementStates.Default));
      setArr([...arr]);
      setInputValueTwo(0);
      setLoading(false);
    }, timer + 1000);
  };

  return (
    <SolutionLayout title="Связный список">
      <div className={styles.container}>
        <div className={styles.input}>
          <Input
            value={inputValueOne.value}
            placeholder="введите значение"
            onChange={onChangeOne}
            maxLength={4}
            isLimitText={true}
          />

          <Button
            onClick={() => addHead(inputValueOne)}
            linkedList="small"
            text="Добавить в head"
            isLoader={loading}
            disabled={loading || (inputValueOne.value === "" && true)}
          />

          <Button
            onClick={() => addTail(inputValueOne)}
            linkedList="small"
            text="Добавить в tail"
            isLoader={loading}
            disabled={loading || (inputValueOne.value === "" && true)}
          />
          <Button
            onClick={() => deleteHead()}
            linkedList="small"
            text="Удалить из head"
            isLoader={loading}
            disabled={loading || (arr.length < 2 ? true : false)}
          />

          <Button
            onClick={() => deleteTail()}
            linkedList="small"
            text="Удалить из tail"
            isLoader={loading}
            disabled={loading || (arr.length < 2 ? true : false)}
          />
        </div>
        <div className={styles.input}>
          <Input
            value={inputValueTwo}
            placeholder="введите индекс"
            onChange={onChangeTwo}
          />

          <Button
            onClick={() => addWithIndex(inputValueTwo, inputValueOne)}
            linkedList="big"
            text="Добавить по индексу"
            isLoader={loading}
            disabled={loading || (inputValueOne.value === "" && true)}
          />

          <Button
            onClick={() => deleteWithIndex(inputValueTwo)}
            linkedList="big"
            text="Удалить по индексу"
            isLoader={loading}
            disabled={loading || (arr.length < 2 ? true : false)}
          />
        </div>

        <div className={styles.algo__box}>
          {arr.map((item: arrString, index: number) => (
            <div className={styles.circle} key={index}>
              {item.smalCircle && (
                <Circle
                  extraClass={`${styles.circle_small} ${
                    styles[`${item.smalCircle.position}`]
                  }`}
                  letter={item.smalCircle.value}
                  isSmall
                  state={item.smalCircle.state}
                />
              )}

              <Circle
                tail={
                  !(
                    item.smalCircle &&
                    item.smalCircle.position == "circle_botton"
                  ) && index === arr.length - 1
                    ? "tail"
                    : null
                }
                letter={item.value}
                index={index}
                head={
                  (!item.smalCircle || item.value === "  ") && index === 0
                    ? "head"
                    : null
                }
                state={item.state}
              />

              {index !== arr.length - 1 && (
                <ArrowIcon
                  fill={
                    item.state === ElementStates.Changing
                      ? "#d252e1"
                      : "#0032FF"
                  }
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </SolutionLayout>
  );
};
