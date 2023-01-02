import { ElementStates, arrString, ILinkedList } from "../types/types";
export class Node<T> {
    value: arrString | number;
    next: Node<T> | null;
    constructor(value: arrString | number, next?: Node<number> | null) {
      this.value = value;
      this.next = next === undefined ? null : next;
    }
  }
 export  class LinkedList<T> implements ILinkedList<T> {
    private head: Node<T> | null;
    private size: number;
    constructor(arr: arrString[]) {
      this.head = null;
      this.size = 0;
      arr.forEach((el:arrString) => this.addByIndex(el, 0));
    }

    append = (item: arrString) => {
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

    prepend = (value: number) => {
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

    addByIndex = (item: arrString, index: number) => {
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