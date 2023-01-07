import renderer from "react-test-renderer";
import  {render, screen, fireEvent}  from "@testing-library/react";
import { Circle } from "./circle";
import { ElementStates } from "../../../types/types"; 
it("рендер круга без символов",() => {
    const tree = renderer
    .create(   <Circle   
        letter=""
      />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  })
  it("рендер круга с символом",() => {
    const tree = renderer
    .create(   <Circle   
        letter="123"
      />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  })
  it("рендер круга с Хед",() => {
    const tree = renderer
    .create(   <Circle   
        head="321"
        letter="123"
      />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  })
  it("рендер круга с компонентом в Хед",() => {
    const tree = renderer
    .create(   <Circle   
        head={ <Circle   
            head="smallHead"
            letter="small"
          />}
        letter="123"
      />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  })
  it("рендер круга с Таил",() => {
    const tree = renderer
    .create(   <Circle   
        tail="321"
        letter="123"
      />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  })
  it("рендер круга с компонентом в Таил",() => {
    const tree = renderer
    .create(   <Circle   
        tail={ <Circle   
            tail="smallTail"
            letter="small"
          />}
        letter="123"
      />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  })
  it("рендер круга с индексом",() => {
    const tree = renderer
    .create(   <Circle   
        index="0"
        letter="123"
      />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  })
  it("рендер круга small",() => {
    const tree = renderer
    .create(   <Circle   
     
        isSmall={true}
        letter="123"
      />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  })
  it("рендер круга default",() => {
    const tree = renderer
    .create(   <Circle   
        state={ElementStates .Default}
        letter="123"
      />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  })
  it("рендер круга changing",() => {
    const tree = renderer
    .create(   <Circle   
        state={ElementStates.Changing}
        letter="123"
      />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  })
  it("рендер круга modified",() => {
    const tree = renderer
    .create(   <Circle   
        state={ElementStates.Modified}
        letter="123"
      />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  })

