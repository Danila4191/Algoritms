import renderer from "react-test-renderer";
import  {render, screen, fireEvent}  from "@testing-library/react";
import { Button } from "./button";
//кнопка
it("рендер кнопки с текстом",() => {
  const tree = renderer
  .create(<Button text="Добавить" />)
  .toJSON();
  expect(tree).toMatchSnapshot();
})

it("рендер кнопки без текста",() => {
  const tree = renderer
  .create(<Button />)
  .toJSON();
  expect(tree).toMatchSnapshot();
})
it("рендер кнопки заблокированной",() => {
  const tree = renderer
  .create(<Button disabled={true}/>)
  .toJSON();
  expect(tree).toMatchSnapshot();
})
it("рендер кнопки с лоадером",() => {
  const tree = renderer
  .create(<Button loading={true}/>)
  .toJSON();
  expect(tree).toMatchSnapshot();
})
it("рендер кнопки вызов колбека",() => {
  window.alert = jest.fn();
  render(<Button text="Добавить" onClick={()=>alert("добавили")}/>)
  const button = screen.getByText("Добавить");
    fireEvent.click(button);
    expect(window.alert).toHaveBeenCalledWith('добавили');
})