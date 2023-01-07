import { arrSortingnumbers } from "../types/types";
import { ElementStates } from "../types/types";
import { sleep } from "./functions";
export const sortBubble = async (
    arr: arrSortingnumbers[],
    sortVariable: string,
    length: number,
    setState?: (item: arrSortingnumbers[]) => void,
    setLoadingState?: (item: boolean) => void
  ) => {
    let arrCopy: arrSortingnumbers[] = Array.from(arr);
    let A = 0;
    let B = 1;
    let AValue = arr.length > 0 ? arrCopy[A].value : undefined;
    let Bvalue =  arr.length > 1 ? arrCopy[B].value : undefined

    let arrCopy2: arrSortingnumbers[] = Array.from(arr);
    while ((B < length - 1 || (arrCopy2.length > 1 && length !== 1)) && Bvalue !== undefined && AValue !== undefined) {
      arrCopy2 = Array.from(arrCopy);
      if ((B < length - 1 ) ){
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
          if (setState) {
            setState([...arrCopy]);
          }
          A += 1;
          B += 1;
          AValue = arrCopy[A].value;
          Bvalue = arrCopy[B].value;
          if (setState) {
            await sleep(500);
          }
        
        } else if (A !== 0 ) {
          // второй элемент массива
        
          arrCopy[A - 1].state = ElementStates.Default;
          arrCopy[A].state = ElementStates.Changing;
          arrCopy[B].state = ElementStates.Changing;
          if (sortVariable == "descending") {
            if (AValue > Bvalue) {
              arrCopy.splice(B, 1, arrCopy[A]);
              arrCopy.splice(A, 1, arrCopy2[B]);
              if (setState) {
                setState([...arrCopy]);
              }
              A += 1;
              B += 1;
              AValue = arrCopy[A].value;
              Bvalue = arrCopy[B].value;
            } else {
              if (setState) {
                setState([...arrCopy]);
              }
              A += 1;
              B += 1;
              AValue = arrCopy[A].value;
              Bvalue = arrCopy[B].value;
            }
          } else if (sortVariable == "ascending") {
            if (AValue < Bvalue) {
              arrCopy.splice(B, 1, arrCopy[A]);
              arrCopy.splice(A, 1, arrCopy2[B]);
              if (setState) {
                setState([...arrCopy]);
              }
              A += 1;
              B += 1;
              AValue = arrCopy[A].value;
              Bvalue = arrCopy[B].value;
            } else {
              if (setState) {
                setState([...arrCopy]);
              }
              A += 1;
              B += 1;
              AValue = arrCopy[A].value;
              Bvalue = arrCopy[B].value;
            }
          }
          if (setState) {
            await sleep(500);
          }
        }
      } else {
        
        // последние числа каждого цикла//////////////////////////////////
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
            if (setState) {
              setState([...arrCopy]);
            }      
            if (setState) {
                await sleep(500);
              };
            if(length > 2){
            arrCopy[A].state = ElementStates.Default;
            arrCopy[B].state = ElementStates.Modified;}
            if (length !== 0) {
              A = 0;
              B = 1;
              AValue = arrCopy[A].value;
              Bvalue = arrCopy[B].value;
              length -= 1;
            }
          /*
            if (!arrCopy[A - 1]) {
              if (setLoadingState) {
                setLoadingState(false);
              }
            }*/
            if (setState) {
                await sleep(10);
              };
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
            if (setState) {
              setState([...arrCopy]);
            }
            if (setState) {
                await sleep(500);
              };
            if(length > 2){     
              arrCopy[A].state = ElementStates.Default;
              arrCopy[B].state = ElementStates.Modified;}
            if (length !== 0) {
              A = 0;
              B = 1;
              AValue = arrCopy[A].value;
              Bvalue = arrCopy[B].value;
              length -= 1;
            }
            /*
            if (!arrCopy[A - 1]) {
              if (setLoadingState) {
                setLoadingState(false);
              }
            }*/
            if (setState) {
                await sleep(10);
              };
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
            if (setState) {
              setState([...arrCopy]);
            }
            if (setState) {
                await sleep(500);
              };
            if(length > 2){
          
              arrCopy[A].state = ElementStates.Default;
              arrCopy[B].state = ElementStates.Modified;}
            if (length !== 0) {
              A = 0;
              B = 1;
              AValue = arrCopy[A].value;
              Bvalue = arrCopy[B].value;
              length -= 1;
            }
            /*
            if (!arrCopy[A - 1]) {
              if (setLoadingState) {
                setLoadingState(false);
              }
            }*/
            if (setState) {
                await sleep(10);
              };
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
            if (setState) {
              setState([...arrCopy]);
            }
            if (setState) {
                await sleep(500);
              };
            if(length > 2){
            
              arrCopy[A].state = ElementStates.Default;
              arrCopy[B].state = ElementStates.Modified;}
            if (length !== 0) {
              A = 0;
              B = 1;
              AValue = arrCopy[A].value;
              Bvalue = arrCopy[B].value;
              length -= 1;
            }
            if (setState) {
                await sleep(10);
              }
           
          }
        }
      }
    } 
    if (setLoadingState) {
      setLoadingState(false);
    }
    if (arr.length == 0) {
      arrCopy = [];
    } else if (arr.length == 1) {
      arrCopy[A].state = ElementStates.Modified;
    }
    return arrCopy;
  };